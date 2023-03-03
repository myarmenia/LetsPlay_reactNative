import React, { useEffect } from 'react'
import { Image, Text, View } from 'react-native'
import ScreenMask from '@/components/wrappers/screen'
import style from './style'
import BgMyTem from '@/assets/bgMyTem'
import Button from '@/assets/imgs/Button'
import { BLACK } from '@/theme/colors'
import { font } from '@/theme/utils'
import { _storageUrl } from '@/constants'
import { useNavigation } from '@react-navigation/native'

function Index({ route }) {
  const command = route.params
  const navigation = useNavigation()
  return (
    <ScreenMask>
      <Text style={style.team}>{command?.name}</Text>
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
            size={{ width: 265, height: 48 }}
            label={'Состав'}
            labelStyle={font('bold', 18, BLACK)}
          />
        </View>
        <Button
          onPress={() => navigation.navigate('commandSelectGameCategory', command)}
          size={{ width: 265, height: 48 }}
          label={'Создать игру'}
          labelStyle={font('bold', 18, BLACK)}
        />
      </View>
    </ScreenMask>
  )
}

export default Index
