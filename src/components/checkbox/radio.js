import React from 'react';
import {Text, TouchableOpacity, View} from "react-native";
import {LIGHT_LABEL, RADIO} from "@/theme/colors";
import {useState} from "react";
import style from "./style";

const Radio = (props) => {
  const {list, margin, setFlag, type, data, setData} = props
  const [value, setValue] = useState('')
  const [checked, setChecked] = useState(true)
  const handleChange = (ev) => {
    setChecked(false)
    setValue(ev.id);
    if (data){
      if (ev.text === 'Платно' && type === 'priceView') {
        setFlag(true)
      } else if (ev.text === 'Бесплатно' && type === 'priceView') {
        setFlag(false)
      }
      if (type === 'gender') {
        setData({...data, gender: ev.text})
      } else if (type === 'statusOrganizer') {
        setData({...data, statusOrganizer: ev.text})
      } else {
        setData({...data, price: ev.text})
      }
    }
  }
  return (
      list.map((ev) => <TouchableOpacity style={{...style.radioBlock, marginLeft: margin}} onPress={() => {handleChange(ev)}} key={ev.id}>
            <View style={style.radio}>
              <View style={(checked && ev.checked) || value === ev.id ? {
                ...style.circle,
                backgroundColor: RADIO
              } : {...style.circle, backgroundColor: LIGHT_LABEL}}></View>
            </View>
            <Text style={style.radioText}>{ev.text}</Text>
          </TouchableOpacity>
      )
  );
}

export default Radio;
