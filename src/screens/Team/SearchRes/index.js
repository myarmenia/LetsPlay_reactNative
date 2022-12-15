import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from "react-native";
import ScreenMask from "@/components/wrappers/screen";
import style from './style';
import BgMyTem from "@/assets/bgMyTem";

const team = [
    {
        id: '12345678',
        name: 'ФК Динамо',
        address: 'Пресненская наб. 25',
        image: 'https://kassir-ru.ru/d/screenshot_26.jpg',
        navigationTo: ""
    },

    {
        id: '1284778',
        name: 'ФК ЦСКА',
        address: 'Пресненская наб. 25',
        image: 'https://upload.wikimedia.org/wikipedia/ru/thumb/f/f4/FC_CSKA_Moscow_Logo.svg/1200px-FC_CSKA_Moscow_Logo.svg.png'
    },
    {
        id: '12345678',
        name: 'ФК Динамо',
        address: 'Пресненская наб. 25',
        image: 'https://kassir-ru.ru/d/screenshot_26.jpg',
        navigationTo: ""
    },
    {
        id: '1284778',
        name: 'ФК ЦСКА',
        address: 'Пресненская наб. 25',
        image: 'https://upload.wikimedia.org/wikipedia/ru/thumb/f/f4/FC_CSKA_Moscow_Logo.svg/1200px-FC_CSKA_Moscow_Logo.svg.png'
    },
    {
        id: '1284778',
        name: 'ФК ЦСКА',
        address: 'Пресненская наб. 25',
        image: 'https://upload.wikimedia.org/wikipedia/ru/thumb/f/f4/FC_CSKA_Moscow_Logo.svg/1200px-FC_CSKA_Moscow_Logo.svg.png'
    }
]


function Index({navigation}) {
    const item = (arr) => arr.map((item, i) =>
        <TouchableOpacity key={i} onPress={()=>(navigation.navigate("SearchTeamRes", item))}>
            <View  style={style.homeBlock}>
                <View style={{zIndex: 1, flexDirection: 'row', alignItems: 'center'}}>
                    <View style={style.imageBlock}>
                        <Image style={style.image} source={{uri: item.image}}/>
                    </View>
                    <View style={style.textBlock}>
                        <Text style={style.text}>{item.name}</Text>
                        <Text style={style.text}>{item.address}</Text>
                        <Text style={style.text}>({item.id})</Text>
                    </View>
                </View>
                <View style={{position: "absolute",}}>
                    <BgMyTem/>
                </View>
            </View>
        </TouchableOpacity>)

    return (
        <ScreenMask>
            <Text style={style.title}>Результат поиска</Text>
            <ScrollView>
                {item(team)}
            </ScrollView>
        </ScreenMask>
    );
}

export default Index;
