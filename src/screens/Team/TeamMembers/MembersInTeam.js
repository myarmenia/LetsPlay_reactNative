import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenMask from '@/components/wrappers/screen'
import { font, RH, RW } from '@/theme/utils'
import { SCREEN_BACKGROUND, WHITE } from '@/theme/colors'
import User from '@/components/User/User'
import LightButton from '@/components/buttons/Button'
import { useNavigation } from '@react-navigation/native'
import { _storageUrl } from '@/constants'
import OrganizerSvg from '@/assets/svgs/OrganizatorSvg'
import FastImage from 'react-native-fast-image'
import { useSelector } from 'react-redux'
import { isTabletDevice } from '@/helpers/helpFunctions'



const MembersInTeam = () => {
  const command = useSelector(({ teams }) => teams.savedTeam)
  const { user } = useSelector(({ auth }) => auth)
  const navigation = useNavigation()

  const UserItem = ({ elm }) => {
    return (
      <Pressable style={{ position: 'relative', }}>
        <View style={{ position: 'absolute', top: -RH(5), left: -RH(7) }}>
          {elm?._id === command?.user?._id && <OrganizerSvg />}
        </View>
        <User
          user={elm}
          pressedUser={elm}
          size={100}
          onPressItem={{
            modalClose: false,
            onClickFunc: () => { navigation.navigate('EachMember', { user: elm, command: command }) },
          }}
        />
      </Pressable>
    )
  }
  return (
    <ScreenMask>
      <View style={styles.rowBox}>
        <Text style={styles.topTitle}>{command?.name}</Text>
        <FastImage
          style={styles.commandImg}
          source={{ uri: _storageUrl + command?.img }}
          resizeMode="cover"
        />
      </View>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <View style={styles.membersBox}>
          {command.invited_players.map((elm, i) => {
            return <UserItem elm={elm} key={i} />
          })}
        </View>
      </ScrollView>
      {user._id === command.user._id && <View style={styles.btnBox}>
        <LightButton
          label={'Пригласить игрока'}
          size={{ width: isTabletDevice ? 280 : 360, height: 45 }}
          onPress={() => navigation.navigate('SearchTeamMembers', command)}
        />
      </View>}
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
    width: '98%',
    paddingTop: RH(25),
  },
  btnBox: {
    position: 'absolute',
    paddingVertical: RH(50),
    bottom: 0,
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
