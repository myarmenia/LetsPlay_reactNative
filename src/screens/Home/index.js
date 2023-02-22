import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import NotificationIcon from '@/assets/imgs/notification'
import ScreenMask from '@/components/wrappers/screen'
import CalendarIcon from '@/assets/imgs/calendar'
import { RH } from '@/theme/utils'

import User from '@/assets/imgs/user/user'
import { Players } from '@/assets/TestData'
import LogoSvg from '@/assets/LogoSvg'

const HomeScreen = (props) => {
  const { navigation } = props
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
      <View style={styles.logoContainer}>
        <LogoSvg width={196} height={130} />
      </View>
      <View style={styles.detailContainer}>
        <User user={Players[0]} size={370} onPressImg={true} />
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
  },
  detailContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    paddingTop: RH(21),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoContainer: {
    position: 'absolute',
    top: RH(67),
    left: 0,
    right: 0,
    alignItems: 'center',
  },
})
