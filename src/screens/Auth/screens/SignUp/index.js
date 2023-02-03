import React, { useCallback, useEffect, useRef, useState } from 'react'
import { KeyboardAvoidingView, Platform, StyleSheet, View, FlatList } from 'react-native'
import ScreenMask from '@/components/wrappers/screen'
import { font, RH } from '@/theme/utils'
import { WHITE } from '@/theme/colors'
import Message from '../../shared/container/message'
import Composer from '../../shared/composer'
import messageDefault from './messageData'
import { useDispatch, useSelector } from 'react-redux'
import { setSignUpError, setToken, signUpFirst, signUpSecond } from '@/store/Slices/AuthSlice'
import Button from '@/assets/imgs/Button'

const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

const SignUp = () => {
  const ref = useRef()
  const scrollRef = useRef()
  const dispatch = useDispatch()
  const [dataFirstStep, setDataFirstStep] = useState({
    surname: '',
    name: '',
    email: '',
  })
  const [dataSecondStep, setDataSecondStep] = useState({
    verify_code: '',
    password: '',
  })
  const [text, setText] = useState('')
  const [step, setStep] = useState('NAME')
  const [messagesList, setMessagesList] = useState([messageDefault.hello, messageDefault.name])
  const { signUpError, expired_token, signUpSuccess } = useSelector(({ auth }) => auth)

  const handlerMessage = (message) => {
    setMessagesList((messagesList) => [...messagesList, { ...message }])
  }

  useEffect(() => {
    if (signUpError?.length) {
      console.log(signUpError)
      if ('Email used' == signUpError) {
        handlerMessage(messageDefault.usedEmail)
        setStep('EMAIL')
      } else {
        handlerMessage({ ...messageDefault.validEmailPassword })
        setStep('EMAIL_VERIFY_CODE')
      }

      dispatch(setSignUpError(''))
    }
  }, [signUpError])

  useEffect(() => {
    if (expired_token && step === 'EMAIL') {
      setStep('CONSENT')
      setMessagesList([
        ...messagesList,
        messageDefault.consent,
        {
          id: '16',
          text: 'Я согласен',
          type: 'BTN',
          position: 'right',
          ev: () => {
            setStep('EMAIL_VERIFY_CODE')
            handlerMessage(messageDefault.consentBtn)
          },
        },
      ])
    }
  }, [expired_token])

  const onPress = () => {
    // setFocus(false)
    switch (step) {
      case 'NAME':
        setDataFirstStep({
          ...dataFirstStep,
          name: text,
        })
        setStep('SURNAME')
        handlerMessage(messageDefault.surname)

        break
      case 'SURNAME':
        setDataFirstStep({
          ...dataFirstStep,
          surname: text,
        })
        setStep('EMAIL')
        handlerMessage(messageDefault.email)
        break
      case 'EMAIL':
        if (regEmail.test(text)) {
          setDataFirstStep({
            ...dataFirstStep,
            email: text,
          })
          dispatch(signUpFirst({ ...dataFirstStep, email: text }))
        } else {
          setStep('EMAIL')
          handlerMessage({
            ...messageDefault.validEmail,
          })
        }
        break
      case 'CONSENT':
        if (text) {
          handlerMessage({
            ...messageDefault.validConsent,
          })
        }
        break
      case 'EMAIL_VERIFY_CODE':
        if (text && text.length == 4) {
          setDataSecondStep((dataSecondStep) => {
            return {
              ...dataSecondStep,
              verify_code: text,
            }
          })
          if (dataSecondStep.password) {
            dispatch(
              signUpSecond({
                ...dataSecondStep,
                verify_code: text,
                expired_token,
              }),
            )
          } else {
            handlerMessage({
              ...messageDefault.createPassword,
            })
            setStep('PASSWORD')
          }
        } else {
          handlerMessage({
            ...messageDefault.validEmailPassword,
          })
        }
        break
      case 'PASSWORD':
        if (text && text.length >= 6) {
          setDataSecondStep((dataSecondStep) => {
            return {
              ...dataSecondStep,
              password: text,
            }
          })
          setStep('PASSWORD_VERIFY')
          handlerMessage({
            ...messageDefault.verifyPassword,
          })
        } else {
          handlerMessage({
            ...messageDefault.validPassword,
          })
        }
        break
      case 'PASSWORD_VERIFY':
        if (text === dataSecondStep.password) {
          dispatch(signUpSecond({ ...dataSecondStep, expired_token }))
        } else {
          handlerMessage(messageDefault.validVerifyPassword)
        }
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
          data={messagesList}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <Message message={item} id={messagesList.length} />}
        />
        <View style={styles.bottom}>
          {signUpSuccess ? (
            <View
              style={{
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              <Button
                label={'Вход'}
                onPress={() => dispatch(setToken(expired_token))}
                size={{ width: 260, height: 50 }}
              />
            </View>
          ) : (
            <Composer
              text={text}
              setText={setText}
              onSend={(message) => {
                handlerMessage({ id: Math.random(), text: message })
                setTimeout(onPress, 100)
              }}
              ref={ref}
            />
          )}
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
