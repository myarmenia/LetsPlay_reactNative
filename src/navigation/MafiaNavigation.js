import React, { useEffect, useRef } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NAV_HEADER_OPTION } from '@/constants'

import QrCode from '@/screens/Mafia/QrCode'
import Settings from '@/screens/Mafia/Settings'
import AddPlayers from '@/screens/Mafia/AddPlayers/AddPlayers'
import AboutGame from '@/screens/Mafia/AboutGame/AboutGame'
import WaitPlayers from '@/screens/Mafia/WaitPlayers'
import PlayMafia from '@/screens/Mafia/PlayMafia/PlayMafia'

import { useDispatch, useSelector } from 'react-redux'
import { io } from 'socket.io-client'
import { Platform } from 'react-native'
import DeviceInfo from 'react-native-device-info'
import { useGameSocketHelper } from './helpers'

const Stack = createNativeStackNavigator()
const MafiaNavigation = () => {
  const socketRef = useRef(null)
  const token = useSelector(({ auth }) => auth.token)
  const { mafiaGameId } = useSelector(({ mafia }) => mafia)
  const {} = useGameSocketHelper(socketRef.current)
  let deviceName
  DeviceInfo.getDeviceName().then((e) => {
    deviceName = e
  })

  useEffect(() => {
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

  return (
    <Stack.Navigator screenOptions={NAV_HEADER_OPTION}>
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="QrCode" component={QrCode} />
      <Stack.Screen name="AddPlayers" component={AddPlayers} />
      <Stack.Screen name="AboutGame" component={AboutGame} />
      <Stack.Screen name="WaitPlayers" component={WaitPlayers} />
      <Stack.Screen name="PlayMafia" component={PlayMafia} />

      {/* <Stack.Screen name="Vote" component={Vote} />
      <Stack.Screen name="PlayerOut" component={PlayerOut} />
      <Stack.Screen name="Ratings" component={Ratings} />
      <Stack.Screen name="RatingPlayer" component={RatingPlayer} /> */}
    </Stack.Navigator>
  )
}

export default MafiaNavigation
