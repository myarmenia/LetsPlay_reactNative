import React, {useState} from "react"
import {View, Text,StyleSheet} from "react-native";
import Index from "@/components/modal";
import {font, RH, RW} from "@/theme/utils";
import {LIGHT_LABEL, WHITE} from "@/theme/colors";
import ScreenMask from "@/components/wrappers/screen";
import {useNavigation} from "@react-navigation/native";


const AboutGameCrocodile = () => {
    const [modalRules, setModalRules] = useState(true)
    const navigation = useNavigation()
    return (
        <>
            <ScreenMask>
                <Index
                    modalVisible={modalRules}
                    setIsVisible={setModalRules}
                    navigation={navigation}
                    navigationText={"Teams"}
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
                    </View>
                    }
                />
            </ScreenMask>

        </>
    )
}
const styles = StyleSheet.create({
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
    },
    modalRules: {
        width: RW(358),
        backgroundColor: LIGHT_LABEL,
        borderRadius: RW(20),
        paddingHorizontal: RW(18),
        marginHorizontal:RW(15)

    },
})

export default AboutGameCrocodile
