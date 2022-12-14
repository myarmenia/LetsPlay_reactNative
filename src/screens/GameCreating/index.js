import React, {useEffect, useMemo, useState} from "react";
import {Image, ScrollView, Text, View} from "react-native";
import style from "./style";
import {font, RH, RW} from "@/theme/utils";
import Map from "@/components/inputs/map";
import Button from "@/assets/imgs/Button";
import Price from "@/components/inputs/price";
import Modal from "@/components/modal";
import FirstBlock from "@/components/forms/firstBlock";
import SecondBlock from "@/components/forms/secondBlock";
import ThirdBlock from "@/components/forms/thirdBlock";
import ScreenMask from "@/components/wrappers/screen";
import DarkButton from "@/assets/imgs/DarkButton";


const GameCreating = (props) => {
    const {navigation , game} = props
    // const navigation = useNavigation()
    const text = [
        "Увлекательная командная игра для весёлой компании",
        "Задача каждого игрока - объяснить как можно больше слов товарищам по команде за ограниченное время",
        "Во время объяснение нельзя использовать однокоренные слова озвучивать перевод с иностранных языков",
        "Отгаданные слово приносит команде одно очко, за пропущенное слово команда штрафуется в зависимости от настроек",
        "Победителем становится команда у которой количество очков достигла заранее установленного значения"
    ]
    const initialState = {
        gameDayDate: undefined,
        gameDayTime: new Date(),
        playerCountFrom: '',
        playerCountTo: '',
        ageFrom: '',
        ageTo: "",
        gender: 'М/Ж',
        addressValue: 'qwert',
        lastDayDate: undefined,
        lastDayTime: new Date(),
        statusOrganizer: 'Участвует',
        price: 'Бесплатно',
        priceValue: '',
    }
    const [data, setData] = useState(initialState);
    const [errorText, setErrorText] = useState(false)
    const [flag, setFlag] = useState(false)
    const [modalOpen, setModalOpen] = useState(true)
    const [isVisible, setIsVisible] = useState(false);
    const handleClick = () => {
        if(!data.gameDayDate ||
            (+data.playerCountFrom < 1 || +data.playerCountFrom > +data.playerCountTo) ||
            (!data.playerCountFrom || !data.playerCountTo) ||
            (+data.ageFrom < 1 || +data.ageFrom > +data.ageTo) ||
            (!data.ageFrom || !data.ageTo) ||
            !data.lastDayDate ||
            data.lastDayDate >= data.gameDayDate ||
            (!data.priceValue && flag)) {
            setIsVisible(false)
        }else {
            setIsVisible(true)
        }
        setErrorText(true)
        setModalOpen(false)
    }
    const handleSubmit = () => {
        navigation.navigate("GameTicket", {flag})
        setModalOpen(true)
        setIsVisible(false)
    }
    useMemo(() => {
        setIsVisible(true)
    }, [])
    useEffect(() => {
        setErrorText(false)
    }, [data])
    return (
        <ScreenMask>
            <ScrollView showsVerticalScrollIndicator={false}>
                <FirstBlock errorText={errorText} data={data} setData={setData} day={'gameDay'} margin={RH(29)} title={'Дата и время начала игры'}/>
                {errorText && !data.gameDayDate ? <Text style={style.errorText}>Обязательное поле для заполнения</Text> : null}
                <SecondBlock type={'player'} data={data} setData={setData} title={'Количество игроков'}/>
                {errorText && (+data.playerCountFrom < 1 || +data.playerCountFrom > +data.playerCountTo) ? (!data.playerCountFrom || !data.playerCountTo ?
                    <Text style={style.errorText}>Обязательное поле для заполнения</Text> :
                    <Text style={style.errorText}>Введите корректную дату</Text>) : null}
                <SecondBlock type={'age'} data={data} setData={setData} title={'Возрастные ограничения'}/>
                {errorText && (+data.ageFrom < 1 || +data.ageFrom > +data.ageTo) ? (!data.ageFrom || !data.ageTo ?
                    <Text style={style.errorText}>Обязательное поле для заполнения</Text> :
                    <Text style={style.errorText}>Введите корректную дату</Text>) : null}
                <ThirdBlock data={data} setData={setData} type={'gender'}
                            list={[[1, 'М', false], [2, 'Ж', false], [3, 'М/Ж', true]]}
                            title={'Половой признак игрока'}/>
                <Map data={data} setData={setData} placeholder={'Адрес проведения игры'}/>
                <FirstBlock data={data} setData={setData} gameDayDate={data.gameDayDate} day={'lastDay'}
                            title={'Дата и время окончания поиска игроков'}/>
                {errorText && !data.lastDayDate ? <Text style={style.errorText}>Обязательное поле для
                    заполнения</Text> : errorText && data.lastDayDate >= data.gameDayDate ?
                    <Text style={style.errorText}>Введите корректную дату</Text> : null}
                <ThirdBlock data={data} setData={setData} type={'statusOrganizer'}
                            list={[[1, 'Участвует', true], [2, 'Не участвует', false]]}
                            title={'Статус организатора в игре'}/>
                <ThirdBlock data={data} setData={setData} type={'priceView'} setFlag={setFlag}
                            list={[[1, 'Бесплатно', true], [2, 'Платно', false]]}
                            title={'Стоимость входного билета на игру'}/>
                {flag ? <View style={style.price}><Price data={data} setData={setData} sliceNumber={13}
                                                         text={'Сумма оплаты '} margin={RW(18)} width={RW(210)}
                                                         placeholder={'Сумма оплаты 200р.'}/></View> : null}
                {errorText && (!data.priceValue && flag) ?
                    <Text style={style.errorText}>Обязательное поле для заполнения</Text> : null}
                <Modal modalVisible={isVisible} setIsVisible={setIsVisible} btnClose={false}
                       item={modalOpen ?
                           <View style={style.regulationBlock}>
                               <Text style={style.title}>Правила</Text>
                               {text.map((ev) => <Text key={ev} style={style.textTwo}>{ev}</Text>)}
                           </View>
                           : <View style={style.topBlock}>
                               <Text style={style.text}>Хотите, чтобы Ваша игра была в ТОП играх ?</Text>
                               <View style={{
                                   flexDirection: 'row',
                                   justifyContent: 'space-between'
                               }}><Button light={true}  onPress={handleSubmit} size={{width: 100, height: 36}}
                                          label={'Да'}/>
                                   <DarkButton light={false}  onPress={handleSubmit} size={{width: 100, height: 36}}
                                               label={'Нет'}/>
                               </View>
                           </View>}
                />
                <View style={flag ? {...style.submitBlock} : {...style.submitBlock, marginTop: 20}}><Button
                    onPress={handleClick} size={{width: 144, height: 36}} label={'Готово'}/></View>

            </ScrollView>
        </ScreenMask>
    )
}
export default GameCreating
