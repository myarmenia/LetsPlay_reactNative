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

function Index(props) {
  const [messageState, setMessageState] = useState([])
  const [voiceMessage, setVoiceMessage] = useState('')

  const { user, token } = useSelector(({ auth }) => auth)
  const { voiceDuration, chats } = useSelector(({ chats }) => chats)
  const dispatch = useDispatch()
  const gameID = props.route.params.id
  const type = props.route.params.type
  const playersLength = props.route.params?.playersLength
  const team=props.route.params?.team
  const socket = io(
    `${Platform.OS == 'ios' ? 'wss' : 'ws'}://to-play.ru${type == 'Командный' ? '/team' : ''
    }/chat?room=${gameID}`,
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
      formdata.append(type == 'Командный' ? 'team' : 'create_game', gameID)
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
        `${Platform.OS == 'ios' ? 'https' : 'http'}://to-play.ru/api${type == 'Командный' ? '/team/chat' : '/create/game/chat/'
        }`,
        requestOptions,
      )
        .then((result) => {
          setVoiceMessage(null)
        })
        .catch((error) => console.log('error', error))
    } else {
      if (type == 'Командный') {
        dispatch(
          sendTeamMessage({
            message: text,
            team: gameID,
          }),
        )
      } else {
        dispatch(
          sendMessage({
            message: text,
            create_game: gameID,
          }),
        )
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
    if (type == 'Командный') {
      dispatch(getTeamChats(gameID))
    } else {
      dispatch(getChats(gameID))
    }

    return () => {
      console.log('chat socket disconnect')
      socket.disconnect()
    }
  }, [])


  useEffect(() => {
    setMessageState(chats)
  }, [chats])



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
      <PrivateChatHeader type={type} gameID={gameID} playersLength={playersLength} team={team}/>
      <FlatList
        data={[...messageState]?.reverse()}
        style={{marginBottom: RH(25)}}
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
