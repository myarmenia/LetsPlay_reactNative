import {StyleSheet} from "react-native";
import {font, RH, RW} from "@/theme/utils";
import {WHITE} from "@/theme/colors";

const styles = StyleSheet.create({
    title: {
        ...font('bold', 24, WHITE),
        textAlign: 'center',
        marginBottom:RW(55),
        marginTop:RH(20),
    },
    btn: {
        width: 281,
        height: 48
    },
    levelBlock:{
        padding:RW(10),
        marginVertical:RH(10),
        backgroundColor:'#657AC5',
        borderRadius:20,
    },
    levelTitle:{
        ...font('bold', 16, WHITE),
        marginVertical:RH(10)
    },
    level:{
        ...font('bold', 10, WHITE),
        marginVertical:RH(5)
    },
    btnBlock:{
        alignItems:'center',
        marginTop:RH(155)
    }
})

export default styles;
