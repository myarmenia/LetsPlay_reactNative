import FilterSvg from '@/assets/svgs/FilterSvg'
import Row from '@/components/wrappers/row'
import ScreenMask from '@/components/wrappers/screen'
import { ICON } from '@/theme/colors'
import { BACKGROUND } from '@/theme/colors'
import { RH, RW, font } from '@/theme/utils'
import * as React from 'react'
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import ArrowSvg from '../assets/ArrowSvg'
import CircleSvg from '../assets/CircleSvg'
import { getCalendarGames } from '@/store/Slices/AppSlice'
import CalendarGameItem from './CalendarGameItem'
import TriangleSvg from '../assets/TriangleSvg'

class Calendar extends React.Component {
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
        if (this.state.choosedDate) {
          this.state.choosedDate.setDate(item)
        } else {
          this.state.choosedDate = new Date()
          this.state.choosedDate.setDate(item)
        }
        const dateTo = new Date()
        dateTo.setDate(this.state.choosedDate.getDate() + 7)

        this.props.dispatch(
          getCalendarGames({
            date_from: this.state.choosedDate,
            date_to: dateTo,
          }),
        )
        // this.state.choosedDate

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
    choosedDate: null,
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
          item == this.state.activeDate?.getDate() &&
          new Date().getMonth() === this.state.activeDate.getMonth() &&
          new Date().getFullYear() === this.state.activeDate.getFullYear()
        return (
          <Pressable
            key={colIndex}
            onPress={() => this._onPress(item)}
            style={{
              height: RH(30),
              minWidth: RW(20),
              justifyContent: 'center',
              alignItems: 'center',

              paddingBottom: rowIndex == 0 ? 0 : RH(15),
            }}
          >
            <View style={{ position: 'absolute', top: 0, bottom: 0 }}>
              {item == this.state.choosedDate?.getDate() ? <CircleSvg /> : null}
            </View>
            <Text
              style={{
                textAlign: 'center',
                bottom: rowIndex == 0 ? 0 : -RH(4.5),
                color: rowIndex == 0 ? ICON : currentDay ? ICON : '#fff',
              }}
            >
              {item != -1 ? item : ''}
            </Text>
          </Pressable>
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
                paddingVertical: RH(10),
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
        if (row.every((item) => item == -1)) {
          return null
        }
        return (
          <View
            key={rowIndex}
            style={{
              flex: 1,
              flexDirection: 'row',
              paddingTop: rowIndex == 1 ? RH(15) : RH(20),
              justifyContent: 'space-around',
              alignItems: 'center',
            }}
          >
            {rowItems}
          </View>
        )
      }
    })
    const showYears = [
      this.state.activeDate.getFullYear() - 1,
      this.state.activeDate.getFullYear(),
      this.state.activeDate.getFullYear() + 1,
      this.state.activeDate.getFullYear() + 2,
    ]

    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <Row wrapper={styles.headerRow}>
              <Text style={styles.headerYaer}>{this.state.activeDate.getFullYear()}</Text>
              <Pressable
                style={styles.settings}
                onPress={() => this.props.navigation.navigate('CalendarSettings')}
              >
                <Text style={styles.settingsText}>Настройки</Text>
                <FilterSvg />
              </Pressable>
            </Row>
            <Row wrapper={styles.headerRow}>
              <Row style={styles.headerMonth}>
                <Pressable style={styles.headerMonthArrow} onPress={() => this.changeMonth(-1)}>
                  <ArrowSvg />
                </Pressable>
                <Text style={styles.headerMonthText}>
                  {this.months[this.state.activeDate.getMonth()]}
                </Text>
                <Pressable
                  style={[
                    styles.headerMonthArrow,
                    { transform: [{ rotate: '180deg' }], marginLeft: RW(20), marginRight: 0 },
                  ]}
                  onPress={() => this.changeMonth(+1)}
                >
                  <ArrowSvg />
                </Pressable>
              </Row>
              <View>
                <Pressable
                  style={[styles.settings]}
                  onPress={() => this.props.navigation.navigate('CalendarSettings')}
                >
                  <Text style={[styles.settingsText, { marginRight: RW(20) }]}>Год</Text>
                  <TriangleSvg />
                </Pressable>

                <View style={styles.yearsDropDown}>
                  {showYears.map((year) => {
                    return (
                      <Pressable
                        onPress={() => {
                          this.setState(() => {
                            this.state.activeDate.setFullYear(year)
                            return this.state
                          })
                        }}
                        style={{ marginVertical: RH(4) }}
                      >
                        <Text
                          style={[
                            styles.settingsText,
                            {
                              color: year == this.state.activeDate.getFullYear() ? '#8B99CA' : ICON,
                            },
                          ]}
                        >
                          {year}
                        </Text>
                      </Pressable>
                    )
                  })}
                </View>
              </View>
            </Row>
          </View>
          <View style={{ paddingBottom: RH(20) }}>{rows}</View>
          <View style={styles.line} />
          {this.props.calendarGames.length ? (
            <View style={styles.agentaContainer}>
              {this.props.calendarGames.map((item) => {
                return (
                  <CalendarGameItem
                    key={item?._id}
                    img={item?.game?.img}
                    name={item?.game?.name}
                    startDate={item?.start_date}
                  />
                )
              })}
            </View>
          ) : null}
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: BACKGROUND,
    marginHorizontal: RW(10),
    borderRadius: RW(20),
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
    paddingBottom: RH(22),
  },
  header: {
    marginVertical: RH(15),
  },
  headerRow: {
    justifyContent: 'space-between',
    paddingHorizontal: RW(20),
    alignItems: 'center',
    marginBottom: RH(5),
  },
  headerYaer: {
    ...font('bold', 32, ICON, 36),
  },
  headerMonth: {},
  headerMonthArrow: {
    marginRight: RW(20),
  },
  headerMonthText: {
    minWidth: RW(80),
    textAlign: 'center',
    ...font('bold', 20, ICON, 36),
  },
  settings: {
    backgroundColor: '#142A5C',
    borderRadius: RW(12),
    borderWidth: RW(1),
    borderColor: '#657AC5',
    paddingVertical: RW(5),
    paddingHorizontal: RW(10),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  yearsDropDown: {
    // position: 'absolute',
    // zIndex: 9999999999999,
    // backgroundColor: '#142A5C',
    backgroundColor: BACKGROUND,
    // backgroundColor: 'red',
    borderRadius: RW(12),
    borderWidth: RW(1),
    borderColor: '#657AC5',
    paddingVertical: RW(5),
    paddingHorizontal: RW(10),
    marginTop: RH(5),
    opacity: 1,
    justifyContent: 'center',
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
  agentaContainer: {
    paddingVertical: RH(20),
  },
})

export default Calendar
