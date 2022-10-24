import React from 'react';
import { Text, View } from 'react-native';

import { BACKGROUND } from '@/theme/colors';

const ProfileScreen = () => {

    return (
        <View style={{ flex: 1, backgroundColor: BACKGROUND }}>
            <Text style={{ marginTop: 100, color: 'white' }}>Profile</Text>
        </View>
    )
};

export default ProfileScreen;