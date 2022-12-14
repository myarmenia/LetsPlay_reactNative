import React from 'react';
import {Image, ScrollView, Text, View} from "react-native";
import {styles} from "@/components/game/style";
import BgGamesLiner from "@/assets/imgs/games/BgGamesLiner";
import Border from "@/assets/imgs/games/Border";
import Button from "@/assets/imgs/Button";
import item from "@/screens/Auth/screens/SignUp/screens/Onboard/components/item";
import {useNavigation} from "@react-navigation/native";


function  Index(props) {
    const {data , setModalVisible , setGame , setFlag, onPress} = props
    const navigation = useNavigation()

    return (
        <View style={styles.bgFon}>
            <View style={{...styles.border, ...styles.leftBorder}}>
                <Border/>
            </View>
            <View style={{...styles.border, ...styles.rightBorder}}>
                <Border/>
            </View>
            <View style={styles.bgGamesLiner}>
                <BgGamesLiner/>
            </View>
            <View style={styles.title}>
                <Image source={data.image} style={styles.image}/>
            </View>
            <View style={styles.btn} >
                <Button
                    onPress={() => {
                        onPress?onPress():null
                        data.navigateTo?navigation.navigate(data.navigateTo, {game: data}):null;
                    }}
                    label={data.title}
                    size={{width: 191, height: 48}}/>
            </View>
        </View>
    );
}

export default Index;
