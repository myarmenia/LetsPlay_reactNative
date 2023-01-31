import React, {useCallback, useEffect, useRef, useState} from 'react'
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
import {useNavigation} from '@react-navigation/native'
import ScreenMask from '@/components/wrappers/screen'
import {font, RH} from '@/theme/utils'
import {WHITE} from '@/theme/colors'
import Message from '../../shared/container/message'
import Composer from '../../shared/composer'
import message from "../../shared/container/message";
import messageDefault from "@/screens/Auth/screens/SignUp/messageData";
import {useDispatch, useSelector} from "react-redux";
import {signUpFirst} from '@/store/Slices/SignUpSlice/action'

const regName = /^[a-zA-Z]{3,30}$/;
const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


const SignUp = () => {
    const ref = useRef();
    const dispatch = useDispatch();
    const {token, load, error} = useSelector(store => store.signUpFirstStep)
    const [text, setText] = useState('');
    const [step, setStep] = useState('NAME');
    const [messagesList, setMessagesList] = useState([messageDefault.hello, messageDefault.name]);
    const [dataFirstStep, setDataFirstStep] = useState({
        "surname": "",
        "name": "",
        "email": "",
    })
    const [dataSecondStep, setDataSecondStep] = useState({
        "verify_code": '',
        "expired_token": '',
        "password": '',

    })
    const handlerMessage = useCallback((message) => {
            return setMessagesList((messagesList) => [
                ...messagesList,
                message,
            ])
        }
        , [])

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
            setDataSecondStep((dataSecondStep)=>{
                return {
                    ...dataSecondStep,
                    "expired_token":token,
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
                }

            ])
        }
    }, [token])

    const onPress = () => {
        switch (step) {
            case 'NAME':
                if (regName.test(text)) {
                    setDataFirstStep({
                        ...dataFirstStep,
                        "name": text
                    });
                    setStep('SURNAME');
                    handlerMessage(messageDefault.surname)
                } else {
                    setStep('NAME');
                    handlerMessage({
                        ...messageDefault.nameValid,
                        id: messageDefault.nameValid.id + new Date().getTime(),
                    },)
                }
                break;
            case 'SURNAME':
                if (regName.test(text)) {
                    setDataFirstStep({
                        ...dataFirstStep,
                        "surname": text
                    });
                    setStep('EMAIL');
                    handlerMessage(messageDefault.email)
                } else {
                    setStep('SURNAME');
                    handlerMessage({
                        ...messageDefault.surnameValid,
                        id: new Date().getTime() + messageDefault.surnameValid.id,
                    },)
                }
                break;
            case 'EMAIL':
                if (regEmail.test(text)) {
                    setDataFirstStep({
                        ...dataFirstStep,
                        "email": text
                    });
                    dispatch(signUpFirst({...dataFirstStep, "email": text}));
                    // setStep('EMAIL');???????????????????????????????
                } else {
                    setStep('EMAIL');
                    handlerMessage({
                        ...messageDefault.validEmail,
                        id: new Date().getTime() + messageDefault.validEmail.id,
                    },)
                }
                ;
                break;
            case 'EMAIL_PASSWORD':
            default:
                return;
        }
        setText('')
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
                style={{flex: 1}}
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
                    renderItem={({item}) => <Message message={item}/>}
                    keyExtractor={item => item.id}
                />
                <View style={styles.bottom}>
                    <Composer
                        text={text}
                        setText={setText}
                        onSend={() => {
                            handlerMessage(handlerUserMessage(text));
                            setTimeout(onPress, 200)
                        }
                        }
                        ref={ref}
                        disabled={load}
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
