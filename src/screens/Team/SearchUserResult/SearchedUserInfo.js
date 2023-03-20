import React, { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import ScreenMask from '@/components/wrappers/screen'
import User from '@/components/User/user'
import LightButton from '@/assets/imgs/Button'
import Modal from '@/components/modal'
import { useDispatch } from 'react-redux'
import { SCREEN_BACKGROUND, WHITE } from '@/theme/colors'
import { font, RH, RW } from '@/theme/utils'

const SearchedUserInfo = ({ userInfo }) => {
  const [modalVisible, setModalVisible] = useState(false)
  const [back, setBack] = useState(false)
  const dispatch = useDispatch()
  const handleInvite = () => {
    // dispatch
    setModalVisible(true)
  }
  return (
    <ScreenMask>
      <Pressable
        onPressIn={() => setBack(true)}
        onPressOut={() => setBack(false)}
        onPress={() => setModalVisible(true)}
        style={{
          width: '100%',
          alignSelf: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center',
          height: '90%',
          zIndex: 15,
        }}
      >
        <User
          size={430}
          // pressedUser={userInfo}
        />
      </Pressable>
      <View style={styles.btnBox}>
        <LightButton
          label={'Пригласить в команду'}
          size={{ width: 308, height: 40 }}
          onPress={handleInvite}
        />
      </View>
      {modalVisible && (
        <Modal
          modalVisible={modalVisible}
          setIsVisible={setModalVisible}
          navigationText={'TeamMembers'}
          item={
            <View style={styles.modalContainer}>
              <Text style={styles.playerMessage}>
                Игроку отправлен запрос на участие в команде. Ждем подтверждения!
              </Text>
            </View>
          }
        />
      )}
    </ScreenMask>
  )
}

export default SearchedUserInfo

const styles = StyleSheet.create({
  btnBox: {
    alignSelf: 'center',
  },
  modalContainer: {
    width: '90%',
    borderRadius: RW(20),
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'center',
    // height: '6%',
    backgroundColor: SCREEN_BACKGROUND,
  },
  playerMessage: {
    ...font('regular', 16, WHITE),
    textAlign: 'center',
    width: '90%',
    padding: RH(20),
  },
})
