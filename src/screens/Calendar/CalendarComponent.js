import {
  StyleSheet,
  Text,
  FlatList,
  Image,
  View,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native'
import React from 'react'
import { LocaleConfig, Calendar } from 'react-native-calendars'
import { GamesData } from '@/components/gamesData/GamesData'
import LinearGradient from 'react-native-linear-gradient'
import SettingsSvg from '@/assets/svgs/SettingsSvg'
import OpenSvg from '@/assets/svgs/OpenSvg'
import LineSvg from '@/assets/svgs/LineSvg'
import { RH, RW } from '@/theme/utils'
import { useNavigation } from '@react-navigation/native'
import { ICON } from '@/theme/colors'

const CalendarComponent = () => {
  const navigation = useNavigation()
  LocaleConfig.locales['ru'] = {
    monthNames: [
      'Январь',
      'Февраль',
      'Март',
      'Апрель',
      'Май',
      'Июнь',
      'Июль',
      'Август',
      'Сентябрь',
      'Октябрь',
      'Ноябрь',
      'Декабрь',
    ],
    monthNamesShort: [
      'Янв',
      'Фев',
      'Мар',
      'Апр',
      'Май',
      'Июн',
      'Июл',
      'Авг',
      'Сен',
      'Окт',
      'Ноя',
      'Дек',
    ],
    dayNames: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    // dayNamesShort: ['Пн' , 'Вт', 'Ср', 'Чт', 'Пт', 'Сб' , 'Вс'],
    dayNamesShort: [''],
    today: "Aujourd'hui",
  }
  LocaleConfig.defaultLocale = 'ru'
  const header = (
    <View>
      <View style={styles.header}>
        <View style={styles.parent}>
          <Text style={{ color: '#657AC5' }}>Ноябрь 2022</Text>
          <TouchableOpacity
            style={styles.opacity}
            onPress={() => {
              navigation.navigate('SettingsScreen')
            }}
          >
            <Text style={{ marginRight: 5, color: '#657AC5' }}>Настройки</Text>
            <SettingsSvg />
          </TouchableOpacity>
        </View>

        <View style={styles.today}>
          <Text style={{ color: '#657AC5' }}>Сегодня</Text>
          <TouchableOpacity style={styles.month}>
            <Text style={{ marginRight: 5, color: '#657AC5' }}>Месяц</Text>
            <OpenSvg />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          position: 'absolute',
          top: RH(110),
          zIndex: 118,
        }}
      >
        <LineSvg />
      </View>
      <View style={styles.week}>
        <Text style={styles.days}>Пн</Text>
        <Text style={styles.days}>Вт</Text>
        <Text style={styles.days}>Ср</Text>
        <Text style={styles.days}>Чт</Text>
        <Text style={styles.days}>Пт</Text>
        <Text style={styles.days}>Сб</Text>
        <Text style={styles.days}>Вс</Text>
      </View>
      <View
        style={{
          position: 'absolute',
          top: RH(175),
          zIndex: 99,
        }}
      >
        <LineSvg />
      </View>
      <Calendar
        theme={{
          calendarBackground: '#142A5C',
          dayTextColor: '#fff',
          arrowColor: '#7DCE8A',
          selectedDayBackgroundColor: '#7DCE8A',
          monthTextColor: '#142A5C',
          agendaDayNumColor: ICON,
        }}
        headerStyle={{ backgroundColor: '#142A5C' }}
        hideArrows={true}
        day
        // markedDates={{
        //   '2012-05-16': {selected: true, marked: true, selectedColor: 'blue'},
        //   '2012-05-17': {marked: true, backgroundColor: 'red'},
        //   '2012-05-18': {marked: true, dotColor: '#657AC5', activeOpacity: 0},
        //   '2012-05-19': {disabled: true, disableTouchEvent: true},
        // }}
      />
    </View>
  )
  return (
    <View>
      <View style={{ marginTop: 25 }}>
        {/* <FlatList
          showsVerticalScrollIndicator={false}
          data={GamesData}
          key={'#'}
          keyExtractor={(item) => '#' + item.key}
          ListHeaderComponent={() => header}
          // contentContainerStyle={styles.list}
          renderItem={({ item }) => (
            <View>
              <Text style={{ color: '#657AC5', marginBottom: -15, fontSize: 18 }}>{item.date}</Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('TournamentScreen')
                }}
              >
                <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  colors={['#7DCE8A', '#4D7CFE']}
                  style={styles.main}
                >
                  <View style={{ flex: 2 }}>
                    <Image style={{ width: 27, height: 27 }} source={item.img} resizeMode="cover" />
                  </View>
                  <View style={{ flex: 9 }}>
                    <Text style={styles.text}>{item.title}</Text>
                  </View>
                  <View style={{ flex: 2 }}>
                    <Text style={styles.hour}>{item.hour}</Text>
                  </View>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          )}
        /> */}
        <ScrollView>
          {header}
          {GamesData.map((item) => (
            <View>
              <Text style={{ color: '#657AC5', marginBottom: -15, fontSize: 18 }}>{item.date}</Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('TournamentScreen')
                }}
              >
                <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  colors={['#7DCE8A', '#4D7CFE']}
                  style={styles.main}
                >
                  <View style={{ flex: 2 }}>
                    <Image style={{ width: 27, height: 27 }} source={item.img} resizeMode="cover" />
                  </View>
                  <View style={{ flex: 9 }}>
                    <Text style={styles.text}>{item.title}</Text>
                  </View>
                  <View style={{ flex: 2 }}>
                    <Text style={styles.hour}>{item.hour}</Text>
                  </View>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  )
}
// RW(100),
export default CalendarComponent

const styles = StyleSheet.create({
  days: {
    color: '#657AC5',
  },
  header: {
    // position:'absolute',
    borderTopStartRadius: RW(20),
    borderTopEndRadius: RW(20),
    width: '100%',
    // top:130,
    height: RH(100),
    backgroundColor: '#142A5C',
  },
  list: {
    backgroundColor: '#142A5C',
  },
  main: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: RW(15),
    marginHorizontal: 0,
    flex: 13,
    backgroundColor: '#7DCE8A',
    margin: RW(20),
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  text: {
    color: '#FFFFFF',
  },
  hour: {
    color: '#FFFFFF',
  },
  parent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: RW(20),
    marginTop: RH(20),
  },
  opacity: {
    borderRadius: RW(30),
    borderWidth: RW(1),
    borderColor: '#657AC5',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: RW(5),
  },
  today: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: RW(20),
    marginTop: RH(10),
  },
  month: {
    borderRadius: RW(30),
    borderWidth: RW(1),
    borderColor: '#657AC5',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: RW(5),
  },
  week: {
    width: '100%',
    height: RH(40),
    backgroundColor: '#142A5C',
    position: 'absolute',
    top: RH(125),
    zIndex: 99,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: RH(7),
  },
})
