import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ScreenMask from '@/components/wrappers/screen'
import { font, RH, RW } from '@/theme/utils'
import { SCREEN_BACKGROUND, WHITE } from '@/theme/colors'
import User from '@/components/User/user'
import EmptyBorderedAvatar from '@/assets/svgs/EmptyBorderedAvatar'
import LightButton from '@/assets/imgs/Button'
import { useNavigation } from '@react-navigation/native'
import { _storageUrl } from '@/constants'
import BorderGradient from '@/assets/svgs/BorderGradiend'
import Modal from '@/components/modal'
import { useDispatch, useSelector } from 'react-redux'
import { searchTeam } from '@/store/Slices/TeamSlice'
import OrganizerSvg from '@/assets/svgs/OrganizatorSvg'
const MembersInTeam = ({ route }) => {
  const command = route.params
  const navigation = useNavigation()
  const [modalVisible, setModalVisible] = useState(false)
  const dispatch = useDispatch()
  const { findedTeam } = useSelector(({ teams }) => teams)
  const user = useSelector(({ auth }) => auth.user)
  useEffect(() => {
    dispatch(searchTeam(command._id, () => {}, navigation, null, null))
  }, [])
  // useEffect(() => {
  //   setInvitedPlayers(
  //     invitedPlayers?.map((elm, i) => {
  //       if (findedTeam[0]?.players[i]) {
  //         return (elm = findedTeam[0]?.players[i])
  //       } else {
  //         return 0
  //       }
  //     }),
  //   )
  // }, [findedTeam?.[0]?.players?.length])
  console.log('findedTeam', command)
  const UserItem = ({ elm }) => {
    const [visible, setVisible] = useState(false)
    return (
      <>
        <View
          style={[styles.eachUser, { opacity: findedTeam?.invited_players == user?._id ? 0.7 : 1 }]}
        >
          {elm == 2 ? (
            //need detect user accept invite or not and set opacity and don't navigate another show modal
            // <View style={{ opacity: 0.6 }}>
            <Pressable
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                margin: RW(5),
              }}
              onPressIn={() => setVisible(true)}
              onPressOut={() => setVisible(false)}
              // onPress={() => navigation.navigate('EachMember', { member: elm, command: command })}
            >
              <BorderGradient height={145} width={110} opacity={visible ? 1 : 0} />
              <View style={{ position: 'absolute' }}>
                {command.user == user._id ? <OrganizerSvg /> : null}
                <User
                  size={110}
                  onPressItem={{
                    modalClose: false,
                    onClickFunc: () => {
                      navigation.navigate('EachMember', { member: elm, command: command })
                      // item: <User size={390} />,
                    },
                  }}
                  // pressedUser={{ avatar: '/team/image/4caea4a8-8864-4ad1-bd20-bf5539558622.jpg' }}
                />
              </View>
            </Pressable>
          ) : null
          // <EmptyBorderedAvatar />

          }
        </View>
      </>
    )
  }

  return (
    <ScreenMask>
      <View style={styles.rowBox}>
        <Text style={styles.topTitle}>{command?.name}</Text>
        <Image
          style={styles.commandImg}
          source={{ uri: _storageUrl + command?.img }}
          resizeMode="cover"
        />
        {/* <View style={styles.rowBox}>
          <Text style={styles.topTitle}>{command?.name}</Text>
          <Image
            source={{ uri: _storageUrl + commandImg }}
            resizeMode="cover"
            style={styles.commandImg}
          ></Image>
        </View> */}
      </View>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <View style={styles.membersBox}>
          {[1, 2, 2].map((elm, i) => {
            return <UserItem elm={elm} key={i} />
          })}
        </View>
        <View style={styles.btnBox}>
          <LightButton
            label={'Пригласить игрока'}
            size={{ width: 380, height: 45 }}
            onPress={() => navigation.navigate('TeamMembers', command)}
          />
        </View>
      </ScrollView>
      {modalVisible && (
        <Modal
          modalVisible={modalVisible}
          setIsVisible={setModalVisible}
          item={
            <View style={styles.modalContainer}>
              <View style={styles.userBox}>
                <User
                  size={370}
                  //pass elm to paddedUser for draw inside user component with reading elm
                  // pressedUser={}
                />
              </View>
              <Text style={styles.playerMessage}>
                Игроку отправлен запрос на участие в команде. Ждем подтверждения!
              </Text>
            </View>
          }
        />
      )}
    </ScreenMask>
  )
}

export default MembersInTeam

const styles = StyleSheet.create({
  team: {
    textAlign: 'center',
    ...font('bold', 22, WHITE),
    marginVertical: RH(15),
  },
  membersBox: {
    alignSelf: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    rowGap: RW(10),
    width: '98%',
  },
  eachUser: {
    paddingTop: RW(25),
  },
  btnBox: {
    // width: '100%',
    position: 'relative',
    paddingVertical: RH(50),
    alignSelf: 'center',
  },
  topTitle: {
    textAlign: 'center',
    ...font('bold', 22, WHITE),
    marginVertical: RH(15),
  },
  commandImg: {
    width: RW(40),
    height: RW(40),
    borderRadius: RW(20),
    marginLeft: '3%',
    borderWidth: 1,
    borderColor: WHITE,
  },
  rowBox: {
    width: '100%',
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    top: RH(15),
  },
  modalContainer: {
    width: '90%',
    borderRadius: RW(20),
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'center',
    // height: '6%',
    backgroundColor: SCREEN_BACKGROUND,
  },
  playerMessage: {
    ...font('regular', 16, WHITE),
    textAlign: 'center',
    width: '55%',
    paddingBottom: RH(20),
  },
  userBox: {
    paddingVertical: RH(30),
  },
})
