import {StyleSheet} from 'react-native'

import {ACTIVE, BACKGROUND, DARK_BLUE, ICON, LIGHT_GRAY, LIGHT_LABEL, RED, WHITE} from '@/theme/colors'
import {font, RH, RW} from '@/theme/utils'

export default StyleSheet.create({
    bg:{
        width:RW(306),
        height:RH(120),
        borderRadius:RW(20),
        backgroundColor:'#001034',
        marginLeft:'auto',
        marginRight:'auto',
        alignItems:"center",
        justifyContent:'center'
    },
    text:{
        textAlign:'center',
        ...font('bold', 16, WHITE)
    },
    scroll:{
        marginRight:'auto',
        marginLeft:'auto',
        width:RW(310),
        height:RH(500),
        flexGrow:0,
    },
    container: {
        flexDirection: 'row',
        justifyContent:'space-around',
        flexWrap: 'wrap',
        // marginLeft: 'auto',
        // marginRight: 'auto'
    },
    item:{
        marginTop:RH(15)
    },
})
