import React, { useEffect } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { BLACK } from '@/theme/colors'
import { font } from '@/theme/utils'
import { _storageUrl } from '@/constants'
import { useNavigation } from '@react-navigation/native'
import ScreenMask from '@/components/wrappers/screen'
import Button from '@/assets/imgs/Button'
import UserEditSvg from '@/assets/svgs/userEdit'
import style from './style'

function Index({ route }) {
  const command = route.params
  const navigation = useNavigation()

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
            onPress={() => navigation.navigate('MembersInTeam', command)}
            size={{ width: 265, height: 48 }}
            label={'Состав'}
            labelStyle={font('bold', 18, BLACK)}
          />
        </View>
        <Button
          onPress={() => navigation.navigate('CreateGameNavigator', command)}
          size={{ width: 265, height: 48 }}
          label={'Создать игру'}
          labelStyle={font('bold', 18, BLACK)}
        />
      </View>
    </ScreenMask>
  )
}

export default Index
