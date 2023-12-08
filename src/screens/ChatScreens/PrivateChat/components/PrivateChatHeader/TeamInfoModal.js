import { StyleSheet, Text, View, Share, Pressable } from 'react-native'
import React from 'react'
import { LIGHT_LABEL, WHITE } from '@/theme/colors'
import { RH, RW } from '@/theme/utils'
import { FONT_INTER_REGULAR } from '@/theme/fonts'
import ArrowRight from '@/assets/svgs/ArrowRight'
import Modal from '@/components/modal'
import User from '@/components/User/user'
import { useSelector } from 'react-redux'
import dateFormater from '../../../../../helpers/dateFormater'

const TeamInfoModal = ({ modalVisible, setModalVisible, team }) => {
  console.log(team, 'team');
  const { myTeams, myJoinedTeams } = useSelector(({ teams }) => teams)
  const teams = [...myTeams, ...myJoinedTeams]
  console.log(team, 'team');
  const teamInfo = teams.find(item => item._id === team._id)

  const share = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  return (
    <Modal
      modalVisible={modalVisible}
      setIsVisible={setModalVisible}
      btnClose={false}
      item={
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

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={styles.title}>Организатор команды:</Text>
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
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: RH(5) }}>
                  <Text style={styles.title}>Игроки команды:</Text>

                  <View
                    style={{
                      flexDirection: 'row',
                      flexWrap: 'wrap',
                      width: 150,
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
