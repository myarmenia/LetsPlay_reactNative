import {StyleSheet} from 'react-native'

import {ACTIVE, BACKGROUND, DARK_BLUE, ICON, LIGHT_GRAY, LIGHT_LABEL, RED, WHITE} from '@/theme/colors'
import {font, RH, RW} from '@/theme/utils'

export default StyleSheet.create({
    bg:{
        width:RW(306),
        height:RH(191),
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:'auto',
        marginBottom:'auto',
        backgroundColor:'#001034',
        borderRadius:RW(20),
        padding:RW(40)
    },
    title:{
        textAlign:'center',
        marginBottom:RH(5),
      ...font('bold', 16, WHITE)
    },
    btnBlock:{
        flexDirection:'row',
        // backgroundColor:'red',
        justifyContent:'space-between',
        paddingHorizontal:RW(18),
        marginTop:RH(15),
    },
    textBlock:{
    }
})
