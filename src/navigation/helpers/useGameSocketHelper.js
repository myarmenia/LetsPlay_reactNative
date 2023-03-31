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
} from '@/store/Slices/MafiaSlice'

export const useGameSocketHelper = (socket) => {
  const dispatch = useDispatch()
  const isMounted = useRef(false)
  const navigation = useNavigation()
  const { sendAnswer, waitNight } = useSelector(({ mafia }) => mafia)

  useEffect(() => {
    if (waitNight === null) return
    socket?.send({
      type: 'end_time_vote',
      night: waitNight,
    })
    dispatch(setWaitNight(null))
  }, [waitNight, socket])

  useEffect(() => {
    if (Object.keys(sendAnswer || {}).length && Object.values(sendAnswer || {}).length) {
      socket?.send(sendAnswer)
      dispatch(setSendAnswer({}))
    }
  }, [sendAnswer, socket])

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
    }
    return () => {
      socket?.off('message')
    }
  }, [socket])

  return {}
}
