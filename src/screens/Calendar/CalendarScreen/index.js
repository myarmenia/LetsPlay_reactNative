import FilterSvg from '@/assets/svgs/FilterSvg'
import Row from '@/components/wrappers/row'
import ScreenMask from '@/components/wrappers/screen'
import { ICON } from '@/theme/colors'
import { BACKGROUND } from '@/theme/colors'
import { RH, RW, font } from '@/theme/utils'
import * as React from 'react'
import { Button, Pressable, StyleSheet, Text, View } from 'react-native'

class CalendarScreen extends React.Component {
  months = [
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
  ]

  _onPress = (item) => {
    this.setState(() => {
      if (!item.match && item != -1) {
        this.state.activeDate.setDate(item)
        return this.state
      }
    })
  }

  changeMonth = (n) => {
    this.setState(() => {
      this.state.activeDate.setMonth(this.state.activeDate.getMonth() + n)

      return this.state
    })
  }

  weekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']

  nDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

  state = {
    activeDate: new Date(),
  }

  generateMatrix() {
    var matrix = []
    matrix[0] = this.weekDays
    var year = this.state.activeDate.getFullYear()
    var month = this.state.activeDate.getMonth()
    var firstDay = new Date(year, month, 0).getDay()
    var maxDays = this.nDays[month]

    if (month == 1) {
      // February
      if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        maxDays += 1
      }
    }

    var counter = 1
    for (var row = 1; row < 7; row++) {
      matrix[row] = []
      for (var col = 0; col < 7; col++) {
        matrix[row][col] = -1
        if (row == 1 && col >= firstDay) {
          matrix[row][col] = counter++
        } else if (row > 1 && counter <= maxDays) {
          matrix[row][col] = counter++
        }
      }
    }

    return matrix
  }

  render() {
    var matrix = this.generateMatrix()
    var rows = []
    rows = matrix.map((row, rowIndex) => {
      var rowItems = row.map((item, colIndex) => {
        const currentDay =
          item == this.state.activeDate.getDate() &&
          new Date().getMonth() === this.state.activeDate.getMonth() &&
          new Date().getFullYear() === this.state.activeDate.getFullYear()
        return (
          <Text
            key={colIndex}
            style={{
              flex: 1,
              height: RH(18),
              textAlign: 'center',
              color: rowIndex == 0 ? ICON : currentDay ? ICON : '#fff',
            }}
            onPress={() => this._onPress(item)}
          >
            {item != -1 ? item : ''}
          </Text>
        )
      })

      if (rowIndex == 0) {
        return (
          <View key={rowIndex}>
            <View style={styles.line} />
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                paddingVertical: RH(20),
                justifyContent: 'space-around',
                alignItems: 'center',
              }}
            >
              {rowItems}
            </View>
            <View style={styles.line} />
          </View>
        )
      } else {
        return (
          <View
            key={rowIndex}
            style={{
              flex: 1,
              flexDirection: 'row',
              paddingVertical: RH(20),
              justifyContent: 'space-around',
              alignItems: 'center',
            }}
          >
            {rowItems}
          </View>
        )
      }
    })

    return (
      <ScreenMask>
        <View style={styles.container}>
          <Row wrapper={styles.headerRow}>
            <Text style={styles.headerTitle}>
              {this.months[this.state.activeDate.getMonth()]} &nbsp;
              {this.state.activeDate.getFullYear()}
            </Text>
            <Pressable
              style={styles.settings}
              onPress={() => this.props.navigation.navigate('CalendarSettings')}
            >
              <Text style={styles.settingsText}>Настройки</Text>
              <FilterSvg />
            </Pressable>
          </Row>
          {rows}

          <Button title="Previous" onPress={() => this.changeMonth(-1)} />

          <Button title="Next" onPress={() => this.changeMonth(+1)} />
        </View>
      </ScreenMask>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: BACKGROUND,
    marginHorizontal: RW(10),
    borderRadius: RW(20),
    paddingBottom: RH(10),
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
  },
  headerRow: {
    justifyContent: 'space-between',
    paddingHorizontal: RW(20),
    marginVertical: RH(15),
  },
  headerTitle: {
    ...font('bold', 18, ICON, 36),
  },
  settings: {
    backgroundColor: '#142A5C',
    borderRadius: 30,
    borderWidth: RW(1),
    borderColor: '#657AC5',
    paddingVertical: RW(5),
    paddingHorizontal: RW(7),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  settingsText: {
    ...font('bold', 14, ICON, 17),
    marginRight: RW(5),
  },
  line: {
    backgroundColor: ICON,
    width: '100%',
    height: 1,
  },
})

export default CalendarScreen
