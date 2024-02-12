import React, { useState, memo, useEffect } from 'react'
import { View, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native'
import ScreenMask from '@/components/wrappers/screen'
import { font, RH, RW } from '@/theme/utils'
import { BACKGROUND, ICON, LIGHT_LABEL, RADIO_TEXT, RED, WHITE } from '@/theme/colors'
import DownloadingIcon from '@/assets/svgs/downloadingSvg'
import LightButton from '@/components/buttons/Button'
import { launchImageLibrary } from 'react-native-image-picker'
import Index from '@/components/modal'
import SearchAddresses from '@/screens/Map/SearchAddresses'
import { createTeam } from '@/store/Slices/TeamSlice'
import { useSelector } from 'react-redux'
import FastImage from 'react-native-fast-image'

const CreateTeamTitle = () => {
  const [avatar, setAvatar] = useState('')
  const { address, longitude, latitude } = useSelector(({ address }) => address)


  const [modalVisible, setModalVisible] = useState(false)
  const [teamName, setTeamName] = useState('')
  const [teamNameError, setTeamNameError] = useState(false)
  const [addressError, setAddressError] = useState(false)
  const [avatarError, setAvatarError] = useState(false)


  const { token } = useSelector(({ auth }) => auth)
  const formdata = new FormData()

  const handleCreate = () => {
    if (!address) {
      setAddressError('Обязательное поле для заполнения')
    } else if (!longitude || !latitude) {
      setAddressError('Укажите точный адрес')
    } else {
      setAddressError(false)
    }



    if (!teamName) {
      setTeamNameError(true)
    } else {
      setTeamNameError(false)
    }
    if (!avatar?.assets?.[0].uri) {
      setAvatarError(true)
    } else {
      setAvatarError(false)
    }
    if (address && longitude && latitude && teamName && avatar?.assets?.[0].uri) {
      formdata.append('name', teamName)
      formdata.append('address_name', address)
      formdata.append('latitude', latitude)
      formdata.append('longitude', longitude)
      formdata.append('image', {
        name: avatar?.assets?.[0].fileName,
        type: avatar?.assets?.[0].type,
        uri: avatar?.assets?.[0].uri,
      })
      createTeam(formdata, token, setModalVisible)
    }
  }

  const uploadImageHandle = async () => {
    await launchImageLibrary({
      mediaType: 'photo',
      quality: 1,
      includeBase64: true,
      durationLimit: 10,
      selectionLimit: 1,
    }).then((result) => {
      if (result?.assets?.[0].uri) {
        setAvatarError(false)
        setAvatar(result)
      } else {
        setAvatar(null)
      }
    })
  }


  return (
    <ScreenMask>
      <View style={{ height: '100%' }}>
        <View style={styles.inputContainer}>
          <View style={styles.inputBlock}>
            <TextInput
              placeholder={'Название команды'}
              placeholderTextColor={ICON}
              maxLength={30}
              style={styles.inputs}
              onChangeText={(value) => setTeamName(value)}
            />

          </View>
          {teamNameError && (
            <Text style={styles.errorText}>Обязательное поле для заполнения</Text>
          )}
          <View style={styles.inputBlock}>
            <SearchAddresses />
          </View>
          {addressError && (
            <Text style={styles.errorText}>{addressError}</Text>
          )}
        </View>
        <View style={styles.uploadBox}>
          <TouchableOpacity style={styles.downloadingImg} onPress={uploadImageHandle}>
            {!avatar?.assets?.[0].uri ? (
              <View style={{ transform: [{ rotate: '180deg' }] }}>
                <DownloadingIcon />
              </View>
            ) : (
              <View style={styles.imgBox}>
                <FastImage
                  source={{ uri: avatar?.assets?.[0].uri }}
                  resizeMode={'cover'}
                  style={styles.img}
                />
              </View>
            )}
          </TouchableOpacity>
          <View>
            <Text style={styles.downloadingIcon}>Загрузите логотип команды</Text>
            <Text style={styles.noMore}>Не более 1МБ, 240x240px</Text>
          </View>
        </View>
        {avatarError && <Text style={styles.errorText}>Обязательное поле для заполнения</Text>}
        <Text style={styles.fileName}>{avatar?.assets?.[0].fileName}</Text>
      </View>

      <View style={styles.nextBtn}>
        <LightButton label={'Готово'} size={{ width: 144, height: 36 }} onPress={handleCreate} />
      </View>
      <Index
        item={
          <View style={styles.modal}>
            <Text style={styles.successTeam}>Вы успешно создали команду!</Text>
          </View>
        }
        modalVisible={modalVisible}
        setIsVisible={setModalVisible}
        navigationText={'Home'}
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
  inputContainer: {
    width: '100%',
    marginTop: RH(60),
  },

  uploadBox: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%',
    alignItems: 'center',
  },
  imgBox: { width: RW(85), height: RW(85) },
  img: {
    width: '100%',
    height: '100%',
    borderRadius: RW(44),
    marginHorizontal: RW(20),
  },

  inputBlock: {
    backgroundColor: BACKGROUND,
    flexDirection: 'row',
    borderRadius: RW(10),
    marginTop: RH(30),
    alignItems: 'center',
  },
  inputs: {
    color: ICON,
    width: '80%',
    marginLeft: RW(20),
    fontSize: RW(16),
  },
  downloadingImg: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: RH(15),
  },
  downloadingIcon: {
    ...font('inter', 16, RADIO_TEXT, 19),
    fontWeight: '400',
    marginBottom: RH(5),
    marginLeft: RW(5),
  },
  noMore: {
    ...font('inter', 12, RADIO_TEXT, 15),
    fontWeight: '400',
    marginLeft: RW(5),
  },
  nextBtn: {
    marginBottom: RH(30),
    marginTop: 'auto',
    marginLeft: 'auto',
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
  errorText: {
    ...font('regular', 16, RED, 24),
    marginLeft: RW(10)
  },
})
export default memo(CreateTeamTitle)
