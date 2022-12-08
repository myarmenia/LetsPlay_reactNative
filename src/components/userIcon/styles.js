import { StyleSheet } from 'react-native'

import {ACTIVE, BACKGROUND, ICON, INACTIVE, WHITE} from '@/theme/colors'
import { font, RH, RW } from '@/theme/utils'

export default StyleSheet.create({
    bg:{
    },
    imgMaxBlock:{
        width:RW(170),
        height:RH(190),
        marginLeft:'auto',
        marginRight:'auto',
        backgroundColor:"red",
        borderRadius:150
    },
    imgBlock:{
        width:RW(43),
        height:RH(47),
        marginLeft:'auto',
        marginRight:'auto'
        },
    image:{
        borderRadius:100,
        width:'100%',
        height:'100%',
        resizeMode:'contain',
    },
    nameBlock:{
        marginLeft:'auto',
        marginRight:'auto',
        // marginVertical:4,
    },
    nameMax:{
        color:WHITE,
        textAlign:'center',
        // fontFamily:
        fontSize:20,
        lineHeight:24,
    },
    name:{
        color:WHITE,
        textAlign:'center',
        fontSize:4,
        lineHeight:5,
        // fontFamily:
    }

})
