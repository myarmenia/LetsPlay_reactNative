import {StyleSheet} from "react-native";
import {font, RH, RW} from "@/theme/utils";
import {WHITE} from "@/theme/colors";

export const styles = StyleSheet.create({
    title:{
        ...font('bold', 24, '#4D7CFE'),
        textAlign:"center",
        marginTop:RH(20),
    },
    team:{
        ...font('bold', 22, WHITE),
        marginVertical:RW(25),
    },
    itemBlock:{
        // backgroundColor:"red",
      // flexWrap:"Wrap",
    },
    items:{
        ...font('bold', 16, WHITE),
    },
    btn:{
        width:RW(281),
        height:RH(48)
    }
})

export default styles;
