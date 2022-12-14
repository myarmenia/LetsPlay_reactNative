import React, {useEffect, useState} from 'react';
import ScreenMask from "@/components/wrappers/screen";
import {FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import style from './style'
import styles from '../style'
import {RH, RW} from "@/theme/utils";
import Detail from '@/assets/imgs/detail.png'
import Button from "@/assets/imgs/Button";


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
    const [data , setData] = useState(list)
    const count = [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6}]
    // const handleClick = (item) => {
    //     const newItem = {id: item.id , text: item.text , checked: item.checked}
    //     const newData = data.splice(item.id - 1 , 1 , newItem)
    //     setData(newData)
    //     console.log(data)
    //     console.log(data[item.id - 1].checked)
    //
    // }
    const PreferenceItem = ({item}) => {
        return(
        <TouchableOpacity style={style.nameButton}>
            <Text style={styles.linkText}>{item.text}</Text>
        </TouchableOpacity>
    )};
    const renderItem = ({item}) => (
        <PreferenceItem item={item}/>
    );
    const UserItem = ({item}) => (
        <TouchableOpacity>
            <Image source={Detail} resizeMode={'contain'} style={style.detail}/>
        </TouchableOpacity>
    );
    const renderItemTwo = ({item}) => (
        <UserItem item={item}/>
    );
    return (
        <ScreenMask>
            <View style={style.container}>
                <Text style={styles.title}>Мои подписки и предпочтения</Text>
                <View style={style.gameNamesBlock}>
                    <Text style={style.gameNamesTitle}>Предпочтения в играх</Text>
                    <View style={style.flatListBlock}>
                        <FlatList
                            columnWrapperStyle={style.flatList}
                            numColumns={3}
                            data={data}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                        />
                    </View>
                    <Text style={{...style.gameNamesTitle, marginBottom: RH(23)}}>Мои подписки на организаторов</Text>
                    <FlatList
                        columnWrapperStyle={{...style.flatList, marginBottom: RH(45)}}
                        numColumns={3}
                        data={count}
                        renderItem={renderItemTwo}
                        keyExtractor={item => item.id}
                    />
                    <View style={style.buttonBlock}><Button label={'Продолжить'} size={{width: 172, height: 48}}/></View>
                </View>
            </View>
        </ScreenMask>
    );
}

export default Index;
