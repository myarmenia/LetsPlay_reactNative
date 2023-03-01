import React, { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import ScreenMask from '@/components/wrappers/screen'
import { FlatList, KeyboardAvoidingView, Platform, Text, View } from 'react-native'
import { RH } from '@/theme/utils'
import { useDispatch, useSelector } from 'react-redux'
import { getChats, setChats } from '@/store/Slices/ChatsSlice'
import { sendMessage } from '../../../store/Slices/ChatsSlice'
import { io } from 'socket.io-client'
import CustomInput from './components/Input'
import Message from './components/container/message'

function Index(props) {
  const chats = useSelector(({ chats }) => chats.chats) || []

  const [messageState, setMessageState] = useState([])

  const { user, token } = useSelector(({ auth }) => auth)
  const userId = user._id
  const dispatch = useDispatch()
  const gameID = props.route.params.id
  console.log(gameID)
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
    dispatch(
      sendMessage({
        message: text,
        create_game: gameID,
      }),
    )
  }
  const memoGetChats = useCallback(() => {
    dispatch(getChats(gameID))
  }, [gameID])
  const memoSocketFunc = (message) => {
    setMessageState((lastState) => {
      if (!lastState.find((item) => item.message == message.message)) {
        return lastState.concat(message)
      } else {
        return lastState
      }
    })

    console.log('socket message', message)
  }

  socket.on('message', memoSocketFunc)
  useEffect(() => {
    memoGetChats()
  }, [])
  useEffect(() => {
    setMessageState(chats)
  }, [chats])
  console.log('chats.length', messageState?.length)
  const memoRenderItem = ({ item, index }) => {
    return (
      <Message
        // ref={messageRef}
        message={item?.message}
        key={index}
        id={index}
        updatedAt={item?.updatedAt}
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
          data={messageState}
          style={{
            marginBottom: 20,
          }}
          maxToRenderPerBatch={10}
          initialNumToRender={15}
          showsVerticalScrollIndicator={false}
          ref={scrollViewRef}
          // inverted={true}
          onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
          renderItem={memoRenderItem}
          keyExtractor={(_, index) => `post-${index}`}
          refreshing={true}
          getItemLayout={(data, index) => ({ length: 70, offset: 70 * index, index })}
        />
        <View
          style={{
            left: 0,
            right: 0,
            bottom: RH(10),
          }}
        >
          <CustomInput onSend={sendFunc} />
        </View>
      </KeyboardAvoidingView>
    </ScreenMask>
  )
}

export default memo(Index)
