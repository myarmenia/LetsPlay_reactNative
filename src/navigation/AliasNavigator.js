import { memo, useEffect, useMemo, useRef } from 'react'
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
import GameStart from '@/screens/Alias/StartGame/GameStart'
import ResultsOfAnswers from '@/screens/Alias/StartGame/ResultsOfAnswers'
import TeamsResults from '@/screens/Alias/TeamsResults/TeamsResults'
import { io } from 'socket.io-client'
import DeviceInfo from 'react-native-device-info'

import {
  setExplainYou,
  setExplainerTeam,
  setExplainerUser,
  setPlayersInGame,
  setStaticRoundTime,
  setStoping,
  setWords,
  setTime,
  setUserIsOrganizer,
  setStep,
  setTeams,
} from '@/store/Slices/AliasSlice'
import { useNavigation } from '@react-navigation/native'

const Stack = createNativeStackNavigator()

const AliasNavigator = () => {
  const socketRef = useRef(null)
  const token = useSelector(({ auth }) => auth.token)
  const dispatch = useDispatch()
  const { aliasGameId, stoping, explainYou, allTeams, step } = useSelector(({ alias }) => alias)
  const { user } = useSelector(({ auth }) => auth)
  const navigation = useNavigation()

  const explainYouRef = useRef(false)

  const callBackFunc = async (e) => {
    // console.log(`message  from : ${DeviceInfo.getDeviceId()}, ${JSON.stringify(e, null, 5)}`)
    switch (e.type) {
      case 'new_user':
        dispatch(setPlayersInGame(e?.alias_game?.players))
        dispatch(setUserIsOrganizer(e?.alias_game?.user?._id == user?._id))
        break

      case 'explain_you':
        dispatch(setExplainYou(true))
        explainYouRef.current = true
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
        explainYouRef.current = false
        dispatch(setExplainerUser(e.user))
        dispatch(setExplainerTeam(e.team.name))
        navigation.navigate('GameStart', { fromRes: true })
        break

      case 'alias_start':
        console.log('alias_start explainYou', explainYouRef.current)
        console.log('alias_start e?.alias_game_team?.teams', e?.alias_game_team?.teams)
        // dispatch(setExplainerUser(e.user))
        dispatch(setTime(e?.alias_game_team?.round_time))
        dispatch(setStaticRoundTime(e?.alias_game_team?.round_time))
        // if (!explainYouRef.current) {
        //   setTeams(e?.alias_game_team?.teams)
        // }
        // navigation.navigate('GameStart', { fromRes: true })
        break

      case 'alias_team_confirm':
        dispatch(setTime(e?.alias?.round_time))
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

      case 'message_to_all_players':
        console.log(e.data)
        if (e.data?.type === 'getTeams' && !explainYouRef.current) {
          dispatch(setTeams(e.data?.data))
        } else if (e.data?.type === 'getSteps' && !explainYouRef.current) {
          dispatch(setStep(e.data?.data))
        }
        // if (!explainYouRef.current) {

        //   dispatch(setStep(e.data?.step))
        // }
        break
    }
  }

  // end time sending --- socket.emit("end_time",{})
  const {} = useGameSocketHelper(socketRef.current, callBackFunc)

  useEffect(() => {
    console.log('aliasGameId -' + DeviceInfo.getDeviceId(), aliasGameId)
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

  useEffect(() => {
    if (explainYou) {
      socketRef.current?.emit('pause_or_start', { stoping }) //time
    }
  }, [stoping, explainYou])
  // useEffect(() => {
  //   if (explainYou && !allTeams[0]?.members?.length) {

  //     socketRef.current?.emit('message_to_all_players', { allTeams: allTeams, step: step })
  //   }
  // }, [explainYou, allTeams, step])

  useEffect(() => {
    if (explainYou) {
      socketRef.current?.emit('message_to_all_players', {
        type: 'getTeams',
        data: allTeams,
      })
    }
  }, [explainYou, allTeams])
  useEffect(() => {
    if (explainYou) {
      socketRef.current?.emit('message_to_all_players', {
        type: 'getSteps',
        data: step,
      })
    }
  }, [explainYou, step])

  return (
    <Stack.Navigator screenOptions={NAV_HEADER_OPTION}>
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="SelectComplexity" component={SelectComplexity} />
      <Stack.Screen name="Commands" component={Commands} />
      <Stack.Screen name="QrCode" component={QrCode} />
      <Stack.Screen name="InviteTeamPlayers" component={IniviteTeamPlayers} />
      <Stack.Screen name="PlayNow" component={PlayNow} />
      <Stack.Screen name="AboutGame" component={AboutGame} />
      <Stack.Screen name="GameStart" component={GameStart} />
      <Stack.Screen name="ResultsOfAnswers" component={ResultsOfAnswers} />
      <Stack.Screen name="TeamsResults" component={TeamsResults} />
    </Stack.Navigator>
  )
}
export default memo(AliasNavigator)
