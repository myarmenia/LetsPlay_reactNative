import React, { memo, useEffect, useRef, useState } from 'react'
import { FlatList, Platform, View } from 'react-native'
import { RH } from '@/theme/utils'
import { useDispatch, useSelector } from 'react-redux'
import { io } from 'socket.io-client'
import CustomInput from './components/Input'
import Message from './components/container/message'
import { IS_IOS } from '@/constants'
import PrivateChatHeader from './components/PrivateChatHeader'
import ScreenMask2 from '@/components/wrappers/screen2'
import {
  getTourneyChatMessages,
  sendTourneyChatMessage,

  getTeamChatMessages,
  sendTeamChatMessage,

  getTeamCreateGameChatMessages,
  sendTeamCreateGameChatMessage,

  getGameChatMessages,
  sendGameChatMessage,

  setPausedMessageId,
  setPlayMessageId,
  addSingleMessage
} from '@/store/Slices/ChatsSlice'
import { getSingleTournament } from '@/store/Slices/TournamentReducer/TournamentApies'
import { protocol, voiceMessageRequestBody, chatIdKey, socketBody } from './helpers'

function Index({ route }) {
  const { id, type, playersLength, team } = route?.params

  const dispatch = useDispatch()
  const { user, token } = useSelector(({ auth }) => auth)
  const { voiceDuration, chatMessages } = useSelector(({ chats }) => chats)
  const [voiceMessage, setVoiceMessage] = useState('')

  const api = `${Platform.OS === 'ios' ? 'wss' : 'ws'}://to-play.ru${socketBody(type)}/chat?room=${id}`

  console.log(api, 'api');

  const options = {
    transportOptions: {
      polling: {
        extraHeaders: {
          Authorization: token,
        },
      },
    },
  }


  const socket = io(api, options)
  const scrollViewRef = useRef(null)

  const sendFunc = async (text) => {
    dispatch(setPlayMessageId('stop'))
    dispatch(setPausedMessageId(null))

    if (voiceMessage) {
      var formdata = new FormData()
      formdata.append('file', {
        uri: voiceMessage,
        type: IS_IOS ? 'audio/m4a' : 'video/mp4',
        name: IS_IOS ? 'audio.m4a' : 'audio.mp4',
      })


      formdata.append(chatIdKey(), id)
      formdata.append('file_length', voiceDuration)

      let myHeaders = new Headers()
      myHeaders.append('Authorization', `Bearer ${token}`)
      myHeaders.append('Accept', 'application/json')

      let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
      }
      await fetch(`${protocol}://to-play.ru/api${voiceMessageRequestBody(type)}`, requestOptions)
      setVoiceMessage(null)
    } else {
      if (type === 'team') {
        dispatch(sendTeamChatMessage({
          message: text,
          team: id,
        }))
      } else if (type === 'team_game') {
        dispatch(
          sendTeamCreateGameChatMessage({
            message: text,
            team_create_game: id,
          }),
        )
      } else if (type === 'game') {
        dispatch(
          sendGameChatMessage({
            message: text,
            create_game: id,
          }),
        )
      } else {
        dispatch(sendTourneyChatMessage({
          message: text,
          tourney: id,
        }))
      }
    }
  }



  const memoSocketFunc = (message) => {
    if (message.file || message.message) {
      console.log(message, 'message');
      dispatch(addSingleMessage(message))
    }
  }

  socket.on('message', memoSocketFunc)

  useEffect(() => {
    if (type == 'team') {
      dispatch(getTeamChatMessages(id))
    } else if (type === 'team_game') {
      dispatch(getTeamCreateGameChatMessages(id))
    } else if (type === 'game') {
      dispatch(getGameChatMessages(id))
    } else {
      dispatch(getTourneyChatMessages(id))
      dispatch(getSingleTournament(id))
    }
    return () => {
      socket.disconnect()
    }
  }, [])

  useEffect(() => {
    scrollViewRef?.current?.scrollToOffset({ animated: true, offset: 0 })
  }, [chatMessages?.length])
  const memoRenderItem = ({ item, index }) => {
    return (
      <Message
        item={item}
        key={index}
        id={item._id || item.id}
        myMessage={
          item?.user?._id == user._id || item?.user == user._id || item.user_id == user._id
        }
      />
    )
  }


  return (
    <ScreenMask2>
      <PrivateChatHeader type={type} id={id} playersLength={playersLength} team={team} />
      <FlatList
        data={chatMessages}
        style={{ marginBottom: RH(25) }}
        inverted
        refreshing
        initialNumToRender={4}
        removeClippedSubviews
        showsVerticalScrollIndicator={false}
        ref={scrollViewRef}
        renderItem={memoRenderItem}
        keyExtractor={(_, index) => `post-${index}`}
      />

      <View
        style={{
          left: 0,
          right: 0,
          bottom: RH(10),
        }}
      >
        <CustomInput
          onSend={sendFunc}
          voiceMessage={voiceMessage}
          setVoiceMessage={setVoiceMessage}
        />
      </View>
    </ScreenMask2>
  )
}

export default memo(Index)
