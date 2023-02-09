import React, { useEffect, useRef, useState } from 'react'
import { KeyboardAvoidingView, Platform, StyleSheet, View, FlatList } from 'react-native'
import ScreenMask from '@/components/wrappers/screen'
import { font, RH } from '@/theme/utils'
import { WHITE } from '@/theme/colors'
import Message from '../../shared/container/message'
import Composer from '../../shared/composer'
import messageDefault from './messageData'
import { useDispatch, useSelector } from 'react-redux'
import { setSignInError, setToken, signIn } from '@/store/Slices/AuthSlice'

const SignUp = () => {
  const ref = useRef()
  const scrollRef = useRef()
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [text, setText] = useState('')
  const [step, setStep] = useState('EMAIL')
  const [messagesList, setMessagesList] = useState([messageDefault.email])
  const { signInError } = useSelector(({ auth }) => auth)

  const handlerMessage = message => {
    setMessagesList(messagesList => [...messagesList, { ...message }])
  }

  useEffect(() => {
    if (signInError?.length) {
      handlerMessage(messageDefault.error)
      dispatch(setSignInError(''))
      setStep('EMAIL')
      handlerMessage(messageDefault.email)
    }
  }, [signInError])

  const onPress = () => {
    // dispatch(setToken(12456))
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
  }

  useEffect(() => {
    setTimeout(() => {
      scrollRef.current?.scrollToEnd({ animated: true })
    }, 100)
  }, [messagesList])
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
          scrollsToTop={true}
          data={messagesList}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <Message message={item} id={messagesList.length} />}
        />
        <View style={styles.bottom}>
          <Composer
            text={text}
            setText={setText}
            onSend={message => {
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
  },
  vk: {
    alignItems: 'center',
  },
  title: {
    marginVertical: RH(12),
    ...font('regular', 18, WHITE, 24),
  },
})
