import { StyleSheet, View } from 'react-native'
import React from 'react'
import { RW, font } from '@/theme/utils'
import { LIGHT_LABEL } from '@/theme/colors'
import { _storageUrl } from '@/constants'
import { useSelector } from 'react-redux'
import User from '@/components/User/User'

const UserInfo = ({ body }) => {

    return (
        <View style={styles.modal}>
            <User user={body} size={370} />
        </View>
    )
}

export default UserInfo

const styles = StyleSheet.create({
    modal: {
        width: RW(380),
        backgroundColor: LIGHT_LABEL,
        borderRadius: RW(20),
        paddingVertical: RW(30),
        justifyContent: 'center',
        alignItems: 'center',
    },
})
