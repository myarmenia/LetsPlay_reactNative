import React, { useEffect, useMemo, useState } from 'react'
import { Image, Text, View } from 'react-native'
import Modal from '@/components/modal'
import ScreenMask from '@/components/wrappers/screen'
import Button from '@/assets/imgs/Button'
import styles from '@/screens/Elias/Start/styles'
import ModalItem from '@/screens/Elias/Start/ModalItem'
import Type from '@/assets/imgs/type'
import HemisphereBottomSvg from '@/assets/svgs/hemisphereBottomSvg'
import HemisphereTopSvg from '@/assets/svgs/hemisphereTopSvg'

function Index({ navigation }) {
  const [explainsModal, setExplainsModal] = useState(true)

  useEffect(() => {
    if (!explainsModal) {
      setTimeout(() => {
        {
          navigation.navigate('ResTeamElias')
        }
      }, 3000)
    }
  }, [explainsModal])

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.infoBlock}>
        <View style={styles.infoTitle}>
          <View style={styles.titleBlock}>
            <Text style={styles.com}>Команда 1</Text>
            <Text style={styles.count}>0</Text>
            <Text style={styles.count}>Отгадано</Text>
          </View>
        </View>
        <HemisphereBottomSvg />
      </View>

      <View style={{ width: '100%', height: '100%', position: 'absolute' }}>
        <ScreenMask>
          <View style={styles.circle}>
            <Type title={'Продолжить'} />
          </View>
          <Modal
            modalVisible={explainsModal}
            setIsVisible={explainsModal}
            item={<ModalItem setModal={setExplainsModal} />}
          />
        </ScreenMask>
      </View>
      <View style={{ ...styles.infoBlock, top: '78%' }}>
        <View style={styles.infoTitle}>
          <View style={styles.titleBlock}>
            <Text style={styles.count}>Пропущено</Text>
            <Text style={styles.count}>0</Text>
          </View>
          <View style={styles.timeBlock}>
            <Button label={'Стоп'} size={styles.btn} />
            <View style={styles.timeBlockTitle}>
              <Text style={styles.timeTitle}>Оставшееся время</Text>
              <Text style={styles.time}>00:30</Text>
            </View>
          </View>
        </View>
        <HemisphereTopSvg />
      </View>
    </View>
  )
}

export default Index
