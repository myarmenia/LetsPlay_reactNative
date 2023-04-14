import { Text, View } from 'react-native'
import React from 'react'
import Modal from '@/components/modal'
import { font, RH } from '@/theme/utils'
import { useDispatch, useSelector } from 'react-redux'
import { _storageUrl } from '@/constants'
import User from '@/components/User/user'
import { setDeadUser } from '@/store/Slices/MafiaSlice'

const MafiaDeadModal = ({ modalVisible, setModalVisible }) => {
  const { deadUser } = useSelector(({ mafia }) => mafia)
  const dispatch = useDispatch()
  if (!modalVisible) return null
  return (
    <Modal
      modalVisible={modalVisible}
      setIsVisible={(e) => {
        dispatch(setDeadUser(null))
        setModalVisible(e)
      }}
      item={
        <View>
          <Text style={{ ...font('bold', 24, '#fff'), alignSelf: 'center', marginBottom: RH(50) }}>
            Игрок выбыл
          </Text>
          <User size={400} user={deadUser} onPressItem={{ onClickFunc: () => {} }} />
          <Text style={{ ...font('bold', 24, '#fff'), alignSelf: 'center', marginTop: RH(30) }}>
            {deadUser?.role}
          </Text>
        </View>
      }
    />
  )
}

export default MafiaDeadModal
