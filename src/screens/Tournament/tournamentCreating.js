import React, { useEffect, useMemo, useState } from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import style from '../GameCreating/style'
import { font, RH, RW } from '@/theme/utils'
import Map from '@/components/inputs/map'
import Button from '@/assets/imgs/Button'
import Price from '@/components/inputs/price'
import Modal from '@/components/modal'
import FirstBlock from '@/components/forms/firstBlock'
import SecondBlock from '@/components/forms/secondBlock'
import ThirdBlock from '@/components/forms/thirdBlock'
import ScreenMask from '@/components/wrappers/screen'
import DarkButton from '@/assets/imgs/DarkButton'
const TournamentCreating = props => {
    const { navigation, route } = props
    const {isTeam} = route.params
    // const navigation = useNavigation()
    const initialState = {
        gameDayDate: undefined,
        gameDayTime: new Date(),
        playerCountFrom: '',
        playerCountTo: '',
        ageFrom: '',
        ageTo: '',
        gender: 'М/Ж',
        addressValue: 'qwert',
        lastDayDate: undefined,
        lastDayTime: new Date(),
        statusOrganizer: 'Участвует',
        price: 'Бесплатно',
        priceValue: '',
        prizeFund: 'Да'
    }
    const [data, setData] = useState(initialState)
    const [errorText, setErrorText] = useState(false)
    const [flag, setFlag] = useState(false)
    const [isVisible, setIsVisible] = useState(false)
    const handleClick = () => {
        if (
            !data.gameDayDate ||
            +data.playerCountFrom < 1 || +data.playerCountFrom > +data.playerCountTo ||
            !data.playerCountFrom || !data.playerCountTo ||
            +data.ageFrom < 1 || +data.ageFrom > +data.ageTo ||
            !data.ageFrom || !data.ageTo ||
            !data.lastDayDate ||
            data.lastDayDate >= data.gameDayDate ||
            (!data.priceValue && flag)
        ) {
            setIsVisible(false)
        } else {
            setIsVisible(true)
        }
        setErrorText(true)
    }
    const handleSubmit = () => {
        navigation.navigate('MyTeamForTur' , {flag , isTeam})
        setIsVisible(false)
    }
    useEffect(() => {
        setErrorText(false)
    }, [data])
    return (
        <ScreenMask>
            <ScrollView showsVerticalScrollIndicator={false}>
                <FirstBlock
                    errorText={errorText}
                    data={data}
                    setData={setData}
                    day={'gameDay'}
                    margin={RH(29)}
                    title={'Дата и время начала турнира'}
                />
                {errorText && !data.gameDayDate ? (
                    <Text style={style.errorText}>Обязательное поле для заполнения</Text>
                ) : null}
                <SecondBlock type={'player'} data={data} setData={setData} title={'Количество участников'} />
                {errorText && (+data.playerCountFrom < 1 || +data.playerCountFrom > +data.playerCountTo) ? (
                    !data.playerCountFrom || !data.playerCountTo ? (
                        <Text style={style.errorText}>Обязательное поле для заполнения</Text>
                    ) : (
                        <Text style={style.errorText}>Введите корректную число</Text>
                    )
                ) : null}
                <SecondBlock type={'age'} data={data} setData={setData} title={'Возрастные ограничения'} />
                {errorText && (+data.ageFrom < 1 || +data.ageFrom > +data.ageTo) ? (
                    !data.ageFrom || !data.ageTo ? (
                        <Text style={style.errorText}>Обязательное поле для заполнения</Text>
                    ) : (
                        <Text style={style.errorText}>Введите корректную возраст</Text>
                    )
                ) : null}
                <ThirdBlock
                    data={data}
                    setData={setData}
                    type={'gender'}
                    list={[
                        { id: 1, text: 'М', checked: false },
                        { id: 2, text: 'Ж', checked: false },
                        { id: 3, text: 'М/Ж', checked: true },
                    ]}
                    title={'Половой признак участника'}
                />
                <Map data={data} setData={setData} placeholder={'Адрес проведения турнира'} availablePress={false} />
                <FirstBlock
                    data={data}
                    setData={setData}
                    gameDayDate={data.gameDayDate}
                    day={'lastDay'}
                    title={'Дата и время окончания поиска участников'}
                />
                {errorText && !data.lastDayDate ? (
                    <Text style={style.errorText}>Обязательное поле для заполнения</Text>
                ) : errorText && data.lastDayDate >= data.gameDayDate ? (
                    <Text style={style.errorText}>Введите корректную дату</Text>
                ) : null}
                <ThirdBlock
                    data={data}
                    setData={setData}
                    type={'prizeFund'}
                    setFlag={setFlag}
                    list={[
                        { id: 1, text: 'Да', checked: true },
                        { id: 2, text: 'Нет', checked: false },
                    ]}
                    title={'Призовой фонд'}
                />
                <ThirdBlock
                    data={data}
                    setData={setData}
                    type={'statusOrganizer'}
                    list={[
                        { id: 1, text: 'Участвует', checked: true },
                        { id: 2, text: 'Не участвует', checked: false },
                    ]}
                    title={'Статус организатора в турнире'}
                />
                <ThirdBlock
                    data={data}
                    setData={setData}
                    type={'priceView'}
                    setFlag={setFlag}
                    list={[
                        { id: 1, text: 'Бесплатно', checked: true },
                        { id: 2, text: 'Платно', checked: false },
                    ]}
                    title={'Стоимость входного билета на турнир'}
                />
                {flag ? (
                    <View style={style.price}>
                        <Price
                            data={data}
                            setData={setData}
                            sliceNumber={13}
                            text={'Сумма оплаты '}
                            margin={RW(18)}
                            width={RW(210)}
                            placeholder={'Сумма оплаты 200р.'}
                        />
                    </View>
                ) : null}
                {errorText && !data.priceValue && flag ? (
                    <Text style={style.errorText}>Обязательное поле для заполнения</Text>
                ) : null}
                <View style={{position: 'absolute'}}>
                <Modal
                    modalVisible={isVisible}
                    setIsVisible={setIsVisible}
                    item={(
                            <View style={style.topBlock}>
                                <Text style={style.text}>Хотите, чтобы Ваша игра была в ТОП играх ?</Text>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        width: RW(220)
                                    }}
                                >
                                    <Button
                                        light={true}
                                        onPress={handleSubmit}
                                        size={{ width: 100, height: 36 }}
                                        label={'Да'}
                                    />
                                    <DarkButton
                                        light={false}
                                        onPress={handleSubmit}
                                        size={{ width: 100, height: 36 }}
                                        label={'Нет'}
                                    />
                                </View>
                            </View>
                        )
                    }
                />
                </View>
                <View style={flag ? { ...style.submitBlock } : { ...style.submitBlock, marginTop: 20 }}>
                    <Button onPress={handleClick} size={{ width: 144, height: 36 }} label={'Готово'} />
                </View>
            </ScrollView>
        </ScreenMask>
    )
}
export default TournamentCreating
