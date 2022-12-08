import React, { useState } from 'react'
import { View } from 'react-native'
import ScreenMask from '@/components/wrappers/screen'
import { styles } from '@/screens/Game/Play/style'
import Button from '@/assets/imgs/Button'

const CREATE_GAME = 'CREATE_GAME'
const PARTICIPATION_GAME = 'PARTICIPATION_GAME'

function Index({ navigation }) {
  const [chooseType, setChooseType] = useState(false)

  if (!chooseType) {
    return (
      <ScreenMask>
        <View style={styles.btnBlock}>
          <View style={styles.btnActiveGames}>
            <Button
              onPress={() => setChooseType(CREATE_GAME)}
              label={'Создать игру'}
              labelStyle={{ fontSize: 18 }}
              size={{ width: 320, height: 75 }}
            />
          </View>
          <View>
            <Button
              onPress={() => setChooseType(PARTICIPATION_GAME)}
              label={'Принять участие в игре'}
              labelStyle={{ fontSize: 18 }}
              size={{ width: 320, height: 75 }}
            />
          </View>
        </View>
      </ScreenMask>
    )
  }

  if (chooseType === CREATE_GAME) {
    return (
      <ScreenMask>
        <View style={styles.btnBlock}>
          <View style={styles.btnActiveGames}>
            <Button
              onPress={() => {
                setChooseType(false)
                navigation.navigate('ActiveGames')
              }}
              label={'Активные игры'}
              labelStyle={{ fontSize: 18 }}
              size={{ width: 320, height: 75 }}
            />
          </View>
          <View>
            <Button
              onPress={() => {
                setChooseType(false)
                navigation.navigate('BoardGames')
              }}
              label={'Настольные игры'}
              labelStyle={{ fontSize: 18 }}
              size={{ width: 320, height: 75 }}
            />
          </View>
        </View>
      </ScreenMask>
    )
  }
}

export default Index
