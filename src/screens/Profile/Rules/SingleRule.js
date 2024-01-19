import React from 'react'
import { StyleSheet, Text, ScrollView, View } from 'react-native'
import { RH, font } from '@/theme/utils'
import { WHITE } from '@/theme/colors'

import { useSelector } from 'react-redux'
import ScreenMask2 from '@/components/wrappers/screen2'

function SingleRule() {
    let singleRule = useSelector(({ auth }) => auth.singleRule)
    console.log(singleRule, 'singleRule');
    return (
        <ScreenMask2>
            <View style={styles.container}>
                <Text style={styles.titleStyle}>{singleRule?.title}</Text>
                <ScrollView>
                    <Text style={styles.bodyStyle}>{singleRule?.body}</Text>
                </ScrollView>

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







