
import React from 'react'
import { View } from 'react-native'
import ToggleSwitch from 'toggle-switch-react-native'
import {useState} from 'react'
<<<<<<< HEAD
=======
import LinearGradient from "react-native-linear-gradient";

>>>>>>> a6bf9b1f955cf66f812a859938c3c3fcf62b5f1b

const Toggle = () => {
    const [on, setOn] = useState(false)
    return (
        <View>
            <ToggleSwitch
                isOn={true}
                onColor="#7DCE8A"
                offColor="#4D7CFE"
                thumbOnStyle={{width:25,height:25, borderRadius:50, backgroundColor:'#4D7CFE', left:10}}
                trackOnStyle={{width:56,height:20}}
                label=""
                size="small"
                onToggle={on}
            />
        </View>
    )
}

export default Toggle
