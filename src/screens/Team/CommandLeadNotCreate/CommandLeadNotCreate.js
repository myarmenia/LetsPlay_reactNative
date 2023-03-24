import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import ScreenMask from '@/components/wrappers/screen'
import { BACKGROUND, ICON } from '@/theme/colors'
import { font, RH, RW } from '@/theme/utils'
import SearchSvg from '@/assets/svgs/searchSvg'
import RadioBlock from '@/components/RadioBlock'
import { useSelector } from 'react-redux'
import DateComponent from '@/components/DateComponent'
import SearchAddresses from '@/screens/Map/SearchAddresses'

const CommandLeadNotCreate = ({ route }) => {
  const [state, setState] = useState('')
  const games = useSelector(({ games }) => games.games)
  const game = games.find(elm => elm.id == route?.params?.id)
  const [formats, setFormats] = useState(
    game.formats.map((elm, i) => {
      return { id: i, text: elm, checked: false }
    }),
  )
  const [priceList, setPriceList] = useState([
    { id: 1, text: 'Бесплатно', checked: false },
    { id: 2, text: 'Платно', checked: false },
  ])
  return (
    <ScreenMask>
      <View style={styles.mainContainer}>
        <Text style={styles.searchTitle}>Название команды соперника</Text>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder={'Поиск'}
            placeholderTextColor={ICON}
            value={state}
            onChangeText={e => {
              setState(e)
            }}
          ></TextInput>
          <TouchableOpacity style={styles.searchIcon}>
            <SearchSvg />
          </TouchableOpacity>
        </View>
        {!!game?.formats?.length && (
          <RadioBlock
            list={formats}
            onChange={setFormats}
            title={'Формат игры'}
            titleStyle={{ color: ICON, left: '3%' }}
          />
        )}
        <View style={styles.dateBox}>
          <DateComponent showTime={true} title="Дата и время начала игры" />
        </View>
        <SearchAddresses size={380} />
        <RadioBlock
          title={'Стоимость входного билета в игру'}
          list={priceList}
          onChange={setPriceList}
          titleStyle={styles.searchTitle}
        />
      </View>
    </ScreenMask>
  )
}

export default CommandLeadNotCreate

const styles = StyleSheet.create({
  mainContainer: {
    flex: 0.67,
    justifyContent: 'space-evenly',
  },
  container: {
    backgroundColor: BACKGROUND,
    width: RW(380),
    height: RH(50),
    alignSelf: 'center',
    flexDirection: 'row',
    // top: RH(32),
    zIndex: 89,
    borderRadius: RW(10),
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    color: ICON,
    width: '80%',
    marginLeft: RW(20),
    fontSize: RW(16),
  },
  mapIcon: {
    left: '25%',
  },
  searchTitle: {
    ...font('regular', 16, ICON),
    left: RW(10),
    top: '2%',
  },
  dateBox: {
    width: RW(380),
    alignSelf: 'center',
  },
})
