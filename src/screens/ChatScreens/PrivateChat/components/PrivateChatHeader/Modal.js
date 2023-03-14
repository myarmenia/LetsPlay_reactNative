import { Modal, StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native'
import React from 'react'
import { LIGHT_LABEL, WHITE } from '@/theme/colors'
import { RW } from '@/theme/utils'
import { FONT_INTER_REGULAR } from '@/theme/fonts'
import ArrowRight from '@/assets/svgs/ArrowRight'
import InfoSvg from '@/assets/svgs/infoSvg'

const ModalItem = ({ modalVisible, setModalVisible }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onBackdropPress={() => console.log('vcdjwedfvfdv')}
    >
      <View style={styles.regulationBlock}>
        <View style={styles.rowBox}>
          <ArrowRight />
          <View style={{ paddingLeft: 10 }}>
            <InfoSvg />
          </View>
        </View>
        <View style={styles.titleColumnBox}>
          <Text style={styles.title}>Тип игры: Триста</Text>
          <Text style={styles.title}>Дата и время игры: 07.07.2022, 18:30</Text>
          <Text style={styles.title}>Количество игроков: от 10 до 12</Text>
          <Text style={styles.title}>Возраст игроков: 25-35</Text>
          <Text style={styles.title}>Половой признак игроков: М</Text>
          <Text style={styles.title}>Адрес проведения игры:</Text>
          <Text style={styles.title}>Дата и время окончания поиска игроков: 07.07.2022, 18:30</Text>
          {/* <Text style={styles.title}>Стоимость входного билета на игру: 500 руб.</Text> */}
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={styles.title}>Организатор игры:</Text>
            {/* <Image
            source={require('../../../assets/imgs/detail.png')}
            resizeMode={'contain'}
            style={{ height: RH(30), width: RW(20), paddingLeft: RW(50) }}
          /> */}
          </View>
        </View>
      </View>
    </Modal>
  )
}
export default ModalItem

const styles = StyleSheet.create({
  regulationBlock: {
    backgroundColor: LIGHT_LABEL,
    borderRadius: RW(20),
    width: RW(357),
    padding: RW(35),
  },
  rowBox: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  titleColumnBox: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    width: '100%',
    alignItems: 'flex-start',
  },
  title: {
    color: WHITE,
    fontSize: RW(14),
    fontFamily: FONT_INTER_REGULAR,
    paddingTop: '5%',
  },
})
