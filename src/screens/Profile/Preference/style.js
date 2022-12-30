import {StyleSheet} from 'react-native'

import {ACTIVE, BACKGROUND, DARK_BLUE, ICON, INACTIVE, LIGHT_GRAY, LIGHT_LABEL, RED, WHITE} from '@/theme/colors'
import {font, RH, RW} from '@/theme/utils'

export default StyleSheet.create({
    container: {
        width: '100%',
        paddingTop: RW(43),
        paddingHorizontal: RW(8),
        alignItems:"center",
    },
    gameNamesBlock:{
        width: '100%',
    },
    gameNamesTitle:{
        ...font('medium' , 18 , WHITE , 28),
        marginTop: RH(15),
        marginBottom: RW(9)
    },
    nameButton:{
        backgroundColor: ACTIVE,
        alignSelf: "center",
        paddingHorizontal: RW(12),
        paddingVertical: RH(10),
        borderRadius: RW(10),
        marginTop: RW(23)
    },
    nameButtonTwo:{
        backgroundColor: INACTIVE,
        alignSelf: "center",
        paddingHorizontal: RW(12),
        paddingVertical: RH(10),
        borderRadius: RW(10),
        marginTop: RW(23)
    },
    flatList:{
        justifyContent: "space-around"
    },
    flatListBlock: {
        marginBottom: RH(48)
    },
    detail:{
        width: RW(60),
        height: RH(92)
    },
    buttonBlock:{
        marginLeft: 'auto',
        marginTop: RH(17)
    }
})
