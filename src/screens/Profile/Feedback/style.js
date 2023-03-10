import {StyleSheet} from 'react-native'

import {ACTIVE, BACKGROUND, DARK_BLUE, ICON, LIGHT_GRAY, LIGHT_LABEL, RED, WHITE} from '@/theme/colors'
import {font, RH, RW} from '@/theme/utils'

export default StyleSheet.create({
    input:{
        width: RW(354),
        backgroundColor: BACKGROUND,
        color: ICON,
        borderRadius: RW(10),
        paddingHorizontal: RW(20),

    },
    buttonBlock: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: RH(105)
    },
    feedbackModal:{
        width: RW(289),
        height: RH(199),
        paddingHorizontal: RW(26),
        paddingTop: RH(48),
        backgroundColor: LIGHT_LABEL,
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: RW(20),
        alignItems: "center"
    },
    modalText: {
        ...font('regular' , 16 , WHITE , 24),
        textAlign: "center",
        width: RW(235)
    },
    errorText: {
        ...font('regular', 16, RED, 24),
    },
    inputBlock:{
        marginBottom: RH(23),
    }
})
