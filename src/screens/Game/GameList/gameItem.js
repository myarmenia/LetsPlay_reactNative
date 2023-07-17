import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { styles } from './styles'
import { RH, RW } from '@/theme/utils'
import { Players } from '@/assets/TestData'
import { useNavigation } from '@react-navigation/native'
import { _storageUrl } from '@/constants'
import { useDispatch } from 'react-redux'
import { joinGame } from '@/store/Slices/TeamSlice'
import ScreenMask from '@/components/wrappers/screen'
import User from '@/components/User/user'
import Button from '@/assets/imgs/Button'
import Modal from '@/components/modal'
import FastImage from 'react-native-fast-image'

function GameItem({ route }) {
  const { item } = route.params
  const [error, setError] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)
  const navigation = useNavigation()
  const dispatch = useDispatch()
  useEffect(() => {
    setError(false)
    setModalVisible(false)
  }, [])

  return (
    <ScreenMask>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.itemWrapper}>
        <View style={styles.bigIcon}>
          <FastImage
            style={{ width: RW(260), height: RW(260), resizeMode: 'contain' }}
            source={{ uri: _storageUrl + item?.game?.img }}
          />
        </View>
        <View>
          <Text style={styles.eachInfo}>Тип игры:</Text>
          <Text style={styles.eachInfoTwo}>{item?.game?.name}</Text>
          <Text style={styles.eachInfo}>Дата и время игры:</Text>
          <Text style={styles.eachInfoTwo}>
            {' '}
            {new Date(item?.start_date).toLocaleDateString()},{' '}
            {new Date(item?.start_date).toLocaleTimeString().slice(0, 5)}
          </Text>
          <Text style={styles.eachInfo}>Кол. игроков:</Text>
          <Text style={styles.eachInfoTwo}>
            от {item?.players?.slice(0, 2)} до {item?.players?.slice(3)}
          </Text>
          <Text style={styles.eachInfo}>Возраст игроков:</Text>
          <Text style={styles.eachInfoTwo}>
            {item?.age_restrictions_from}-{item?.age_restrictions_to}
          </Text>
          <Text style={styles.eachInfo}>Половой признак игроков:</Text>
          <Text style={styles.eachInfoTwo}>
            {item?.players_gender == 'm'
              ? 'М'
              : item?.players_gender == 'f'
              ? 'Ж'
              : 'Без ограничений'}
          </Text>
          <Text style={styles.eachInfo}>Адрес проведения игры:</Text>
          <Text style={styles.eachInfoTwo}>{item?.address_name}</Text>
          <Text style={styles.eachInfo}>
            Дата и время подтверждения заявки на игру (не позднее):
          </Text>
          <Text style={styles.eachInfoTwo}>
            {new Date(item?.end_date).toLocaleDateString()},{' '}
            {new Date(item?.end_date).toLocaleTimeString().slice(0, 5)}
          </Text>
          {/* <Text style={styles.eachInfo}>Стоимость входного билета на игру: Бесплатно</Text>
          <Text style={styles.eachInfoTwo}>
            {item?.ticket_price ? `${item?.ticket_price} руб.` : 'Бесплатно'}
          </Text> */}
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={styles.eachInfo}>Организатор игры:</Text>
            <View style={{ width: RW(60), paddingBottom: RH(20) }}>
              <User
                size={40}
                user={Players[0]}
                onPressItem={{
                  item: <User user={Players[0]} size={390} />,
                  modalClose: false,
                }}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 'auto',
            marginBottom: RH(30),
          }}
        >
          <Button
            label={'Присоединиться'}
            size={{ width: 313, height: 48 }}
            onPress={() => {
              dispatch(joinGame(item?.id, navigation, setError, setModalVisible))
            }}
          />
        </View>

        <Modal
          item={
            <View style={styles.modal}>
              <Text style={styles.errMessage}>{error}</Text>
            </View>
          }
          modalVisible={modalVisible}
          setIsVisible={setModalVisible}
        />
      </ScrollView>
    </ScreenMask>
  )
}

export default GameItem
