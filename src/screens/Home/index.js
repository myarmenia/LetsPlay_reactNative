import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import NotificationIcon from '@/assets/imgs/notification'
import ScreenMask from '@/components/wrappers/screen'
import CalendarIcon from '@/assets/imgs/calendar'
import { font, RH, RW } from '@/theme/utils'

import User from '@/assets/imgs/user/user'
import { Players } from '@/assets/TestData'
import Modal from '@/components/modal'
import Ticket from '@/screens/GameCreating/GameTicket/ticket'

import { LIGHT_LABEL, WHITE } from '@/theme/colors'

const HomeScreen = (props) => {
  const { navigation, route } = props
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
          <CalendarIcon />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
          <NotificationIcon />
        </TouchableOpacity>
      </View>
      <View style={styles.detailContainer}>
        <User user={Players[0]} size={370} />
      </View>
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
    paddingTop: RH(34),
    backgroundColor: LIGHT_LABEL,
    borderRadius: RW(20),
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingBottom: RH(20),
  },

  homeSecondModalBlock: {
    paddingVertical: RH(75),
    // height: RH(120),
    width: RW(306),
    backgroundColor: LIGHT_LABEL,
    borderRadius: RW(20),
    marginLeft: 'auto',
    marginRight: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nodalText: {
    ...font('regular', 16, WHITE, 25),
    textAlign: 'center',
  },
})
