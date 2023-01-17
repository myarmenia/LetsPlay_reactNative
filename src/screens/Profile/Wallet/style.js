import {StyleSheet} from 'react-native'

import {ACTIVE, BACKGROUND, DARK_BLUE, ICON, LIGHT_GRAY, LIGHT_LABEL, RED, WHITE} from '@/theme/colors'
import {font, RH, RW} from '@/theme/utils'

export default StyleSheet.create({
    priceBlock:{
        alignItems: "center",
        marginBottom: RH(30)
    },
    balanceText:{
        ...font('regular' , 16 , ICON , 19),
    },
    bannerTitle:{
        ...font('bold' , 16 , ICON , 19),
        marginLeft: RW(40),
        marginBottom: RW(20)
    },
    price:{
        ...font('medium' , 28 , ICON , 30),
    },
    buttonBlock: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: RH(77)
    },
})
