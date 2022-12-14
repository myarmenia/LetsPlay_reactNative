import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { LIGHT_LABEL, RADIO } from '@/theme/colors'
import { useState } from 'react'
import style from './style'

const Radio = props => {
  const {
    list,
    margin,
    setFlag,
    type,
    typeFunc,
    data,
    setList,
    setFree,
    setData,
    setShowGameTypes,
    showGameTypes,
    topBtn,
  } = props
  const [value, setValue] = useState('')
  const [checked, setChecked] = useState(true)
  const handleChange = ev => {
    setChecked(false)
    setValue(ev.text)
    if (data) {
      if (ev.text === 'Платно' && type === 'priceView') {
        setFlag(true)
      } else if (ev.text === 'Бесплатно' && type === 'priceView') {
        setFlag(false)
      }
      if (type === 'gender') {
        setData({ ...data, gender: ev.text })
      } else if (type === 'statusOrganizer') {
        setData({ ...data, statusOrganizer: ev.text })
      } else {
        setData({ ...data, price: ev.text })
      }
    }
    let evcopy = ev
    if (typeFunc === 'game') {
      setList([
        ...list.map(elm => {
          if (elm.text === 'Выбрать игру' && elm.checked) {
            setShowGameTypes(false)
          } else {
            setShowGameTypes(true)
          }
          if (elm.id === evcopy.id) {
            return { ...elm, checked: !elm.checked }
          }
          if (elm.checked === true) {
            return { ...elm, checked: false }
          } else {
            return elm
          }
        }),
      ])
    } else {
      setFree([
        ...list.map(elm => {
          if (elm.id === evcopy.id) {
            return { ...elm, checked: !elm.checked }
          }
          if (elm.checked === true) {
            return { ...elm, checked: false }
          } else {
            return elm
          }
        }),
      ])
      console.log(list)
    }
  }
  return list.map(ev => (
    <TouchableOpacity
      style={{ ...style.radioBlock, marginLeft: margin }}
      onPress={() => {
        handleChange(ev)
        // if (topBtn) {
        //   setList([list.map((ev) => {
        //     if(ev[0] === 1 || 2){
        //       console.log(ev,"ev")
        //      setShowGameTypes(false)
        //    }
        //     if (ev[0] === 3) {
        //       return [...ev, ev[2] = true], setShowGameTypes(true)
        //     }
        //     else {
        //       return [...ev], setShowGameTypes(false)
        //     }
        //   })])
        // }
      }}
      key={ev.id}
    >
      <View style={style.radio}>
        <View
          style={
            ev.checked || value === ev.id
              ? {
                  ...style.circle,
                  backgroundColor: RADIO,
                }
              : { ...style.circle, backgroundColor: LIGHT_LABEL }
          }
        ></View>
      </View>
      <Text style={style.radioText}>{ev.text}</Text>
    </TouchableOpacity>
  ))
}

export default Radio
