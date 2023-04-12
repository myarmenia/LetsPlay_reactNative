import { font } from '@/theme/utils'
import { BLACK } from '@/theme/colors'
import { useDispatch } from 'react-redux'
import { _storageUrl } from '@/constants'
import { saveTeamDataForCreating } from '@/store/Slices/TeamSlice'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import ScreenMask from '@/components/wrappers/screen'
import Button from '@/assets/imgs/Button'
import UserEditSvg from '@/assets/svgs/userEdit'
import style from './style'

function Index({ route }) {
  const command = route.params
  const navigation = useNavigation()
  const dispatch = useDispatch()
  return (
    <ScreenMask>
      <View style={style.rowBox}>
        <Text style={style.team}>{command?.name}</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('EditTeamInfo', command)}
          style={style.editBtn}
        >
          <UserEditSvg />
        </TouchableOpacity>
      </View>
      <View style={style.imageBlock}>
        <Image
          style={style.image}
          source={{ uri: _storageUrl + command?.img }}
          resizeMode="cover"
        />
      </View>
      <Text style={style.text}>Адрес нахождения команды</Text>
      <Text style={style.textLined}>{command?.address_name}</Text>
      <View style={style.btns}>
        <View style={style.btn}>
          <Button
            onPress={() =>
              !command?.invited_players?.length
                ? navigation.navigate('MembersInTeam', command)
                : navigation.navigate('TeamMembers', command)
            }
            size={{ width: 265, height: 48 }}
            label={'Состав'}
            labelStyle={font('bold', 18, BLACK)}
          />
        </View>
        <Button
          onPress={() => {
            navigation.navigate('CreateGameNavigator'), dispatch(saveTeamDataForCreating(command))
          }}
          size={{ width: 265, height: 48 }}
          label={'Создать игру'}
          labelStyle={font('bold', 18, BLACK)}
        />
      </View>
    </ScreenMask>
  )
}

export default Index
