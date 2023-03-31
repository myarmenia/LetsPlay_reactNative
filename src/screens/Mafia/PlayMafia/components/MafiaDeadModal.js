import { Text, View, Image, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import Modal from '@/components/modal'
import { font, RH, RW } from '@/theme/utils'
import { WHITE } from '@/theme/colors'
import { useDispatch, useSelector } from 'react-redux'
import { _storageUrl } from '@/constants'
import User from '@/components/User/user'
import { setDeadUsers } from '@/store/Slices/MafiaSlice'

const MafiaDeadModal = ({ modalVisible, setModalVisible }) => {
  const { deadUsers } = useSelector(({ mafia }) => mafia)
  const dispatch = useDispatch()
  // console.log('deadUsers', deadUsers)
  if (!modalVisible) return null
  return (
    <Modal
      modalVisible={modalVisible}
      setIsVisible={(e) => {
        dispatch(setDeadUsers([]))
        setModalVisible(e)
      }}
      item={
        <View>
          <Text style={{ ...font('bold', 24, '#fff'), alignSelf: 'center', marginBottom: RH(50) }}>
            Игрок выбыл
          </Text>
          <User size={400} user={deadUsers[0]} onPressItem={{ onClickFunc: () => {} }} />
          <Text style={{ ...font('bold', 24, '#fff'), alignSelf: 'center', marginTop: RH(30) }}>
            {deadUsers?.role}
          </Text>
        </View>
      }
    />
  )
}

export default MafiaDeadModal
