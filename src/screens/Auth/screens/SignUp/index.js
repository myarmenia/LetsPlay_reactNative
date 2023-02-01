import React, {useCallback, useEffect, useRef, useState} from 'react'
import {KeyboardAvoidingView, Platform, StyleSheet, View, FlatList,} from 'react-native'
import ScreenMask from '@/components/wrappers/screen'
import {font, RH} from '@/theme/utils'
import {WHITE} from '@/theme/colors'
import Message from '../../shared/container/message'
import Composer from '../../shared/composer'
import messageDefault from "@/screens/Auth/screens/SignUp/messageData";
import {useDispatch, useSelector} from "react-redux";
import {signUpFirstStep, signUpSecondStep} from '@/store/Slices/SignUpSlice'
import Button from "@/assets/imgs/Button";
import {useNavigation} from "@react-navigation/native";

const regName = /^[a-zA-Z]{3,30}$/;
const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const regEmailPassword = /[0-9]{4,4}$/


const SignUp = () => {
    const ref = useRef();
    const scrollRef = useRef();
    const dispatch = useDispatch();
    const navigation=useNavigation()
    const {token, load, error, endRegistration} = useSelector(store => store.signUpFirstStep)
    const [text, setText] = useState('');
    const [step, setStep] = useState('NAME');
    const [messagesList, setMessagesList] = useState([messageDefault.hello, messageDefault.name]);
    const [dataFirstStep, setDataFirstStep] = useState({
        "surname": "",
        "name": "",
        "email": "",
    });
    const [dataSecondStep, setDataSecondStep] = useState({
        "verify_code": '',
        "expired_token": '',
        "password": '',

    });

    const handlerMessage = useCallback((message) => {
            return setMessagesList((messagesList) => [
                ...messagesList,
                message,
            ])
        }
        , []);

    const handlerUserMessage = useCallback((message, step) => {
        if (step === 'PASSWORD_VERIFY' || step === 'PASSWORD') {
            let temp = '';
            const count = message.length;
            for (let i = 0; i <= count; i++) {
                temp = temp + '* '
            }
            message = temp;
        }
        return {
            id: new Date().getTime() + 'dc4',
            text: message,
            type: 'TEXT',
            position: 'right',
        }
    }, []);

    useEffect(() => {
        if (token && step === 'EMAIL') {
            setDataSecondStep((dataSecondStep) => {
                return {
                    ...dataSecondStep,
                    "expired_token": token,
                }
            })
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
                        setStep('EMAIL_PASSWORD')
                        handlerMessage(messageDefault.consentBtn)
                    },
                }

            ])
        }
    }, [token]);

    useEffect(() => {
        if (error && !messagesList.filter((item, i) => item.id === error.id).length) {
            handlerMessage({
                ...error,
                type: 'TEXT',
                position: 'left',
            })
        }
        if(error.setStep){
            setStep(error.setStep)
        }
    }, [error])


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
                    dispatch(signUpFirstStep({...dataFirstStep, "email": text}));
                } else {
                    setStep('EMAIL');
                    handlerMessage({
                        ...messageDefault.validEmail,
                        id: new Date().getTime() + messageDefault.validEmail.id,
                    },)
                }
                ;
                break;
            case 'CONSENT':
                if (text) {
                    handlerMessage({
                        ...messageDefault.validConsent,
                        id: new Date().getTime(),
                    },)
                }
                break
            case 'EMAIL_PASSWORD':
                if (text && regEmailPassword.test(text) && text.length >= 4) {
                    setDataSecondStep((dataSecondStep) => {
                        return {
                            ...dataSecondStep,
                            "verify_code": text,
                        }
                    })
                    if(dataSecondStep.password){
                        dispatch(signUpSecondStep({
                            ...dataSecondStep,
                            "verify_code": text,
                        }))
                    }else {
                        handlerMessage({
                            ...messageDefault.createPassword
                        })
                        setStep('PASSWORD')
                    }
                } else {
                    handlerMessage({
                        ...messageDefault.validEmailPassword,
                        id: new Date().getTime(),
                    },)
                }
                break;
            case 'PASSWORD':
                if (text && text.length >= 8) {
                    setDataSecondStep((dataSecondStep) => {
                        return {
                            ...dataSecondStep,
                            "password": text,
                        }
                    })
                    setStep('PASSWORD_VERIFY')
                    handlerMessage({
                        ...messageDefault.verifyPassword
                    })
                } else {
                    handlerMessage({
                        ...messageDefault.validPassword,
                        id: messageDefault.validPassword.id + new Date().getTime(),
                    },)
                }
                break;
            case 'PASSWORD_VERIFY':
                if (text === dataSecondStep.password) {
                    dispatch(signUpSecondStep(dataSecondStep))
                } else {
                    handlerMessage({
                        ...messageDefault.validVerifyPassword,
                        id: messageDefault.validPassword.id + new Date().getTime(),
                    },)
                }
                break;
            default:
                return;
        }
        setText('')
        scrollRef.current?.scrollToEnd()
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
                    style={{
                        backgroundColor:'red',
                        marginBottom:30,
                    }}
                    ref={scrollRef}
                    data={messagesList}
                    renderItem={({item}) => <Message message={item}/>}
                    keyExtractor={item => item.id}
                />
                <View style={styles.bottom}>
                    {endRegistration ?
                        <View style={{
                            marginLeft:'auto',
                            marginRight:'auto',
                        }}>
                        <Button label={'Вход'} onPress={()=>navigation.navigate('Onboard')} size={{width:260,height:50}}/>
                        </View>:
                        <Composer
                            text={text}
                            setText={setText}
                            onSend={() => {
                                handlerMessage(handlerUserMessage(text, step));
                                setTimeout(onPress, 200)
                            }
                            }
                            ref={ref}
                            disabled={load}
                            // secure={messages[messages.length - 1]?.secure}
                        />}
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
