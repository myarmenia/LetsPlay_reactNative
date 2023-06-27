import { styles } from '../gamesList/style'
import ScreenMask from '@/components/wrappers/screen'
import React from 'react'
import { View, Text, Image } from 'react-native'
import { RH, RW } from '@/theme/utils'
import Button from '@/assets/imgs/Button'

function GameItem({ route, navigation }) {
  const { item } = route.params
  return (
    <ScreenMask>
      <View style={styles.itemWrapper}>
        <View style={styles.bigIcon}>{item?.bigComponent}</View>
        <View>
          <Text style={styles.eachInfo}>Тип игры: {item?.name}</Text>
          <Text style={styles.eachInfo}>Дата и время игры: {[item?.date, item?.time]}</Text>
          <Text style={styles.eachInfo}>
            Кол. игроков: от {item?.players.slice(0, 2)} до {item?.players.slice(3)}
          </Text>
          <Text style={styles.eachInfo}>Возраст игроков: {item?.playersAge}</Text>
          <Text style={styles.eachInfo}>Половой признак игроков: {item?.gender}</Text>
          <Text style={styles.eachInfo}>Адрес проведения игры:</Text>
          <Text style={styles.eachInfo}>
            Дата и время подтверждения заявки на {'\n'} игру (не позднее):{' '}
            {[item?.date, item?.time]}
          </Text>
          {/* <Text style={styles.eachInfoRegular}>Стоимость входного билета на игру: Бесплатно</Text> */}
          <Text style={styles.eachInfoRegular}>
            Организатор игры:{' '}
            <Image
              source={require('../../../assets/imgs/detail.png')}
              resizeMode="center"
              style={{ width: RW(21), height: RH(31) }}
            />
          </Text>
        </View>
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center', bottom: RH(20) }}>
        <Button
          label={'Присоединиться'}
          size={{ width: 313, height: 48 }}
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </ScreenMask>
  )
}

export default GameItem
