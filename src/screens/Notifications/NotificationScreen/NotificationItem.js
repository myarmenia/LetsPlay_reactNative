import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RH, RW, font } from '@/theme/utils'
import DotSvg from './assets/DotSvg'
import Row from '@/components/wrappers/row'
import LightButton from '@/assets/imgs/Button'
import CloseSvg from '@/assets/svgs/closeSvg'
import { LIGHT_GRAY, WHITE } from '@/theme/colors'
import { useDispatch, useSelector } from 'react-redux'
import {
  deleteNotification,
  notificationButtonClciked,
  setModalOptions,
  setNotifications,
} from '@/store/Slices/AppSlice'
import { joinPlayerTeam } from '@/store/Slices/TeamSlice'
import { useNavigation } from '@react-navigation/native'

const NotificationItem = ({ elm, setModalVisible }) => {
  const { notifications } = useSelector(({ app }) => app)

  const notificationText = elm.text
  const updateDateArray = new Date(elm.createdAt).toLocaleTimeString().split(':')
  const updated = updateDateArray[0] + ':' + updateDateArray[1]
  const navigation = useNavigation()
  const dispatch = useDispatch()
  if (!notificationText) return null

  const buttonOptions = {
    team_inite: {
      label: 'Присоединиться',
      onPress: () => {
        dispatch(
          joinPlayerTeam(
            {
              team_id: elm.team,
            },
            setModalVisible,
          ),
        )
      },
    },
    qr: {
      secondaryClick: true,
      label: 'Показать QR',
      onPress: () => {
        dispatch(
          setModalOptions({
            visible: true,
            type: 'QrModal',
            body: elm.link,
          }),
        )
      },
    },
    end_game: {
      label: 'Завершить',
      secondaryClick: true,
      onPress: () => {
        navigation.navigate('CreateGameNavigator', {
          screen: 'AddPhoto',
          params: {
            gameId: elm?.create_game,
          },
        })
      },
    },
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.line} />

      <Row wrapper={styles.row}>
        <Row wrapper={styles.midBox}>
          {elm?.readed ? <View style={{ width: 26 }} /> : <DotSvg />}
          <View>
            <Text style={styles.notificationText}>{notificationText}</Text>
            {buttonOptions?.[elm?.type] ? (
              <LightButton
                onPress={() => {
                  dispatch(notificationButtonClciked(elm?._id))
                  !buttonOptions[elm?.type].secondaryClick && elm?.click
                    ? null
                    : buttonOptions[elm?.type].onPress()
                }}
                label={buttonOptions[elm?.type]?.label}
                labelStyle={{ ...font('bold', 17, '#001034') }}
                style={{
                  opacity: !buttonOptions[elm?.type]?.secondaryClick && elm?.click ? 0.5 : 1,
                }}
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
    marginLeft: RW(10),
    ...font('medium', 14, WHITE),
  },
  time: {
    paddingTop: RH(9),
    ...font('medium', 12, LIGHT_GRAY),
  },
})
