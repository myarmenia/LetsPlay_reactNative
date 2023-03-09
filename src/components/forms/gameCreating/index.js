import React, { useState } from 'react'
import { ScrollView, View } from 'react-native'
import style from './style'
import ScreenMask from '@/components/wrappers/screen'
import FirstBlock from '@/components/forms/gameCreating/firstBlock'
import SecondBlock from '@/components/forms/gameCreating/secondBlock'
import { RH, RW } from '@/theme/utils'
import ThirdBlock from '@/components/forms/gameCreating/thirdBlock'
import Map from '@/components/inputs/map'
import Count from '@/components/inputs/count'
import Button from '@/assets/imgs/Button'

const GameCreating = () => {
  const [flag, setFlag] = useState(true)
  return (
    <ScreenMask>
      <ScrollView showsVerticalScrollIndicator={false}>
        <FirstBlock margin={RH(29)} title={'Дата и время начала игры'} />
        <SecondBlock title={'Количество игроков'} />
        <SecondBlock title={'Возрастные ограничения'} />
        <ThirdBlock
          data={[
            [1, 'М'],
            [2, 'Ж'],
            [3, 'М/Ж'],
          ]}
          title={'Половой признак игрока'}
        />
        <Map placeholder={'Адрес проведения игры'} />
        <FirstBlock title={'Дата и время окончания поиска игроков'} />
        <ThirdBlock
          data={[
            [1, 'Участвует'],
            [2, 'Не участвует'],
          ]}
          title={'Половой признак игрока'}
        />
        <ThirdBlock
          type={'priceView'}
          setFlag={setFlag}
          data={[
            [1, 'Бесплатно'],
            [2, 'Платно'],
          ]}
          title={'Стоимость входного билета на игру'}
        />
        {flag ? (
          <View style={style.price}>
            <Count margin={RW(18)} width={RW(210)} placeholder={'Сумма оплаты 200р.'} />
          </View>
        ) : null}
        <View style={flag ? { ...style.submitBlock } : { ...style.submitBlock, marginTop: 20 }}>
          <Button label={'Готово'} />
        </View>
      </ScrollView>
    </ScreenMask>
  )
}
export default GameCreating
