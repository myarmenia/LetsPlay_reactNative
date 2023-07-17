import { BLACK } from '@/theme/colors'
import { Players } from '@/assets/TestData'
import { useState } from 'react'
import { joinInTeam } from '@/store/Slices/TeamSlice'
import { _storageUrl } from '@/constants'
import { useDispatch, useSelector } from 'react-redux'
import { font, RH, RW } from '@/theme/utils'
import { Text, View } from 'react-native'
import ScreenMask from '@/components/wrappers/screen'
import Button from '@/assets/imgs/Button'
import User from '@/components/User/user'
import Modal from '@/components/modal'
import style from './styles'
import FastImage from 'react-native-fast-image'

function Index({ route }) {
  const item = route.params

  const [modalVisible, setModalVisible] = useState(false)
  const userId = useSelector(({ auth }) => auth?.user?._id)

  const dispatch = useDispatch()
  const handleJoin = () => {
    dispatch(joinInTeam(item?._id, setModalVisible))
  }

  return (
    <ScreenMask>
      <Text style={style.team}>{item?.name}</Text>
      <View style={style.imageBlock}>
        <FastImage style={style.image} source={{ uri: _storageUrl + item?.img }} />
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
      {userId !== item.user && !item.invited_players?.includes(userId) ? (
        <View style={style.btn}>
          <Button
            onPress={handleJoin}
            size={{ width: RW(360), height: RH(48) }}
            label={'Присоединиться к команде'}
            labelStyle={font('bold', 18, BLACK)}
          />
          {modalVisible && (
            <Modal
              navigationText={'Home'}
              item={
                <View style={style.modal}>
                  <Text style={style.successTeam}>{modalVisible}</Text>
                </View>
              }
              modalVisible={modalVisible}
              setIsVisible={setModalVisible}
            />
          )}
        </View>
      ) : null}
    </ScreenMask>
  )
}

export default Index
