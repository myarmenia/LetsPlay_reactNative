import React, {useState} from "react"
import {View, Text, StyleSheet, ScrollView, Image, TouchableOpacity} from "react-native";
import ScreenMask from "@/components/wrappers/screen";
import {font, RH, RW} from "@/theme/utils";
import {ACTIVE, LIGHT_LABEL, WHITE} from "@/theme/colors"
import LightButton from "@/assets/imgs/Button";
import DarkButton from "@/assets/imgs/DarkButton";
import {useNavigation} from "@react-navigation/native";
// import {AddData} from "@/screens/Crocodile/screen/addPlayers/addData";
import {Players} from "@/assets/TestData";
import User from "@/assets/imgs/user/user";

const AddPlayer = () => {
    const navigation = useNavigation()
    const handlePerson = (ID) => {
        Players.find((item) => {
            if (item.id === ID) {
                navigation.navigate("PersonInfo")
            }
        })
    }


    return (
        <ScreenMask>

            <View style={styles.common}>
                <View style={styles.addedPlayers}>
                    <Text style={styles.addedPlayersText}>
                        Игроки добавились в игру
                    </Text>
                </View>
                <ScrollView>
                    <View style={styles.peopleInfo}>
                        {/*{*/}
                        {/*    AddData.map((item) => (*/}
                        {/*        <TouchableOpacity*/}
                        {/*            style={styles.imgView}*/}
                        {/*            key={item.id}*/}
                        {/*            onPress={() => handlePerson(item.id)}*/}
                        {/*        >*/}
                        {/*            <Image source={item.img} style={styles.img}/>*/}
                        {/*        </TouchableOpacity>*/}
                        {/*    ))*/}
                        {/*}*/}
                        {
                            Players.map((item, index) => (
                                <TouchableOpacity
                                    onPress={() => handlePerson(item.id)} key={index}
                                    style={styles.item}>
                                    <User user={item}/>
                                </TouchableOpacity>
                            ))
                        }
                    </View>
                </ScrollView>
                <View style={styles.btns}>
                    <View style={styles.conutinueBtn}>
                        <LightButton
                            label={"Продолжить"}
                            labelStyle={styles.countinueText}
                            size={{width: 281, height: 48}}
                            onPress={() => navigation.navigate("DifficultyLevel")}
                        />
                    </View>
                    <View>
                        <DarkButton
                            label={"Пригласить игроков"}
                            labelStyle={styles.inviteText}
                            size={{width: 281, height: 48}}

                        />
                    </View>
                </View>
            </View>
        </ScreenMask>
    )
}
const styles = StyleSheet.create({
    item: {
        padding: RW(3),
        marginTop: RH(30),
    },
    common: {
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: "center"
    },
    addedPlayers: {
        marginTop: RH(50)
    },
    addedPlayersText: {
        ...font("inter", 24, WHITE, 24),
        fontWeight: "700",
        marginBottom: RH(42)
    },
    imgView: {
        paddingHorizontal: RW(24.29),
        paddingVertical: RH(20),
    },
    img: {
        width: 76,
        height: 150,
        resizeMode: 'contain',
    }, peopleInfo: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btns: {
        marginTop: RH(45),
        marginBottom: RH(60)
    },
    conutinueBtn: {
        marginBottom: RH(45)
    },
    countinueText: {
        ...font("inter", 18, LIGHT_LABEL, 24),
        fontWeight: "700",
        alignItems: 'center',
        textAlign: "center",
        letterSpacing: 0.01
    },
    inviteText: {
        ...font("inter", 18, ACTIVE, 24)
    }

})
export default AddPlayer
