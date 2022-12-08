import React, {useState, useRef} from 'react';
import {Button, Image, ScrollView, Text, View} from "react-native";
import ScreenMask from "@/components/wrappers/screen";
import Soccer from "@/assets/imgs/games/soccer.png";
import Naves from "@/assets/imgs/games/naves.png";
import Trista from "@/assets/imgs/games/trist.png";
import Basketball from "@/assets/imgs/games/Basketball.png";
import Volleyball from "@/assets/imgs/games/Volleyball.png";
import Pioneerball from "@/assets/imgs/games/Pioneerball.png";
import Quest from "@/assets/imgs/games/Quest.png";
import Hokey from "@/assets/imgs/games/Hokey.png";
import MyownGame from "@/assets/imgs/games/MyownGame.png";
import Game from "@/components/game";


const ActiveGames = [
    {
        // type:'',
        // id:'',
        title: 'Футбол',
        image: Soccer,
    },
    {
        // type:'',
        // id:'',
        title: 'Навес',
        image: Naves,
    },
    {
        // type:'',
        // id:'',
        title: 'Триста',
        image: Trista,
    },
    {
        // type:'',
        // id:'',
        title: 'Баскетбол',
        image: Basketball,
    },
    {
        // type:'',
        // id:'',
        title: 'Волейбол ',
        image: Volleyball,
    },
    {
        // type:'',
        // id:'',
        title: 'Пионербол ',
        image: Pioneerball,
    },
    {
        // type:'',
        // id:'',
        title: 'Пионербол ',
        image: Hokey,
    },
    {
        // type:'',
        // id:'',
        title: 'Квест ',
        image: Quest,
    },
    {
        // type:'',
        // id:'',
        title: 'Своя игра ',
        image: MyownGame,
    },
]

function Index(props) {

    const scrollRef = useRef();

    const [isModalVisible, setModalVisible] = useState(false);

    const onPressTouch = (scrollTo) => {
        scrollRef.current?.scrollTo({
            x: scrollTo,
            behavior: 'auto',
            animated: false,
        })
    };
    return (
        <ScreenMask>
            <ScrollView
                ref={scrollRef}
                onScrollEndDrag={(event) => +event.nativeEvent.contentOffset.x > ActiveGames.length * 322 ? onPressTouch(0) : +event.nativeEvent.contentOffset.x === 0 ? onPressTouch(ActiveGames.length * 322) : null}
                horizontal={true}
                contentContainerStyle={{width: `${100 * ActiveGames.length}%`}}
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={200}
                decelerationRate="fast"
                pagingEnabled
            >
                {ActiveGames.map((item, i) =>
                    <Game setModalVisible={setModalVisible} key={i} data={item}/>
                )}
            </ScrollView>
        </ScreenMask>)
}

export default Index;
