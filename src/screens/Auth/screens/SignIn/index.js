import React, { useCallback, useEffect, useState } from 'react'
import { KeyboardAvoidingView, Platform, StyleSheet, View, FlatList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import ScreenMask from '@/components/wrappers/screen'
import { RH, RW } from '@/theme/utils'
import Message from '../../shared/container/message'
import Composer from '../../shared/composer'
import messageDefault from './messageData'
import { setSignInError, signIn } from '@/store/Slices/AuthSlice'
import Button from '@/assets/imgs/Button'
import Row from '@/components/wrappers/row'
import DarkButton from '@/assets/imgs/DarkButton'

const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
let signInErrorCount = 0

const SignIn = () => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [text, setText] = useState('')
  const [step, setStep] = useState('EMAIL')
  const [forgetPassword, setForgetPassword] = useState(false)

  const [messagesList, setMessagesList] = useState([messageDefault.hello, messageDefault.email])
  const { signInError } = useSelector(({ auth }) => auth)

  const handlerMessage = (message) => {
    console.log('render')
    setMessagesList((messagesList) => [...messagesList, message])
  }

  useEffect(() => {
    if (signInError?.length) {
      if (signInErrorCount >= 2) {
        console.log(signInErrorCount)
        signInErrorCount++
        handlerMessage(messageDefault.error)
        dispatch(setSignInError(''))
        setStep('EMAIL')
        handlerMessage(messageDefault.email)
      } else {
        signInErrorCount = 0
        handlerMessage(messageDefault.error)
        handlerMessage(messageDefault.forgotPassword)
        dispatch(setSignInError(''))
        setForgetPassword(true)
      }
    }
  }, [signInError])

  const onPress = () => {
    switch (step) {
      case 'EMAIL':
        if (regEmail.test(text)) {
          setEmail(text.toLocaleLowerCase())
          setStep('PASSWORD')
          handlerMessage(messageDefault.password)
        } else {
          handlerMessage(messageDefault.emailError)
          handlerMessage(messageDefault.email)
        }

        break
      case 'PASSWORD':
        dispatch(signIn({ email: email, password: text }))

        break
      case 'EMAIL_VERIFY_CODE':
        if (text && text.length == 4) {
          // if (dataSecondStep.password) {
          //   dispatch(
          //     signUpSecond({
          //       ...dataSecondStep,
          //       verify_code: text,
          //       expired_token,
          //     }),
          //   )
          // } else {
          //   setTimeout(() => {
          //     handlerMessage(messageDefault.createPassword)
          //   }, 1000)
          //   setStep('PASSWORD')
          // }
        } else {
          setTimeout(() => {
            handlerMessage(messageDefault.validEmailCode)
          }, 1000)
        }
        break
      default:
        return
    }
    setText('')
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
            flexDirection: 'column-reverse',
          }}
          scrollsToTop={true}
          data={messagesList}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <Message message={item} id={messagesList.length} />}
        />
        <View style={styles.bottom}>
          {forgetPassword ? (
            <Row wrapper={styles.btnsContainer}>
              <Button
                size={{ width: 100, height: 36 }}
                label="Да"
                onPress={() => {
                  setForgetPassword(false)
                  handlerMessage(messageDefault.emailCode)
                  setStep('EMAIL_VERIFY_CODE')
                }}
              />
              <DarkButton
                size={{ width: 100, height: 36 }}
                containerStyle={{ marginLeft: RW(20) }}
                label="Нет"
                onPress={() => {
                  handlerMessage(messageDefault.password)
                }}
              />
            </Row>
          ) : (
            <Composer
              text={text}
              setText={setText}
              onSend={(message) => {
                handlerMessage({ id: Math.random(), text: message })
                setTimeout(onPress, 200)
              }}
            />
          )}
        </View>
      </KeyboardAvoidingView>
    </ScreenMask>
  )
}

export default SignIn

const styles = StyleSheet.create({
  bottom: {
    left: 0,
    right: 0,
    bottom: RH(10),
  },
  btnsContainer: {
    justifyContent: 'flex-end',
    height: RH(36),
    marginVertical: RH(19),
  },
})
