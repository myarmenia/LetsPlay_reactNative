import {StyleSheet} from "react-native";
import {font, RH, RW} from "@/theme/utils";
import {WHITE} from "@/theme/colors";

export  const styles = StyleSheet.create({
    bg:{
        backgroundColor:'#001034',
        width:RW(306),
        height:RH(191),
        borderRadius:RW(20),
        marginLeft:'auto',
        marginRight:'auto',
        alignItems:'center',
        justifyContent:'center',
        paddingHorizontal:RW(20)
    },
    text:{
        textAlign:'center',
        ...font('bold', 18, WHITE)
    }

})
