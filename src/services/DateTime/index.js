import React, { useState } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import DatePicker from 'react-native-date-picker'
import style from './style'
import DateSvg from '@/assets/svgs/dateSvg'
import moment from 'moment'
import TimeSvg from '@/assets/svgs/timeSvg'

const DateTime = (props) => {
  const { type } = props
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)

  return (
    <>
      <TouchableOpacity
        style={type === 'time' ? style.timeButton : style.dateButton}
        onPress={() => {
          setOpen(true)
        }}
      >
        {type === 'date' ? <DateSvg style={style.dateSvg} /> : <TimeSvg style={style.dateSvg} />}
        <Text style={style.dateButtonText}>
          {type === 'date' ? moment(date).format('L') : moment(date).format('HH:mm')}
        </Text>
      </TouchableOpacity>
      <DatePicker
        modal
        mode={type === 'date' ? 'date' : 'time'}
        open={open}
        date={date}
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
    </>
  )
}
export default DateTime
