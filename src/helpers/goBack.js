import React from 'react'
import GestureRecognizer from 'react-native-swipe-gestures'
import { useNavigation } from '@react-navigation/native'


function GoBack({item}) {

    const navigation=useNavigation()

    const back = (par) => {
        console.log(navigation)
        // if (!par) {
        //     return null
        // }
        navigation.goBack()
    }

    return (

        <GestureRecognizer
            onSwipeLeft={(state) => back()}
            style={{
                flex: 1,
            }}>
            {item}
        </GestureRecognizer>
    );
}

export default GoBack
