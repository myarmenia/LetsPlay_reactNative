import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import { BACKGROUND, WHITE } from '@/theme/colors';
import { RH, RW } from '@/theme/utils';

const Composer = () => {

    return (
        <View style={styles.container}>
            <TextInput />
        </View>
    )
};

export default Composer;

const styles = StyleSheet.create({
    container: {
        paddingLeft: RW(24),
        paddingRight: RW(21),
        borderRadius: RW(10),
        paddingVertical: RH(10),
        backgroundColor: WHITE
    }
});