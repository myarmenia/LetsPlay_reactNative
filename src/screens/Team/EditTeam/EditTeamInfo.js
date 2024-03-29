import { ImageBackground, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ScreenMask from '@/components/wrappers/screen'
import { useNavigation } from '@react-navigation/native'
import { _storageUrl } from '@/constants'
import { font, RH, RW } from '@/theme/utils'
import { BACKGROUND, ICON, WHITE, RED } from '@/theme/colors'
import SearchAddresses from '@/screens/Map/SearchAddresses'
import LightButton from '@/components/buttons/Button'
import { launchImageLibrary } from 'react-native-image-picker'
import UploadIcon from '@/assets/svgs/uploadPhotoIcon'
import { useDispatch, useSelector } from 'react-redux'
import { setAddress } from '@/store/Slices/AddressSlice'
import { setModalOptions } from '@/store/Slices/AppSlice'
import { isTabletDevice } from '@/helpers/helpFunctions'

const EditTeamInfo = ({ route }) => {
  const dispatch = useDispatch()
  const { address, longitude, latitude } = useSelector(({ address }) => address)
  const command = route.params




  const [name, setName] = useState(command?.name)
  const [addressError, setAddressError] = useState(false)
  const [photo, setPhoto] = useState({ uri: _storageUrl + command?.img })
  const { token } = useSelector(({ auth }) => auth)
  const navigation = useNavigation()
  const uploadPhoto = async () => {
    await launchImageLibrary({
      mediaType: 'photo',
      quality: 1,
      includeBase64: false,
    }).then((result) => {
      if (result.didCancel) {
        return
      }
      if (result?.assets?.[0]?.uri) {
        setPhoto(result.assets[0])
      }
    })
  }
  const hundleSubmit = () => {
    const formData = new FormData()
    formData.append('name', name)
    if (photo?.fileName) {
      formData.append('image', {
        name: photo?.fileName,
        type: photo?.type,
        uri: photo?.uri,
      })
    } else {
      const img = photo.uri.split('.')
      formData.append('image', {
        name: 'team_photo',
        type: `image/${img[img.length - 1]}`,
        uri: photo?.uri,
      })
    }
    if (!address) {
      setAddressError('Обязательное поле для заполнения')
      return
    } else if (!longitude || !latitude) {
      setAddressError('Укажите точный адрес')
      return
    } else {
      setAddressError(false)
      formData.append('address_name', address)
      formData.append('latitude', latitude)
      formData.append('longitude', longitude)
    }
    let myHeaders = new Headers()
    myHeaders.append('Content-Type', 'multipart/form-data')
    myHeaders.append('Authorization', `Bearer ${token}`)
    myHeaders.append('Accept', 'application/json')
    let requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: formData,
      redirect: 'follow',
    }
    fetch(
      Platform.OS == 'ios'
        ? 'https://to-play.ru/api/team/' + command?._id
        : 'http://to-play.ru/api/team/' + command?._id,
      requestOptions,
    )
      .then((result) => result.json())
      .then((result) => {
        if (result.message === "Команда с таким именем уже существует!") {
          dispatch(
            setModalOptions({
              visible: true,
              type: 'error',
              body: "Команда с таким именем уже существует!",
            }),
          )
        } else if (result.statusCode === 200) {
          navigation.navigate('MyTeamInfo', {
            command: {
              ...command,
              name: result?.data?.name,
              address_name: result?.data?.address_name,
              img: result?.data?.img,
            },
          })
        }

      })
      .catch((error) => { })
  }


  useEffect(() => {
    dispatch(setAddress({
      address: command?.address_name,
      longitude: command?.location.coordinates[1],
      latitude: command?.location.coordinates[0],
    }))
  }, [])

  return (
    <ScreenMask>
      <View style={styles.row}>
        <ImageBackground
          source={{ uri: photo.uri }}
          resizeMode="cover"
          style={styles.img}
          imageStyle={styles.img}
        >
          <Pressable style={styles.uploadBtn} onPress={uploadPhoto}>
            <UploadIcon />
          </Pressable>
        </ImageBackground>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={(e) => setName(e)}
        />
      </View>
      <View style={styles.colBox}>
        <Text style={styles.text}>Адрес нахождения команды:</Text>
        <SearchAddresses />
        {addressError && <Text style={styles.errorText}>{addressError}</Text>}
      </View>
      <View style={styles.bottomBox}>
        <LightButton
          label={'Сохранить'}
          size={{
            width: isTabletDevice ? RH(250) : RW(366),
            height: isTabletDevice ? RH(40) : RH(50)
          }}
          onPress={hundleSubmit}
        />
      </View>
    </ScreenMask>
  )
}

export default EditTeamInfo

const styles = StyleSheet.create({
  img: {
    width: RW(120),
    height: RW(120),
    borderRadius: RW(60),
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadBtn: {
    zIndex: 93,
    height: '100%',
    width: '100%',
    borderRadius: RW(60),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  errorText: {
    ...font('medium', 18, RED),
    top: RH(15),
    left: RW(20),
  },
  input: {
    backgroundColor: BACKGROUND,
    marginBottom: RH(49),
    borderRadius: RW(10),
    width: RW(246),
    height: RH(48),
    color: ICON,
    top: '4%',
    paddingLeft: RW(24),
    fontSize: RH(16)
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: RH(40),
  },
  text: {
    marginVertical: RH(15),
    ...font('regular', 16, WHITE),
  },
  colBox: {
    width: '95%',
    alignSelf: 'center',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },

  bottomBox: {
    position: 'absolute',
    bottom: RW(30),
    alignSelf: 'center',
  },
})
