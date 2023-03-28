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
  setCiviliansCount,
  setMafiaRole,
  setMafiasCount,
  setMafiaUsersId,
  setPlayers,
  setVoteTime,
} from '@/store/Slices/MafiaSlice'
import { useNavigation } from '@react-navigation/native'
import DeviceInfo from 'react-native-device-info'

const MafiaNavigation = () => {
  const Stack = createNativeStackNavigator()
  const token = useSelector(({ auth }) => auth.token)
  const { mafiaSocketOn, mafiaGameId } = useSelector(({ mafia }) => mafia)
  const dispatch = useDispatch()
  const navigation = useNavigation()
  let deviceName
  DeviceInfo.getDeviceName().then(e => {
    deviceName = e
  })
  const socket = io(`wss://to-play.ru/mafia?room=${mafiaGameId}`, {
    transportOptions: {
      polling: {
        extraHeaders: {
          Authorization: token,
        },
      },
    },
  })
  useEffect(() => {
    if (mafiaSocketOn && token && mafiaGameId) {
      console.log('Socket on', mafiaGameId)

      if (mafiaSocketOn) {
        socket.on('message', e => {
          if (e?.type === 'new_user') {
            dispatch(setPlayers(e.mafia_game.players))
            dispatch(setVoteTime(e.mafia_game.vote_time))
          } else if (e?.type == 'divide_cards') {
            dispatch(setMafiaRole(e?.data?.role))
            navigation.navigate('PlayMafia')
          } else if (e.type === 'user_count') {
            dispatch(setCiviliansCount(e?.civilian_count))
            dispatch(setMafiasCount(e?.mafia_count))
            console.log('e.all_players', e.all_players)
            dispatch(setPlayers(e.all_players))
          } else if (e.type === 'mafia_users') {
            dispatch(
              setMafiaUsersId(
                e.mafia_users.reduce(
                  (prevValue, currentValue) => [...prevValue, currentValue?._id],
                  [],
                ),
              ),
            )
          }
        })
      } else {
        socket.off('message', e => {
          console.log('off message', e)
        })
        console.log('socket off')
        dispatch(setCiviliansCount(0))
        dispatch(setMafiasCount(0))
        dispatch(setPlayers([]))
        dispatch(setMafiaRole(null))
        dispatch(setVoteTime(0))
        dispatch(setMafiaUsersId([]))
      }
    }
    // return () => {
    //   socket.off('message', (e) => {
    //     console.log('off message', e)
    //   })
    //   console.log('socket off')
    //   dispatch(setCiviliansCount(0))
    //   dispatch(setMafiasCount(0))
    //   dispatch(setPlayers([]))
    //   dispatch(setMafiaRole(null))
    //   dispatch(setVoteTime(0))
    //   dispatch(setMafiaUsersId([]))
    // }
  }, [mafiaSocketOn, token, mafiaGameId])

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
