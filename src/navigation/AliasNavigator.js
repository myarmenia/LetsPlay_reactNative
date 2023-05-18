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
  setExplainedWords,
  setEndRound,
  setComplexity,
  setCountWords,
  setYouGuesser,
} from '@/store/Slices/AliasSlice'
import { useNavigation } from '@react-navigation/native'
import WinnerTeamMessage from '@/screens/Alias/WinnerTeamMessage/WinnerTeamMessage'
import PlayersRatings from '@/screens/Alias/WinnerTeamMessage/PlayersRatings'

const Stack = createNativeStackNavigator()

const AliasNavigator = () => {
  const socketRef = useRef(null)
  const token = useSelector(({ auth }) => auth.token)
  const dispatch = useDispatch()
  const {
    aliasGameId,
    stoping,
    explainYou,
    countWords,
    staticTime,
    complexity,
    allTeams,
    step,
    endRound,
    time,
    explainedWords,
    userIsOrganizer,
  } = useSelector(({ alias }) => alias)
  const { user } = useSelector(({ auth }) => auth)
  const navigation = useNavigation()

  const explainYouRef = useRef(false)

  const callBackFunc = async (e) => {
    console.log(`message  from : ${DeviceInfo.getDeviceId()}, ${JSON.stringify(e, null, 5)}`)
    switch (e.type) {
      case 'new_user':
        dispatch(setPlayersInGame(e?.alias_game?.players))
        dispatch(setUserIsOrganizer(e?.alias_game?.user?._id == user?._id))
        break

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

      case 'alias_start':
        dispatch(setTime(e?.alias_game_team?.round_time))
        dispatch(setStaticRoundTime(e?.alias_game_team?.round_time))
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
        if (e.data?.type === 'getTeams' && !explainYouRef.current) {
          dispatch(setTeams(e.data?.data))
        } else if (e.data?.type === 'getSteps' && !explainYouRef.current && e.data.data !== step) {
          dispatch(setStep(e.data?.data.step))
          dispatch(setExplainedWords(e?.data?.data.words))
        } else if (e.data?.type === 'getAnswers' && !explainYouRef.current) {
          dispatch(setExplainedWords(e.data.words))
        } else if (e.data?.type === 'getGameSettings' && !explainYouRef.current) {
          dispatch(setComplexity(e.data.settings.complexity))
        } else if (e.data?.type === 'getCountOfWords' && !explainYouRef.current) {
          dispatch(setCountWords(e.data.countWords))
        }
        // else if (e.data?.type === 'endTimeCleanData' && !explainYouRef.current) {
        // dispatch(setExplainedWords(e.data.words))
        // dispatch(setStep(e.data?.step))
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
      socketRef.current?.emit('pause_or_start', { stoping })
    }
  }, [stoping, explainYou])

  useEffect(() => {
    if (explainYou && !endRound) {
      socketRef.current?.emit('message_to_all_players', {
        type: 'getTeams',
        data: allTeams,
      })
    }
  }, [explainYou, allTeams])

  useEffect(() => {
    if (explainYouRef.current && endRound) {
      socketRef.current?.emit('message_to_all_players', {
        type: 'getGameSettings',
        settings: {
          complexity: complexity,
        },
      })
    }
  }, [endRound, complexity])
  useEffect(() => {
    if (userIsOrganizer && countWords && time == staticTime - 2) {
      socketRef.current?.emit('message_to_all_players', {
        type: 'getCountOfWords',
        countWords,
      })
    }
  }, [countWords, explainYou, time, staticTime])
  useEffect(() => {
    if (explainYouRef.current) {
      socketRef.current?.emit('message_to_all_players', {
        type: 'getSteps',
        data: {
          step: step,
          words: explainedWords,
        },
      })
    }
  }, [step])
  useEffect(() => {
    if (explainYou && time == 0) {
      socketRef.current?.emit('message_to_all_players', {
        type: 'getAnswers',
        words: explainedWords,
      })
    }
  }, [time, explainedWords])

  // useEffect(() => {
  //   if (explainYouRef.current && time == 0) {
  //     socketRef.current?.emit('message_to_all_players', {
  //       type: 'getGameSettings',
  //       settings: {
  //         countWords: countWords,
  //         staticTime: staticTime,
  //         complexity: complexity,
  //       },
  //     })
  //   }
  // }, [time, explainedWords, endRound])

  useEffect(() => {
    if (endRound == true) {
      // dispatch(setExplainYou(null))
      // dispatch(setExplainerUser(null))
      // dispatch(setExplainerTeam(null))
      // dispatch(setWords([]))
      // dispatch(setTeams([]))
      // dispatch(setExplainedWords([]))
      socketRef.current?.emit('end_time', {})
      dispatch(setEndRound(false))
    }
  }, [endRound])
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
      <Stack.Screen
        name="ResultsOfAnswers"
        component={ResultsOfAnswers}
        options={{ gestureEnabled: false }}
      />
      <Stack.Screen name="TeamsResults" component={TeamsResults} />
      <Stack.Screen name="WinnerTeamMessage" component={WinnerTeamMessage} />
      <Stack.Screen name="PlayersRatings" component={PlayersRatings} />
    </Stack.Navigator>
  )
}
export default memo(AliasNavigator)
