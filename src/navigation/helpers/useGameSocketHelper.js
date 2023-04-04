import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

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
  setDeadUsers,
  setAlredyDeadedUsers,
  setPlayersRatings,
  setWinner,
} from '@/store/Slices/MafiaSlice'

export const useGameSocketHelper = (socket) => {
  const dispatch = useDispatch()
  const isMounted = useRef(false)
  const navigation = useNavigation()
  const { sendAnswer, waitNight, alredyDeadedUsers, mafiaGameId } = useSelector(
    ({ mafia }) => mafia,
  )

  useEffect(() => {
    console.log('waitNight', waitNight)
    if (waitNight === null) return
    socket?.send({
      type: 'end_time_vote',
      night: waitNight,
    })
  }, [waitNight, socket])

  useEffect(() => {
    if (Object.keys(sendAnswer || {}).length && Object.values(sendAnswer || {}).length) {
      console.log('sendAnswer', sendAnswer)
      socket?.send(sendAnswer)
      dispatch(setSendAnswer({}))
    }
  }, [sendAnswer, socket])
  useEffect(() => {
    if (Object.keys(sendAnswer || {}).length && Object.values(sendAnswer || {}).length) {
      console.log('sendAnswer', sendAnswer)
      socket?.send(sendAnswer)
      dispatch(setSendAnswer({}))
    }
  }, [sendAnswer])

  // useEffect(() => {
  //   console.log('mafiaGameId useEffect', mafiaGameId)
  //   if (!mafiaGameId) {
  //     console.log('mafiaGameId useEffect disconnect')
  //     socket?.disconnect()
  //   } else {
  //     console.log('mafiaGameId useEffect connect')
  //     socket?.connect()
  //   }
  // }, [mafiaGameId, socket])

  useEffect(() => {
    if (socket && !isMounted.current) {
      isMounted.current = true
      socket.on('message', (e) => {
        console.log('message', JSON.stringify(e, null, 4))
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
            dispatch(
              setDeadUsers(
                e.all_players.filter((user) => {
                  if (!user.status && !alredyDeadedUsers?.find((id) => user?._id == id)) {
                    dispatch(setAlredyDeadedUsers([...alredyDeadedUsers, user._id]))
                    return user
                  }
                }),
              ),
            )
            break
          case 'question_answer':
            dispatch(setQuestionTruthfulness({ question_id: e.question, truthfulness: e.answer }))
            break
          case 'player_out':
            const deadUser = e?.all_players?.find((user) => user?._id == e?.player?._id)
            dispatch(setDeadUsers({ ...deadUser, role: e?.player?.role?.name }))
            break
          case 'end_game':
            dispatch(setWinner(e.winner))
            break
          case 'players_rating':
            dispatch(setPlayersRatings(e.players_rating))
            break
          default:
            break
        }
      })
    }
    return () => {
      socket?.off('message')
    }
  }, [socket])

  return {}
}
