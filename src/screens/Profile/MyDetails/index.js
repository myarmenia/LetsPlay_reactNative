import React from 'react'
import ScreenMask from '@/components/wrappers/screen'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import style from './style'
import image from '@/assets/imgs/userImage.png'
import TickSvg from '@/assets/svgs/tickSvg'
import InputBlock from '@/screens/Profile/MyDetails/inputBlock'
import RadioBlock from '@/screens/Profile/MyDetails/radioBlock'
import DateBlock from '@/screens/Profile/MyDetails/DateBlock'
import UserEditSvg from "@/assets/svgs/userEdit";

function Index(props) {
  const { navigation } = props
  return (
    <ScreenMask>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={style.container}>
        <Text style={style.title}>Мои данные</Text>
        <View style={style.imgBlock}>
          <View style={style.imageBlock}>
            <Image style={style.image} source={image} />
          </View>
          <TickSvg style={style.tickSvg} />
        </View>
        <View style={style.formBlock}>
          <InputBlock text={'Имя:'} placeholder={'Имя'} />
          <InputBlock text={'Фамилия:'} placeholder={'Фамилия'} />
          <RadioBlock
            list={[
              { id: 1, text: 'М', checked: true },
              { id: 2, text: 'Ж', checked: false },
            ]}
            title={'Пол:'}
          />
          <DateBlock />
          <InputBlock text={'Контактный тел.:'} placeholder={'Tел.'} />
          <InputBlock text={'E-mail:'} placeholder={'E-mail'} />
          <InputBlock text={'Vk:'} placeholder={'Ссылка на профиль'} />
          <TouchableOpacity onPress={() => navigation.navigate('Home')} style={style.logOut}>
            <Text style={style.logOutText}>Выход из аккаунта</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ScreenMask>
  )
}

export default Index
