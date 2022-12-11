import {StyleSheet} from 'react-native'

import {ACTIVE, BACKGROUND, ICON, INACTIVE, WHITE} from '@/theme/colors'
import {font, RH, RW} from '@/theme/utils'

export default StyleSheet.create({
    titleBigBloc:{
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-around',
        marginLeft:'auto',
        marginRight:'auto',
    },
    titleBloc:{
        alignItems:'center',
        justifyContent:'center',
    },
    title:{
        ...font('bold',RW(10),WHITE)
    },
    titleCount:{   ...font('bold',RW(16),WHITE)},
    statusBlockMax: {
        backgroundColor:'rgba(52, 52, 52, 0)',
        paddingHorizontal:RW(25),
        marginTop:RH(5),
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    statusBloc:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'rgba(52, 52, 52, 0)'
    },
    bg: {},
    imgMaxBlock: {
        width: RW(170),
        height: RH(190),
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: "red",
        borderRadius: 150
    },
    imgBlock: {
        width: RW(43),
        height: RH(47),
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    image: {
        borderRadius: 100,
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    nameBlock: {
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    nameMax: {
        color: WHITE,
        textAlign: 'center',
        // fontFamily:
        fontSize: 20,
        lineHeight: 24,
    },
    name: {
        color: WHITE,
        textAlign: 'center',
        fontSize: 4,
        lineHeight: 5,
    },
    soc:{
        backgroundColor:'rgba(52, 52, 52, 0)',
        alignItems:'center',
        justifyContent:'center'
    }

})
