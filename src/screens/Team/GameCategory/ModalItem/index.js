import React from 'react'
import { Text, View } from 'react-native'
import style from './style'
import Button from '@/assets/imgs/Button'
import DarkButton from '@/assets/imgs/DarkButton'
import { BLACK, WHITE } from '@/theme/colors'
import { font, RH, RW } from '@/theme/utils'
import { useNavigation } from '@react-navigation/native'

function Index({ setModalVisible, game }) {
  const navigation = useNavigation()
  return (
    <View style={style.bg}>
      <View style={style.textBlock}>
        <Text style={style.title}>Вы хотите организовать</Text>
        <Text style={style.title}>игру между игроками</Text>
        <Text style={style.title}>команды?</Text>
      </View>
      <View style={style.btnBlock}>
        <Button
          size={{ width: RW(100), height: RH(36) }}
          onPress={() => {
            navigation.navigate('SelectTeam', game), setModalVisible(false)
          }}
          label={'Да'}
          labelStyle={font('bold', 18, BLACK)}
        />
        <DarkButton
          size={{ width: RW(100), height: RH(36) }}
          onPress={() => {
            navigation.navigate('SearchTeam', game), setModalVisible(false)
          }}
          label={'Нет'}
          labelStyle={font('bold', 18, WHITE)}
        />
      </View>
    </View>
  )
}

export default Index
