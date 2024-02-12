import React, { useMemo, useState } from 'react'
import { _storageUrl } from '@/constants'
import { LIGHT_LABEL, WHITE } from '@/theme/colors'
import { font, RH, RW } from '@/theme/utils'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import LightButton from '@/components/buttons/Button'
import User from '@/components/User/User'
import ScreenMask from '@/components/wrappers/screen'
import { useDispatch, useSelector } from 'react-redux'
import { deletePlayerFromTeam, setPlayerAdmin } from '@/store/Slices/TeamSlice'
import FastImage from 'react-native-fast-image'
import { useNavigation } from '@react-navigation/native'
import Modal from '@/components/modal'

const EachMember = ({ route }) => {
  const [modalVisible, setModalVisible] = useState(false)
  const signInUser = useSelector(({ auth }) => auth.user)
  const navigation = useNavigation()



  const { command, user } = route?.params
  const isAdmin = useMemo(() => {
    const index = command.admins.findIndex(item => item._id === user._id)
    console.log(index, 'index');
    if (index === -1) {
      return false
    } else {
      return true
    }
  }, [user._id])
  const dispatch = useDispatch()

  const submitAdmin = () => {
    dispatch(
      setPlayerAdmin(
        {
          team_id: command?._id,
          user_id: user?._id,
        },
        setModalVisible,
      ),
    )
  }
  const handleDelete = () => {
    const obj = {
      team_id: command?._id,
      playerId: user?._id,
    }
    const goBack = () => {
      navigation.navigate('MembersInTeam')
    }
    dispatch(
      deletePlayerFromTeam(obj, goBack),
    )
  }
  return (
    <ScreenMask>
      <Pressable
        style={{
          flex: 1,
          alignItems: 'center',
          position: 'relative'
        }}
      >
        <View style={styles.rowBox}>
          <Text style={styles.topTitle}>{command.name}</Text>
          <FastImage
            source={{ uri: _storageUrl + command.img }}
            resizeMode="cover"
            style={styles.commandImg}
          />
        </View>
        <User user={user} size={390} />
        {(signInUser._id === command.user._id && signInUser._id !== user._id) && <View style={styles.btnsBox}>
          {!isAdmin && <LightButton
            label={'Сделать администратором'}
            size={{ width: 308, height: 45 }}
            onPress={submitAdmin}
          />}
          <LightButton
            label={'Удалить из команды'}
            size={{ width: 308, height: 45 }}
            onPress={handleDelete}
          />
        </View>}
      </Pressable>
      <Modal
        item={
          <View style={styles.modal}>
            <Text style={styles.modalText}>{modalVisible}</Text>
          </View>
        }
        modalVisible={modalVisible}
        onModalClose={() => { navigation.goBack() }}
        setIsVisible={setModalVisible}
      />
    </ScreenMask>
  )
}
const styles = StyleSheet.create({
  btnsBox: {
    width: '100%',
    position: 'absolute',
    bottom: RH(30),
    alignItems: 'center',
    flexDirection: 'column',
    alignSelf: 'center',
    height: '12%',
    justifyContent: 'space-between',
  },
  topTitle: {
    textAlign: 'center',
    ...font('bold', 22, WHITE),
    marginVertical: RH(15),
  },
  commandImg: {
    width: RW(40),
    height: RW(40),
    borderRadius: RW(20),
    marginLeft: '3%',
    borderWidth: 1,
    borderColor: WHITE,
  },
  rowBox: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: RH(30),
    marginBottom: RH(50)
  },
  modal: {
    width: RW(306),
    backgroundColor: LIGHT_LABEL,
    borderRadius: RW(20),
    padding: RW(20),
    marginHorizontal: RW(30.5),
  },
  modalText: {
    ...font('inter', 16, WHITE, 20),
    textAlign: 'center',
  },
})
export default EachMember
