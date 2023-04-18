import { io } from 'socket.io-client'
import { useEffect, useRef } from 'react'
import { NAV_HEADER_OPTION } from '@/constants'
// import { useGameSocketHelper } from './helpers'
import { useDispatch, useSelector } from 'react-redux'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import IniviteTeamPlayers from '@/screens/Crocodile/IniviteTeamPlayers'
import SelectComplexity from '@/screens/Crocodile/SelectComplexity'
import GameStart from '@/screens/Crocodile/StartGame/GameStart'
import PlayNow from '@/screens/Crocodile/PlayNow/playNow'
import QrCode from '@/screens/Crocodile/QrCode/index'
import Settings from '@/screens/Crocodile/Settings'
import Commands from '@/screens/Crocodile/Commands'
// import DeviceInfo from 'react-native-device-info'
import AboutGame from '@/screens/Crocodile/AboutGame/AboutGame'

const CrocodileNavigator = () => {
  const Stack = createNativeStackNavigator()
  const socketRef = useRef(null)
  const token = useSelector(({ auth }) => auth.token)
  const dispatch = useDispatch()
  // const { crocodileGameId } = useSelector(({ crocodile }) => crocodile)
  // const callBackFunc = async e => {
  //   switch (e.type) {
  //     case 'new_user': {
  //       break
  //     }
  //   }
  // }
  // let deviceName
  // DeviceInfo.getDeviceName().then(e => {
  //   deviceName = e
  // })

  // useEffect(() => {
  // if (!crocodileGameId && socketRef.current) {
  // socketRef.current = null
  // }
  // if (socketRef.current || !crocodileGameId) return

  // console.log('crocodileGameId -', crocodileGameId)
  //   socketRef.current = io(
  //     `${Platform.OS == 'ios' ? 'wss' : 'ws'}://to-play.ru/crocodile?room=${crocodileGameId}`,
  //     {
  //       transportOptions: {
  //         polling: {
  //           extraHeaders: {
  //             Authorization: token,
  //           },
  //         },
  //       },
  //     },
  //   )
  // }, [crocodileGameId, token])
  // const {} = useGameSocketHelper(socketRef.current, callBackFunc)
  return (
    <Stack.Navigator screenOptions={NAV_HEADER_OPTION}>
      {/* <Stack.Screen name="Settings" component={Settings} /> */}
      {/* <Stack.Screen name="AboutGame" component={AboutGame} /> */}
      <Stack.Screen name="SelectComplexity" component={SelectComplexity} />
      <Stack.Screen name="Commands" component={Commands} />
      <Stack.Screen name="QrCode" component={QrCode} />
      <Stack.Screen name="InviteTeamPlayers" component={IniviteTeamPlayers} />

      <Stack.Screen name="PlayNow" component={PlayNow} />
      <Stack.Screen name="GameStart" component={GameStart} />
    </Stack.Navigator>
  )
}
export default CrocodileNavigator
