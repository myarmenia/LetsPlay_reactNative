import React, { useEffect, useRef, useState } from 'react'
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  View,
  SafeAreaView,
  FlatList,
  Text,
  StatusBar,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import ScreenMask from '@/components/wrappers/screen'
import { font, RH } from '@/theme/utils'
import { WHITE } from '@/theme/colors'
import Message from '../../shared/container/message'
import Composer from '../../shared/composer'
import message from '../../shared/container/message'
import messageDefault from '@/screens/Auth/screens/SignUp/messageData'
import { useDispatch, useSelector } from 'react-redux'
import { signUpFirst } from '@/store/Slices/SignUpSlice/action'

const regName = /^[a-zA-Z]{3,30}$/
const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

const SignUp = () => {
  const ref = useRef()
  const dispatch = useDispatch()
  // const store=useSelector()
  const [text, setText] = useState('')
  const [step, setStep] = useState('NAME')
  const [messagesList, setMessagesList] = useState([messageDefault.hello, messageDefault.name])
  const [dataFirstStep, setDataFirstStep] = useState({
    surname: '',
    name: '',
    email: '',
  })

  useEffect(() => {
    // if(dataFirstStep.email){
    dispatch(
      signUpFirst({
        email: 'tesdat@mail.ru',
        name: 'Kamo',
        surname: 'OBrien',
      }),
    )
    // }
  })

  const onPress = () => {
    switch (step) {
      case 'NAME':
        if (regName.test(text)) {
          setDataFirstStep({
            ...dataFirstStep,
            name: text,
          })
          setStep('SURNAME')
          setMessagesList([
            ...messagesList,
            {
              id: new Date().getTime(),
              text: text,
              type: 'TEXT',
              position: 'right',
            },
            messageDefault.surname,
          ])
        } else {
          setStep('NAME')
          setMessagesList([
            ...messagesList,
            {
              id: new Date().getTime(),
              text: text,
              type: 'TEXT',
              position: 'right',
            },
            {
              ...messageDefault.nameValid,
              id: messageDefault.nameValid.id + new Date().getTime(),
            },
          ])
        }
        setText('')
        break
      case 'SURNAME':
        if (regName.test(text)) {
          setDataFirstStep({
            ...dataFirstStep,
            surname: text,
          })
          setStep('EMAIL')
          setMessagesList([
            ...messagesList,
            {
              id: new Date().getTime(),
              text: text,
              type: 'TEXT',
              position: 'right',
            },
            messageDefault.email,
          ])
        } else {
          setStep('SURNAME')
          setMessagesList([
            ...messagesList,
            {
              id: new Date().getTime(),
              text: text,
              type: 'TEXT',
              position: 'right',
            },
            {
              ...messageDefault.surnameValid,
              id: new Date().getTime() + messageDefault.surnameValid.id,
            },
          ])
        }
        setText('')
        break
      case 'EMAIL':
        if (regEmail.test(text)) {
          setDataFirstStep({
            ...dataFirstStep,
            email: text,
          })

          // setStep('EMAIL');???????????????????????????????
          // setMessagesList([
          //     ...messagesList,
          //     {
          //         id:new Date().getTime(),
          //         text:text,
          //         type:'TEXT',
          //         position:'right',
          //     },
          //     messageDefault.email
          // ])
        } else {
          setStep('EMAIL')
          setMessagesList([
            ...messagesList,
            {
              id: new Date().getTime(),
              text: text,
              type: 'TEXT',
              position: 'right',
            },
            {
              ...messageDefault.validEmail,
              id: new Date().getTime() + messageDefault.validEmail.id,
            },
          ])
        }
        setText('')
        break
      default:
        return
    }
  }

  // React.useEffect(() => {
  //   setLoading(false)
  //   setMessages([STEPS[0]])
  //   updateMessages(STEPS[1])
  // }, [])
  //
  // const onSend = React.useCallback(
  //   (message) => {
  //     setLoading(true)
  //     updateMessages({
  //       message,
  //       secure: messages[messages.length - 1]?.secure,
  //       isLeft: false,
  //     })
  //     ref.current.setText('')
  //     let t = setTimeout(() => {
  //       setLoading(false)
  //       navigation.navigate('Onboard')
  //       clearTimeout(t)
  //     }, 1500)
  //     // TODO api call setLoading(false)
  //     // updateMessages(STEPS[index])
  //     // setIndex(idx => ++idx);
  //   },
  //   [index, messages, navigation],
  // )
  //
  // const updateMessages = (data) => {
  //   setMessages((prevData) => [...prevData, data])
  // }

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
            onSend={() => onPress()}
            ref={ref}
            // disabled={false}
            // secure={messages[messages.length - 1]?.secure}
          />
        </View>
        {/*<View style={{ flex: 1 }}>*/}
        {/*  <ScrollView*/}
        {/*    style={{ flexDirection: 'column-reverse', flex: 1, paddingBottom: RH(94) }}*/}
        {/*    showsVerticalScrollIndicator={false}*/}
        {/*  >*/}
        {/*    {messages.map((message, idx, arr) => {*/}
        {/*      return (*/}
        {/*        <Message*/}
        {/*          key={idx.toString()}*/}
        {/*          secure={message.secure}*/}
        {/*          isLeft={message.isLeft}*/}
        {/*          isWrong={message.isWrong}*/}
        {/*          message={message.message}*/}
        {/*          previus={idx > 0 ? arr[idx - 1].isLeft : false}*/}
        {/*        />*/}
        {/*      )*/}
        {/*    })}*/}
        {/*  </ScrollView>*/}
        {/*  <View style={styles.bottom}>*/}
        {/*    <Composer*/}
        {/*      onSend={onSend}*/}
        {/*      ref={ref}*/}
        {/*      disabled={loading}*/}
        {/*      secure={messages[messages.length - 1]?.secure}*/}
        {/*    />*/}
        {/*  </View>*/}
        {/*</View>*/}
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
// import React, {useState} from 'react';
// import {Text, View} from "react-native";
// import ScreenMask from "@/components/wrappers/screen";
//
// function Index(props) {
//   const [message, setMessageData]=useState([]);
//   const [dataFirstStep, setDataFirstStep]={
//     surname:'',
//     name:'',
//     email:'',
//   }
//   const [dataSecondStep, setDataSecondStep]=useState({
//     "verify_code": '',
//     "expired_token": '',
//     "password": '',
//   })
//   return (
//       <ScreenMask>
//         <Text>
//           Hello Kami
//         </Text>
//
//       </ScreenMask>
//   );
// }
//
// export default Index;
