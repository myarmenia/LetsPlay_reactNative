import React, { useEffect } from 'react'
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
import {
  clearAllDatas,
  setAnswerQuestions,
  setCiviliansCount,
  setLoader,
  setMafiaRole,
  setMafiasCount,
  setMafiaUsersId,
  setNight,
  setPlayers,
  setVoteTime,
} from '@/store/Slices/MafiaSlice'
import { useNavigation } from '@react-navigation/native'
import { Platform } from 'react-native'
import DeviceInfo from 'react-native-device-info'

const MafiaNavigation = () => {
  const Stack = createNativeStackNavigator()
  const token = useSelector(({ auth }) => auth.token)
  const { mafiaSocketOn, mafiaGameId, waitNight, sendAnswer } = useSelector(({ mafia }) => mafia)
  const dispatch = useDispatch()
  const navigation = useNavigation()
  let deviceName
  DeviceInfo.getDeviceName().then(e => {
    deviceName = e
  })
  useEffect(() => {
    if (mafiaSocketOn && token && mafiaGameId) {
      console.log('Socket on', mafiaGameId)
      if (mafiaSocketOn) {
        const socket = io(
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
        socket.on('message', (e) => {
          console.log(`${deviceName} message`, JSON.stringify(e, null, 4))
          if (e?.type === 'new_user') {
            dispatch(setPlayers(e.mafia_game.players))
            // dispatch(setVoteTime(e.mafia_game.vote_time))
          } else if (e?.type === 'divide_cards') {
            dispatch(setMafiaRole(e?.data?.role))
            dispatch(setVoteTime(e?.vote_time))
            dispatch(setAnswerQuestions(e?.data?.role?.answer_question))
            navigation.navigate('PlayMafia')
          } else if (e.type === 'user_count') {
            dispatch(setCiviliansCount(e?.civilian_count))
            dispatch(setMafiasCount(e?.mafia_count))
            dispatch(setPlayers(e?.all_players))
          } else if (e.type === 'mafia_users') {
            dispatch(
              setMafiaUsersId(
                e.mafia_users.reduce(
                  (prevValue, currentValue) => [...prevValue, currentValue?._id],
                  [],
                ),
              ),
            )
          } else if (e.type === 'change_time') {
            dispatch(setNight(e.mafia_game.night))
            dispatch(setVoteTime(e.mafia_game.vote_time))
            dispatch(setLoader(false))
          }
        })
      } else {
        socket.off('message', e => {
          console.log('off message', e)
        })

        dispatch(clearAllDatas())
      }
    }
  }, [mafiaSocketOn, token, mafiaGameId])

  useEffect(() => {
    if (mafiaSocketOn) {
      const socket = io(
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

      socket.send({
        type: 'end_time_vote',
        night: waitNight,
      })
    }
  }, [waitNight])

  useEffect(() => {
    if (sendAnswer?.type && sendAnswer?.question_id && sendAnswer?.mafia_user_ids) {
      const socket = io(
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
      console.log('socket.send(sendAnswer)', sendAnswer)
      socket.send(sendAnswer)
    }
  }, [sendAnswer])

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
