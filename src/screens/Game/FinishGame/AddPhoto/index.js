import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenMask from '@/components/wrappers/screen'
import { RH, RW, font } from '@/theme/utils'
import { WHITE } from '@/theme/colors'
import PickImage from './components/PickImage'
import LightButton from '@/assets/imgs/Button'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

const AddPhoto = () => {
  const gameFinishPhoto = useSelector(({ games }) => games.gameFinishPhoto)
  const navigation = useNavigation()
  return (
    <ScreenMask>
      <Text style={styles.title}>
        Поделитесь впечатлениями от игры. {'\n'}
        Разместите фото/видео с игры
      </Text>
      <View style={styles.imagePickContainer}>
        <PickImage gameFinishPhoto={gameFinishPhoto} />
      </View>
      <LightButton
        onPress={() => navigation.navigate('RatePlayers')}
        style={{ alignSelf: 'center' }}
        size={{ width: RW(280), height: RH(48) }}
        label={gameFinishPhoto ? 'Далее>>' : 'Пропустить'}
      />
    </ScreenMask>
  )
}

export default AddPhoto

const styles = StyleSheet.create({
  title: {
    ...font('bold', 20, WHITE, 30),
    textAlign: 'center',
    marginTop: RH(10),
  },
  imagePickContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
