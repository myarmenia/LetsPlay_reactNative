import { Image, ImageBackground, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import ScreenMask from '@/components/wrappers/screen'
import { useNavigation } from '@react-navigation/native'
import { _storageUrl } from '@/constants'
import { font, RH, RW } from '@/theme/utils'
import { BACKGROUND, ICON, WHITE } from '@/theme/colors'
import SearchAddresses from '@/screens/Map/SearchAddresses'
import LightButton from '@/assets/imgs/Button'
import { launchImageLibrary } from 'react-native-image-picker'
import UploadIcon from '@/assets/svgs/uploadPhotoIcon'

const EditTeamInfo = ({ route }) => {
  const command = route.params
  const [addresName, setAddressName] = useState('')
  const [name, setName] = useState('')
  const [photo, setPhoto] = useState(_storageUrl + command?.img)
  const navigation = useNavigation()
  const uploadPhoto = async () => {
    const result = await launchImageLibrary({
      mediaType: 'mixed',
      quality: 1,
      includeBase64: true,
    })
    setPhoto(result.assets[0].uri)
    // dispatch(setPending(true))
    // setEditable(false)
    // let myHeaders = new Headers()
    // myHeaders.append('Content-Type', 'multipart/form-data')
    // myHeaders.append('Authorization', `Bearer ${token}`)
    // myHeaders.append('Accept', 'application/json')

    // let formdata = new FormData()
    // formdata.append('avatar', {
    //   name: 'uresPhoto',
    //   type: result.assets[0].type,
    //   uri: result.assets[0].uri,
    // })

    // let requestOptions = {
    //   method: 'PATCH',
    //   headers: myHeaders,
    //   body: formdata,
    //   redirect: 'follow',
    // }
    // fetch(
    //   Platform.OS == 'ios'
    //     ? 'https://to-play.ru/api/profile/avatar'
    //     : 'http://to-play.ru/api/profile/avatar',
    //   requestOptions,
    // )
    //   .then((response) => response.text())
    //   .then((result) => {
    //     dispatch(setImage(JSON.parse(result).avatar))
    //   })
    //   .catch((error) => console.log('error', error))
    //   .finally(() => dispatch(setPending(false)), setEditable(false))
  }
  //command is initial coming state from navigation and from map after changing location
  return (
    <ScreenMask>
      <View style={styles.row}>
        <ImageBackground
          source={{ uri: photo }}
          // resizeMode="cover"
          style={styles.img}
          imageStyle={styles.img}
        >
          <Pressable style={styles.uploadBtn} onPress={uploadPhoto}>
            <UploadIcon />
          </Pressable>
        </ImageBackground>
        <TextInput style={styles.input} value={command?.name} onChangeText={e => setName(e)} />
      </View>
      <View style={styles.colBox}>
        <Text style={styles.text}>Адрес нахождения команды:</Text>
        <SearchAddresses
          addressName={addresName}
          setAddressName={setAddressName}
          navigateTo="EditTeam"
          command={command}
          show={true}
        />
      </View>
      <View style={styles.bottomBox}>
        <LightButton
          label={'Сохранить'}
          size={{ width: RW(366), height: RH(50) }}
          onPress={() => navigation.navigate('MyTeamInfo', command)}
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
    // position: 'relative',
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
  input: {
    backgroundColor: BACKGROUND,
    marginBottom: RH(49),
    borderRadius: RW(10),
    width: RW(246),
    height: RH(48),
    color: ICON,
    top: '4%',
    paddingLeft: RW(24),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: RH(40),
  },
  text: {
    // textAlign: 'center',
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
