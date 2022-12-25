import {StyleSheet} from 'react-native'

import {ACTIVE, BACKGROUND, DARK_BLUE, ICON, LIGHT_GRAY, LIGHT_LABEL, RED, WHITE} from '@/theme/colors'
import {font, RH, RW} from '@/theme/utils'

export default StyleSheet.create({
    team:{
        textAlign:'center',
        ...font("bold",22, WHITE),
        marginVertical:RH(15)
    },
    imageBlock:{
        width:RW(240),
        height:RW(240),
        marginLeft:'auto',
        marginRight:'auto',
        marginVertical:RH(25),
        borderWidth:1,
        borderRadius:RW(150),
        borderColor:WHITE
    },
    image:{
        borderWidth:1,
        borderRadius:RW(150),
        width:'100%',
        height:'100%',
        resizeMode:'contain'
    },
    text:{
        textAlign:'center',
        marginVertical:RH(5),
        ...font('italic',18, WHITE)
    },
    btns:{
        marginTop:RH(150),
        marginLeft:'auto',
        marginRight:'auto',
    },
    btn:{
        marginBottom:RH(15),
    },
})
