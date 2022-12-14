import React from 'react';
import ScreenMask from "@/components/wrappers/screen";
import {FlatList, Text, TouchableOpacity, View} from "react-native";
import styles from  '../style'
import {RH, RW} from "@/theme/utils";
import style from "@/screens/Profile/Wallet/style";
import Button from "@/assets/imgs/Button";

function Index(props) {
    const list = [
        {id: 1, text: 'Продвижение игр'},
        {id: 2, text: 'История покупок'},
        {id: 3, text: 'Тарифы'},
    ]
    const LinkItem = ({item}) => (
        <TouchableOpacity style={item.id === 6 ? {...styles.linkBlock , borderBottomWidth: 1 , borderTopWidth: 0} : {...styles.linkBlock, borderBottomWidth: 0 , borderTopWidth: 1}}>
            <Text style={styles.linkText}>{item.text}</Text>
        </TouchableOpacity>
    );
    const renderItem = ({item}) => (
        <LinkItem item={item}/>
    );
    return (
        <ScreenMask>
                <Text style={{...styles.title , marginTop: RH(16) , marginBottom: RH(50)}}>Мой кошелек</Text>
                <View style={style.priceBlock}><Text style={style.balanceText}>Ваш баланс:</Text><Text style={style.price}>200 руб</Text></View>
                <FlatList
                    data={list}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
                <View style={style.buttonBlock}><Button size={{width: 281 , height: 48}} label={'Пополнить баланс'}/></View>
        </ScreenMask>
    );
}

export default Index;
