import React from 'react';
import ScreenMask from "@/components/wrappers/screen";
import {FlatList, Text, TouchableOpacity, View} from "react-native";
import styles from  '../style'
import {RH, RW} from "@/theme/utils";
import style from "@/screens/Profile/Wallet/style";
import Button from "@/assets/imgs/Button";

function Index(props) {
    const {navigation} = props
    const list = [
        {id: 1, text: 'Платные услуги' , navigationTo: 'PaidServices'},
        {id: 2, text: 'История'},
        {id: 3, text: 'Тарифы'},
    ]
    const LinkItem = ({item}) => (
        <TouchableOpacity onPress={() => navigation.navigate(item.navigationTo)} style={item.id === 3 ? {...styles.linkBlock , borderBottomWidth: 1 , borderTopWidth: 1} : {...styles.linkBlock, borderBottomWidth: 0 , borderTopWidth: 1}}>
            <Text style={styles.linkText}>{item.text}</Text>
        </TouchableOpacity>
    );
    const renderItem = ({item}) => (
        <LinkItem item={item}/>
    );
    return (
        <ScreenMask style={{paddingHorizontal: 0 ,}}>
                <Text style={{...styles.title , marginTop: RH(43) , marginLeft: 'auto', marginRight: 'auto', marginBottom: RH(50)}}>Мой кошелек</Text>
                <View style={style.priceBlock}><Text style={style.balanceText}>Ваш баланс:</Text><Text style={style.price}>0 руб</Text></View>
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
