import React, { useCallback, useEffect, useRef, useState } from 'react'
import { KeyboardAvoidingView, Platform, StyleSheet, View, FlatList } from 'react-native'
import ScreenMask from '@/components/wrappers/screen'
import { font, RH } from '@/theme/utils'
import { WHITE } from '@/theme/colors'
import Message from '../../shared/container/message'
import Composer from '../../shared/composer'
import messageDefault from '@/screens/Auth/screens/SignUp/messageData'
import { useDispatch, useSelector } from 'react-redux'
import { setSurName, setName, signUpFirstStep, setEmail } from '@/store/Slices/AuthSlice'

const regName = /^[a-zA-Z]{3,30}$/
const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

const SignUp = () => {
  const ref = useRef()
  const dispatch = useDispatch()
  //   const { token, load, error } = useSelector((store) => store.signUpFirstStep)
  const { user } = useSelector(({ auth }) => auth)
  let token = null
  let load = false
  const [text, setText] = useState('')
  const [step, setStep] = useState('NAME')
  const [messagesList, setMessagesList] = useState([messageDefault.hello, messageDefault.name])
  const [dataFirstStep, setDataFirstStep] = useState({
    surname: '',
    name: '',
    email: '',
  })
  const [dataSecondStep, setDataSecondStep] = useState({
    verify_code: '',
    expired_token: '',
    password: '',
  })
  const handlerMessage = useCallback((message) => {
    return setMessagesList((messagesList) => [...messagesList, message])
  }, [])

  const handlerUserMessage = useCallback((message) => {
    return {
      id: new Date().getTime(),
      text: message,
      type: 'TEXT',
      position: 'right',
    }
  }, [])

  useEffect(() => {
    if (token && step === 'EMAIL') {
      setDataSecondStep((dataSecondStep) => {
        return {
          ...dataSecondStep,
          expired_token: token,
        }
      })
      setMessagesList([
        ...messagesList,
        messageDefault.consent,
        {
          id: '16',
          text: 'Я согласен',
          type: 'BTN',
          position: 'right',
          ev: () => {
            setStep('EMAIL_PASSWORD')
            handlerMessage(messageDefault.consentBtn)
          },
        },
      ])
    }
  }, [token])

  const onPress = () => {
    switch (step) {
      case 'NAME':
        if (regName.test(text)) {
          dispatch(setName(text))
          setStep('SURNAME')
          handlerMessage(messageDefault.surname)
        } else {
          setStep('NAME')
          handlerMessage({
            ...messageDefault.nameValid,
            id: messageDefault.nameValid.id + new Date().getTime(),
          })
        }
        break
      case 'SURNAME':
        if (regName.test(text)) {
          dispatch(setSurName(text))
          setStep('EMAIL')
          handlerMessage(messageDefault.email)
        } else {
          setStep('SURNAME')
          handlerMessage({
            ...messageDefault.surnameValid,
            id: new Date().getTime() + messageDefault.surnameValid.id,
          })
        }
        break
      case 'EMAIL':
        if (regEmail.test(text)) {
          dispatch(setEmail(text))
        } else {
          setStep('EMAIL')
          handlerMessage({
            ...messageDefault.validEmail,
            id: new Date().getTime() + messageDefault.validEmail.id,
          })
        }
        break
      case 'EMAIL_PASSWORD':
      default:
        return
    }
    setText('')
  }

  useEffect(() => {
    if (user.email) {
      dispatch(signUpFirstStep(user))
    }
  }, [user.email])
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
          data={messagesList}
          renderItem={({ item }) => <Message message={item} />}
          keyExtractor={(item) => item.id}
        />
        <View style={styles.bottom}>
          <Composer
            text={text}
            setText={setText}
            onSend={() => {
              handlerMessage(handlerUserMessage(text))
              setTimeout(onPress, 200)
            }}
            ref={ref}
            disabled={load}
            // secure={messages[messages.length - 1]?.secure}
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
    bottom: RH(30),
    position: 'absolute',
  },
  vk: {
    alignItems: 'center',
  },
  title: {
    marginVertical: RH(12),
    ...font('regular', 18, WHITE, 24),
  },
})
