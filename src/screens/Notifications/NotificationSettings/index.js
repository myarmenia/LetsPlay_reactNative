import React, { useEffect, useRef } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import ScreenMask from '@/components/wrappers/screen'
import { useNavigation } from '@react-navigation/native'
import { RH, RW, font } from '@/theme/utils'
import { WHITE } from '@/theme/colors'
import Row from '@/components/wrappers/row'
import Toggle from '@/components/ToggleSwitch'
import LightButton from '@/components/buttons/Button'
import { notificationSettings } from '@/store/Slices/AppSlice'
import { changeNotificationData } from '@/store/Slices/AuthSlice'
import { useDispatch, useSelector } from 'react-redux'


function NotificationScettings() {
  const dispatch = useDispatch()
  const user = useSelector(({ auth }) => auth)
  const needRender = useRef(false)


  const onTogglePress = async (index) => {
    dispatch(changeNotificationData(index))
    needRender.current = true
  }

  useEffect(() => {
    if (needRender.current) {
      dispatch(notificationSettings(user.user.notification_settings))
      needRender.current = false
    }
  }, [user.user.notification_settings, needRender.current])




  return (
    <ScreenMask>
      <View style={styles.container}>
        <Text style={styles.title}>Уведомления</Text>
        <Text style={styles.subTitle}>Отображение</Text>
        {user?.user?.notification_settings.map((item, i) => (
          <Row wrapper={[styles.row, { marginTop: i == 3 ? RH(50) : RH(25) }]} key={i}>
            <Text style={styles.rowText}>{item.label}</Text>
            <Toggle
              isOn={item.checked}
              setIsOn={() => { onTogglePress(i) }}
            />
          </Row>
        ))}
      </View>
    </ScreenMask>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: RW(56),
    paddingHorizontal: RW(16),
    flex: 1,
  },
  title: {
    ...font('bold', 24, WHITE, 29),
    marginBottom: RH(32),
    alignSelf: 'center',
  },
  subTitle: {
    ...font('bold', 16, '#B3B7C2', 24),
  },
  row: {
    justifyContent: 'space-between',
  },
  rowText: {
    maxWidth: '80%',
    ...font('bold', 16, WHITE, 24),
  },
})
export default NotificationScettings
