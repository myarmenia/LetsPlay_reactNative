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
import { useNavigation } from '@react-navigation/native'
import {
  setNight,
  setLoader,
  setPlayers,
  setVoteTime,
  setMafiaRole,
  setSendAnswer,
  setMafiasCount,
  setMafiaUsersId,
  setCiviliansCount,
  setAnswerQuestions,
  setQuestionTruthfulness,
  setWaitNight,
  setDeadUser,
  setPlayersRatings,
  setWinner,
} from '@/store/Slices/MafiaSlice'

const Stack = createNativeStackNavigator()
const MafiaNavigator = () => {
  const socketRef = useRef(null)
  const alredyDeadedUsers = useRef([])

  const token = useSelector(({ auth }) => auth.token)
  const dispatch = useDispatch()
  const { mafiaGameId, sendAnswer, waitNight, waitAnswer } = useSelector(({ mafia }) => mafia)
  const navigation = useNavigation()

  const callBackFunc = async (e) => {
    console.log(`${DeviceInfo.getDeviceId()} message`, JSON.stringify(e, null, 4))
    switch (e?.type) {
      case 'new_user':
        dispatch(setPlayers(e.mafia_game.players))
        break
      case 'divide_cards':
        dispatch(setMafiaRole(e?.data?.role))
        dispatch(setVoteTime(e?.vote_time))
        dispatch(setAnswerQuestions(e?.data?.role?.answer_question))
        dispatch(setLoader(false))
        navigation.navigate('PlayMafia')
        break
      case 'questions':
        dispatch(setAnswerQuestions(e?.questions))
        break
      case 'user_count':
        dispatch(setCiviliansCount(e?.civilian_count))
        dispatch(setMafiasCount(e?.mafia_count))
        dispatch(setPlayers(e?.all_players))
        break
      case 'mafia_users':
        dispatch(
          setMafiaUsersId(
            e.mafia_users.reduce(
              (prevValue, currentValue) => [
                ...prevValue,
                { id: currentValue?._id, name: currentValue?.role?.name },
              ],
              [],
            ),
          ),
        )
        break
      case 'change_time':
        dispatch(setNight(e.mafia_game.night))
        dispatch(setVoteTime(e.mafia_game.vote_time))
        dispatch(setLoader(false))
        dispatch(setWaitNight(null))
        dispatch(setPlayers(e?.all_players))

        break
      case 'question_answer':
        dispatch(setQuestionTruthfulness({ question_id: e.question, truthfulness: e.answer }))

        break
      case 'player_out':
        const deadUser = e.all_players.find((user) => {
          if (!user.status && !alredyDeadedUsers.current?.find((id) => user?._id == id)) {
            alredyDeadedUsers.current = [...alredyDeadedUsers.current, user._id]
            return true
          } else {
            return false
          }
        })
        if (e?.roleDatas?.civilian == 0 || e?.roleDatas?.mafia > e?.roleDatas?.civilian) {
          break
        }
        dispatch(setDeadUser({ ...deadUser, role: e?.player?.role?.name }))
        dispatch(setCiviliansCount(e?.roleDatas?.civilian))
        dispatch(setMafiasCount(e?.roleDatas?.mafia))
        break
      case 'equal_votes':
        console.log('equal_votes')
        break
      case 'end_game':
        dispatch(setLoader(false))
        dispatch(setWinner(e.winner))
        break
      case 'players_rating':
        dispatch(setPlayersRatings(e.players_rating))
        break
      default:
        break
    }
  }
  const {} = useGameSocketHelper(socketRef.current, callBackFunc)

  useEffect(() => {
    console.log('waitNight', waitNight)
    if (waitNight === null) return
    socketRef.current?.send({
      type: 'end_time_vote',
      night: waitNight,
    })
  }, [waitNight, socketRef.current])

  useEffect(() => {
    if (Object.keys(sendAnswer || {}).length && Object.values(sendAnswer || {}).length) {
      socketRef.current?.send(sendAnswer)
      dispatch(setSendAnswer({}))
    }
  }, [sendAnswer, socketRef.current])

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
      socketRef?.current?.disconnect()
      console.log('useEffect clearAllDatas')
      dispatch(clearAllDatas())
    }
  }, [])

  return (
    <Stack.Navigator screenOptions={NAV_HEADER_OPTION}>
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="QrCode" component={QrCode} />
      <Stack.Screen name="AddPlayers" component={AddPlayers} />
      <Stack.Screen name="AboutGame" component={AboutGame} />
      <Stack.Screen name="WaitPlayers" component={WaitPlayers} />
      <Stack.Screen name="PlayMafia" component={PlayMafia} options={{ gestureEnabled: false }} />
      <Stack.Screen name="RatingPlayer" component={RatingPlayer} />
    </Stack.Navigator>
  )
}

export default MafiaNavigator
