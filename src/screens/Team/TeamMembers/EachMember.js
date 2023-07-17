import React, { useState } from 'react'
import { _storageUrl } from '@/constants'
import { WHITE } from '@/theme/colors'
import { font, RH, RW } from '@/theme/utils'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import LightButton from '@/assets/imgs/Button'
import User from '@/components/User/user'
import ScreenMask from '@/components/wrappers/screen'
import { useDispatch } from 'react-redux'
import { deletePlayerFromTeam, setPlayerAdmin } from '@/store/Slices/TeamSlice'
import FastImage from 'react-native-fast-image'

const EachMember = ({ route }) => {
  // const [modalVisible, setModalVisible] = useState(false)
  const commandName = route?.params?.command.name
  const commandImg = route?.params?.command.img
  const dispatch = useDispatch()
  const props = route?.params

  const submitAdmin = () => {
    dispatch(
      setPlayerAdmin({
        team_id: props.command?._id,
        user_id: props.member,
      }),
    )
  }
  const handleDelete = () => {
    dispatch(
      deletePlayerFromTeam({
        team_id: props.command?._id,
        user_id: props.member,
      }),
    )
  }
  return (
    <ScreenMask>
      <Pressable
        // onPress={() => setModalVisible(true)}
        style={{
          width: '100%',
          alignSelf: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '95%',
          zIndex: 15,
        }}
      >
        <View style={styles.rowBox}>
          <Text style={styles.topTitle}>{commandName}</Text>
          <FastImage
            source={{ uri: _storageUrl + commandImg }}
            resizeMode="cover"
            style={styles.commandImg}
          />
        </View>
        <User size={390} />
        <View style={styles.btnsBox}>
          <LightButton
            label={'Сделать администратором'}
            size={{ width: 308, height: 45 }}
            onPress={submitAdmin}
          />
          <LightButton
            label={'Удалить из команды'}
            size={{ width: 308, height: 45 }}
            onPress={handleDelete}
          />
        </View>
      </Pressable>
    </ScreenMask>
  )
}
const styles = StyleSheet.create({
  btnsBox: {
    width: '100%',
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
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    top: RH(15),
  },
})
export default EachMember
