import React, {useEffect, useRef, useState} from 'react';
import {ScrollView, Text, View,} from "react-native";
import ScreenMask from "@/components/wrappers/screen";
import Modal from '@/components/modal';
import Button from '@/assets/imgs/Button';
import Elias from "@/assets/imgs/games/Elias.png";
import Poker from "@/assets/imgs/games/poker.png";
import Monopoly from '@/assets/imgs/games/monopolia.png';
import Crocodile from '@/assets/imgs/games/krokodil.png';
import MyGame from "@/assets/imgs/games/MyownGame.png";
import Mafia from '@/assets/imgs/games/mafia.png';
import Game from "@/components/game";
import {styles} from './style';
import {WHITE} from "@/theme/colors";
import DarkButton from "@/assets/imgs/DarkButton";
import {font} from "@/theme/utils";
import BtnCloseModal from "@/assets/imgs/btnCloseModal";

const Games = [
    {
        // type:'',
        // id:'',
        gadget:true,
        title: 'Элиас',
        image: Elias,
        navigateTo:'Elias'
    },    {
        // type:'',
        // id:'',
        gadget:false,
        title: 'Покер',
        image: Poker,
        navigateTo:'Poker'
    },
    {
        // type:'',
        // id:'',
        gadget:false,
        title: 'Монополия',
        image: Monopoly,
        navigateTo:'Monopoly'
    },
    {
        // type:'',
        // id:'',
        gadget:true,
        title: 'Крокодил',
        image: Crocodile,
        navigateTo:'Crocodile'
    },
    {
        // type:'',
        // id:'',
        gadget:true,
        title: 'Мафия',
        image: Mafia,
        navigateTo:'Mafia'
    },
    {
        // type:'',
        // id:'',
        gadget:false,
        title: 'Своя игра',
        image: MyGame,
        navigateTo:'MyGame'
    },


]

function Index(props) {

    const [isModalVisible, setModalVisible] = useState(true);
    const [gadgetGame, setGadgetGame]=useState(false)
    const [data, setData] = useState([]);

    const scrollRef = useRef();

    const onPressTouch = (scrollTo) => {
        scrollRef.current?.scrollTo({
            x: scrollTo,
            behavior:'auto',
            animated: false,
        })
    };


    useEffect(()=>{

        if(gadgetGame){
            const temp=Games.filter((item,i)=>item.gadget);
            setData(temp);
        }else setData(Games)
    },[isModalVisible])

    return (
      <ScreenMask>
          {isModalVisible?null: <ScrollView
                ref={scrollRef}

                onScrollEndDrag={(event) => +event.nativeEvent.contentOffset.x > data.length*(gadgetGame?240:300) ? onPressTouch(0) :+event.nativeEvent.contentOffset.x===0?onPressTouch(Games.length*322):null }
                horizontal={true}
                contentContainerStyle={{width: `${100 * data.length}%`}}
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={200}
                decelerationRate="fast"
                pagingEnabled
            >
                {data.map((item, i) =>
                    <Game key={i} data={item}/>
                )}
            </ScrollView>}
            <Modal modalVisible={isModalVisible} setGadgetGame={setGadgetGame} setIsVisible={setModalVisible} btnClose={true} item={
                <View style={styles.body}>
                    <BtnCloseModal onPress={()=>setModalVisible(false)} style={{marginLeft:'auto', marginBottom:10}} />
                    <Text style={styles.text} >
                        Если Вы хотите сыграть прямо сейчас и у Вас уже собраны игроки для игры, но нет игровых
                        атрибутов (карточек),
                        то используйте игровой алгоритм через свой гаджет. Играть с помощью гаджета ?
                    </Text>
                    <View style={styles.btn}>
                        <Button size={{width:100, height:36}} onPress={() => {setModalVisible(false), setGadgetGame(true)}} label={'Да'}  />
                        <DarkButton size={{width:100, height:36}}    onPress={() => setModalVisible(false)} label={'Нет'} labelStyle={font('bold',16,)} />
                    </View>
                </View>}/>
        </ScreenMask>
    );
}

export default Index;
