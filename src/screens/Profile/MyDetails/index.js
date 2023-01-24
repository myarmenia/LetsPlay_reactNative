import React , {useState} from 'react'
import ScreenMask from '@/components/wrappers/screen'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import style from './style'
import styles from '@/screens/GameCreating/style'
import image from '@/assets/imgs/userImage.png'
import TickSvg from '@/assets/svgs/tickSvg'
import InputBlock from '@/screens/Profile/MyDetails/inputBlock'
import RadioBlock from '@/screens/Profile/MyDetails/radioBlock'
import DateBlock from '@/screens/Profile/MyDetails/DateBlock'
import UserEditSvg from "@/assets/svgs/userEdit";
import {Players} from "@/assets/TestData";
import Modal from "@/components/modal";
import {RW} from "@/theme/utils";
import Button from "@/assets/imgs/Button";
import DarkButton from "@/assets/imgs/DarkButton";
import EditSvg from "@/assets/svgs/editSvg";

function Index(props) {
    const { navigation } = props
    const [isVisible, setIsVisible] = useState(false)

    return (
    <ScreenMask>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={style.container}>
        <Text style={style.title}>Мои данные</Text>
        <View style={style.imgBlock}>
          <View style={style.imageBlock}>
            <Image style={style.image} source={{uri: Players[0].image}} />
          </View>
          <UserEditSvg style={style.tickSvg} />
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
          <TouchableOpacity onPress={() => setIsVisible(true)} style={style.logOut}>
            <Text style={style.logOutText}>Выход из аккаунта</Text>
          </TouchableOpacity>
          <View style={{ position: 'absolute' }}>
            <Modal
                modalVisible={isVisible}
                setIsVisible={setIsVisible}
                btnClose={false}
                item={<View style={styles.topBlock}>
                        <Text style={styles.text}>Вы точно хотите выйти из аккаунта?</Text>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', width: RW(220),}}>
                          <Button onPress={() => navigation.navigate('Home')} light={true} size={{ width: 100, height: 36 }} label={'Да'}/>
                          <DarkButton onPress={() => setIsVisible(false)} light={false} size={{ width: 100, height: 36 }} label={'Нет'}/>
                        </View>
                      </View>}
            />
          </View>
        </View>
      </ScrollView>
    </ScreenMask>
  )
}

export default Index
