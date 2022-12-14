import {StyleSheet} from "react-native";
import {font, RH, RW} from "@/theme/utils";
import {WHITE} from "@/theme/colors";

export const styles = StyleSheet.create({

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
        resizeMode:'contain',
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
    containerT: {
        backgroundColor: 'red',
    },
    centeredContent: {
        justifyContent: 'center',
        alignItems: 'center',
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
    receivingZone: {
        height: 200,
        borderRadius: 10,
    },
    incomingPayload: {
        marginTop: 10,
        fontSize: 24,
    },
    received: {
        marginTop: 10,
        fontSize: 18,
    },
    palette: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    draggableBox: {
        position: 'absolute',
        // borderRadius: 10,
    },
    detail: {
        width: 50,
        height: 50,
    },
    scrollBlock: {
        height: 100,
    },
    dragging: {
        opacity: 0.01,
    },
    hoverDragging: {
        borderColor: 'black',
        width: 50,
        height: 50,
        justifyContent: "center",
        alignItems: 'center',
        borderWidth: 2,
    },
    stagedCount: {
        fontSize: 18,
    },
    players: {
        backgroundColor: 'red',
        marginLeft: 10,
        width: 50,
        height: 50,
        marginTop: 'auto',
        marginBottom: 'auto'
    },
    comBg: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 100,
    },
    scrollList: {
        marginTop: 'auto',
        marginBottom: 'auto',
        alignItems: 'center',
        flexDirection: 'row',
        height: 50,
        backgroundColor: "black"
    },

})
