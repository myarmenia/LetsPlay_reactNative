import React, { useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import Modal from '@/components/modal'
import ScreenMask from '@/components/wrappers/screen'
import QrTest from '@/assets/imgs/qrTest.jpg'
import Button from '@/assets/imgs/Button'
import styles from '@/screens/Elias/DifficultyLevel/styles'
import LinearGradient from "react-native-linear-gradient";
import DifficultyLevel from "@/components/DifficultyLevel";
import {levels} from "@/assets/TestData";

function Index({ navigation }) {
  const [selectLevel, setSelectLevel] = useState(false)

  return (
    <ScreenMask>
      <View style={styles.body}>
        <Text style={styles.title}>Уровень сложности</Text>
        <View>
          <DifficultyLevel levels={levels} selectLevel={selectLevel} setSelectLevel={setSelectLevel}/>
        </View>
        <View style={styles.btnBlock}>
          <Button
            onPress={() => navigation.navigate('EliasStart')}
            size={styles.btn}
            label={'Продолжить'}
          />
        </View>
      </View>
    </ScreenMask>
  )
}

export default Index
