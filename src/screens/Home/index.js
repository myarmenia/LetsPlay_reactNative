import React, {useEffect, useState} from 'react'
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import NotificationIcon from '@/assets/imgs/notification'
import ScreenMask from '@/components/wrappers/screen'
import CalendarIcon from '@/assets/imgs/calendar'
import {RH, RW} from '@/theme/utils'
import User from "@/assets/imgs/user/user";
import {Players} from "@/assets/TestData";
import Modal from "@/components/modal";
import Ticket from "@/screens/GameCreating/GameTicket/ticket";
import {LIGHT_LABEL} from "@/theme/colors";

const HomeScreen = (props) => {
    const {navigation, route} = props
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (route.params && route.params.flag) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }, [route])
    return (
        <ScreenMask>
            <View style={styles.header}>
                <CalendarIcon/>
                <TouchableOpacity onPress={() => navigation.navigate('Notification')}><NotificationIcon/></TouchableOpacity>
            </View>
            <View style={styles.detailContainer}>
                <User user={Players[2]} isMax={true}/>
            </View>
            {isVisible ? <Modal modalVisible={isVisible} setIsVisible={setIsVisible} btnClose={false}
                                item={<View style={styles.homeModalBlock}><Ticket/></View>}
            /> : null}
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
    }
})
