import React from 'react'
import { Image, StyleSheet, View, Pressable } from 'react-native'
import NotificationIcon from '@/assets/imgs/notification'
import ScreenMask from '@/components/wrappers/screen'
import CalendarIcon from '@/assets/imgs/calendar'
import Detail from '@/assets/imgs/detail.png'
import { RH, RW } from '@/theme/utils'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
  const navigation = useNavigation()

  return (
    <ScreenMask>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.navigate('Calendar')}>
          <CalendarIcon />
        </Pressable>
        <NotificationIcon />
      </View>
      <View style={styles.detailContainer}>
        <Image source={Detail} resizeMode={'contain'} style={styles.detail} />
      </View>
    </ScreenMask>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
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
})
