import React, {useEffect, useMemo,  useState} from "react";
import {Image, ScrollView, Text, LogBox, View} from "react-native";
import {font, RH, RW} from "@/theme/utils";
import Map from "@/components/inputs/map";
import Button from "@/assets/imgs/Button";
import FirstBlock from "@/components/forms/firstBlock";
import ThirdBlock from "@/components/forms/thirdBlock";
import ScreenMask from "@/components/wrappers/screen";
import Search from "@/components/inputs/search";
import style from "@/components/forms/style";

LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
]);


const GameCreating = (props) => {
    const {navigation, route} = props
    const data = route.params
    const [gameParams, setGameParams] = useState({
        game:route.params.game,
        gameDayTime:  undefined,
        lastDayTime: new Date(),
        addressValue: '',
        statusOrganizer: 'Весь состав команды',
        price: 'Бесплатно',
    });
    return (
        <ScreenMask>
            <View>
                <Text style={{...style.titles , marginTop: RH(42), marginBottom: RH(16)}}>Название команды соперника</Text>
                <Search width={RW(320)}/>
                <ThirdBlock data={gameParams} setData={setGameParams} list={[{id:1, text:'3:3', checked: true}, {id:3, text: '5:5', checked: false}, {id:4, text: '8:8', checked: false} , {id:5, text: '11:11', checked: false} , {id:6, text: 'Свой формат', checked: false}  ]} title={'Формат игры'}/>
                <FirstBlock  data={gameParams} setData={setGameParams} day={'gameDay'}
                             title={'Дата и время начала игры'}/>
                <View style={{marginTop: RH(20)}}>
                    <Map data={gameParams} setData={setGameParams} placeholder={'Геолокация игры'}/>
                </View>
                <ThirdBlock data={gameParams} setData={setGameParams} type={'price'}
                            list={[{id:1, text:'Бесплатно', checked: true}, {id:2, text: 'Платно', checked: false}]}
                            title={'Стоимость входного билета в игру'}/>
            </View>
            <View style={{marginTop:'auto', marginLeft:'auto', marginBottom:RH(20)}}>
                <Button onPress={()=>navigation.navigate('SearchRes' , {data})} size={{width:RW(144), height:RH(40)}} label={'Далее>>'}/>
            </View>
        </ScreenMask>
    )
}
export default GameCreating


