import React, { useCallback, useEffect, useRef, useState } from 'react'
import { KeyboardAvoidingView, Platform, StyleSheet, View, FlatList } from 'react-native'
import ScreenMask from '@/components/wrappers/screen'
import { font, RH } from '@/theme/utils'
import { WHITE } from '@/theme/colors'
import Message from '../../shared/container/message'
import Composer from '../../shared/composer'
import messageDefault from './messageData'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { setSignInError, signIn } from '@/store/Slices/AuthSlice'

// const regName = /^[a-zA-Z]{3,30}$/
// const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
// const regEmailPassword = /[0-9]{4,4}$/

const SignUp = () => {
  const ref = useRef()
  const scrollRef = useRef()
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const [email, setEmail] = useState('')
  const [text, setText] = useState('')
  const [step, setStep] = useState('EMAIL')
  const [messagesList, setMessagesList] = useState([messageDefault.email])
  const { signInError } = useSelector(({ auth }) => auth)

  const handlerMessage = useCallback((message) => {
    return setMessagesList((messagesList) => [
      ...messagesList,
      { ...message, id: message.id + messagesList.length },
    ])
  }, [])

  useEffect(() => {
    if (signInError?.length) {
      handlerMessage(messageDefault.error)
      dispatch(setSignInError(''))
      setStep('EMAIL')
      handlerMessage(messageDefault.email)
    }
    scrollRef.current?.scrollToEnd()
  }, [signInError])

  const onPress = () => {
    switch (step) {
      case 'EMAIL':
        setEmail(text.toLocaleLowerCase())
        setStep('PASSWORD')
        handlerMessage(messageDefault.password)

        break
      case 'PASSWORD':
        dispatch(signIn({ email: email, password: text }))

        break
      default:
        return
    }
    setText('')
    scrollRef.current?.scrollToEnd()
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
          style={{
            marginBottom: 30,
          }}
          ref={scrollRef}
          data={messagesList}
          renderItem={({ item }) => <Message message={item} />}
          keyExtractor={(item) => item.id}
        />
        <View style={styles.bottom}>
          <Composer
            text={text}
            setText={setText}
            onSend={(message) => {
              handlerMessage({ id: Math.random(), text: message })
              setTimeout(onPress, 200)
            }}
            ref={ref}
          />
        </View>
      </KeyboardAvoidingView>
    </ScreenMask>
  )
}

export default SignUp

const styles = StyleSheet.create({
  bottom: {
    left: 0,
    right: 0,
    bottom: RH(10),
    // position: 'absolute',
  },
  vk: {
    alignItems: 'center',
  },
  title: {
    marginVertical: RH(12),
    ...font('regular', 18, WHITE, 24),
  },
})
