import { io } from 'socket.io-client'
import { useEffect, useRef } from 'react'
import { NAV_HEADER_OPTION } from '@/constants'
import { useGameSocketHelper } from './helpers'
import { useDispatch, useSelector } from 'react-redux'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import IniviteTeamPlayers from '@/screens/Crocodile/IniviteTeamPlayers'
import SelectComplexity from '@/screens/Crocodile/SelectComplexity'
import GameStart from '@/screens/Crocodile/StartGame/GameStart'
import PlayNow from '@/screens/Crocodile/PlayNow/playNow'
import QrCode from '@/screens/Crocodile/QrCode/index'
import Settings from '@/screens/Crocodile/Settings'
import Commands from '@/screens/Crocodile/Commands'
import DeviceInfo from 'react-native-device-info'
// import AboutGame from '@/screens/Crocodile/AboutGame/AboutGame'
import {
  setExplainYou,
  setPlayersInGame,
  setUserIsOrganizer,
  setYouGuesser,
} from '@/store/Slices/CrocodileSlice'

const CrocodileNavigator = () => {
  const Stack = createNativeStackNavigator()
  const socketRef = useRef(null)
  const explainYouRef = useRef(null)
  const token = useSelector(({ auth }) => auth.token)
  const dispatch = useDispatch()
  const { crocodileGameId } = useSelector(({ crocodile }) => crocodile)
  let deviceName
  DeviceInfo.getDeviceName().then((e) => {
    deviceName = e
  })
  const userIsOrganizerRef = useRef(false)
  const callBackFunc = (e) => {
    console.log(`message  from :  ${JSON.stringify(e, null, 5)}`)
    switch (e.type) {
      case 'new_user': {
        dispatch(setPlayersInGame(e?.crocodile_game?.players))
        dispatch(setUserIsOrganizer(e?.crocodile_game?.user?._id == user?._id))
        userIsOrganizerRef.current = e?.crocodile_game?.user?._id === user?._id
        break
      }
      case 'explain_you':
        explainYouRef.current = true
        dispatch(setExplainYou(true))
        dispatch(setWords(e.words))
        dispatch(setExplainerTeam(e.team.name))
        dispatch(setExplainerUser(null))
        navigation.navigate('GameStart', { fromRes: true })
        break
      case 'explain_another_team_user':
        dispatch(setExplainYou(false))
        explainYouRef.current = false
        dispatch(setWords(e.words))
        dispatch(setExplainerUser(e.explain_user))
        dispatch(setExplainerTeam(e.explain_user_team.name))
        navigation.navigate('GameStart', { fromRes: true })
        break

      case 'explain_your_team_user':
        dispatch(setExplainYou(false))
        dispatch(setYouGuesser(true))
        explainYouRef.current = false
        dispatch(setExplainerUser(e.user))
        dispatch(setExplainerTeam(e.team.name))
        navigation.navigate('GameStart', { fromRes: true })
        break

      case 'crocodile_start':
        dispatch(setTime(e?.crocodile_game_team?.round_time))
        dispatch(setStaticRoundTime(e?.crocodile_game_team?.round_time))
        // navigation.navigate('GameStart', { fromRes: true })
        break

      case 'crocodile_team_confirm':
        dispatch(setTime(e?.crocodile?.round_time))
        break
      // case 'explain_results': {
      // }
      // case 'all_teams_resaults': {
      // }
      case 'pause_or_start': {
        if (!explainYouRef.current) {
          dispatch(setStoping(e?.data?.stoping))
        }
        break
      }
    }
  }
  const {} = useGameSocketHelper(socketRef.current, callBackFunc)

  useEffect(() => {
    console.log('crocodile -' + DeviceInfo.getDeviceId(), crocodileGameId)
    // if (!crocodile && socketRef.current) {
    //   socketRef.current = null
    // }
    // if (socketRef.current || !crocodileGameId) return

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

  return (
    <Stack.Navigator screenOptions={NAV_HEADER_OPTION}>
      <Stack.Screen name="Settings" component={Settings} />
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
