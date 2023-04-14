import { io } from 'socket.io-client'
import { useEffect, useRef } from 'react'
import { NAV_HEADER_OPTION } from '@/constants'
import { useGameSocketHelper } from './helpers'
import { useDispatch, useSelector } from 'react-redux'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import DeviceInfo from 'react-native-device-info'

const CrocodileNavigator = () => {
  const Stack = createNativeStackNavigator()
  const socketRef = useRef(null)
  const token = useSelector(({ auth }) => auth.token)
  const dispatch = useDispatch()
  const { crocodileGameId } = useSelector(({ crocodile }) => crocodile)
  const callBackFunc = async e => {
    switch (e.type) {
      case 'new_user': {
        break
      }
    }
  }
  let deviceName
  DeviceInfo.getDeviceName().then(e => {
    deviceName = e
  })

  useEffect(() => {
    if (!crocodileGameId && socketRef.current) {
      socketRef.current = null
    }
    if (socketRef.current || !crocodileGameId) return

    console.log('crocodileGameId -', crocodileGameId)
    socketRef.current = io(
      `${Platform.OS == 'ios' ? 'wss' : 'ws'}://to-play.ru/crocodile?room=${crocodileGameId}`,
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
  }, [crocodileGameId, token])
  const {} = useGameSocketHelper(socketRef.current, callBackFunc)
  return <Stack.Navigator screenOptions={NAV_HEADER_OPTION}></Stack.Navigator>
}
export default CrocodileNavigator
