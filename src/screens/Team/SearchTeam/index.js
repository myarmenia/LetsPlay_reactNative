import React, { useEffect, useMemo, useState } from 'react'
import { Image, ScrollView, Text, LogBox, View } from 'react-native'
import style from './style'
import { font, RH, RW } from '@/theme/utils'
import Map from '@/components/inputs/map'
import Button from '@/assets/imgs/Button'
import Price from '@/components/inputs/price'
import Modal from '@/components/modal'
import FirstBlock from '@/components/forms/firstBlock'
import SecondBlock from '@/components/forms/secondBlock'
import ThirdBlock from '@/components/forms/thirdBlock'
import ScreenMask from '@/components/wrappers/screen'
import DarkButton from '@/assets/imgs/DarkButton'

LogBox.ignoreLogs(['Non-serializable values were found in the navigation state'])

const GameCreating = ({ navigation, route }) => {
  console.log(route.params, 88888)

  const [gameParams, setGameParams] = useState({
    game: route.params,
    gameDayTime: undefined,
    lastDayTime: new Date(),
    addressValue: '',
    statusOrganizer: 'Весь состав команды',
    price: 'Бесплатно',
  })

  return (
    <ScreenMask>
      <View>
        <FirstBlock
          data={gameParams}
          setData={setGameParams}
          day={'gameDay'}
          margin={RH(29)}
          title={'Дата и время начала игры'}
        />
        <View style={{ marginTop: RH(20) }}>
          <Map data={gameParams} setData={setGameParams} placeholder={'Геолокация игры'} />
        </View>
        <ThirdBlock
          data={gameParams}
          setData={setGameParams}
          type={'price'}
          list={[
            [1, 'Бесплатно', true],
            [2, 'Платно', false],
          ]}
          title={'Стоимость входного билета в игру'}
        />
        <ThirdBlock
          data={gameParams}
          setData={setGameParams}
          type={'statusOrganizer'}
          list={[
            [1, 'Весь состав команды', true],
            [2, 'Выбрать игроков', false],
          ]}
          title={'Участие игроков'}
        />
      </View>
      <View style={{ marginTop: 'auto', marginLeft: 'auto', marginBottom: RH(20) }}>
        <Button
          onPress={() => navigation.navigate('SelectPlayers', gameParams)}
          size={{ width: RW(144), height: RH(40) }}
          label={'Далее>>'}
        />
      </View>
    </ScreenMask>
  )
}
export default GameCreating
