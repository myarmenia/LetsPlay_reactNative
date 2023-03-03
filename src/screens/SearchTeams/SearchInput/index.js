// import React from 'react';
import { Text, TextInput, View } from 'react-native'
import ScreenMask from '@/components/wrappers/screen'
import Button from '@/assets/imgs/Button'
import style from './styles'
import { font, RW } from '@/theme/utils'
import { BLACK, DARK_BLUE, ICON, RED } from '@/theme/colors'
import { RH } from '@/theme/utils'
import { useEffect, useState } from 'react'
import { searchTeam } from '@/store/Slices/TeamSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

function Index() {
  const dispatch = useDispatch()
  const { findedTeam } = useSelector(({ teams }) => teams)
  const [value, setValue] = useState('63ff4a064b08cb7d912ffff')
  const [findedTeamEmpty, setFindedTeamEmpty] = useState(false)
  const navigation = useNavigation()

  //test team id ---> 63ff4a064b08cb7d912ffff
  const handleSeach = () => {
    dispatch(searchTeam(value, setFindedTeamEmpty))
  }

  useEffect(() => {
    if (findedTeam.length) {
      navigation.navigate('TeamSearchRes')
    }
  }, [findedTeam])
  return (
    <ScreenMask style={{ paddingHorizontal: RW(32) }}>
      <Text style={style.title}> Создать команду</Text>
      <Text style={{ ...font('regular', 16, ICON, 24), marginVertical: RH(20) }}>
        Поиск команды
      </Text>
      <TextInput
        style={style.input}
        placeholderTextColor={ICON}
        value={value}
        onChangeText={e => setValue(e)}
        placeholder={'ID карточка/По названию команды'}
      />
      <View style={{ alignItems: 'center', paddingRight: RW(10), width: '100%' }}>
        <Button size={style.btn} label={'Поиск'} onPress={handleSeach} />
      </View>
      {findedTeamEmpty && (
        <Text
          style={{ ...font('regular', 20, RED, 24), marginVertical: RH(20), alignSelf: 'center' }}
        >
          Не найдено
        </Text>
      )}
    </ScreenMask>
  )
}

export default Index
