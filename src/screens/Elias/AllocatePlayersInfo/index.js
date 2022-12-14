import React from 'react';
import {Text, View} from "react-native";
import ScreenMask from "@/components/wrappers/screen";
import User from "@/assets/imgs/user/user";
import {styles} from "@/screens/Elias/AllocatePlayersInfo/styles";
import Button from "@/assets/imgs/Button";
import DarkButton from "@/assets/imgs/DarkButton";

function Index(props) {
    const comOne = (props.route.params.comOne);
    const comTwo = (props.route.params.comTwo);
    const navigation=props.navigation;
    return (
        <ScreenMask>
            <View style={styles.body}>
                <Text style={styles.title}>Распределите игроков</Text>
                <View style={styles.comBlock}>
                    <Text style={styles.comTitle}>Название команды 1</Text>
                    <View style={styles.users}>
                        {comOne.map((item, i) => <User key={i} user={item}/>)}
                    </View>
                </View>
                <View style={styles.comBlock}>
                    <Text style={styles.comTitle}>Название команды 2</Text>
                    <View  style={styles.users}>
                        {comTwo.map((item, i) => <User key={i} user={item}/>)}
                    </View>
                </View>
            </View>
            <View style={{marginLeft: 'auto', alignItems:'center', marginTop: 130, marginRight: 'auto'}}>
                <Button onPress={() => navigation.navigate('SettingsElias', {comTwo, comOne})}
                        size={{width: 281, height: 48}}
                        label={'Продолжить'}/>
                <View style={{marginTop:20}}>
                    <DarkButton size={{width: 281, height: 48}} label={'Пригласить игроков'}/>
                </View>
            </View>
        </ScreenMask>
    );
}

export default Index;
