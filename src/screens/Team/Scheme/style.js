import {StyleSheet} from 'react-native'
import {ACTIVE, BACKGROUND, DARK_BLUE, ICON, LIGHT_GRAY, LIGHT_LABEL, RED, WHITE} from '@/theme/colors'
import {font, RH, RW} from '@/theme/utils'

export default StyleSheet.create({
    teamBlock:{
        flexDirection: 'row',
        justifyContent: "center",
        marginTop: RH(40),
        marginBottom: RH(43),
        alignItems: 'center'
    },
    image: {
        width: RW(42),
        height: RW(30),
        resizeMode: 'contain'
    },
    title: {
        ...font('bold', 20, WHITE , 27),
        marginVertical: RH(15),
    },
    text: {
        ...font('regular', 16, ICON , 24),
        marginBottom: RH(17),
        marginLeft: RW(25)
    },
    container:{
        width: RW(372),
        height: RH(517),
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: RH(29)
    },
    img:{
        width: RW(372),
        height: RH(517),
        resizeMode: 'contain'
    }
})
