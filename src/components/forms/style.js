import {StyleSheet} from 'react-native'

import {ICON, RED, WHITE} from '@/theme/colors'
import {font, RH, RW} from '@/theme/utils'

export default StyleSheet.create({
    errorText: {
       ...font('regular', 16, RED, 24),
        marginLeft: RW(20)
    },
    text: {
       ...font('regular', 16, WHITE, 25),
        width: RW(200),
        textAlign: "center",
        marginTop: RH(49),
        marginBottom: RH(31)
    },
    topBlock:{
        width: RW(306),
        height: RH(191),
        alignItems: "center",
    },
    titles: {
        ...font('regular', 16, ICON, 24),
        marginTop: RH(24),
        marginLeft: RW(20)
    },

    dateBlock: {
        marginRight: RW(9),
        marginTop: RH(9),
        marginLeft: RW(13),
        marginBottom: RH(2),
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    dash: {
        width: RW(10),
        height: 0,
        borderColor: ICON,
        borderWidth: RW(2),
        borderRadius: RW(2),
        marginHorizontal: RW(8)
    },
    countBlock:{
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: RW(11),
        marginTop: RH(9)
    },
    price: {
        marginLeft: RW(18),

    },
    submitBlock: {
        marginLeft: 'auto',
        marginRight: RW(9),
        marginBottom: RW(23),
        marginTop: RH(70)
    }
})
