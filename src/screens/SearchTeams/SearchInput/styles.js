<<<<<<< HEAD
import {StyleSheet} from 'react-native';
import {RH, RW, font} from '@/theme/utils'
import {TAB_BAR_COLOR, WHITE} from "@/theme/colors";

export default StyleSheet.create({
    btn: {
        width: RW(363),
        height: RH(48),
    },
    input: {
        backgroundColor: TAB_BAR_COLOR,
        marginBottom: RH(20),
        borderRadius: RW(10),
        width: RW(363),
        height: RH(48),
        marginLeft: 'auto',
        marginRight: 'auto',
        color: 'white',
    },
    title: {
        ...font('bold', 24, WHITE),
        textAlign: 'center',
        marginTop:RH(20),
        marginBottom:RH(30)
    }
})
=======
import {StyleSheet} from 'react-native';
import {RH, RW, font} from '@/theme/utils'
import {TAB_BAR_COLOR, WHITE} from "@/theme/colors";

export default StyleSheet.create({
    btn: {
        width: RW(363),
        height: RH(48),
    },
    input: {
        backgroundColor: TAB_BAR_COLOR,
        marginBottom: RH(20),
        borderRadius: RW(10),
        width: RW(363),
        height: RH(48),
        marginLeft: 'auto',
        marginRight: 'auto',
        color: 'white',
    },
    title: {
        ...font('bold', 24, WHITE),
        textAlign: 'center',
        marginTop:RH(20),
        marginBottom:RH(30)
    }
})
>>>>>>> a6bf9b1f955cf66f812a859938c3c3fcf62b5f1b
