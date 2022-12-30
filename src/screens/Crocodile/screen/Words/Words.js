import React, {useState} from "react"
import {View, Text, StyleSheet,Animated} from "react-native";
import { PanGestureHandler } from 'react-native-gesture-handler';
import ScreenMask from "@/components/wrappers/screen";
import LightButton from "@/assets/imgs/Button";
import {font, RH, RW} from "@/theme/utils";
import Type from "@/assets/imgs/type";
import {LIGHT_LABEL, WHITE} from "@/theme/colors";
import Index from "@/components/modal";
import {useNavigation} from "@react-navigation/native";

const Words = () => {
    const [modalRules, setModalRules] = useState(false)
    const [modal, setModal] = useState(false)
    const navigation = useNavigation()
    const translateY = new Animated.Value(0)
    const  onPanGestureEvent = Animated.event(
        [
            {
                nativeEvent: {
                    translationY: translateY,
                },
            },
        ],
        { useNativeDriver: true }
    );
    return (
        <ScreenMask>
            <View style={styles.common}>
                <View></View>
                <PanGestureHandler onGestureEvent={onPanGestureEvent}>
                <Animated.View style={[
                    {
                        transform: [
                            {
                                translateY: translateY,
                            },
                        ],
                    },
                ]}>
                    <Type
                        size={185}
                        title={"Слово"}
                        onPress={() => setModalRules(true)}
                    />
                </Animated.View>
                </PanGestureHandler>
                    <View style={styles.btn}>
                        <LightButton
                            label={"Стоп"}
                            size={{width: 98, height: 36}}
                            labelStyle={styles.labelStyle}
                            onPress={() => setModal(true)}
                        />
                    </View>

            </View>
            <Index
                modalVisible={modalRules}
                setIsVisible={setModalRules}
                item={
                    <View style={styles.modal}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>
                                Задача каждого игрока - объяснить как можно больше слов товарищам по команде за
                                ограниченное время
                                Задача каждого игрока - объяснить как можно больше слов товарищам по команде за
                                ограниченное
                                время
                                Задача каждого игрока - объяснить как можно больше слов товарищам по команде за
                                ограниченное
                                время
                            </Text>
                        </View>
                        <View style={styles.modalBtn}>
                            <Type
                                title={"ок"}
                                size={63}
                                onPress={() => setModalRules(false)}
                            />
                        </View>
                    </View>
                }
            />
            <Index
                modalVisible={modal}
                setIsVisible={setModal}
                item={
                    <View style={styles.modal}>
                        <View style={styles.word}>
                            <Text style={styles.wordText}>Слово отгадано!</Text>
                        </View>
                        <View style={styles.countinueBtn}>
                            <LightButton
                                label={"Продолжить"}
                                size={{width: 198, height: 36}}
                            />
                        </View>
                        <View style={styles.endBtn}>
                            <LightButton
                                label={"Завершить"}
                                size={{width: 198, height: 36}}
                                onPress={() => navigation.navigate("RatingsCrocodile")}
                            />
                        </View>
                    </View>
                }
            />
        </ScreenMask>

    )
}
const styles = StyleSheet.create({
    common: {
        width: "100%",
        height: '100%',
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center"
    },
    btn: {
        marginBottom: RH(50)
    },
    labelStyle: {
        ...font("inter", 18, LIGHT_LABEL, 24),
        fontWeight: "700"
    },
    modal: {
        marginHorizontal: RW(30),
        width: RW(306),
        backgroundColor: LIGHT_LABEL,
        borderRadius: RW(30),
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    modalView: {
        marginVertical: RW(27),
        marginHorizontal: RW(27)
    },
    modalText: {
        ...font("inter", 16, WHITE, 19),
        fontWeight: "400"
    },
    modalBtn: {
        marginBottom: RH(30)
    },
    word: {
        marginTop: RH(55),
        marginBottom: RH(26)
    },
    countinueBtn: {
        marginBottom: RH(25)
    },
    endBtn: {
        marginBottom: RH(39)
    },
    wordText: {
        ...font("inter", 18, WHITE, 27),
        fontWeight: "400",
        letterSpacingL: 0.005
    }
})
export default Words
