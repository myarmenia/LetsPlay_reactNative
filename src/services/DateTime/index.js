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
  const [date, setDate] = useState(new Date())
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
                    onChange: (_, changedDate) => {
                      let change = changedDate.toISOString().substring(0, 10)
                      dispatch(place == 'onTop' ? setStart_date(change) : setEndDate(change))
                    },
                  })
                : null
            }}
          >
            <DateSvg style={width ? { ...style.dateSvg, marginLeft: RW(10) } : style.dateSvg} />
            <Text style={style.dateText}>
              {place == 'onTop'
                ? initialState.start_date.substring(0, 10)
                : // ? initialState.start_date
                  // : new Date().toISOString()
                  // : initialState.end_date
                  initialState.end_date.substring(0, 10)}
              {/* // : new Date().toISOString()} */}
            </Text>
          </Pressable>
          {/* {showDate && (
            <RNDateTimePicker
              value={Platform.OS === 'ios' ? date : new Date()}
              mode="date"
              display="compact"
              onChange={(_, val) => {
                Platform.OS == 'ios' ? null : setShowDate(false)
                console.log(val)
                // dispatch(
                //   place == 'onTop'
                //     ? setStart_date(Platform.OS === 'ios' ? val : val?.toLocaleDateString())
                //     : setEndDate(Platform.OS === 'ios' ? val : val?.toLocaleDateString()),
                // )
                setDate(Platform.OS === 'ios' ? val : val?.toLocaleDateString())
                Platform.OS == 'ios' ? null : setShowDate(false)
              }}
              locale="en"
              accentColor={Colors.orange}
            />
          )} */}
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
                  minimumDate: initialState?.start_date,
                  onChange: (_, val) => {
                    let change = val.toLocaleTimeString().slice(0, -3)
                    setTime(change), setShowTime(false)
                    place == 'onTop'
                      ? initialState.start_date.length >= 16
                        ? dispatch(
                            setStart_date(
                              initialState.start_date.substring(0, 10).concat(` ${change}`),
                            ),
                          )
                        : dispatch(setStart_date(initialState.start_date.concat(` ${change}`)))
                      : initialState.start_date.length >= 16
                      ? dispatch(
                          setEndDate(initialState.start_date.substring(0, 10).concat(` ${change}`)),
                        )
                      : dispatch(setEndDate(initialState.end_date.concat(` ${change}`)))
                    console.log(
                      'startDate',
                      initialState.start_date,
                      'endDate',
                      initialState.end_date,
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
