import React, {useState} from 'react';
import {Image, Text, View, TouchableOpacity} from "react-native";
import Modal from "@/components/modal";
import ScreenMask from "@/components/wrappers/screen";
import QrTest from '@/assets/imgs/qrTest.jpg';
import Button from "@/assets/imgs/Button";
import styles from '@/screens/Elias/DifficultyLevel/styles';

function Index({navigation, modalRules, setModalRules}) {
    const [selectLevel, setSelectLevel]=useState();

    const levels = [
        {
            title: 'Быстрая игра',
            level: 'Легкий'
        },
        {
            title: 'Оптимус',
            level: 'Средний'
        },
        {
            title: 'Мозговой штурм',
            level: 'Сложный'
        },
        {
            title: 'Рулетка',
            level: 'От простого до сложного'
        },
    ]
    return (
        <ScreenMask>
            <View style={styles.body}>
                <Text style={styles.title}>Уровень сложности</Text>
                <View>
                    {levels.map((item, i) => (
                        <TouchableOpacity key={i} onPress={()=>setSelectLevel(item)}>
                            <View style={styles.levelBlock} >
                                <Text style={styles.levelTitle}>{item.title}</Text>
                                <Text style={styles.level}>{item.level}</Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
                <View style={styles.btnBlock}>
                    <Button onPress={() => navigation.navigate('EliasStart')} size={styles.btn} label={'Продолжить'}/>
                </View>
            </View>
        </ScreenMask>
    );
}

export default Index;
