import {StyleSheet} from "react-native";
import {font, RH, RW} from "@/theme/utils";
import {FONT_ROBOTO_THIN} from "@/theme/fonts";
import {BLACK} from "@/theme/colors";

export  const styles = StyleSheet.create({
    btnBlock:{
        alignItems:'center',
        marginTop:'auto',
        marginBottom:'auto',
    },
    btnActiveGames:{
        marginBottom:24,
    },
    title:font('bold', 18, BLACK)
  })
