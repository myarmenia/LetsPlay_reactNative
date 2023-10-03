import React, { useEffect, useState, useRef } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import ScreenMask from '@/components/wrappers/screen'
import { RH, RW, font } from '@/theme/utils'
import { WHITE } from '@/theme/colors'
import Row from '@/components/wrappers/row'
import Toggle from '@/components/ToggleSwitch'
import { notificationSettings } from '@/store/Slices/AppSlice'
import { changeChatSettings } from '@/store/Slices/AuthSlice'
import { useDispatch, useSelector } from 'react-redux'

function CalendarSettings() {
  const chatSettings = useSelector(({ auth }) => auth.user.chat_settings)
  const needRender = useRef(false)


  useEffect(() => {
    needRender.current && dispatch(notificationSettings(chatSettings))
  }, [chatSettings])


  const dispatch = useDispatch()
  return (
    <ScreenMask>
      <View style={styles.container}>
        <Text style={styles.title}>Настройки</Text>
        <Text style={styles.subTitle}>Отображение</Text>
        {chatSettings.length && chatSettings?.map((item, index) => (
          <Row wrapper={styles.row} key={item.type}>
            <Text style={styles.rowText}>{item.label}</Text>
            <Toggle
              isOn={item.checked}
              setIsOn={async (e) => {
                dispatch(changeChatSettings(index))
                needRender.current = true
              }}
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
    marginTop: RH(25),
  },
  rowText: {
    maxWidth: '80%',
    ...font('bold', 16, WHITE, 24),
  },
})
export default CalendarSettings
