import React, { useState } from 'react'
import { Pressable, StyleSheet, TouchableOpacity, View } from 'react-native'
import NotificationIcon from '@/assets/imgs/notification'
import ScreenMask from '@/components/wrappers/screen'
import CalendarIcon from '@/assets/imgs/calendar'
import { RH } from '@/theme/utils'

import User from '@/components/User/user'
import LogoSvg from '@/assets/LogoSvg'
import { useNavigation } from '@react-navigation/native'
import { SomeSampleScreen } from '../Alias/Modals/UserAndInfoModal'

const HomeScreen = () => {
  const navigation = useNavigation()
  const [modalState, setModalState] = useState({ state: 'user' })
  return (
    <ScreenMask>
      {/* <SomeSampleScreen modalState={modalState} setModalState={setModalState} /> */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('CalendarNavigator')
          }}
        >
          <CalendarIcon />
        </TouchableOpacity>
        <Pressable onPress={() => navigation.navigate('NotificationNavigator')}>
          <NotificationIcon />
        </Pressable>
      </View>
      <View style={styles.logoContainer}>
        <LogoSvg width={196} height={130} />
      </View>
      <View style={styles.detailContainer}>
        <User size={370} onPressImg={true} />
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
    alignSelf: 'center',
    alignItems: 'center',
  },
})
