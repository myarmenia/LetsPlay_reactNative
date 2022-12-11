import React, {useState} from 'react';
import {Platform, Text, TextInput, TouchableOpacity, View} from "react-native";
import styles from "@/components/inputs/styles";
import {ICON, RED} from "@/theme/colors";
import {font, RW} from "@/theme/utils";
import MapSvg from "@/assets/svgs/mapSvg";



function Map(props) {
    const {placeholder, data, setData, errorText} = props
    const [value, setValue] = useState('')
    return (
        <>
            <View style={styles.mapInputBlock}>
                <TextInput style={styles.mapInput} value={value} onChangeText={(ev) => {
                    setValue(ev);
                    setData({...data, addressValue: ev})
                }} placeholder={placeholder} placeholderTextColor={ICON}/>
                <TouchableOpacity><MapSvg/></TouchableOpacity>
            </View>
            {errorText && !value ? <Text style={{...font('regular', 16, RED, 24) , marginLeft: RW(12)}  }>{errorText}</Text> : null}
        </>
    );
}

export default Map;
