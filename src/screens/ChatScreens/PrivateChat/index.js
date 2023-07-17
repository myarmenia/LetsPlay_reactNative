import React, { memo, useEffect, useRef, useState } from 'react'
import ScreenMask from '@/components/wrappers/screen'
import { FlatList, KeyboardAvoidingView, Platform, View } from 'react-native'
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

function Index(props) {
  const [messageState, setMessageState] = useState([])
  const [voiceMessage, setVoiceMessage] = useState('')

  const { user, token } = useSelector(({ auth }) => auth)
  const { voiceDuration, chats } = useSelector(({ chats }) => chats)
  const dispatch = useDispatch()
  const gameID = props.route.params.id
  const type = props.route.params.type
  const socket = io(
    `${Platform.OS == 'ios' ? 'wss' : 'ws'}://to-play.ru${
      type == 'Организатор' ? '/team' : ''
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
      formdata.append('create_game', gameID)
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
        `${Platform.OS == 'ios' ? 'https' : 'http'}://to-play.ru/api/create/game/chat/`,
        requestOptions,
      )
        .then((result) => {
          setVoiceMessage(null)
        })
        .catch((error) => console.log('error', error))
    } else {
      if (type == 'Организатор') {
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
    dispatch(getChats(gameID))
    dispatch(getTeamChats(gameID))
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
    console.log('memoRenderItem chat', item)
    console.log('user._id', user._id)
    return (
      <Message
        item={item}
        key={index}
        id={item._id || item.id}
        myMessage={item?.user?._id == user._id || item?.user == user._id} //|| item.user_id
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
        <PrivateChatHeader gameID={gameID} />
        <FlatList
          data={[...messageState]?.reverse()}
          // data={messageState}
          style={{
            marginBottom: RH(25),
          }}
          // ListHeaderComponent={() => <PrivateChatHeader gameID={gameID} />}
          // stickyHeaderIndices={[0]}
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
