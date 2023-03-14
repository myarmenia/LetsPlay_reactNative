import { useState } from 'react'
import { Text, TextInput, View } from 'react-native'
import ScreenMask from '@/components/wrappers/screen'
import Button from '@/assets/imgs/Button'
import styles from './styles'
import { font, RW } from '@/theme/utils'
import { ICON, RED } from '@/theme/colors'
import { RH } from '@/theme/utils'
import { searchTeam } from '@/store/Slices/TeamSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

function Index() {
  const dispatch = useDispatch()
  const [value, setValue] = useState('')
  const [findedTeamEmpty, setFindedTeamEmpty] = useState(false)
  const navigation = useNavigation()

  //test team id ---> 63ff3e284b08cb7d912fc595
  const handleSeach = () => {
    dispatch(searchTeam(value, setFindedTeamEmpty, navigation))
  }

  return (
    <ScreenMask style={{ paddingHorizontal: RW(32) }}>
      <Text style={styles.title}> Создать команду</Text>
      <Text style={{ ...font('regular', 16, ICON, 24), marginVertical: RH(20) }}>
        Поиск команды
      </Text>
      <TextInput
        style={styles.input}
        placeholderTextColor={ICON}
        value={value}
        onChangeText={e => setValue(e)}
        placeholder={'ID карточка/По названию команды'}
      />
      <View style={{ alignItems: 'center', paddingRight: RW(10), width: '100%' }}>
        <Button size={styles.btn} label={'Поиск'} onPress={handleSeach} />
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
