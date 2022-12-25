import React, {useEffect, useState} from 'react'

import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import NotificationIcon from '@/assets/imgs/notification'
import ScreenMask from '@/components/wrappers/screen'
import CalendarIcon from '@/assets/imgs/calendar'
import {font, RH, RW} from '@/theme/utils'

import User from '@/assets/imgs/user/user'
import {Players} from '@/assets/TestData'
import Modal from '@/components/modal'
import Ticket from '@/screens/GameCreating/GameTicket/ticket'

import {LIGHT_LABEL, WHITE} from '@/theme/colors'


const HomeScreen = props => {
    const {navigation, route} = props
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {

        if ((route.params && route.params.flag) || (route.params && route.params.type)) {

            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }, [route])


    return (


        <ScreenMask>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('CalendarNavigator')}>
                    <CalendarIcon/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Notification')}>

                    <NotificationIcon/></TouchableOpacity>
            </View>
            <View style={styles.detailContainer}>
                <User user={Players[9]} size={370}/>

            </View>
            {isVisible ? (
                <Modal
                    modalVisible={isVisible}
                    setIsVisible={setIsVisible}

                    item={
                        route.params && route.params.type && route.params.type === 'tournament' ?
                            <View style={styles.homeSecondModalBlock}>
                                <Text style={styles.nodalText}>Вы успешно создали турнир!</Text>
                            </View>
                            :
                            <View style={styles.homeModalBlock}>
                                <Ticket game={route.params.game} data={route.params.data}/>
                            </View>
                    }
                />

            ) : null}
        </ScreenMask>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        alignItems: 'stretch',
        justifyContent: 'center',
    },
    detailContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    detail: {
        width: RW(270),
        height: RH(413),
    },
    header: {
        paddingTop: RH(21),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    homeModalBlock: {
        width: RW(380),
        height: RH(638),
        paddingTop: RH(34),
        backgroundColor: LIGHT_LABEL,
        borderRadius: RW(20),
        marginLeft: 'auto',
        marginRight: 'auto',
    },

    homeSecondModalBlock: {
        width: RW(306),
        height: RH(120),
        backgroundColor: LIGHT_LABEL,
        borderRadius: RW(20),
        marginLeft: 'auto',
        marginRight: 'auto',
        alignItems: "center",
        justifyContent: "center"
    },
    nodalText: {
        ...font('regular', 16, WHITE, 25),
        textAlign: "center",
    }

})
