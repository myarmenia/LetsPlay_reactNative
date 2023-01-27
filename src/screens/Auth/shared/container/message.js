import React from 'react'
import {StyleSheet, Text, TextInput, View} from 'react-native'
import {ICON, MESSAGE_CONTAINER, RED, WHITE} from '@/theme/colors'
import {font, RH, RW} from '@/theme/utils'

const Message = ({message}) => {
    return (
        <View
            style={[
                styles.container,
                message.position==='left'?styles.left:styles.right
            ]}
        >
            <Text style={[styles.label]} secureTextEntry={true}>
                {message.text}
            </Text>

        </View>
    )
}

export default Message

const styles = StyleSheet.create({
    container: {
        marginTop: RH(25),
        maxWidth: RW(230),
        borderRadius: RW(10),
        paddingVertical: RH(19),
        paddingHorizontal: RW(12),
    },
    left: {
        alignSelf: 'flex-start',
        borderBottomLeftRadius: 0,
        backgroundColor: MESSAGE_CONTAINER,
    },
    right: {
        alignSelf: 'flex-end',
        backgroundColor: ICON,
        borderBottomRightRadius: 0,
    },
    label: {
        ...font('regular', 16, WHITE, 20),
    },
})
