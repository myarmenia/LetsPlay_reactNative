import React, { useEffect, useRef } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NAV_HEADER_OPTION } from '@/constants'
import { useDispatch, useSelector } from 'react-redux'
import { io } from 'socket.io-client'
import { Platform } from 'react-native'
import { useGameSocketHelper } from './helpers'

import QrCode from '@/screens/Mafia/QrCode'
import Settings from '@/screens/Mafia/Settings'
import AddPlayers from '@/screens/Mafia/AddPlayers/AddPlayers'
import AboutGame from '@/screens/Mafia/AboutGame/AboutGame'
import WaitPlayers from '@/screens/Mafia/WaitPlayers'
import PlayMafia from '@/screens/Mafia/PlayMafia/PlayMafia'
import DeviceInfo from 'react-native-device-info'
import RatingPlayer from '@/screens/Mafia/RatingPlayer/RatingPlayer'
import { clearAllDatas } from '@/store/Slices/MafiaSlice'

const Stack = createNativeStackNavigator()
const MafiaNavigation = () => {
  const socketRef = useRef(null)
  const token = useSelector(({ auth }) => auth.token)
  const dispatch = useDispatch()
  const { mafiaGameId } = useSelector(({ mafia }) => mafia)
  const {} = useGameSocketHelper(socketRef.current)
  let deviceName
  DeviceInfo.getDeviceName().then((e) => {
    deviceName = e
  })

  useEffect(() => {
    if (!mafiaGameId && socketRef.current) {
      socketRef.current = null
    }
    if (socketRef.current || !mafiaGameId) return

    console.log('mafiaGameId -', mafiaGameId)
    socketRef.current = io(
      `${Platform.OS == 'ios' ? 'wss' : 'ws'}://to-play.ru/mafia?room=${mafiaGameId}`,
      {
        transportOptions: {
          polling: {
            extraHeaders: {
              Authorization: token,
            },
          },
        },
      },
    )
  }, [mafiaGameId, token])

  useEffect(() => {
    return () => {
      // console.log('useEffect clearAllDatas')
      // dispatch(clearAllDatas())
    }
  }, [])

  return (
    <Stack.Navigator screenOptions={NAV_HEADER_OPTION}>
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="QrCode" component={QrCode} />
      <Stack.Screen name="AddPlayers" component={AddPlayers} />
      <Stack.Screen name="AboutGame" component={AboutGame} />
      <Stack.Screen name="WaitPlayers" component={WaitPlayers} />
      <Stack.Screen name="PlayMafia" component={PlayMafia} />
      <Stack.Screen name="RatingPlayer" component={RatingPlayer} />
    </Stack.Navigator>
  )
}

export default MafiaNavigation
