import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import Plus from '@/assets/imgs/add';
import styles from './styles';

const CircleButton = () => {

    return (
        <View style={styles.circleContainer}>
            <TouchableOpacity activeOpacity={0.8}>
                <Plus />
            </TouchableOpacity>
        </View>
    )
};

export default CircleButton;