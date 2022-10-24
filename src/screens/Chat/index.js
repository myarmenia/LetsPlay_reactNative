import React from 'react';
import { Text, View } from 'react-native';

import { BACKGROUND } from '@/theme/colors';

const ChatScreen = () => {

    return (
        <View style={{ flex: 1, backgroundColor: BACKGROUND }}>
            <Text style={{ marginTop: 100, color: 'white' }}>Chat</Text>
        </View>
    )
};

export default ChatScreen;