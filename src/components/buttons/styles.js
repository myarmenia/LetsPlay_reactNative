import { StyleSheet } from 'react-native';

import { BACKGROUND } from '@/theme/colors';
import { RH, RW } from '@/theme/utils';

export default StyleSheet.create({
    circleContainer: {
        width: RW(78),
        height: RW(78),
        bottom: RH(28),
        padding: RW(8),
        alignSelf: 'center',
        position: 'absolute',
        borderRadius: RW(39),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: BACKGROUND,
    }
})