import React, {useEffect, useMemo, useState} from 'react'
import {Image, Text, View, StyleSheet, TouchableOpacity} from 'react-native'
import {RH, RW} from '@/theme/utils'
import ScreenMask from '@/components/wrappers/screen'
import {ScrollView} from 'react-native-gesture-handler'
import OrganizerSvg from '@/assets/svgs/OrganizerSvg'
import GestureRecognizer from 'react-native-swipe-gestures'
import LightButton from '@/assets/imgs/Button'
import style from '@/screens/GameCreating/style'
import Modal from '@/components/modal'
import Wave from "@/screens/Game/gamesDatas.js/gameSVGs/wave";


function TournamentTicket(props) {
    const {navigation, route} = props
    const [isVisible, setIsVisible] = useState(false)
    const [modalClose, setModalClose] = useState(true)

    return (
        <ScreenMask>
            <View style={{height: '100%'}}>
                <GestureRecognizer
                    onSwipeRight={(state) => navigation.goBack()}
                    style={{height: '100%'}}
                >
                    <View style={styles.svg}>
                        <Image style={{ width: RW(220) , height: RW(220)}} source={require('../Game/gamesDatas.js/gamePics/Футбол.png')}/>
                    </View>

                    <View>
                        <View style={styles.firstTextBlock}>
                            <Text style={[styles.ticketText, {marginTop: RH(35)}]}>Тип игры: Футбол</Text>
                        </View>
                        <View style={styles.ticketTextBlock}>
                            <Text style={[styles.ticketText, {marginTop: RH(15)}]}>
                                Название турнира: Велосипедная гонка
                            </Text>
                        </View>
                        <View style={styles.ticketTextBlock}>
                            <Text style={[styles.ticketText, {lineHeight: 20}]}>
                                Описание турнира: Повседневная практика показывает, что укрепление и развитие
                                структуры играет важную роль в формировании соответствующий условий активизации.{' '}
                            </Text>
                        </View>
                        <View style={styles.ticketTextBlock}>
                            <TouchableOpacity>
                                <Text style={[styles.ticketText, {color: '#7DCE8A'}]}>
                                    https://www.wikipedia.com/{' '}
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.ticketTextBlock}>
                            <Text style={styles.ticketText}>Количество  команд: от 10 до 12</Text>
                        </View>
                        <View style={styles.ticketTextBlock}>
                            <Text style={styles.ticketText}>Дата турнира: 07.07.2022</Text>
                        </View>
                        <View style={styles.ticketTextBlock}>
                            <Text style={styles.ticketText}>Время: 18:30</Text>
                        </View>
                        <View style={styles.ticketTextBlock}>
                            <Text style={styles.ticketText}>Адрес проведения турнира:</Text>
                        </View>

                        <View style={styles.ticketTextBlock}>
                            <Text style={styles.ticketText}>Плата за участие: 500 руб.</Text>
                        </View>
                        <View
                            style={[
                                styles.ticketTextBlock,
                                {marginBottom: RH(50), flexDirection: 'row', alignItems: 'center'},
                            ]}
                        >
                            <Text style={[styles.ticketText, {marginRight: RW(10)}]}>Организатор турнира:</Text>
                            <OrganizerSvg/>
                        </View>
                    </View>
                    <View style={styles.buttons}>
                            <LightButton
                                label={'Редактировать'}
                                onPress={() => {
                                    navigation.navigate('GameAdd')
                                }}
                                size={{width: 192, height: 36}}
                            />
                            <LightButton
                                label={'Готово'}
                                onPress={() => {
                                    setIsVisible(true)
                                    setTimeout(() => {
                                        setIsVisible(false)
                                        navigation.navigate('Home')
                                    }, 2000)
                                }}
                                size={{width: 166, height: 36}}
                            />
                    </View>
                </GestureRecognizer>
                <View style={{position: 'absolute'}}>
                    <Modal
                        // modalClose={modalClose}
                        modalVisible={isVisible}
                        setIsVisible={setIsVisible}
                        item={
                            <View style={style.secondTicketModalBlock}>
                                <Text style={style.text}>Вы успешно присоединились к турниру!</Text>
                            </View>
                        }
                    />
                </View>
            </View>
        </ScreenMask>
    )
}

const styles = StyleSheet.create({
    ticketTextBlock: {
        marginBottom: RH(14),
    },
    ticketText: {
        // ...font('bold', 14, WHITE, 20),
        marginLeft: RW(11),
        fontWeight: 'bold',
        fontSize: 14,
        color: '#FFFFFF',
    },
    firstTextBlock: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: RW(18),
    },

    ticketImgBlock: {
        alignItems: 'center',
        marginBottom: RW(46),
    },
    svg: {
        alignItems: 'center',
        marginTop: RH(25),
    },
    buttons: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 'auto',
        marginBottom: RH(23)
    },
})

export default TournamentTicket
