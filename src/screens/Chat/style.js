import {StyleSheet} from 'react-native'

import {ACTIVE, BACKGROUND, ICON, LIGHT_GRAY, LIGHT_LABEL, RED, WHITE} from '@/theme/colors'
import {font, RH, RW} from '@/theme/utils'

export default StyleSheet.create({
    container: {
        marginTop: RH(56),
        alignItems:"center",
    },
    title:{
        ...font('bold' , 24 , LIGHT_GRAY , 29),
        marginBottom: RW(27),
    },
    chatItemImg: {
        width: RW(42),
        height: RH(42)
    },
    chatItemBlock: {
        backgroundColor: ICON,
        width: '100%',
        borderRadius: RW(10),
        paddingLeft: RW(13),
        paddingTop: RH(17),
        paddingBottom: RH(17),
        paddingRight: RW(6),
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    itemData:{
        ...font('bold' , 18 , WHITE , 20),
        width: RW(245)
    },
    time:{
        ...font('regular' , 14 , WHITE , 20),
        marginBottom: RH(20)
    },
    chatInput:{
        width:RW(399),
        height: RH(48),
        borderRadius: RW(30),
        backgroundColor: BACKGROUND,
        marginTop: 'auto',
        marginBottom: RH(18),
        paddingLeft: RW(17),
        paddingRight: RW(21),
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between"
    },
    chatHeadBlock:{
        flexDirection: "row",
        marginTop: RH(36)
    },
    countBlock:{
        width: RW(40),
        height: RH(40),
        backgroundColor: ACTIVE,
        borderRadius: RW(40),
        alignItems: "center",
        justifyContent: "center",
        marginLeft: RW(5)
    },
    countText:{
        ...font('bold' , 16 , LIGHT_LABEL , 20),
    },
    infoSvgButton:{
        marginLeft: 'auto',
        marginRight: RW(10)
    },
    infoModal:{
        backgroundColor: LIGHT_LABEL,
        paddingLeft: RW(25),
        paddingTop: RH(72),
        paddingBottom: RH(30),
        width: RW(370),
        height: RH(420),
        borderRadius: RW(20),
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    chatBlock:{
        marginBottom: RH(49),
        marginTop: RH(25),
        width: RW(396),
    },
    myItemBlock:{
        flexDirection: "row",
        marginLeft: RW(125)
    },
    userItemBlock:{
        flexDirection: "row",
        marginRight: RW(125)
    },
    myItem:{
        width: RW(230),
        height: RH(68),
        backgroundColor: ICON,
        borderRadius: RW(10),
        borderBottomRightRadius: 0
    },
    userItem:{
        width: RW(230),
        height: RH(68),
        backgroundColor: ICON,
        borderRadius: RW(10),
        borderBottomRightRadius: 0
    },
    timeText: {
        color: ICON,
        marginTop: RW(40),
        marginRight: RW(9)
    }
})
