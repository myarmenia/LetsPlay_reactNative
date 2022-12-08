import {StyleSheet} from "react-native";
import {font, RH, RW} from "@/theme/utils";
import {WHITE} from "@/theme/colors";

const styles = StyleSheet.create({
    btn: {
        width: RW(100),
        height: RH(50)
    },
    infoTitle: {
        position: 'absolute',
        zIndex: 2,
        width: '100%',

    },
    circle:{
        width:'100%',
        height:'100%',
        alignItems:'center',
        justifyContent:'center',
    },
    timeBlock: {
        width: '100%',
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:RW(10)
    },
    timeBlockTitle:{
      alignItems:'center'
    },
    time:{
      ...font('bold', 24, WHITE)
    },
    timeTitle:{
      ...font('bold', 10, WHITE)
    },
    count: {
        ...font('bold', 24, WHITE)
    },
    infoBlock: {
        height: RH(250),
        zIndex: 1,
        position: "absolute",
        top: RH(-35),
    },
    com: {
        ...font('bold', 24, '#4D7CFE')
    },
    titleBlock: {marginLeft: 'auto', alignItems: 'center', marginTop: RH(50), marginRight: 'auto'}
})

export default styles;
