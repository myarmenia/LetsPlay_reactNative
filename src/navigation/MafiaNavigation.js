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
  setQuestionTruthfulness,
  setVoteTime,
} from '@/store/Slices/MafiaSlice'
import { useNavigation } from '@react-navigation/native'
import { Platform } from 'react-native'
import DeviceInfo from 'react-native-device-info'

const MafiaNavigation = () => {
  const Stack = createNativeStackNavigator()
  const token = useSelector(({ auth }) => auth.token)
  const { mafiaSocketOn, mafiaGameId, sendAnswer, waitNight } = useSelector(({ mafia }) => mafia)
  const dispatch = useDispatch()
  const navigation = useNavigation()
  let deviceName
  DeviceInfo.getDeviceName().then((e) => {
    deviceName = e
  })

  const socketFunc = () => {
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
    if (mafiaSocketOn && token && mafiaGameId) {
      console.log('Socket on', mafiaGameId)
      if (mafiaSocketOn) {
        socket.on('message', (e) => {
          // if (deviceName == 'iPhone 14') {
          console.log(`${deviceName} message`, JSON.stringify(e, null, 4))
          // }
          switch (e?.type) {
            case 'new_user':
              dispatch(setPlayers(e.mafia_game.players))
              break
            case 'divide_cards':
              dispatch(setMafiaRole(e?.data?.role))
              dispatch(setVoteTime(e?.vote_time))
              dispatch(setAnswerQuestions(e?.data?.role?.answer_question))
              navigation.navigate('PlayMafia')
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
                    (prevValue, currentValue) => [...prevValue, currentValue?._id],
                    [],
                  ),
                ),
              )
              break
            case 'change_time':
              dispatch(setNight(e.mafia_game.night))
              dispatch(setVoteTime(e.mafia_game.vote_time))
              dispatch(setLoader(false))
              break
            case 'question_answer':
              dispatch(setQuestionTruthfulness({ question_id: e.question, truthfulness: e.answer }))
              break

            default:
              break
          }
        })
        socket.on('connect_error', (connect_error) => {
          console.log('socket connect_error', connect_error)
        })
      } else {
        socket.off('message', (e) => {
          console.log('off message', e)
        })
        dispatch(clearAllDatas())
      }
    }
  }
  useEffect(() => {
    socketFunc()
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

  // useEffect(() => {
  //   if (sendAnswer?.type && sendAnswer?.question_id && sendAnswer?.select_user) {
  //     console.log('socket.send(sendAnswer)', sendAnswer)
  //     const socket2 = io(
  //       `${Platform.OS == 'ios' ? 'wss' : 'ws'}://to-play.ru/mafia?room=${mafiaGameId}`,
  //       {
  //         transportOptions: {
  //           polling: {
  //             extraHeaders: {
  //               Authorization: token,
  //             },
  //           },
  //         },
  //       },
  //     )
  //     socket2.send({
  //       question_id: '640eea472d4934d87e84d9f0',
  //       select_user: '64258e33a39b217bbe43ba99',
  //       type: 'answer_question',
  //     })
  //   }
  // }, [sendAnswer])

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
