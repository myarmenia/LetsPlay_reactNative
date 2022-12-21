import { Image, ScrollView, Text, View } from 'react-native'
import { font, RH, RW } from '@/theme/utils'
import ScreenMask from '@/components/wrappers/screen'
import Radio from '@/components/checkbox/radio'
import Count from '@/components/inputs/count'
import SecondBlock from '@/components/forms/secondBlock'
import { useState } from 'react'
import DateTime from '@/services/DateTime'
import MapSvg from '@/assets/svgs/mapSvg'
import LightButton from '@/assets/imgs/Button'
import Map from '@/components/inputs/map'
import { useNavigation } from '@react-navigation/native'

const Participate = (props) => {
  // const { navigation, game } = props
  const { game } = props
  const navigation = useNavigation()
  const [errorText, setErrorText] = useState(false)

  const initialState = {
    gameDayDate: undefined,
    gameDayTime: new Date(),
    playerCountFrom: '',
    playerCountTo: '',
    ageFrom: '',
    ageTo: '',
    gender: 'Игры из Ваших предпочтений',
    addressValue: 'qwert',
    lastDayDate: undefined,
    lastDayTime: new Date(),
    statusOrganizer: 'Участвует',
    price: 'Бесплатно',
    priceValue: '',
  }
  const [data, setData] = useState(initialState)

  const handleClick = () => {
    navigation.navigate('GameAdd')
    // if (
    //   !data.gameDayDate ||
    //   +data.playerCountFrom < 1 ||
    //   +data.playerCountFrom > +data.playerCountTo ||
    //   !data.playerCountFrom ||
    //   !data.playerCountTo ||
    //   +data.ageFrom < 1 ||
    //   +data.ageFrom > +data.ageTo ||
    //   !data.ageFrom ||
    //   !data.ageTo ||
    //   !data.lastDayDate ||
    //   data.lastDayDate >= data.gameDayDate ||
    //   (!data.priceValue && flag)
    // )
    // setErrorText(true)
  }

  return (
    <ScreenMask>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ marginHorizontal: RW(20), marginTop: RH(20) }}>
          <Text style={{ color: '#657AC5', fontSize: RW(16), marginBottom: RH(13) }}>Игра</Text>
          <View style={{ marginHorizontal: RW(10) }}>
            <Radio
              list={[
                { id: 1, text: 'Игры из Ваших предпочтений', checked: true },
                { id: 2, text: 'Игры из подписок', checked: false },
                { id: 3, text: 'Все игры', checked: false },
                { id: 4, text: 'Выбрать игру', checked: false },
              ]}
            />
          </View>

          <Text style={{ color: '#657AC5', fontSize: RW(16), marginBottom: RH(20) }}>
            Формат турнира
          </Text>
          <View style={{ marginHorizontal: RW(10) }}>
            <Radio
              list={[
                { id: 1, text: 'Индивидуальный', checked: true },
                { id: 2, text: 'Командный', checked: false },
              ]}
            /> 
          </View>

          <SecondBlock type={'player'} data={data} setData={setData} title={'Время'} />
          {errorText &&
          (+data.playerCountFrom < 1 || +data.playerCountFrom > +data.playerCountTo) ? (
            !data.playerCountFrom || !data.playerCountTo ? (
              <Text style={style.errorText}>Обязательное поле для заполнения</Text>
            ) : (
              <Text style={style.errorText}>Введите корректную дату</Text>
            )
          ) : null}
          <View style={{ marginTop: RH(30), marginBottom: RH(30) }}>
            <Map placeholder={'Геолокация игры'} />
          </View>

          <Text style={{ color: '#657AC5', fontSize: RW(16), marginBottom: RH(20) }}>
            Стоимость входного билета в игру
          </Text>
          <View style={{ marginHorizontal: RW(10) }}>
            <Radio
              list={[
                { id: 1, text: 'Бесплатно', checked: true },
                { id: 2, text: 'Платно', checked: false },
              ]}
            />
          </View>
          <View style={{ alignItems: 'flex-end', marginTop: 50, marginBottom: 100 }}>
            <LightButton onPress={handleClick} label={'Готово'} size={{ width: 166, height: 36 }} />
          </View>
        </View>
      </ScrollView>
    </ScreenMask>
  )
}
export default Participate
