import React, { useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import Modal from '@/components/modal'
import ScreenMask from '@/components/wrappers/screen'
import QrTest from '@/assets/imgs/qrTest.jpg'
import Button from '@/assets/imgs/Button'
import styles from '@/screens/Elias/DifficultyLevel/styles'
import LinearGradient from "react-native-linear-gradient";

function Index({ navigation, modalRules, setModalRules }) {
  const [selectLevel, setSelectLevel] = useState(false)

  const levels = [
    {
      id: 0,
      title: 'Быстрая игра',
      level: 'Легкий',
    },
    {
      id: 1,
      title: 'Оптимус',
      level: 'Средний',
    },
    {
      id: 2,
      title: 'Мозговой штурм',
      level: 'Сложный',
    },
    {
      id: 3,
      title: 'Рулетка',
      level: 'От простого до сложного',
    },
  ]
  return (
    <ScreenMask>
      <View style={styles.body}>
        <Text style={styles.title}>Уровень сложности</Text>
        <View>
          {levels.map((item, i) => (
            <TouchableOpacity key={i} onPress={() => setSelectLevel(item.id)}>
              { selectLevel === item.id ?  <LinearGradient
                  colors={['#16A672', '#29CEEC', '#57E5FF', '#0649F5']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  useAngle={true}
                  angle={105}
                  style={{ ...styles.levelBlock}}
                  angleCenter={{ x: 0.5, y: 0.5 }}>
                <View >
                  <Text style={styles.levelTitle}>{item.title}</Text>
                  <Text style={styles.level}>{item.level}</Text>
                </View>
              </LinearGradient> :         <View style={{ ...styles.levelBlock}} >
                <Text style={styles.levelTitle}>{item.title}</Text>
                <Text style={styles.level}>{item.level}</Text>
              </View> }

            </TouchableOpacity>
          ))}
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
