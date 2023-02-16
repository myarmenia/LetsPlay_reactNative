import React, { useState } from 'react'
import ScreenMask from '@/components/wrappers/screen'
import { Image, ScrollView, Text, TouchableOpacity, View, Pressable } from 'react-native'
import style from './style'
import styles from '@/screens/GameCreating/style'
import InputBlock from '@/screens/Profile/MyDetails/inputBlock'
import RadioBlock from '@/screens/Profile/MyDetails/radioBlock'
import DateBlock from '@/screens/Profile/MyDetails/DateBlock'
import UserEditSvg from '@/assets/svgs/userEdit'
import Modal from '@/components/modal'
import { RW } from '@/theme/utils'
import Button from '@/assets/imgs/Button'
import DarkButton from '@/assets/imgs/DarkButton'
import { useDispatch, useSelector } from 'react-redux'
import CheckedSvg from './assets/CheckedSvg'
import { setName, setSurName } from '@/store/Slices/AuthSlice'

function Index(props) {
  const { navigation } = props
  const user = useSelector(({ auth }) => auth.user)
  const [isVisible, setIsVisible] = useState(false)
  const dispatch = useDispatch()
  const [editable, setEditable] = useState(false)
  const [name, setNameState] = useState(user.name)
  const [surName, setSurNameState] = useState(user.surName)
  const [gender, setGenderState] = useState(user.gender)

  return (
    <ScreenMask>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={style.container}>
        <Text style={style.title}>Мои данные</Text>
        <View style={style.imgBlock}>
          <View style={style.imageBlock}>
            <Image
              style={style.image}
              source={
                user.avatar
                  ? { uri: user.avatar }
                  : require('../../../assets/imgs/user/defualtUser.png')
              }
            />
          </View>
          <Pressable
            style={style.tickSvg}
            onPress={() => {
              if (editable) {
                dispatch(setName(name))
                dispatch(setSurName(surName))
              }
              setEditable(!editable)
            }}
          >
            {editable ? <CheckedSvg /> : <UserEditSvg />}
          </Pressable>
        </View>
        <View style={style.formBlock}>
          <InputBlock
            text={'Имя:'}
            placeholder={'Имя'}
            value={name}
            setValue={setNameState}
            editable={editable}
          />
          <InputBlock
            text={'Фамилия:'}
            placeholder={'Фамилия'}
            value={surName}
            setValue={setSurNameState}
            editable={editable}
          />
          <RadioBlock
            list={[
              { id: 1, text: 'М', checked: gender == 'male' },
              { id: 2, text: 'Ж', checked: gender == 'famale' },
            ]}
            title={'Пол:'}
          />
          <DateBlock />
          <InputBlock text={'Контактный тел.:'} placeholder={'Tел.'} editable={editable} />
          <InputBlock text={'E-mail:'} placeholder={'E-mail'} editable={editable} />
          <InputBlock text={'Vk:'} placeholder={'Ссылка на профиль'} editable={editable} />
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
