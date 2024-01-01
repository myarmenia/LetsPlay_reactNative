import React, { memo, useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { RH, RW, font } from '@/theme/utils'
import { ACTIVE, INACTIVE, LIGHT_LABEL, WHITE } from '@/theme/colors'

import { useDispatch, useSelector } from 'react-redux'
import ScreenMask2 from '@/components/wrappers/screen2'

function SingleRule({ route }) {
    // const { params } = route
    // console.log(params, 'params');

    return (
        <ScreenMask2>
            <View style={styles.container}>
                {/* <Text style={styles.titleStyle}>{params.name}</Text>
                <Text style={styles.bodyStyle}>{params.path  }</Text> */}
            </View>
        </ScreenMask2>
    )
}

export default SingleRule

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    titleStyle: {
        ...font('medium', 20, WHITE, 25),
        paddingVertical: RH(40),
        textAlign: 'center'
    },
    bodyStyle: {
        ...font('light', 15, WHITE, 19),
        paddingVertical: RH(20),
    }
})







