import React, {useState} from "react";
import {Text, View, StyleSheet, TouchableOpacity} from "react-native";
import ScreenMask from "@/components/wrappers/screen";
import Button from "@/assets/imgs/Button";
import {useNavigation} from "@react-navigation/native";
import {font, RH, RW} from "@/theme/utils";
import {WHITE} from "@/theme/colors";
import {levels} from "@/assets/TestData";
import DifficultyLevel from "@/components/DifficultyLevel";


const Difficulty = () => {
    const [selectLevel, setSelectLevel] = useState(false)
    const navigation = useNavigation();

    return (
        <ScreenMask>
            <View style={styles.body}>
                <Text style={styles.title}>Уровень сложности</Text>
                <DifficultyLevel levels={levels} selectLevel={selectLevel} setSelectLevel={setSelectLevel}/>
                <View style={styles.btnBlock}>
                    <Button
                        onPress={() => navigation.navigate('Teams')}
                        size={styles.btn}
                        label={'Продолжить'}
                    />
                </View>
            </View>
        </ScreenMask>
    )
}
const styles = StyleSheet.create({
    title: {
        ...font('bold', 24, WHITE),
        textAlign: 'center',
        marginBottom: RW(55),
        marginTop: RH(20),
    },
    btn: {
        width: 281,
        height: 48,
    },
    levelBlock: {
        padding: RW(10),
        marginVertical: RH(10),
        backgroundColor: '#657AC5',
        borderRadius: 20,
    },
    levelTitle: {
        ...font('bold', 16, WHITE),
        marginVertical: RH(10),
    },
    level: {
        ...font('bold', 10, WHITE),
        marginVertical: RH(5),
    },
    btnBlock: {
        alignItems: 'center',
        marginTop: RH(155),
    },
})
export default Difficulty;
