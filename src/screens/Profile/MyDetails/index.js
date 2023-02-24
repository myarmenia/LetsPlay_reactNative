import React, { useState } from 'react'
import React, { useState } from 'react'
import ScreenMask from '@/components/wrappers/screen'
import {
  ImageBackground,
  Linking,
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
import RadioBlock from '@/components/RadioBlock'
import UserEditSvg from '@/assets/svgs/userEdit'
import Modal from '@/components/modal'
import { RW } from '@/theme/utils'
import Button from '@/assets/imgs/Button'
import DarkButton from '@/assets/imgs/DarkButton'
import UploadIcon from '@/assets/svgs/uploadPhotoIcon'
import { launchImageLibrary } from 'react-native-image-picker'
import { useDispatch, useSelector } from 'react-redux'
import {
  editProfile,
  setExpiredToken,
  setImage,
  setPending,
  setToken,
  setUser,
} from '@/store/Slices/AuthSlice'
import { _storageUrl } from '@/constants'
import DateComponent from '@/components/DateComponent'
import { clearAsyncStorage } from '../../../helpers/asyncStore'

function Index() {
  const [isVisible, setIsVisible] = useState(false)
  const { avatar, name, surname, email, gender, phone_number, vk_uri, dob } = useSelector(
    ({ auth }) => auth.user,
  )
  const user = useSelector(({ auth }) => auth.user)
  const [editable, setEditable] = useState(false)
  const [nameState, setNameState] = useState(name)
  const [surNameState, setSurNameState] = useState(surname)
  const [emailState, setEmailState] = useState(email)
  const [phoneState, setPhoneState] = useState(phone_number)
  const [vkUriState, setVkUriState] = useState(vk_uri)
  const [dateState, setDateState] = useState(dob ? new Date(dob) : new Date())

  const [genderState, setGenderState] = useState([
    { text: 'М', checked: gender == 'male', label: 'male' },
    { text: 'Ж', checked: gender == 'female', label: 'female' },
  ])
  const { token } = useSelector(({ auth }) => auth)
  const dispatch = useDispatch()
  const uploadPhoto = async () => {
    const result = await launchImageLibrary({
      mediaType: 'mixed',
      quality: 1,
      includeBase64: true,
    })
    dispatch(setPending(true))
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
      .then((response) => response.text())
      .then((result) => {
        dispatch(setImage(JSON.parse(result).avatar))
      })
      .catch((error) => console.log('error', error))
      .finally(() => dispatch(setPending(false)), setEditable(false))
  }

  const postEditUserFunc = () => {
    // console.log(getAsyncStorage('token'))
    dispatch(
      setUser({
        ...user,
        ...{
          name: nameState,
          surname: surNameState,
          gender: genderState?.find((elem) => elem?.checked).label,
          dob: JSON.stringify(dateState),
          phone_number: phoneState,
          email: emailState,
          vk_uri: vkUriState,
        },
      }),
    )
    dispatch(
      editProfile({
        name: nameState,
        surname: surNameState,
        gender: genderState?.find((elem) => elem?.checked).label,
        dob: dateState,
        phone_number: phoneState.toString(),
        email: emailState,
        vk_uri: vkUriState,
      }),
    )
  }
  return (
    <ScreenMask>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={style.container}>
        <Text style={style.title}>Мои данные</Text>
        <View style={style.imgBlock}>
          <ImageBackground
            style={[style.image, editable ? { opacity: 0.6 } : null]}
            imageStyle={style.image}
            source={
              !avatar
                ? require('../../../assets/imgs/user/defualtUser.png')
                : Linking.canOpenURL(avatar)
                ? { uri: avatar }
                : {
                    uri: _storageUrl + avatar,
                  }
            }
          >
            {editable && (
              <Pressable style={style.uploadBtn} onPress={uploadPhoto}>
                <UploadIcon />
              </Pressable>
            )}
          </ImageBackground>
          <Pressable
            onPress={() => {
              if (editable) {
                postEditUserFunc()
              }
              setEditable(!editable)
            }}
          >
            {editable ? <TickSvg style={style.tickSvg} /> : <UserEditSvg style={style.tickSvg} />}
          </Pressable>
        </View>
        <View style={style.formBlock}>
          <InputBlock text={'Имя:'} value={nameState} setValue={setNameState} editable={editable} />
          <InputBlock
            text={'Фамилия:'}
            value={surNameState}
            setValue={setSurNameState}
            editable={editable}
          />
          <RadioBlock
            list={genderState}
            title={'Пол:'}
            onChange={setGenderState}
            editable={editable}
          />
          <DateComponent
            title="Дата рождения:"
            titleStyle={{ color: '#fff' }}
            containerStyle={{ marginBottom: 14 }}
            editable={editable}
            dateValue={dateState}
            setDate={setDateState}
          />
          <InputBlock
            text={'Контактный тел.:'}
            placeholder={'Tел.'}
            value={phoneState}
            setValue={setPhoneState}
            editable={editable}
          />
          <InputBlock
            text={'E-mail:'}
            placeholder={'E-mail'}
            setValue={setEmailState}
            value={emailState}
            editable={editable}
          />
          <InputBlock
            text={'Vk:'}
            placeholder={'Ссылка на профиль'}
            value={vkUriState}
            setValue={setVkUriState}
            editable={editable}
          />
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
                      onPress={() => {
                        dispatch(setToken(null))
                        dispatch(setExpiredToken(null))
                        clearAsyncStorage()
                      }}
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
