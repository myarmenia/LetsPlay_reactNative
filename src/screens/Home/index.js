import React from 'react';
import { Image, SafeAreaView, StyleSheet, View } from 'react-native';

import NotificationIcon from '@/assets/imgs/notification';
import CalendarIcon from '@/assets/imgs/calendar';
import detail from '@/assets/imgs/detail.png';
import { BACKGROUND } from '@/theme/colors';
import { RH, RW } from '@/theme/utils';

const HomeScreen = () => {

    return (
        <View style={{ flex: 1, backgroundColor: BACKGROUND }}>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.header}>
                    <CalendarIcon />
                    <NotificationIcon />
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                    <Image source={detail} />
                </View>
            </SafeAreaView>
        </View>
    )
};

export default HomeScreen;

const styles = StyleSheet.create({
    header: {
        paddingTop: RH(21),
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: RW(20),
        justifyContent: 'space-between'
    }
})