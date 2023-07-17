import {StyleSheet} from "react-native";
import {font, RH, RW} from "@/theme/utils";
import {WHITE} from "@/theme/colors";

export  const styles = StyleSheet.create({
    btn:{
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:RH(85)
    },
    titleBlock:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
    imageBlock:{
        width:RW(50),
        height:RW(50),
        borderRadius:RW(50),
        marginRight:RW(15),
    },
    image:{
        width:'100%',
        height:'100%',

        borderRadius:RW(50)
    },
    title: {
        textAlign: 'center',
        ...font('bold', 24, WHITE),
        marginVertical:RH(30)
    },
    scroll: {
        marginRight: 'auto',
        marginLeft: 'auto',
        width: RW(310),
        height: RH(600),
        flexGrow: 0,
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
    },

    item: {
        padding:RW(3),
        marginTop: RH(30),
    },
    activeItem:{
        padding:RW(3),
        marginTop: RH(30),
        borderWidth:1,
        borderColor:'#7DCE8A',
        borderRadius:RW(15)
    },

})
