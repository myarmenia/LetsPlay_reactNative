import React, { useCallback, useEffect, useRef, useState } from 'react'
import ScreenMask from '@/components/wrappers/screen'
import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native'
import { RH } from '@/theme/utils'
import { useDispatch, useSelector } from 'react-redux'
import { getChats, setChats } from '@/store/Slices/ChatsSlice'
import { sendMessage } from '../../../store/Slices/ChatsSlice'
import { io } from 'socket.io-client'
import Composer from './components/composer'
import Message from './components/container/message'

function Index(props) {
  const [inputValue, setInputValue] = useState('')
  const chats = useSelector(({ chats }) => chats.chats) || []

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

  const memoSocketFunc = useCallback((message) => {
    console.log('socket message', message)

    dispatch(
      setChats([
        ...chats,
        {
          message: message.message,
          create_game: gameID,
          updatedAt: new Date().toJSON(),
          user: { _id: message.user },
        },
      ]),
    )
  }, [])
  socket.on('message', (message) => {
    if (message.type == 'text') memoSocketFunc({ message: message.message, user: message.user })
  })

  const scrollViewRef = useRef(null)

  const sendFunc = () => {
    dispatch(
      sendMessage({
        message: inputValue,
        create_game: gameID,
      }),
    )
    setInputValue('')
  }
  const memoGetChats = useCallback(() => {
    dispatch(getChats(gameID))
  }, [gameID])
  useEffect(() => {
    memoGetChats()
  }, [])
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
        <ScrollView
          style={{
            marginBottom: 20,
          }}
          showsVerticalScrollIndicator={false}
          ref={scrollViewRef}
          onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
        >
          {chats?.map((item, index) => (
            <Message
              // ref={messageRef}
              message={item?.message}
              key={index}
              updatedAt={item?.updatedAt}
              myMessage={item?.user?._id == userId}
            />
          ))}
        </ScrollView>
        <View
          style={{
            left: 0,
            right: 0,
            bottom: RH(10),
          }}
        >
          <Composer text={inputValue} setText={setInputValue} onSend={sendFunc} />
        </View>
      </KeyboardAvoidingView>
    </ScreenMask>
  )
}

export default Index
