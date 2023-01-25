import React, {useEffect, useState} from 'react';
import ScreenMask from "@/components/wrappers/screen";
import {FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import style from './style'
import styles from '../style'
import {RH, RW} from "@/theme/utils";
import Detail from '@/assets/imgs/detail.png'
import Button from "@/assets/imgs/Button";
import {Players} from "@/assets/TestData";
import User from "@/assets/imgs/user/user";
import IsFollow from "@/assets/svgs/IsFollow";
import AddFollower from "@/assets/svgs/AddFolloerSvg";


function Index(props) {
    const list = [
        {id: 1, text: 'Футбол', checked: false},
        {id: 2, text: 'Навес', checked: false},
        {id: 3, text: 'Триста', checked: false},
        {id: 4, text: 'Баскетбол', checked: false},
        {id: 5, text: 'Волейбол', checked: false},
        {id: 6, text: 'Пионербол', checked: false},
        {id: 7, text: 'Хоккей', checked: false},
        {id: 8, text: 'Элиас', checked: false},
        {id: 9, text: 'Покер', checked: false},
        {id: 10, text: 'Монополия', checked: false},
        {id: 11, text: 'Крокодил', checked: false},
        {id: 12, text: 'Мафия', checked: false},
        {id: 13, text: 'Своя игра', checked: false},
    ]
    const [flag , setFlag] = useState(true)
    const [game, setGame] = useState([]);


    const PreferenceItem = ({item}) => {
        const handlerActiveUser = () => {
            if (game.includes(item.id)) {
                const temp = game.filter((ev, i) => ev !== item.id);
                setGame(temp)
            } else {
                setGame([...game, item.id])
            }
        }
        return(
        <TouchableOpacity onPress={handlerActiveUser} style={game.includes(item.id) ? style.nameButton : style.nameButtonTwo }>
            <Text style={styles.linkText}>{item.text}</Text>
        </TouchableOpacity>
    )};
    const renderItem = ({item}) => (
        <PreferenceItem item={item}/>
    );
    const UserItem = ({item}) => (
        <User size={100} user={Players[item.id - 1]} onPressItem={{
            item: <View style={style.followerModal}>
                    <User user={Players[item.id - 1]} size={250}/>
                    <View style={style.followerModalTextBLock}>
                         <Text style={style.followerModalText}>Вы подписаны на этого {"\n"}игрока</Text>
                         <TouchableOpacity onPress={() => setFlag(!flag)} style={style.modalSvg}><IsFollow/></TouchableOpacity>
                    </View>
                  </View>,
            modalClose:false,
        }}/>
    );
    const renderItemTwo = ({item}) => (
        <UserItem item={item}/>
    );
    return (
        <ScreenMask>
            <View style={style.container}>
                <Text style={styles.title}>Мои предпочтения</Text>
                <View style={style.gameNamesBlock}>
                    <Text style={style.gameNamesTitle}>Предпочтения в играх</Text>
                    <View style={style.flatListBlock}>
                        <FlatList
                            nestedScrollEnabled
                            columnWrapperStyle={style.flatList}
                            numColumns={3}
                            data={list}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                        />
                    </View>
                    <Text style={{...style.gameNamesTitle, marginBottom: RH(23)}}>Мои подписки на организаторов</Text>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        columnWrapperStyle={{...style.flatList, marginBottom: RH(45)}}
                        numColumns={3}
                        style={{height: RH(400)}}
                        data={Players}
                        renderItem={renderItemTwo}
                        keyExtractor={item => item.id}
                    />
                </View>
            </View>
        </ScreenMask>
    );
}

export default Index;
