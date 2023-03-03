import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import ScreenMask from '@/components/wrappers/screen'
import { FlatList, KeyboardAvoidingView, Platform, View } from 'react-native'
import { RH } from '@/theme/utils'
import { useDispatch, useSelector } from 'react-redux'
import { getChats } from '@/store/Slices/ChatsSlice'
import { sendMessage } from '../../../store/Slices/ChatsSlice'
import { io } from 'socket.io-client'
import CustomInput from './components/Input'
import Message from './components/container/message'
function Index(props) {
  const chats = useSelector(({ chats }) => chats.chats) || []
  const [messageState, setMessageState] = useState([])
  const [voiceMessage, setVoiceMessage] = React.useState('')

  const { user, token } = useSelector(({ auth }) => auth)
  const userId = user._id
  const dispatch = useDispatch()
  const gameID = props.route.params.id
  const socket = io.connect(`wss://to-play.ru/chat?room=${gameID}`, {
    transportOptions: {
      polling: {
        extraHeaders: {
          Authorization: token,
        },
      },
    },
  })

  const scrollViewRef = useRef(null)

  const sendFunc = (text) => {
    if (voiceMessage) {
      var formdata = new FormData()
      formdata.append('file', {
        uri: voiceMessage,
        type: 'audio/m4a',
        name: 'audio.m4a',
      })
      formdata.append('create_game', gameID)

      let myHeaders = new Headers()
      myHeaders.append('Content-Type', 'audio/m4a')
      myHeaders.append('Authorization', `Bearer ${token}`)
      myHeaders.append('Accept', 'application/json')

      let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow',
      }

      fetch('https://to-play.ru/api/create/game/chat/', requestOptions)
        .then((result) => {
          return result.json()
        })
        .then((result) => {
          // console.log('result', result)
          setVoiceMessage(null)
        })
        .catch((error) => console.log('error', error))
    } else {
      dispatch(
        sendMessage({
          message: text,
          create_game: gameID,
        }),
      )
    }
  }
  const memoGetChats = useCallback(() => {
    dispatch(getChats(gameID))
  }, [gameID])
  const memoSocketFunc = (message) => {
    console.log('SOCKET - ', message)
    console.log(
      'find',
      messageState.find((item) => item?.id == message?.id),
    )
    if (message.file || message.message) {
      setMessageState((lastState) => {
        if (!lastState.find((item) => item?.id == message?.id)) {
          return lastState.concat(message)
        } else {
          return lastState
        }
      })
    }
  }

  socket.on('message', memoSocketFunc)
  useEffect(() => {
    memoGetChats()
  }, [])
  useEffect(() => {
    setMessageState(chats)
  }, [chats])
  useEffect(() => {
    scrollViewRef.current.scrollToOffset({ animated: true, offset: 0 })
  }, [messageState?.length])
  const memoRenderItem = ({ item, index }) => {
    return (
      <Message
        item={item}
        key={index}
        id={item._id}
        myMessage={item?.user?._id == userId || item?.user == userId}
      />
    )
  }
  return (
    <ScreenMask>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        {...(Platform.OS === 'ios'
          ? {
              behavior: 'padding',
              keyboardVerticalOffset: RH(10),
              enabled: true,
            }
          : {})}
      >
        <FlatList
          data={[...messageState].reverse()}
          style={{
            marginBottom: RH(25),
          }}
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
      </KeyboardAvoidingView>
    </ScreenMask>
  )
}

export default memo(Index)
