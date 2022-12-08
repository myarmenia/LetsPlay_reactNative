import { StyleSheet } from 'react-native'

import {ACTIVE, BACKGROUND, ICON, INACTIVE, WHITE} from '@/theme/colors'
import { font, RH, RW } from '@/theme/utils'

export default StyleSheet.create({
    dateButton: {
        width: RW(201),
        height: RH(48),
        backgroundColor: BACKGROUND,
        borderRadius: RW(10),
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'center',
    },
    dateButtonText: {
        ...font('regular', 16, ICON, 19),
        marginLeft: RW(16)
    },
    dateSvg:{
        marginLeft: RW(24)
    },
    timeButton:{
            width: RW(146),
            height: RH(48),
            backgroundColor: BACKGROUND,
            borderRadius: RW(10),
            flexDirection: 'row',
            alignItems: 'center',
            // justifyContent: 'center',
    },
})
