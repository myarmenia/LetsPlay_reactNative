import React, { useState } from 'react'
import { Platform, Pressable, Text, View } from 'react-native'
import RNDateTimePicker, { DateTimePickerAndroid } from '@react-native-community/datetimepicker'
import style from './style'
import DateSvg from '@/assets/svgs/dateSvg'
import TimeSvg from '@/assets/svgs/timeSvg'
import { RW } from '@/theme/utils'
import { useDispatch, useSelector } from 'react-redux'
import { setEndDate, setStart_date } from '@/store/Slices/GameCreatingSlice'

const DateTime = ({ type, errorText, width, place }) => {
  //states
  const [date, setDate] = useState(new Date().toLocaleDateString())
  const [time, setTime] = useState(new Date().toLocaleTimeString().slice(0, -3))
  //show date pickers
  const [showDate, setShowDate] = useState(false)
  const [showTime, setShowTime] = useState(false)
  //redux
  const dispatch = useDispatch()
  const initialState = useSelector(state => state.game)
  return (
    <View style={type === 'date' ? style.dateButton : [style.dateButton, { width: RW(140) }]}>
      {type === 'date' ? (
        <>
          <Pressable
            style={style.dateButtonText}
            onPress={() => {
              Platform.OS == 'android'
                ? DateTimePickerAndroid.open({
                    textColor: 'black',
                    dataFormat: 'YYYY-MM-DD',
                    display: 'default',
                    mode: 'date',
                    value: new Date(),
                    onChange: (e, changedDate) => {
                      // console.log(
                      //   changedDate.toJSON().substring(0, changedDate.toJSON().indexOf('T')),
                      // )
                      dispatch(
                        place == 'onTop'
                          ? setStart_date(changedDate.toJSON().substring(0, 10))
                          : setEndDate(changedDate.toJSON().substring(0, 10)),
                      )
                      setDate(changedDate.toJSON().substring(0, 10))
                    },
                  })
                : null
            }}
          >
            <DateSvg style={width ? { ...style.dateSvg, marginLeft: RW(10) } : style.dateSvg} />
            <Text style={style.dateText}>{date}</Text>
          </Pressable>
          {showDate && (
            <RNDateTimePicker
              value={Platform.OS === 'ios' ? date : new Date()}
              mode="date"
              display="compact"
              onChange={(_, val) => {
                Platform.OS == 'ios' ? null : setShowDate(false)
                dispatch(
                  place == 'onTop'
                    ? setStart_date(Platform.OS === 'ios' ? val : val?.toLocaleDateString())
                    : setEndDate(Platform.OS === 'ios' ? val : val?.toLocaleDateString()),
                )
                setDate(Platform.OS === 'ios' ? val : val?.toLocaleDateString())
                Platform.OS == 'ios' ? null : setShowDate(false)
              }}
              minimumDate={minimumDate !== undefined ? '2021, 01, 01' : null}
              maximumDate={maximumDate !== undefined ? '2099, 01, 01' : null}
              locale="en"
              accentColor={Colors.orange}
            />
          )}
        </>
      ) : (
        <Pressable
          style={style.dateButtonText}
          onPress={() => {
            Platform.OS == 'android'
              ? DateTimePickerAndroid.open({
                  textColor: 'black',
                  dataFormat: 'YYYY-MM-DD',
                  display: 'default',
                  mode: 'time',
                  value: new Date(),
                  onChange: (e, val) => {
                    setTime(val.toLocaleTimeString().slice(0, -3)), setShowTime(false)
                    dispatch(
                      place === 'onTop'
                        ? setStart_date(initialState.start_date.concat(` ${time}`))
                        : setEndDate(initialState.end_date.concat(` ${time}`)),
                    )
                  },
                })
              : null
          }}
        >
          <TimeSvg style={style.dateSvg} />
          <Text style={style.dateText}>{time}</Text>
        </Pressable>
      )}
    </View>
  )
}
export default DateTime
