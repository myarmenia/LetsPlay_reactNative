import React, { useState } from 'react'
import ScreenMask from '@/components/wrappers/screen'
import {
  ImageBackground,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import style from './style'
import styles from '@/screens/GameCreating/style'
import TickSvg from '@/assets/svgs/tickSvg'
import InputBlock from '@/screens/Profile/MyDetails/inputBlock'
import RadioBlock from '@/screens/Profile/MyDetails/radioBlock'
import DateBlock from '@/screens/Profile/MyDetails/DateBlock'
import UserEditSvg from '@/assets/svgs/userEdit'
import Modal from '@/components/modal'
import { RW } from '@/theme/utils'
import Button from '@/assets/imgs/Button'
import DarkButton from '@/assets/imgs/DarkButton'
import UploadIcon from '@/assets/svgs/uploadPhotoIcon'
import { launchImageLibrary } from 'react-native-image-picker'
import { useDispatch, useSelector } from 'react-redux'
import { setImage } from '@/store/Slices/AuthSlice'
import { _storageUrl } from '@/constants'
import Loader from '@/components/loader/Loader'

function Index(props) {
  const { navigation } = props
  const [isVisible, setIsVisible] = useState(false)
  const { avatar, name, surname, email } = useSelector(({ auth }) => auth.user)
  const [editable, setEditable] = useState(false)
  const [loader, setLoader] = useState(false)
  const { token } = useSelector(({ auth }) => auth)
  const dispatch = useDispatch()
  const uploadPhoto = async () => {
    const result = await launchImageLibrary({
      mediaType: 'mixed',
      quality: 1,
      includeBase64: true,
    })
    console.log('result', result.assets[0].uri)
    setLoader(true)
    setEditable(false)
    let myHeaders = new Headers()
    myHeaders.append('Content-Type', 'multipart/form-data')
    myHeaders.append('Authorization', `Bearer ${token}`)
    myHeaders.append('Accept', 'application/json')

    let formdata = new FormData()
    formdata.append('avatar', {
      name: 'uresPhoto',
      type: result.assets[0].type,
      uri: result.assets[0].uri,
    })

    let requestOptions = {
      method: 'PATCH',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow',
    }
    fetch(
      Platform.OS == 'ios'
        ? 'https://to-play.ru/api/profile/avatar'
        : 'http://to-play.ru/api/profile/avatar',
      requestOptions,
    )
      .then(response => response.text())
      .then(result => {
        dispatch(setImage(JSON.parse(result).avatar))
      })
      .catch(error => console.log('error', error))
      .finally(() => setLoader(false), setEditable(false))
  }
  return (
    <ScreenMask>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={style.container}>
        <Text style={style.title}>Мои данные</Text>
        <View style={style.imgBlock}>
          <ImageBackground
            style={[style.image, editable || loader ? { opacity: 0.6 } : null]}
            imageStyle={style.image}
            source={
              avatar
                ? {
                    uri: _storageUrl + avatar,
                  }
                : require('../../../assets/imgs/user/defualtUser.png')
            }
          >
            {editable && !loader && (
              <Pressable style={style.uploadBtn} onPress={uploadPhoto}>
                <UploadIcon />
              </Pressable>
            )}
            {loader && <Loader />}
          </ImageBackground>
          <Pressable onPress={() => setEditable(!editable)}>
            {editable ? <TickSvg style={style.tickSvg} /> : <UserEditSvg style={style.tickSvg} />}
          </Pressable>
        </View>
        <View style={style.formBlock}>
          <InputBlock text={'Имя:'} placeholder={name} disable={editable} />
          <InputBlock text={'Фамилия:'} placeholder={surname} disable={editable} />
          <RadioBlock
            list={[
              { id: 1, text: 'М', checked: true },
              { id: 2, text: 'Ж', checked: false },
            ]}
            title={'Пол:'}
          />
          <DateBlock />
          <InputBlock text={'Контактный тел.:'} placeholder={'Tел.'} />
          <InputBlock text={'E-mail:'} placeholder={email} disable={editable} />
          <InputBlock text={'Vk:'} placeholder={'Ссылка на профиль'} />
          <TouchableOpacity onPress={() => setIsVisible(true)} style={style.logOut}>
            <Text style={style.logOutText}>Выход из аккаунта</Text>
          </TouchableOpacity>
          <View style={{ position: 'absolute' }}>
            <Modal
              modalVisible={isVisible}
              setIsVisible={setIsVisible}
              btnClose={false}
              item={
                <View style={styles.topBlock}>
                  <Text style={styles.text}>Вы точно хотите выйти из аккаунта?</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      width: RW(220),
                    }}
                  >
                    <Button
                      onPress={() => navigation.navigate('Home')}
                      light={true}
                      size={{ width: 100, height: 36 }}
                      label={'Да'}
                    />
                    <DarkButton
                      onPress={() => setIsVisible(false)}
                      light={false}
                      size={{ width: 100, height: 36 }}
                      label={'Нет'}
                    />
                  </View>
                </View>
              }
            />
          </View>
        </View>
      </ScrollView>
    </ScreenMask>
  )
}

export default Index
