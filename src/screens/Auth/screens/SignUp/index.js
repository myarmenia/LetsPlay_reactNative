import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import ScreenMask from '@/components/wrappers/screen'
import { font, RH } from '@/theme/utils'
import { WHITE } from '@/theme/colors'

import Message from '../../shared/container/message'
import Composer from '../../shared/composer'

const STEPS = [
  {
    isLeft: true,
    isWrong: false,
    message: 'Добро пожаловать “название приложения” пожалуйста пройдите регистрацию',
  },
  {
    isLeft: true,
    isWrong: false,
    message: 'Напишите имя и фамилию',
  },
  {
    isLeft: true,
    isWrong: false,
    message: 'Укажите адрес электронной почты',
  },
  {
    isLeft: true,
    isWrong: false,
    message: 'Согласие на обработку данных',
  },
  {
    isLeft: true,
    isWrong: false,
    message:
      'Подтвердите электронную почту. Вам на почту поступило письмо от  компании «Играем» с четырехзначным кодом. Укажите его здесь',
  },
  {
    isLeft: true,
    isWrong: false,
    message: 'Создайте пароль',
  },
  {
    isLeft: true,
    isWrong: false,
    message: 'Подтвердите пароль',
  },
]

const SignUp = () => {
  const ref = React.useRef()
  const navigation = useNavigation()
  const [index, setIndex] = React.useState(0)
  const [messages, setMessages] = React.useState([])
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    setLoading(false)
    setMessages([STEPS[0]])
    updateMessages(STEPS[1])
  }, [])

  const onSend = React.useCallback(
    message => {
      setLoading(true)
      updateMessages({
        message,
        secure: messages[messages.length - 1]?.secure,
        isLeft: false,
      })
      ref.current.setText('')
      let t = setTimeout(() => {
        setLoading(false)
        navigation.navigate('Onboard')
        clearTimeout(t)
      }, 1500)
      // TODO api call setLoading(false)
      // updateMessages(STEPS[index])
      // setIndex(idx => ++idx);
    },
    [index, messages, navigation],
  )

  const updateMessages = data => {
    setMessages(prevData => [...prevData, data])
  }

  return (
    <ScreenMask>
      <ScrollView
        style={{ flexDirection: 'column-reverse', flex: 1, paddingBottom: RH(94) }}
        showsVerticalScrollIndicator={false}
      >
        {messages.map((message, idx, arr) => {
          return (
            <Message
              key={idx.toString()}
              secure={message.secure}
              isLeft={message.isLeft}
              isWrong={message.isWrong}
              message={message.message}
              previus={idx > 0 ? arr[idx - 1].isLeft : false}
            />
          )
        })}
      </ScrollView>
      <View style={styles.bottom}>
        <Composer
          onSend={onSend}
          ref={ref}
          disabled={loading}
          secure={messages[messages.length - 1]?.secure}
        />
      </View>
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
