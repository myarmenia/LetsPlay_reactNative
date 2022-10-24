import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';

import { BACKGROUND } from '@/theme/colors';
import Composer from './shared/composer';

const AuthScreen = () => {

    return (
        <View style={styles.container}>
            <SafeAreaView style={{ flex: 1 }}>
                {/* <Composer /> */}
            </SafeAreaView>
        </View>
    )
};

export default AuthScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: BACKGROUND
    }
})