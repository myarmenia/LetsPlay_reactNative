import React, { memo, useEffect, useState } from 'react'
import { StyleSheet, Text, FlatList, View, Pressable } from 'react-native'
import { RH, RW, font } from '@/theme/utils'
import { ACTIVE, DARK_BLUE, WHITE, ICON } from '@/theme/colors'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import ScreenMask from '@/components/wrappers/screen'
import FileIcon from '@/assets/svgs/fileIcon'
import { getSingleRule } from '../../../store/Slices/AuthSlice'


function Rules() {
    const dispatch = useDispatch()
    let documentRules = useSelector(({ auth }) => auth.documentRules)
    const navigation = useNavigation()
    const goToSingleRule = (item) => {
        dispatch(getSingleRule(item.path))
        navigation.navigate('SingleRule')
    }
    const renderItem = ({ item }) => {
        return (
            <View style={styles.itemContainer}>
                <FileIcon />
                <Pressable onPress={() => { goToSingleRule(item) }}>
                    <Text style={styles.itemTextStyle}>{item.name}</Text>
                </Pressable>
            </View>
        )
    }

    return (
        <ScreenMask style={{ paddingHorizontal: 24 }}>
            <View style={styles.container}>
                <Text style={styles.titleStyle}>Условия использования</Text>
                <Text style={styles.docStyle}>Документы:</Text>
                <FlatList
                    style={styles.flatListStyle}
                    data={documentRules}
                    renderItem={renderItem}
                    keyExtractor={(item) => item._id}
                />
            </View>
        </ScreenMask>
    )
}

export default Rules

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    titleStyle: {
        ...font('medium', 24, WHITE, 19),
        paddingVertical: RH(25),
    },
    docStyle: {
        ...font('medium', 18, ICON, 19),
        paddingVertical: RH(20),
        alignSelf: 'flex-start',
    },
    flatListStyle: {
        width: '100%',
    },
    itemContainer: {
        paddingVertical: RH(25),
        flexDirection: 'row',
        alignItems: 'center',
        borderTopWidth: 2,
        width: '100%',
        borderColor: DARK_BLUE,
    },
    itemTextStyle: {
        ...font('medium', 12, WHITE, 19),
        marginLeft: RH(12)
    },
})
