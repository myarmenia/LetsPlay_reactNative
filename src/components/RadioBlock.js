import React from 'react'
import { Pressable, Text, View, StyleSheet } from 'react-native'
import { font, RH, RW } from '@/theme/utils'
import LinearGradient from 'react-native-linear-gradient'
import { ICON, LIGHT_LABEL, RADIO, RADIO_TEXT, WHITE } from '@/theme/colors'

function RadioBlock({
  title,
  list,
  onChange = () => { },
  editable = true,
  titleStyle,
  left = RW(20),
  containerStyle
}) {
  return (
    <View style={containerStyle}>
      <Text style={[styles.inputTitle, titleStyle]}>{title}</Text>
      {list.map((ev, index) => (
        <Pressable
          style={{ ...styles.radioBlock, marginLeft: left }}
          onPress={() => {
            if (editable)
              onChange(
                list.map(item => {
                  if (item.text == ev.text) {
                    return { ...item, checked: true }
                  } else {
                    return { ...item, checked: false }
                  }
                }),
              )
          }}
          key={index}
        >
          <LinearGradient
            colors={!ev.disable ? ['#7DCE8A', '#4D7CFE'] : ['#dddddd', '#dddddd']}
            start={{ x: 0.0, y: 0.0 }}
            end={{ x: 1.0, y: 0.0 }}
            style={{
              borderWidth: 1,
              alignItems: 'center',
              justifyContent: 'center',
              width: RW(16),
              aspectRatio: 1,
              borderRadius: RW(16),
            }}
          >
            {ev.checked ? (
              <LinearGradient
                colors={['#7DCE8A', '#4D7CFE']}
                start={{ x: 0.0, y: 0.0 }}
                end={{ x: 1.0, y: 0.0 }}
                style={{
                  borderWidth: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: RW(10),
                  aspectRatio: 1,
                  borderRadius: RW(10),
                }}
              ></LinearGradient>
            ) : (
              <View
                style={{
                  borderWidth: 1,
                  alignItems: 'center',
                  backgroundColor: LIGHT_LABEL,
                  justifyContent: 'center',
                  width: RW(10),
                  aspectRatio: 1,
                  borderRadius: RW(10),
                }}
              ></View>
            )}
          </LinearGradient>
          <Text style={[styles.radioText, ev.disable && {color: '#dddddd'}]}>{ev.text}</Text>
        </Pressable>
      ))}
    </View>
  )
}
const styles = StyleSheet.create({
  circle: {
    width: RW(10),
    height: RH(10),
    borderColor: LIGHT_LABEL,
    borderRadius: RW(8),
    borderWidth: RW(1),
  },
  radioBlock: {
    flexDirection: 'row',
    marginBottom: RH(15),
    alignItems: 'center',
  },
  radioText: {
    ...font('regular', 16, RADIO_TEXT, 24),
    marginLeft: RW(20),
  },
  radio: {
    width: RH(16),
    height: RH(16),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: LIGHT_LABEL,
    borderColor: RADIO,
    borderRadius: RW(8),
    borderWidth: RW(1),
  },
  inputTitle: {
    ...font('regular', 16, ICON, 19),
    marginBottom: RH(14),
  },
})

export default RadioBlock
