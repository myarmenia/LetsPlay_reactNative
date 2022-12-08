import {StyleSheet} from "react-native";
import {font, RH, RW} from "@/theme/utils";
import {FONT_ROBOTO_THIN} from "@/theme/fonts";
import {WHITE} from "@/theme/colors";

export const styles = StyleSheet.create({
    body:{
      //   marginTop:RH(80),
      // marginLeft:RW(8),
        paddingLeft:'auto',
        paddingRight:'auto',
        paddingTop:50,
    },
    comBlock:{
      marginTop:RH(40),
    },
    title:{
        ...font('bold', 24, WHITE)
    },
    comTitle:{
        marginBottom:RH(11),
        ...font('bold', 20, WHITE)
    },
    users:{
        flexDirection:'row'
    }
})
