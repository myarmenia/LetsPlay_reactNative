import React, { useEffect, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import DatePicker from 'react-native-date-picker'
import style from './style'
import DateSvg from '@/assets/svgs/dateSvg'
import moment from 'moment'
import TimeSvg from '@/assets/svgs/timeSvg'
import { RW } from '@/theme/utils'

const DateTime = props => {
  const { type, day, data, setData, gameDayDate, errorText, width } = props
  const currentDate = new Date()
  const minimumDate = currentDate.setDate(currentDate.getDate() + 1)
  const [date, setDate] = useState('ДД/ММ/ГГГГ')
  const [open, setOpen] = useState(false)
  const lastDate =
    new Date(gameDayDate).setDate(new Date(gameDayDate).getDate() - 1) || new Date('2099-12-31')
  const handleConfirm = date => {
    setOpen(false)
    setDate(date)
    if (day === 'gameDay' && type === 'date') {
      setData({ ...data, gameDayDate: date })
    } else if (day === 'gameDay' && type === 'time') {
      setData({ ...data, gameDayTime: date })
    }
    if (day === 'lastDay' && type === 'date') {
      setData({ ...data, lastDayDate: date })
    } else if (day === 'lastDay' && type === 'time') {
      setData({ ...data, lastDayTime: date })
    }
  }
  useEffect(() => {
    if (type === 'time' && day === 'gameDay') {
      setData({ ...data, gameDayTime: new Date() })
    } else if (type === 'time' && day === 'lastDay') {
      setData({ ...data, lastDayTime: new Date() })
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
        {type === 'date' ? <DateSvg style={style.dateSvg} /> : <TimeSvg style={style.dateSvg} />}
        <Text style={style.dateButtonText}>
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
        confirmText={'ПОДТВЕРЖДАТЬ'}
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
