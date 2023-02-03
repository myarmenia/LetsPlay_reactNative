import React, { useEffect, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import DatePicker from 'react-native-date-picker'
import style from './style'
import DateSvg from '@/assets/svgs/dateSvg'
import moment from 'moment'
import TimeSvg from '@/assets/svgs/timeSvg'
import { RW } from '@/theme/utils'
import { useDispatch } from 'react-redux'
import { setEndDate, setStart_date } from '@/store/Slices/GameCreatingSlice'

const DateTime = props => {
  const { type, day, gameDayDate, errorText, width } = props
  const [date, setDate] = useState('ДД/ММ/ГГГГ')
  const [open, setOpen] = useState(false)

  // {
  //   start_date: new Date().toLocaleDateString(),
  //   number_of_players_from: 0,
  //   number_of_players_to: 0,
  //   age_restrictions_from: 0,
  //   age_restrictions_to: 0,
  //   players_gender: '',
  //   latitude: 0,
  //   longitude: 0,
  //   end_date: new Date().toLocaleDateString(),
  //   organizer_in_the_game: true,
  //   ticket_price: 0,
  //   game: '',
  // },
  const currentDate = new Date()
  const minimumDate = currentDate.setDate(currentDate.getDate() + 1)
  const dispatch = useDispatch()
  const lastDate = '2099-12-31'
  const handleConfirm = date => {
    setOpen(false)
    setDate(date)
    if (day === 'gameDay' && type === 'date') {
      dispatch(setStart_date(date))
    } else if (day === 'gameDay' && type === 'time') {
      dispatch(setStart_date(date))
    }
    if (day === 'lastDay' && type === 'date') {
      dispatch(setStart_date(date))
    } else if (day === 'lastDay' && type === 'time') {
      dispatch(setEndDate(date))
    }
  }
  useEffect(() => {
    if (type === 'time' && day === 'gameDay') {
      dispatch(setStart_date(new Date().toLocaleDateString()))
    } else if (type === 'time' && day === 'lastDay') {
      dispatch(setStart_date(new Date().toLocaleDateString()))
    }
  }, [])
  return (
    <View style={{ flexDirection: 'column' }}>
      <TouchableOpacity
        style={
          type === 'time'
            ? style.timeButton
            : [
                style.dateButton,
                width
                  ? { flexDirection: 'row-reverse', width: RW(width), justifyContent: 'center' }
                  : null,
              ]
        }
        onPress={() => {
          setOpen(true)
        }}
      >
        {type === 'date' ? (
          <DateSvg style={width ? { ...style.dateSvg, marginLeft: RW(10) } : style.dateSvg} />
        ) : (
          <TimeSvg style={style.dateSvg} />
        )}
        <Text style={width ? { ...style.dateButtonText, marginLeft: RW(6) } : style.dateButtonText}>
          {type === 'date'
            ? date === 'ДД/ММ/ГГГГ'
              ? date
              : moment(date).format('DD/MM/YY')
            : date === 'ДД/ММ/ГГГГ'
            ? moment(new Date(minimumDate)).format('HH:mm')
            : moment(date).format('HH:mm')}
        </Text>
      </TouchableOpacity>
      <DatePicker
        locale={'ru'}
        cancelText={'ОТМЕНИТЬ'}
        confirmText={'ПОДТВЕРДИТЬ'}
        title={'Выберите дату'}
        modal
        minimumDate={
          type === 'date' && day
            ? day === 'gameDay'
              ? new Date(minimumDate)
              : new Date()
            : new Date(1900, 1, 1)
        }
        maximumDate={type === 'date' ? new Date(lastDate) : new Date(2099, 31, 12)}
        mode={type === 'date' ? 'date' : 'time'}
        open={open}
        date={
          date === 'ДД/ММ/ГГГГ'
            ? new Date(minimumDate)
            : type === 'date'
            ? date
            : new Date(minimumDate)
        }
        onConfirm={date => {
          handleConfirm(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
    </View>
  )
}
export default DateTime
