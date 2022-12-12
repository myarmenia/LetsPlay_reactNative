import React from "react";
import {View,TextInput,StyleSheet} from "react-native"
import ScreenMask from "@/components/wrappers/screen";
import {RH, RW} from "@/theme/utils";
import {BACKGROUND, ICON} from "@/theme/colors";

const CreateTeamTitle =()=>{
    return(
        <ScreenMask>
            <View>
                <View style={styles.inputsView}>
                    <TextInput
                    placeholder={"Название команды"}
                    placeholderTextColor={ICON}
                    style={styles.inputs}
                    />
                    <TextInput
                    placeholder={"Адрес нахождения команды"}
                    style={styles.inputs}
                    placeholderTextColor={ICON}
                    />
                </View>

            </View>
        </ScreenMask>

    )
}
const styles =StyleSheet.create({
    inputsView:{
        marginVertical:RH(100),
        marginHorizontal:RW(20),
        width:RW(375)
    },
    inputs:{
        borderWidth:RW(0),
        backgroundColor:BACKGROUND,
        borderRadius:RW(10),
        padding:RW(12),
        marginVertical:RH(20),
        color:ICON
    }
})
export default CreateTeamTitle
