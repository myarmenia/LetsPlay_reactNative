import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Pressable, Text, TouchableOpacity, View } from 'react-native'
// import DatePicker from 'react-native-date-picker'
import DateTimePicker from '@react-native-community/datetimepicker'
import RNDateTimePicker from '@react-native-community/datetimepicker'
import style from './style'
import DateSvg from '@/assets/svgs/dateSvg'
import moment from 'moment'
import TimeSvg from '@/assets/svgs/timeSvg'
import { RW } from '@/theme/utils'
import { useDispatch } from 'react-redux'
import { setEndDate, setStart_date } from '@/store/Slices/GameCreatingSlice'
import { BACKGROUND } from '@/theme/colors'

const DateTime = ({ type, errorText, width }) => {
  //states
  const [date, setDate] = useState(new Date().toLocaleDateString())
  const [time, setTime] = useState(new Date().toLocaleTimeString().slice(0, -3))
  //show date pickers
  const [showDate, setShowDate] = useState(false)
  const [showTime, setShowTime] = useState(false)

  return (
    <View style={type === 'date' ? style.dateButton : [style.dateButton, { width: RW(140) }]}>
      {type === 'date' ? (
        <Pressable
          style={style.dateButtonText}
          onPress={() => {
            setShowDate(true), console.log(showDate)
          }}
        >
          <DateSvg style={width ? { ...style.dateSvg, marginLeft: RW(10) } : style.dateSvg} />
          <Text style={style.dateText}>{date}</Text>
          {showDate && (
            <DateTimePicker
              locale={'ru'}
              cancelText={'ОТМЕНИТЬ'}
              confirmText={'ПОДТВЕРДИТЬ'}
              title={'Выберите дату'}
              display={'default'}
              modal
              // minimumDate={'2021, 01, 01'}
              // maximumDate={'2099, 01, 01'}
              mode={'date'}
              open={showDate}
              value={new Date()}
              onChange={(_, val) => {
                setDate(val.toLocaleDateString()), setShowDate(false)
              }}
            />
          )}
        </Pressable>
      ) : (
        <Pressable style={style.dateButtonText} onPress={() => setShowTime(true)}>
          <TimeSvg style={style.dateSvg} />
          <Text style={style.dateText}>{time}</Text>
          {showTime && (
            <DateTimePicker
              locale={'ru'}
              cancelText={'ОТМЕНИТЬ'}
              confirmText={'ПОДТВЕРДИТЬ'}
              title={'Выберите дату'}
              display={'default'}
              // minimumDate={'2021, 01, 01'}
              // maximumDate={'2099, 01, 01'}
              mode={'time'}
              open={showTime}
              value={new Date()}
              onChange={(_, val) => {
                console.log(val)
                setTime(val.toLocaleTimeString().slice(0, -3)), setShowTime(false)
              }}
            />
          )}
        </Pressable>
      )}
    </View>
    // <View style={{ flexDirection: 'column' }}>
    //   <TouchableOpacity
    //     style={
    //       type === 'time'
    //         ? style.timeButton
    //         : [
    //             style.dateButton,
    //             width
    //               ? { flexDirection: 'row-reverse', width: RW(width), justifyContent: 'center' }
    //               : null,
    //           ]
    //     }
    //     onPress={() => {
    //       type === 'date' ? setOpen(!open) : setOpenTime(!openTime)
    //     }}
    //   >
    //     {type === 'date' ? (
    //       <DateSvg style={width ? { ...style.dateSvg, marginLeft: RW(10) } : style.dateSvg} />
    //     ) : (
    //       <TimeSvg style={style.dateSvg} />
    //     )}
    //     <Text style={width ? { ...style.dateButtonText, marginLeft: RW(6) } : style.dateButtonText}>
    //       {type == 'date' ? date : time}
    //       {/*  : moment(date).format('HH:mm') */}
    //     </Text>
    //   </TouchableOpacity>
    //   {open && (
    //     <RNDateTimePicker
    //       locale={'ru'}
    //       cancelText={'ОТМЕНИТЬ'}
    //       confirmText={'ПОДТВЕРДИТЬ'}
    //       title={'Выберите дату'}
    //       display={'default'}
    //       modal
    //       // minimumDate={'2021, 01, 01'}
    //       // maximumDate={'2099, 01, 01'}
    //       mode={'date'}
    //       open={open}
    //       value={new Date()}
    //       onChange={(e, date) => {
    //         handleConfirm('date', date.toLocaleDateString())
    //       }}
    //       // onCancel={() => {
    //       //   setOpen(!open)
    //       // }}
    //     />
    //   )}
    //   <RNDateTimePicker
    //     display="clock"
    //     locale={'ru'}
    //     cancelText={'ОТМЕНИТЬ'}
    //     confirmText={'ПОДТВЕРДИТЬ'}
    //     title={'Выберите дату'}
    //     // minimumDate={type === 'date' && day ? (day === 'gameDay' ? '' : '') : new Date()}
    //     // maximumDate={'2099, 01, 01'}
    //     mode={'time'}
    //     open={openTime}
    //     value={new Date()}
    //     onChange={(e, date) => {
    //       handleConfirm('time', date)
    //     }}
    //     // onCancel={() => {
    //     //   setOpen(!open)
    //     // }}
    //   />
    // </View>
  )
}
export default DateTime
