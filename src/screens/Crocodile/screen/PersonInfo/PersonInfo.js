import React, {useState} from "react"
import {View, Text, StyleSheet, Image} from "react-native";
import ScreenMask from "@/components/wrappers/screen";
import {font, RH} from "@/theme/utils";
import {WHITE} from "@/theme/colors";
import LightButton from "@/assets/imgs/Button";
import {useNavigation} from "@react-navigation/native";


const PersonInfo = () => {
    const navigation = useNavigation()


    return (
        <ScreenMask>
            <View style={styles.common}>
                <View style={styles.nameSrName}>
                    <Text style={styles.nameSrNameText}>
                        Имя Фамилия
                    </Text>
                </View>
                <View style={styles.imageView}>
                    <Image source={require("@/assets/imgs/detail.png")}/>
                </View>
                <View>
                    <LightButton
                        label={"Назад"}
                        size={{width: 281, height: 48}}
                        onPress={() => navigation.goBack("AddPlayer")}
                    />
                </View>

            </View>
        </ScreenMask>
    )
}
const styles = StyleSheet.create({
    common: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    nameSrName: {
        marginTop: RH(100)
    },
    nameSrNameText: {
        ...font("inter", 24, WHITE, 24),
        fontWeight: "700",
        letterSpacing: 0.01
    },
    imageView: {
        marginTop: RH(91),
        marginBottom: RH(101)
    }
})
export default PersonInfo
