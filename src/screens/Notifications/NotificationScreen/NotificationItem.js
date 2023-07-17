import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RH, font } from '@/theme/utils'
import DotSvg from './assets/DotSvg'
import Row from '@/components/wrappers/row'
import LightButton from '@/assets/imgs/Button'
import CloseSvg from '@/assets/svgs/closeSvg'
import { LIGHT_GRAY, WHITE } from '@/theme/colors'
import { useDispatch, useSelector } from 'react-redux'
import { deleteNotification, setNotifications } from '@/store/Slices/AppSlice'
import { joinPlayerTeam } from '@/store/Slices/TeamSlice'

const NotificationItem = ({ elm, setModalVisible }) => {
  const { notifications } = useSelector(({ app }) => app)
  const dispatch = useDispatch()
  const notificationText = elm.text
  const updated = new Date(elm.createdAt).toLocaleTimeString().substring(0, 4)
  if (!notificationText) return null
  return (
    <View style={styles.mainContainer}>
      <View style={styles.line} />

      <Row wrapper={styles.row}>
        <Row wrapper={styles.midBox}>
          {elm?.readed ? <View style={{ width: 26 }} /> : <DotSvg />}
          <View>
            <Text style={styles.notificationText}>{notificationText}</Text>
            {elm.type == 'team_inite' ? (
              <LightButton
                onPress={() => {
                  dispatch(
                    joinPlayerTeam(
                      {
                        team_id: elm.team,
                      },
                      setModalVisible,
                    ),
                  )
                }}
                label={'Присоединиться'}
                // size={{ width: 144, height: 36 }}
                labelStyle={{ ...font('bold', 17, '#001034') }}
              />
            ) : null}
          </View>
        </Row>

        <View style={styles.endBox}>
          <Pressable
            onPress={() => {
              const filteredData = notifications.filter((item) => item?._id != elm?._id)
              dispatch(setNotifications(filteredData))
              dispatch(deleteNotification(elm?._id))
            }}
          >
            <CloseSvg />
          </Pressable>

          <Text style={styles.time}>{updated}</Text>
        </View>
      </Row>
    </View>
  )
}

export default NotificationItem

const styles = StyleSheet.create({
  mainContainer: {},
  line: {
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
    height: RH(1),
    backgroundColor: '#1A2848',
    marginVertical: RH(12),
  },
  row: {
    justifyContent: 'space-between',
  },
  midBox: {
    width: '90%',
  },
  endBox: {
    width: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationText: {
    maxWidth: '95%',
    marginBottom: RH(10),
    ...font('medium', 14, WHITE),
  },
  time: {
    paddingTop: RH(9),
    ...font('medium', 12, LIGHT_GRAY),
  },
})
