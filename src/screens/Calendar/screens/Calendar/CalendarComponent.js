import { StyleSheet, Text, FlatList, Image, View } from 'react-native'
import React from 'react'
import { LocaleConfig, Calendar } from 'react-native-calendars'
import { GamesData } from '@/components/gamesData/GamesData'

const CalendarComponent = () => {
  LocaleConfig.locales['fr'] = {
    monthNames: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    monthNamesShort: [
      'Jan.',
      'Feb.',
      'March',
      'April',
      'May',
      'June',
      'Jule.',
      'Aug',
      'Sep.',
      'Oct.',
      'Nov.',
      'Dec.',
    ],
    dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    dayNamesShort: ['Sun.', 'Mon.', 'Tue.', 'Wed.', 'Thurs.', 'Fri.', 'Sat.'],
    today: "Aujourd'hui",
  }
  LocaleConfig.defaultLocale = 'fr'
  return (
    <View>
      <View>
        <Calendar
          theme={{
            calendarBackground: '#142A5C',
            dayTextColor: '#fff',
            arrowColor: '#7DCE8A',
            selectedDayBackgroundColor: '#7DCE8A',
          }}
          headerStyle={{ backgroundColor: '#142A5C' }}
          markedDates={{
            '2012-05-16': { selected: true, marked: true, selectedColor: 'blue' },
            '2012-05-17': { marked: true, backgroundColor: 'red' },
            '2012-05-18': { marked: true, dotColor: '#657AC5', activeOpacity: 0 },
            '2012-05-19': { disabled: true, disableTouchEvent: true },
          }}
        />
      </View>

      <View style={{ marginTop: 25 }}>
        <FlatList
          data={GamesData}
          key={'#'}
          keyExtractor={(item) => '#' + item.key}
          // contentContainerStyle={styles.list}
          renderItem={({ item }) => (
            <View>
              <Text style={{ color: '#657AC5', marginBottom: -15, fontSize: 18 }}>{item.date}</Text>
              <View style={styles.main}>
                <View style={{ flex: 2 }}>
                  <Image source={item.img} />
                </View>
                <View style={{ flex: 9 }}>
                  <Text style={styles.text}>{item.title}</Text>
                </View>
                <View style={{ flex: 2 }}>
                  <Text style={styles.hour}>{item.hour}</Text>
                </View>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  )
}
// RW(100),
export default CalendarComponent

const styles = StyleSheet.create({
  list: {
    backgroundColor: '#142A5C',
  },
  main: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginHorizontal: 0,
    flex: 13,
    backgroundColor: '#7DCE8A',
    margin: 20,
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
})
