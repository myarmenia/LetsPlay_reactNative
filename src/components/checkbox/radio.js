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
        setValue(ev[0]);
        if (data){
        if (ev[1] === 'Платно' && type === 'priceView') {
            setFlag(true)
        } else if (ev[1] === 'Бесплатно' && type === 'priceView') {
            setFlag(false)
        }
        if (type === 'gender') {
            setData({...data, gender: ev[1]})
        } else if (type === 'statusOrganizer') {
            setData({...data, statusOrganizer: ev[1]})
        } else {
            setData({...data, price: ev[1]})
        }
        }
    }
    return (
        list.map((ev) => <TouchableOpacity style={{...style.radioBlock, marginLeft: margin}} onPress={() => {handleChange(ev)}} key={ev[0]}>
                <View style={style.radio}>
                    <View style={(checked && ev[2]) || value === ev[0] ? {
                        ...style.circle,
                        backgroundColor: RADIO
                    } : {...style.circle, backgroundColor: LIGHT_LABEL}}></View>
                </View>
                <Text style={style.radioText}>{ev[1]}</Text>
            </TouchableOpacity>
        )
    );
}

export default Radio;
