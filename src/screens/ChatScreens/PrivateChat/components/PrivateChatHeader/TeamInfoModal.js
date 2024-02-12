import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { LIGHT_LABEL, WHITE } from '@/theme/colors'
import { RH, RW } from '@/theme/utils'
import { FONT_INTER_REGULAR } from '@/theme/fonts'
import ArrowRight from '@/assets/svgs/ArrowRight'
import Modal from '@/components/modal'
import User from '@/components/User/User'
import { useSelector } from 'react-redux'
import dateFormater from '../../../../../helpers/dateFormater'
import Share from 'react-native-share'
import ViewShot from "react-native-view-shot";

const TeamInfoModal = ({ modalVisible, setModalVisible, team }) => {
  const { myTeams, myJoinedTeams } = useSelector(({ teams }) => teams)
  const teams = [...myTeams, ...myJoinedTeams]
  const teamInfo = teams.find(item => item._id === team._id)

  const viewShot = React.useRef();


  const share = async () => {
    try {
      const uri = await viewShot.current.capture()
      const shareOptions = {
        message: 'Информация о команде',
        url: uri,
      };
      await Share.open(shareOptions);
    } catch (error) {
    }
  }

  return (
    <Modal
      modalVisible={modalVisible}
      setIsVisible={setModalVisible}
      btnClose={false}
      item={
        <ViewShot
          ref={viewShot}
          options={{
            format: "jpg",
            quality: 0.9,
            fileName: 'Информация о команде'
          }}
        >
          <View style={styles.modalWrapper}>
            <View style={styles.regulationBlock}>
              <View style={styles.rowBox}>
                <Pressable onPress={share}>
                  <ArrowRight />
                </Pressable>

              </View>
              <View style={styles.titleColumnBox}>
                <Text style={styles.title}>Имя команды: {teamInfo?.name}</Text>
                <Text style={styles.title}>
                  Дата и время создание команды: {dateFormater(teamInfo?.createdAt)}
                </Text>
                <Text style={styles.title}>Адрес: {teamInfo?.address_name}</Text>

                <View style={{ flexDirection: 'row', alignItems: 'center',  marginTop: RH(10) }}>
                  <Text style={[styles.title, { paddingTop: 0 }]}>Организатор команды:</Text>
                  <View style={{ left: 10 }}>
                    <User
                      size={30}
                      user={teamInfo?.user}
                      onPressItem={{
                        item: <User size={370} user={teamInfo?.user} />,
                        modalClose: false,
                      }}
                    />
                  </View>
                </View>
                {teamInfo.invited_players?.length ? (
                  <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: RH(10) }}>
                    <Text style={[styles.title, { paddingTop: 0 }]}>Игроки команды:</Text>

                    <View
                      style={{
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        left: 10,
                      }}
                    >
                      {teamInfo.invited_players.map((player) => (
                        <User
                          key={player?._id}
                          size={30}
                          user={player}
                          style={{ marginLeft: RW(5) }}
                          onPressItem={{
                            item: <User size={370} user={player} />,
                            modalClose: false,
                          }}
                        />
                      ))}
                    </View>
                  </View>
                ) : null}
              </View>
            </View>
          </View>
        </ViewShot>
      }
    />
  )
}
export default TeamInfoModal

const styles = StyleSheet.create({
  regulationBlock: {
    backgroundColor: LIGHT_LABEL,
    borderRadius: RW(20),
    width: RW(357),
    top: '-5%',
    padding: RW(30),
    alignSelf: 'center',
  },
  rowBox: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  titleColumnBox: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    width: '100%',
    alignItems: 'flex-start',
  },
  title: {
    color: WHITE,
    fontSize: RW(14),
    fontFamily: FONT_INTER_REGULAR,
    paddingTop: '5%',
  },
})
