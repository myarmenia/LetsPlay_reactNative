import { useState, useEffect } from 'react'

import FilterSvg from '@/assets/svgs/FilterSvg'
import Row from '@/components/wrappers/row'
import { ICON } from '@/theme/colors'
import { BACKGROUND } from '@/theme/colors'
import { RH, RW, font } from '@/theme/utils'
import * as React from 'react'
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import ArrowSvg from '../assets/ArrowSvg'
import CircleSvg from '../assets/CircleSvg'
import { getCalendarGames, clearCalendarGames } from '@/store/Slices/AppSlice'

import CalendarGameItem from './CalendarGameItem'
import TournamentItem from './TournamentItem'
import TriangleSvg from '../assets/TriangleSvg'
import CalendarDropDown from './CalendarDropDown'
import { useDispatch, useSelector } from 'react-redux'
import { months, months2, nDays, weekDays } from './data'
import { useNavigation } from '@react-navigation/native'
import { choosenTournir } from '@/store/Slices/TournamentReducer/TournamentSlice'
import moment from 'moment'




const Calendar = () => {

  const [activeDate, setActiveDate] = useState(new Date())
  const [choosenData, setChoosenData] = useState(null)
  const [showYaersDropDown, setShowYaersDropDown] = useState(false)
  const calendarGames = useSelector(({ app }) => app.calendarGames)
  console.log(calendarGames, 'games');


  const navigation = useNavigation()
  const dispatch = useDispatch()




  const onDatePress = (item) => {
    closeYearDropDown()
    const data = new Date(activeDate)
    data.setDate(item)
    setChoosenData(data)
  }


  const changeMonth = (n) => {
    const data = new Date(activeDate)
    data.setMonth(data.getMonth() + n)
    setActiveDate(data)
  }

  const changeYear = (year) => {
    const data = new Date(activeDate)
    data.setFullYear(year)
    setActiveDate(data)
    setShowYaersDropDown(false)
  }



  const generateMatrix = () => {
    let matrix = []
    matrix[0] = weekDays
    let year = activeDate.getFullYear()
    let month = activeDate.getMonth()
    let firstDay = new Date(year, month, 0).getDay()
    let maxDays = nDays[month]

    if (month === 1) {
      // February
      if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        maxDays += 1
      }
    }

    var counter = 1
    for (let row = 1; row < 7; row++) {
      matrix[row] = []
      for (let col = 0; col < 7; col++) {
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

  const closeYearDropDown = () => {
    setShowYaersDropDown(false)
  }

  let matrix = generateMatrix()
  let rows = []
  rows = matrix.map((row, rowIndex) => {
    let rowItems = row.map((item, colIndex) => {
      const currentDay =
        item == activeDate?.getDate() &&
        new Date().getMonth() === activeDate.getMonth() &&
        new Date().getFullYear() === activeDate.getFullYear()
      return (
        <Pressable
          key={colIndex}
          onPress={() => onDatePress(item)}
          style={{
            height: RH(40),
            minWidth: RW(20),
            justifyContent: 'center',
            alignItems: 'center',
            // paddingBottom: rowIndex == 0 ? 0 : RH(20),
          }}
        >
          <View
            style={{
              position: 'absolute',
              top: (RH(40) - 25) / 2,
              bottom: (RH(40) - 25) / 2,
            }}
          >
            {(item == choosenData?.getDate() &&
              choosenData?.getMonth() === activeDate?.getMonth() &&
              activeDate?.getFullYear() === choosenData?.getFullYear()) ? <CircleSvg /> : null}
          </View>
          <Text
            style={{
              textAlign: 'center',
              ...font('regular', 15, rowIndex == 0 ? ICON : currentDay ? ICON : '#fff', 25),
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

  useEffect(() => {
    choosenData && dispatch(getCalendarGames({ date: moment(choosenData).format('YYYY-MM-DD') }))
  }, [choosenData])


  useEffect(() => {
    return () => {
      dispatch(clearCalendarGames())
    }
  }, [])

  console.log(activeDate.getMonth(), 'months[activeDate.getMonth()]');
  console.log(moment(calendarGames[0]?.start_date)?.month())



  return (
    <Pressable onPress={closeYearDropDown}>
      <ScrollView style={{ paddingTop: RH(10), }}>
        {showYaersDropDown ? (
          <CalendarDropDown
            setState={(e) => { changeYear(e) }}
            activeDate={activeDate.getFullYear()}
          />
        ) : null}
        <View style={styles.container}>
          <View style={styles.header}>
            <Row wrapper={styles.headerRow}>
              <Text style={styles.headerYaer}>{activeDate.getFullYear()}</Text>
              <Pressable
                style={styles.settings}
                onPress={() => {
                  closeYearDropDown()
                  navigation.navigate('CalendarSettings')
                }}
              >
                <Text style={styles.settingsText}>Настройки</Text>
                <FilterSvg />
              </Pressable>
            </Row>
            <Row wrapper={styles.headerRow}>
              <Row style={styles.headerMonth}>
                <Pressable style={styles.headerMonthArrow} onPress={() => {
                  closeYearDropDown()
                  changeMonth(-1)
                }}>
                  <ArrowSvg />
                </Pressable>
                <Text style={styles.headerMonthText}>
                  {months[activeDate.getMonth()]}
                </Text>
                <Pressable
                  style={[
                    styles.headerMonthArrow,
                    { transform: [{ rotate: '180deg' }], marginLeft: RW(20), marginRight: 0 },
                  ]}
                  onPress={() => {
                    closeYearDropDown()
                    changeMonth(+1)
                  }}
                >
                  <ArrowSvg />
                </Pressable>
              </Row>
              <View>
                <Pressable
                  style={[styles.settings]}
                  onPress={() => {
                    setShowYaersDropDown(!showYaersDropDown)
                  }}
                >
                  <Text style={[styles.settingsText, { width: RW(35) }]}>Год</Text>
                  <TriangleSvg />
                </Pressable>
              </View>
            </Row>
          </View>
          <View style={{ paddingBottom: RH(20) }}>{rows}</View>
          <View style={styles.line} />

          <View style={styles.agentaContainer}>

            {calendarGames.length && moment(calendarGames[0]?.start_date)?.month() === activeDate.getMonth()
              ?
              calendarGames?.map((elm) => {

                return (
                  elm.type === 'tourneys' ?
                    <TournamentItem
                      key={elm?._id}
                      item={elm}
                      onPress={() => {
                        closeYearDropDown()
                        dispatch(choosenTournir(elm))
                        navigation.navigate('TournamentNavigator', {
                          screen: 'JoinTournament',
                          params: { fromCalendar: true }
                        })
                        // navigation.navigate('JoinTournament', { tourney: elm })
                      }}
                    />
                    :
                    <CalendarGameItem
                      key={elm?._id}
                      img={elm?.game?.img}
                      name={elm?.game?.name}
                      startDate={elm?.start_date}
                      onPress={() => {
                        closeYearDropDown()
                        navigation.navigate('CalendarGameScreen', { game: elm })
                      }}
                    />
                )

              }) : null}
          </View>
        </View>
      </ScrollView>
    </Pressable>
  )
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

  settingsText: {
    ...font('bold', 14, ICON, 17),
    marginRight: RW(5),
  },
  line: {
    borderColor: ICON,
    width: '100%',
    borderWidth: 1,
    zIndex: -12,
    // top: 70,
  },
  agentaContainer: {
    paddingVertical: RH(20),
    // borderWidth: 1,
    // borderColor: 'aqua'

  },
})

export default Calendar
