import React from 'react'
import {Text, View} from 'react-native'
import {styles} from "./styles"
import ScreenMask from '@/components/wrappers/screen'
import Button from "@/assets/imgs/Button";

const ResTeams = ({navigation}) => {
    return (
        <ScreenMask>
            <View>
                <View style={styles.itemBlockOne}>
                    <Text style={styles.com}>Команда 1</Text>
                    <Text style={styles.count}>Очки: 13</Text>
                </View>
                <View style={styles.line}></View>
                <View  style={styles.itemBlockTwo}>
                    <Text  style={styles.com}>Команда 2</Text>
                    <Text style={styles.count}>Очки: 13</Text>
                </View>
            </View>
            <View style={{alignItems:'center'}} >
                <Button onPress={() => navigation.navigate('ResTeamsElias')} size={styles.btn} label={'Продолжить'}/>
            </View>
        </ScreenMask>
    )
}

export default ResTeams
