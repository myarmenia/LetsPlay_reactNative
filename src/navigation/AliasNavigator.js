import { useEffect, useRef } from 'react'
import { NAV_HEADER_OPTION } from '@/constants'
import { useGameSocketHelper } from './helpers'
import { useDispatch, useSelector } from 'react-redux'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Commands from '@/screens/Alias/Commands'
import IniviteTeamPlayers from '@/screens/Alias/IniviteTeamPlayers'
import AboutGame from '@/screens/Alias/AboutGame/AboutGame'
import PlayNow from '@/screens/Alias/PlayNow/playNow'
import QrCode from '@/screens/Alias/QrCode'
import Settings from '@/screens/Alias/Settings'
import SelectComplexity from '@/screens/Alias/SelectComplexity'
import SearchTeamInvite from '@/screens/Alias/SearchCommand/SearchTeamInvite'
import GameStart from '@/screens/Alias/StartGame/GameStart'
import ResultsOfAnswers from '@/screens/Alias/StartGame/ResultsOfAnswers'
import TeamsResults from '@/screens/Alias/TeamsResults/TeamsResults'
import { io } from 'socket.io-client'
import DeviceInfo from 'react-native-device-info'

import { setPlayersInGame } from '@/store/Slices/AliasSlice'

const AliasNavigator = () => {
  const Stack = createNativeStackNavigator()
  const socketRef = useRef(null)
  const token = useSelector(({ auth }) => auth.token)
  const dispatch = useDispatch()
  const { aliasGameId } = useSelector(({ alias }) => alias)
  const callBackFunc = async e => {
    switch (e.type) {
      case 'new_user': {
        dispatch(setPlayersInGame(e))
        break
      }
    }
  }
  let deviceName
  DeviceInfo.getDeviceName().then(e => {
    deviceName = e
  })

  useEffect(() => {
    if (!aliasGameId?._id && socketRef.current) {
      socketRef.current = null
    }
    if (socketRef.current || !aliasGameId) return

    console.log('aliasGameId -', aliasGameId?._id)
    socketRef.current = io(
      `${Platform.OS == 'ios' ? 'wss' : 'ws'}://to-play.ru/alias?room=${aliasGameId?._id}`,
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
  }, [aliasGameId?._id, token])
  const {} = useGameSocketHelper(socketRef.current, callBackFunc)
  return (
    <Stack.Navigator screenOptions={NAV_HEADER_OPTION}>
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="SelectComplexity" component={SelectComplexity} />
      <Stack.Screen name="Commands" component={Commands} />
      <Stack.Screen name="QrCode" component={QrCode} />
      <Stack.Screen name="SearchTeamInvite" component={SearchTeamInvite} />
      <Stack.Screen name="InviteTeamPlayers" component={IniviteTeamPlayers} />
      <Stack.Screen name="PlayNow" component={PlayNow} />
      <Stack.Screen name="AboutGame" component={AboutGame} />
      <Stack.Screen name="GameStart" component={GameStart} />
      <Stack.Screen name="ResultsOfAnswers" component={ResultsOfAnswers} />
      <Stack.Screen name="TeamsResults" component={TeamsResults} />
    </Stack.Navigator>
  )
}
export default AliasNavigator
