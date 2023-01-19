import { styles } from '../gamesList/style'
import ScreenMask from '@/components/wrappers/screen'
import React from 'react'
import { View, Text, Image } from 'react-native'
import GestureRecognizer from 'react-native-swipe-gestures'
import { RH, RW } from '@/theme/utils'
import Button from '@/assets/imgs/Button'
import { useNavigation } from '@react-navigation/native'
import style from "@/screens/GameCreating/style";
import User from "@/assets/imgs/user/user";
import {Players} from "@/assets/TestData";

function GameItem({ route, navigation }) {
  const { item } = route.params
  return (
    <ScreenMask>
      <GestureRecognizer
        onSwipeLeft={(state) => navigation.goBack()}
        style={{
          flex: 1,
        }}
      >
        <View style={styles.itemWrapper}>
          <View style={styles.bigIcon}>{item?.bigComponent}</View>
          <View>
            <Text style={styles.eachInfo}>Тип игры:</Text>
            <Text style={styles.eachInfoTwo}>{item?.name}</Text>
            <Text style={styles.eachInfo}>Дата и время игры:</Text>
            <Text style={styles.eachInfoTwo}>{[item?.date, item?.time]}</Text>
            <Text style={styles.eachInfo}>Кол. игроков:</Text>
            <Text style={styles.eachInfoTwo}>от {item?.players?.slice(0, 2)} до {item?.players?.slice(3)}</Text>
            <Text style={styles.eachInfo}>Возраст игроков:</Text>
            <Text style={styles.eachInfoTwo}>{item?.playersAge}</Text>
            <Text style={styles.eachInfo}>Половой признак игроков:</Text>
            <Text style={styles.eachInfoTwo}>{item?.gender}</Text>
            <Text style={styles.eachInfo}>Адрес проведения игры:</Text>
            <Text style={styles.eachInfo}>Дата и время подтверждения заявки на игру (не позднее):</Text>
            <Text style={styles.eachInfoTwo}>{[item?.date, item?.time]}</Text>
            <Text style={styles.eachInfo}>Стоимость входного билета на игру: Бесплатно</Text>
            <Text style={styles.eachInfoTwo}>Бесплатно</Text>
            <Text style={styles.eachInfo}>Организатор игры:</Text>
            <View style={{width: RW(60)}}>
              <User size={40} user={Players[0]} onPressItem={{
                item: <User user={Players[0]} size={390}/>,
                modalClose:false,
              }}/>
            </View>
          </View>
        </View>
      </GestureRecognizer>
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
