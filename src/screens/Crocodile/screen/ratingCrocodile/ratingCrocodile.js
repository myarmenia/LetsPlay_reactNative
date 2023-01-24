import React from 'react'
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native'
import ScreenMask from "@/components/wrappers/screen";
import VectorIcon from "@/assets/svgs/vectorSvg";
import {font, RH, RW} from "@/theme/utils";
import {ICON, WHITE} from "@/theme/colors";
import {RatingsDataCrocodile} from "@/screens/Crocodile/screen/ratingCrocodile/ratingsCrocodileData";
import LightButton from "@/assets/imgs/Button";
import {useNavigation} from "@react-navigation/native";
import {Players} from "@/assets/TestData";
import User from "@/assets/imgs/user/user";

const RatingsCrocodile = () => {
    const navigation = useNavigation()
    return (
        <ScreenMask>
            <ScrollView>
                <View>
                    <View style={styles.ratingsView}>
                        <Text style={styles.ratingsText}> Рейтинги игроков</Text>
                        <View style={styles.vectorView}>
                            <VectorIcon/>
                        </View>
                    </View>
                    <View style={styles.ratingsCommon}>
                        <ScrollView style={styles.scrollList}>
                            {
                                Players.map((item) => (
                                    <View style={styles.ratingsPlayers} key={item.id}>
                                        <View style={styles.imgView}>
                                            <User user={item}/>
                                        </View>
                                        <View style={styles.definedView}>
                                            <Text style={styles.RatingsText}>Показал слов</Text>
                                            <Text style={styles.definedText}>{item.participant}</Text>
                                        </View>
                                    </View>
                                ))
                            }
                        </ScrollView>
                    </View>
                    <View style={styles.btns}>
                        <View style={styles.btnsView}>
                            <LightButton
                                size={{width: 281, height: 48}}
                                labelStyle={styles.invitePlayers}
                                label={'Завершить игру'}
                                onPress={() => navigation.navigate("Home")}
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </ScreenMask>
    )
}

const styles = StyleSheet.create({
    imgView:{
      marginVertical:5
    },
    scrollList:{
        height:RH(620),
        marginBottom:RH(40)
    },
    ratingsView: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: RW(34)
    },
    ratingsText: {
        ...font("inter", 24, ICON, 24),
        fontWeight: "700",
        letterSpacing: 0.01
    },
    vectorView: {
        marginLeft: RW(30)
    },
    img: {
        width: "100%",
        height: "100%"
    },
    ratingsPlayers: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        // marginVertical: RH(21)
    },
    definedView: {
        marginLeft: RW(15),
        justifyContent: "flex-end",
        alignItems: "flex-start",
        // marginTop: RH(12)
    },
    definedText: {
        ...font("inter", 16, WHITE, 20),
        fontWeight: "600",
        marginBottom: RH(5)
    },
    RatingsText: {
        ...font("inter", 16, WHITE, 20),
        fontWeight: "600",
        marginBottom:RH(10)
    },
    ratingsCommon: {
        paddingHorizontal: RW(15)
    },
    btns: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    btnsView: {
        marginBottom: RH(24)
    }
})
export default RatingsCrocodile
