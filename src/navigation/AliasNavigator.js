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

import { setExplainerTeam, setExplainingUser, setPlayersInGame, setUserIsOrganizer, setYouExplainer } from '@/store/Slices/AliasSlice'
import { useNavigation } from '@react-navigation/native'

const Stack = createNativeStackNavigator()

const AliasNavigator = () => {
  const socketRef = useRef(null)
  const token = useSelector(({ auth }) => auth.token)
  const dispatch = useDispatch()
  const { aliasGameId } = useSelector(({ alias }) => alias)
  const { user } = useSelector(({ auth }) => auth)
  const navigation = useNavigation()

  const callBackFunc = async (e) => {
    console.log(`message  from : ${DeviceInfo.getDeviceId()}, ${JSON.stringify(e, null,5)}`)
    switch (e.type) {
      case 'new_user': {
        dispatch(setPlayersInGame(e?.alias_game?.players))
        dispatch(setUserIsOrganizer(e?.alias_game?.user?._id == user?._id))
        break
      }
      case 'explain_you': {
        dispatch(setYouExplainer(true))
        dispatch(setExplainerTeam({name: e.team.name}))
        navigation.navigate('GameStart')
        break
      }

      case 'explain_another_team_user': {
        console.log('explain_another_team_user  --------------', e.explain_user);
        dispatch(setExplainingUser(e.explain_user))
        dispatch(setExplainerTeam({name: e.team.name}))
        navigation.navigate('GameStart')
        break
      }
      case 'explain_your_team_user': {
        dispatch(setExplainingUser(e.user))
        dispatch(setExplainerTeam({name: e.team.name}))
        navigation.navigate('GameStart')
        break
      }
      case 'alias_start': {
        dispatch(setExplainingUser(e.user))
        navigation.navigate('GameStart')
        break
      }
    }
  }
  const {} = useGameSocketHelper(socketRef.current, callBackFunc)

  useEffect(() => {
    console.log('aliasGameId -' + DeviceInfo.getDeviceId(), aliasGameId)
    // if (!aliasGameId && socketRef.current) {
    //   socketRef.current = null
    // }
    if (socketRef.current || !aliasGameId) return

    socketRef.current = io(
      `${Platform.OS == 'ios' ? 'wss' : 'ws'}://to-play.ru/alias?room=${aliasGameId}`,
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
  }, [aliasGameId, token])

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
