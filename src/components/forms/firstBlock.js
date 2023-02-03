import React from 'react'
import { Text, View } from 'react-native'
import style from './style'
import DateTime from '@/services/DateTime'

const FirstBlock = props => {
  const { title, errorText, margin, day, gameDayDate = new Date() } = props
  return (
    <View style={{ marginTop: margin }}>
      <Text style={style.titles}>{title}</Text>
      <View style={style.dateBlock}>
        <DateTime
          errorText={errorText}
          gameDayDate={gameDayDate}
          // data={data}
          // setData={setData}
          day={day}
          type={'date'}
        />
        <DateTime day={day} type={'time'} />
      </View>
    </View>
  )
}
export default FirstBlock
