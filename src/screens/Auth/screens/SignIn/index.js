import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import ScreenMask from '@/components/wrappers/screen';
import Message from '../../shared/container/message';
import Composer from '../../shared/composer';
import { font, RH } from '@/theme/utils';
import { WHITE } from '@/theme/colors';
import { useAuth } from '@/hooks';

const STEPS = [
    {
        isLeft: true,
        isWrong: false,
        message: 'Укажите адрес электронной почты',
    },
    {
        isLeft: true,
        secure: true,
        isWrong: false,
        message: 'Введите  пароль'
    },
    {
        clear: true,
        isLeft: true,
        isWrong: true,
        message: 'Введенный логин или пароль не верен.\nВосстановить пароль'
    },
    {
        isLeft: true,
        isWrong: false,
        message: 'Для восстановления пароля введите адрес электронной почты.\nПосле чего Вам на указанный адрес, прийдет  письмо с кодом. Этот код необходимо отправить нам.'
    },
    {
        isLeft: true,
        isWrong: false,
        message: 'Введите  код'
    },
    {
        isLeft: true,
        isWrong: false,
        message: 'Введенный код верный. Создайте новый пароль'
    },
    {
        isLeft: true,
        isWrong: false,
        message: 'Повторите пароль'
    }
];

const SignIn = () => {
    const ref = React.useRef();
    const navigation = useNavigation();
    const { setAuthenticated } = useAuth();
    const [index, setIndex] = React.useState(0);
    const [messages, setMessages] = React.useState([]);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        setLoading(false);
        setMessages([STEPS[0]]);
    }, [])

    const onSend = React.useCallback((message) => {
        setLoading(true);
        updateMessages({
            message,
            secure: messages[messages.length - 1]?.secure,
            isLeft: false
        })
        ref.current.setText('');
        let timer = setTimeout(() => {
            setLoading(false);
            setAuthenticated(true);
            clearTimeout(timer);
        }, 5000)
        // TODO api call setLoading(false)
        // STEPS[index] && updateMessages(STEPS[index])
        // setIndex(idx => ++idx);
    }, [index, messages, navigation]);

    const updateMessages = (data) => {
        setMessages(prevData => ([...prevData, data]));
    };

    return (
        <ScreenMask>
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                {messages.map((message, idx) => {
                    return (
                        <Message
                            key={idx.toString()}
                            clear={message.clear}
                            secure={message.secure}
                            isLeft={message.isLeft}
                            isWrong={message.isWrong}
                            message={message.message}
                        />
                    )
                })}
            </ScrollView>
            <View style={styles.bottom}>
                <Composer onSend={onSend} ref={ref} disabled={loading} secure={messages[messages.length - 1]?.secure} />
            </View>
        </ScreenMask>
    )
};

export default SignIn;

const styles = StyleSheet.create({
    bottom: {
        left: 0,
        right: 0,
        bottom: RH(30),
        position: 'absolute',
    },
    vk: {
        alignItems: 'center'
    },
    title: {
        marginVertical: RH(12),
        ...font('regular', 18, WHITE, 24)
    },
    scrollView: {
        flex: 1,
        paddingBottom: RH(94),
        flexDirection: 'column-reverse'
    }
})