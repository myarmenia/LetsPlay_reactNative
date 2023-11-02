import React, { memo, useEffect, useRef, useState } from 'react'
import { FlatList, Platform, View } from 'react-native'
import { RH } from '@/theme/utils'
import { useDispatch, useSelector } from 'react-redux'
import { getChats, getTeamChats, sendTeamMessage } from '@/store/Slices/ChatsSlice'
import { sendMessage } from '../../../store/Slices/ChatsSlice'
import { io } from 'socket.io-client'
import CustomInput from './components/Input'
import Message from './components/container/message'
import { IS_IOS } from '@/constants'
import { setPausedMessageId, setPlayMessageId } from '../../../store/Slices/ChatsSlice'
import PrivateChatHeader from './components/PrivateChatHeader'
import ScreenMask2 from '@/components/wrappers/screen2'
import { getTourneyChat } from '@/store/Slices/TournamentReducer/TournamentApies'
import { sendTourneyMessage, getSingleTournament } from '@/store/Slices/TournamentReducer/TournamentApies'

function Index(props) {
  const [messageState, setMessageState] = useState([])
  const [voiceMessage, setVoiceMessage] = useState('')

  const { user, token } = useSelector(({ auth }) => auth)
  const { voiceDuration, chats } = useSelector(({ chats }) => chats)
  const { singleChat } = useSelector(({ tournament }) => tournament)

  const dispatch = useDispatch()
  const chatId = props.route.params.id
  const type = props.route.params.type
  const playersLength = props.route.params?.playersLength
  const team = props.route.params?.team

  const api = `${Platform.OS === 'ios' ? 'wss' : 'ws'}://to-play.ru${type === 'team' ? '/team/create_game' : type === 'tournament' ? '/tourney' : ''
    }/chat?room=${chatId}`

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

  const sendFunc = (text) => {
    dispatch(setPlayMessageId('stop'))
    dispatch(setPausedMessageId(null))

    if (voiceMessage) {
      var formdata = new FormData()
      formdata.append('file', {
        uri: voiceMessage,
        type: IS_IOS ? 'audio/m4a' : 'video/mp4',
        name: IS_IOS ? 'audio.m4a' : 'audio.mp4',
      })
      formdata.append(type === 'team' ? 'team' : type === 'game' ? 'create_game' : 'tourney', chatId)
      formdata.append('file_length', voiceDuration)

      let myHeaders = new Headers()
      myHeaders.append('Authorization', `Bearer ${token}`)
      myHeaders.append('Accept', 'application/json')

      let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
      }
      fetch(
        `${Platform.OS == 'ios' ? 'https' : 'http'}://to-play.ru/api${type == 'team' ? '/team/chat' : type === 'game' ? '/create/game/chat/' : '/tourney/chat'
        }`,
        requestOptions,
      )
        .then((res) => {
          setVoiceMessage(null)
        })
    } else {
      if (type === 'team') {
        dispatch(
          sendTeamMessage({
            message: text,
            team_create_game: chatId,
          }),
        )
      } else if (type === 'game') {
        dispatch(
          sendMessage({
            message: text,
            create_game: chatId,
          }),
        )
      } else {
        dispatch(sendTourneyMessage({
          message: text,
          tourney: chatId,
        }))
      }
    }
  }
  const memoSocketFunc = (message) => {
    if (message.file || message.message) {
      setMessageState((lastState) => {
        if (!lastState?.find((item) => item?.id == message?.id)) {
          return lastState?.concat(message)
        } else {
          return lastState
        }
      })
    }
  }

  socket.on('message', memoSocketFunc)

  useEffect(() => {
    // messageState
    if (type == 'team') {
      dispatch(getTeamChats(chatId))
    } else if (type === 'game') {
      dispatch(getChats(chatId))
    } else {
      dispatch(getTourneyChat(chatId))
      dispatch(getSingleTournament(chatId))

    }
    return () => {
      console.log('chat socket disconnect')
      socket.disconnect()
    }
  }, [])


  useEffect(() => {
    setMessageState(type === 'tournament' ? singleChat : chats)
  }, [chats, singleChat])



  useEffect(() => {
    scrollViewRef?.current?.scrollToOffset({ animated: true, offset: 0 })
  }, [messageState?.length])
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
      <PrivateChatHeader type={type} chatId={chatId} playersLength={playersLength} team={team} />
      <FlatList
        data={[...messageState]?.reverse()}
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
