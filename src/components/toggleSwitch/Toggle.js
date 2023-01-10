import React from 'react'
import { View } from 'react-native'
import ToggleSwitch from 'toggle-switch-react-native'
import {useState} from 'react'
import {RH, RW} from "@/theme/utils";

const Toggle = () => {
    const [on, setOn] = useState(false)
    const [is, setIs] = useState(true)
    return (
        <View>
            <ToggleSwitch
                isOn={is}
                onColor="#7DCE8A"
                offColor="#7DCE8A"
                thumbOnStyle={{width:RW(30),height:RH(30), borderRadius:50, backgroundColor:'#4D7CFE' , left: RW(10)}}
                trackOnStyle={{width:RW(60),height:RH(25)}}
                thumbOffStyle={{width:RW(30),height:RH(30), borderRadius:50, backgroundColor:'#4D7CFE' , left: RW(-10)}}
                trackOffStyle={{width:RW(60),height:RH(25)}}
                label=""
                size="large"
                onToggle={() => setIs(!is)}
            />
        </View>
    )
}

export default Toggle
