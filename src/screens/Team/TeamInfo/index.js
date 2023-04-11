import style from './styles'
import { useState } from 'react'
import { BLACK } from '@/theme/colors'
import Modal from '@/components/modal'
import Button from '@/assets/imgs/Button'
import User from '@/components/User/user'
import { _storageUrl } from '@/constants'
import { useDispatch } from 'react-redux'
import { Players } from '@/assets/TestData'
import { font, RH, RW } from '@/theme/utils'
import { Image, Text, View } from 'react-native'
import ScreenMask from '@/components/wrappers/screen'
import { joinInTeam } from '@/store/Slices/TeamSlice'
import { useNavigation } from '@react-navigation/native'

function Index({ route }) {
  const item = route.params
  console.log('item', item)
  const [modalVisible, setModalVisible] = useState(false)
  const navigation = useNavigation()
  const dispatch = useDispatch()
  //640b2c8d9f063da9a3cf6b7e
  const handleJoin = () => {
    dispatch(joinInTeam(item?._id, setModalVisible, navigation))
  }
  return (
    <ScreenMask>
      <Text style={style.team}>{item?.name}</Text>
      <View style={style.imageBlock}>
        <Image style={style.image} source={{ uri: _storageUrl + item?.img }} />
      </View>
      <View style={{ alignItems: 'center' }}>
        <Text style={style.text}>Адрес нахождения команды</Text>
        <Text style={style.textLined}>{item?.address_name}</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: RH(15) }}>
        <Text style={{ ...style.text, marginLeft: RW(15) }}>Организатор команды:</Text>
        <View style={{ marginLeft: RW(15) }}>
          <User
            size={40}
            user={Players[3]}
            onPressItem={{
              item: <User user={Players[3]} size={390} />,
              modalClose: false,
            }}
          />
        </View>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: RH(15) }}>
        <Text style={{ ...style.text, marginLeft: RW(15) }}>Администратор команды:</Text>
        <View style={{ marginLeft: RW(15) }}>
          <User
            size={40}
            user={Players[8]}
            onPressItem={{
              item: <User user={Players[8]} size={390} />,
              modalClose: false,
            }}
          />
        </View>
      </View>
      <View style={style.btn}>
        <Button
          onPress={handleJoin}
          size={{ width: RW(360), height: RH(48) }}
          label={'Присоединиться к команде'}
          labelStyle={font('bold', 18, BLACK)}
        />
      </View>
      {modalVisible && (
        <Modal
          item={
            <View style={style.modal}>
              <Text style={style.successTeam}>Вы успешно присоединились к команду!</Text>
            </View>
          }
          modalVisible={modalVisible}
          setIsVisible={setModalVisible}
        />
      )}
    </ScreenMask>
  )
}

export default Index
