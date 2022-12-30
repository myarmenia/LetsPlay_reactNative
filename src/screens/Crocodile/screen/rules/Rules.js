import React, {useState} from "react"
import {View, Text, StyleSheet, Image} from "react-native";
import ScreenMask from "@/components/wrappers/screen";
import Index from "@/components/modal";
import {font, RH, RW} from "@/theme/utils";
import {LIGHT_LABEL, WHITE} from "@/theme/colors";
import QrCode from "@/screens/Elias/QrCode";
import {useNavigation} from "@react-navigation/native";
import Modal from "@/components/modal";
import QrTest from "@/assets/imgs/qrTest.jpg";
import Button from "@/assets/imgs/Button";

const Rules = ({navigationProps, label}) => {
    const [modalRules, setModalRules] = useState(true)
    const navigation = useNavigation()
    return (
        <ScreenMask>
            <View style={styles.common}>
                <View style={styles.body}>
                    <Modal
                        modalVisible={modalRules}
                        setIsVisible={setModalRules}
                        item={<View style={styles.modalRules}>
                            <Text style={styles.rulesText}>
                                 "Правила"
                            </Text>
                            <Text style={styles.wordGame}>
                                Словесная игра «Крокодил».
                            </Text>
                            <Text style={styles.wordGame}>
                                Цель и задачи – нужно показать загаданное слово, используя только жесты и мимику.
                            </Text>
                            <Text style={styles.wordGame}>
                                Есть два варианта этой игры — индивидуальный и командный.
                            </Text>
                            <Text style={styles.wordGame}>
                                Индивидуальный - игрок показывает загаданное слово остальным игрокам. Кто отгадает получит
                                право показывать следующее слово или любой другой игрок на усмотрение игрока, который
                                показывал угаданное слово.
                            </Text>
                            <Text style={styles.wordGame}>
                                Командный - все игроки делятся на две команды. Начинает первая команда. Игрок от первой
                                команды получает загаданное слово и он должен показать его участникам своей команды за
                                определенное время. За угаданное слово команда получает 1 балл.
                            </Text>
                            <Text style={styles.wordGame}>
                                Далее показывает вторая команда. Выигрывает та команда, которая быстрее наберет заранее
                                определенное колличество баллов.
                            </Text>
                            <Text style={styles.wordGame}>
                                Количество игроков должно быть не менее 3 человек.
                            </Text>
                            <Text style={styles.wordGame}>
                                Удачной игры!
                            </Text>
                        </View>}
                    />
                    <Text style={styles.title}>Пригласить игроков</Text>
                    <View style={styles.qrBlock}>
                        <Image style={styles.qr} source={QrTest}/>
                    </View>
                    <Button
                        onPress={() => navigation.navigate("AddPlayer")}
                        size={styles.btn}
                        label={'Продолжить'}
                    />
                </View>
            </View>
        </ScreenMask>
    )
}
const styles = StyleSheet.create({
    modalRules: {
        width: RW(358),
        backgroundColor: LIGHT_LABEL,
        borderRadius: RW(20),
        paddingHorizontal: RW(18),
        marginHorizontal:RW(15)

    },
    body: {
        marginTop: RW(125),
        marginLeft: 'auto',
        marginRight: 'auto',
        alignItems: 'center',
    },
    title: {
        color: WHITE,
        textAlign: 'center',
        fontSize: 24,
    },
    qrBlock: {
        width: RW(281),
        height: RH(280),
        marginTop: RH(127),
        marginBottom: RH(90),
    },
    qr: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    btn: {
        width: 281,
        height: 48,
    },
    rulesText: {
        ...font("inter", 24, WHITE, 24),
        fontWeight: "700",
        textAlign: "center",
        marginTop: RH(42),
        marginBottom: RH(40)
    },
    wordGame: {
        ...font("inter", 16, WHITE, 19),
        fontWeight: "400",
        textAlign: "center",
        marginBottom: RH(20)
    }
})
export default Rules
