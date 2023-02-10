import React, { useEffect, useRef, useState } from 'react'
import { KeyboardAvoidingView, Platform, StyleSheet, View, FlatList } from 'react-native'
import ScreenMask from '@/components/wrappers/screen'
import { font, RH, RW } from '@/theme/utils'
import { WHITE } from '@/theme/colors'
import Message from '../../shared/container/message'
import Composer from '../../shared/composer'
import messageDefault from './messageData'
import { useDispatch, useSelector } from 'react-redux'
import {
  setName,
  setSignUpError,
  setSignUpSuccess,
  setSurName,
  signUpFirst,
  signUpSecond,
} from '@/store/Slices/AuthSlice'
import Button from '@/assets/imgs/Button'
import { useNavigation } from '@react-navigation/native'

const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

const SignUp = () => {
  const ref = useRef()
  // const scrollRef = useRef()
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
  const [messagesList, setMessagesList] = useState([
    messageDefault.hello,
    messageDefault.hello2,
    messageDefault.name,
  ])
  const [agreeBtn, setAgreeBtn] = useState(false)

  const { signUpError, expired_token, signUpSuccess } = useSelector(({ auth }) => auth)
  const navigation = useNavigation()

  const handlerMessage = (message) => {
    setMessagesList((messagesList) => [...messagesList, message])
  }

  useEffect(() => {
    if (signUpError?.length) {
      console.log(signUpError)
      if ('Email used' == signUpError) {
        handlerMessage(messageDefault.usedEmail)
        setStep('EMAIL')
      } else {
        handlerMessage(messageDefault.validEmailPassword)
        setStep('EMAIL_VERIFY_CODE')
      }

      dispatch(setSignUpError(''))
    }
  }, [signUpError])

  useEffect(() => {
    if (expired_token && step === 'EMAIL') {
      setStep('CONSENT')
      setMessagesList([...messagesList, messageDefault.consent, messageDefault.consent2])
      setAgreeBtn(true)
    }
  }, [expired_token])
  useEffect(() => {
    if (signUpSuccess) {
      handlerMessage(messageDefault.finished)
      setTimeout(() => {
        dispatch(setSignUpSuccess(false))
        navigation.navigate('Onboard')
      }, 1000)
    }
  }, [signUpSuccess])

  const onPress = () => {
    switch (step) {
      case 'NAME':
        setDataFirstStep({
          ...dataFirstStep,
          name: text,
        })
        dispatch(setName(text))
        setStep('SURNAME')
        setTimeout(() => {
          handlerMessage(messageDefault.surname)
        }, 1000)

        break
      case 'SURNAME':
        setDataFirstStep({
          ...dataFirstStep,
          surname: text,
        })
        dispatch(setSurName(text))
        setStep('EMAIL')
        setTimeout(() => {
          handlerMessage(messageDefault.email)
        }, 1000)

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

          setTimeout(() => {
            handlerMessage(messageDefault.validEmail)
            handlerMessage(messageDefault.email)
          }, 1000)
        }
        break
      case 'CONSENT':
        if (text) {
          setTimeout(() => {
            handlerMessage(messageDefault.validConsent)
          }, 1000)
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
            setTimeout(() => {
              handlerMessage(messageDefault.createPassword)
            }, 1000)

            setStep('PASSWORD')
          }
        } else {
          setTimeout(() => {
            handlerMessage(messageDefault.validEmailPassword)
          }, 1000)
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
          setTimeout(() => {
            handlerMessage(messageDefault.verifyPassword)
          }, 1000)
        } else {
          setTimeout(() => {
            handlerMessage(messageDefault.validPassword)
          }, 1000)
        }
        break
      case 'PASSWORD_VERIFY':
        if (text === dataSecondStep.password) {
          dispatch(signUpSecond({ ...dataSecondStep, expired_token }))
        } else {
          setTimeout(() => {
            handlerMessage(messageDefault.validVerifyPassword)
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
          data={messagesList}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <Message message={item} id={messagesList.length} />}
        />
        <View style={styles.bottom}>
          {agreeBtn ? (
            <View
              style={{
                alignSelf: 'flex-end',
                width: RW(170),
                height: RH(36),
                marginVertical: RH(19),
              }}
            >
              <Button
                size={{ width: 170, height: 36 }}
                label="Я согласен"
                onPress={() => {
                  setStep('EMAIL_VERIFY_CODE')
                  handlerMessage(messageDefault.iAgree)
                  handlerMessage(messageDefault.emailCode)
                  setAgreeBtn(false)
                }}
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
  },
  vk: {
    alignItems: 'center',
  },
  title: {
    marginVertical: RH(12),
    ...font('regular', 18, WHITE, 24),
  },
})
