import React, { useState } from 'react'
import { Platform, Pressable, Text, View } from 'react-native'
import RNDateTimePicker, { DateTimePickerAndroid } from '@react-native-community/datetimepicker'
import style from './style'
import DateSvg from '@/assets/svgs/dateSvg'
import TimeSvg from '@/assets/svgs/timeSvg'
import { RW } from '@/theme/utils'
import { useDispatch } from 'react-redux'

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
                      setDate(changedDate.toLocaleDateString())
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
