import React, { useState, useEffect } from 'react'
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  ToastAndroid,
  Alert,
} from 'react-native'
import ScreenMask from '@/components/wrappers/screen'
import { font, RH, RW } from '@/theme/utils'
import { BACKGROUND, ICON, LIGHT_LABEL, RADIO_TEXT, WHITE } from '@/theme/colors'
import DownloadingIcon from '@/assets/svgs/downloadingSvg'
import LightButton from '@/assets/imgs/Button'
import { launchImageLibrary } from 'react-native-image-picker'
import Index from '@/components/modal'
import { useNavigation } from '@react-navigation/native'

const CreateTeamTitle = () => {
  const [avatar, setAvatar] = useState('')
  const [modalVisible, setModalVisible] = useState(false)
  const navigation = useNavigation()

  const setToastMsg = msg => {
    ToastAndroid.showWithGravity(msg, ToastAndroid.SHORT, ToastAndroid.CENTER)
  }

  const uploadImageHandle = () => {
    let options = {
      mediaType: 'photo',
      quality: 1,
      includeBase64: false,
    }
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        setToastMsg('Cancelled image selection')
      } else if (response.errorCode === 'permission') {
        setToastMsg('permission not satsified')
      } else if (response.errorCode === 'others') {
        setToastMsg(response.errorMessage)
      } else if (response.assets[0].fileSize > 2097152) {
        Alert.alert('Maximum image size exceeded', 'Please choose image under 1 MB', [
          { text: 'Ok' },
        ])
      } else {
        setAvatar(response.assets[0])
      }
    })
  }

  return (
    <ScreenMask>
      <View style={styles.common}>
        <View>
          <View style={styles.inputsView}>
            <TextInput
              placeholder={'Название команды'}
              placeholderTextColor={ICON}
              style={styles.inputs}
            />
            <TextInput
              placeholder={'Адрес нахождения команды'}
              style={styles.inputs}
              placeholderTextColor={ICON}
            />
          </View>
          <TouchableOpacity style={styles.downloadingImg} onPress={uploadImageHandle}>
            <DownloadingIcon />
            <View>
              <Text style={styles.downloadingIcon}>Загрузите логотип команды</Text>
              <Text style={styles.noMore}>Не более 1МБ, 240x240px</Text>
            </View>
          </TouchableOpacity>
          <Text style={styles.fileName}>{avatar.fileName}</Text>
        </View>
        <View style={styles.nextBtn}>
          <LightButton
            label={'Готово'}
            onPress={() => {
              setModalVisible(true)
            }}
          />
        </View>
      </View>
      <Index
        item={
          <View style={styles.modal}>
            <Text style={styles.successTeam}>Вы успешно создали команду!</Text>
          </View>
        }
        modalVisible={modalVisible}
        setIsVisible={setModalVisible}
        navigation={'Home'}
      />
    </ScreenMask>
  )
}
const styles = StyleSheet.create({
  common: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: '100%',
  },
  inputsView: {
    marginTop: RH(100),
    marginHorizontal: RW(20),
    width: RW(375),
  },
  inputs: {
    borderWidth: RW(0),
    backgroundColor: BACKGROUND,
    borderRadius: RW(10),
    padding: RW(12),
    marginVertical: RH(20),
    color: ICON,
  },
  downloadingImg: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: RH(31),
  },
  downloadingIcon: {
    ...font('inter', 16, RADIO_TEXT, 19),
    fontWeight: '400',
    marginBottom: RH(5),
  },
  noMore: {
    ...font('inter', 12, RADIO_TEXT, 15),
    fontWeight: '400',
  },
  nextBtn: {
    marginBottom: RH(30),
    marginRight: RW(20),
  },
  fileName: {
    margin: RW(30),
    ...font('inter', 16, WHITE, 20),
  },
  modal: {
    width: RW(306),
    backgroundColor: LIGHT_LABEL,
    borderRadius: RW(20),
    padding: RW(50),
    marginHorizontal: RW(30.5),
  },
  successTeam: {
    ...font('inter', 16, WHITE, 20),
    textAlign: 'center',
  },
})
export default CreateTeamTitle
