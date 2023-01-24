import {StyleSheet} from 'react-native';
import {RH, RW, font} from '@/theme/utils'
import {BACKGROUND, ICON, TAB_BAR_COLOR, WHITE} from "@/theme/colors";

export default StyleSheet.create({
    btn: {
        width: RW(397),
        height: RH(48),
    },
    input: {
        backgroundColor: BACKGROUND,
        marginBottom: RH(49),
        borderRadius: RW(10),
        width: RW(363),
        height: RH(48),
        marginLeft: 'auto',
        marginRight: 'auto',
        color: ICON,
        paddingLeft: RW(24)
    },
    title: {
        ...font('bold', 24, WHITE),
        textAlign: 'center',
        marginTop:RH(20),
        marginBottom:RH(30)
    }
})
