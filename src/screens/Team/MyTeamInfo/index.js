import { RH, RW, font } from '@/theme/utils'
import { BLACK, WHITE } from '@/theme/colors'
import { useDispatch, useSelector } from 'react-redux'
import { _storageUrl } from '@/constants'
import { saveTeamDataForCreating } from '@/store/Slices/TeamSlice'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import ScreenMask from '@/components/wrappers/screen'
import Button from '@/components/buttons/Button'
import UserEditSvg from '@/assets/svgs/userEdit'
import FastImage from 'react-native-fast-image'
import { useMemo } from 'react'

function Index() {
  const { user } = useSelector(({ auth }) => auth)
  const { savedTeam } = useSelector(({ teams }) => teams)


  const canCreateGame = useMemo(() => {
    if (savedTeam.user._id === user._id) {
      return true
    } else {
      const index = savedTeam.admins.findIndex(item => item._id === user._id)
      if (index === -1) {
        return false
      } else {
        return true
      }
    }
  }, [savedTeam.user._id, user._id])

  const navigation = useNavigation()
  return (
    <ScreenMask>
      <View style={styles.rowBox}>
        <Text style={styles.team}>{savedTeam?.name}</Text>
        {user._id === savedTeam.user._id &&
          <TouchableOpacity
            onPress={() => navigation.navigate('EditTeamInfo', savedTeam)}
            style={styles.editBtn}
          >
            <UserEditSvg />
          </TouchableOpacity>}
      </View>
      <View style={styles.imageBlock}>
        <FastImage
          style={styles.image}
          source={{
            uri: savedTeam?.img?.includes('file://') ? savedTeam.img : _storageUrl + savedTeam?.img,
          }}
          resizeMode="cover"
        />
      </View>

      <Text style={styles.text}>Адрес нахождения команды</Text>
      <Text style={styles.textLined}>{savedTeam?.address_name}</Text>
      <View style={styles.btns}>
        <View style={styles.btn}>
          <Button
            onPress={() =>
              savedTeam?.invited_players?.length
                ? navigation.navigate('MembersInTeam')
                : navigation.navigate('SearchTeamMembers', savedTeam)
            }
            size={{ width: 265, height: 48 }}
            label={'Состав'}
            labelStyle={font('bold', 18, BLACK)}
          />
        </View>
        {canCreateGame && <Button
          onPress={() => { navigation.navigate('CreateGameNavigator') }}
          size={{ width: 265, height: 48 }}
          label={'Создать игру'}
          labelStyle={font('bold', 18, BLACK)}
        />}
      </View>
    </ScreenMask>
  )
}

const styles = StyleSheet.create({
  team: {
    textAlign: 'center',
    ...font('bold', 22, WHITE),
    marginVertical: RH(15),
  },
  imageBlock: {
    width: RW(240),
    height: RW(240),
    alignSelf: 'center',
    marginVertical: RH(25),
    borderWidth: 1,
    borderRadius: RW(150),
    borderColor: WHITE,
  },
  rowBox: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  image: {
    borderWidth: 1,
    width: '100%',
    height: '100%',
    borderRadius: RW(150),
  },
  editBtn: {
    left: '40%',
  },
  text: {
    textAlign: 'center',
    marginVertical: RH(5),
    ...font('regular', 18, WHITE),
  },
  textLined: {
    ...font('bold', 16, WHITE, 20),
    marginVertical: RH(10),
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
  btns: {
    marginTop: RH(150),
    alignItems: 'center',
  },
  btn: {
    marginBottom: RH(15),
  },
})

export default Index
