import { StyleSheet, Text, View, TextInput, Pressable, Keyboard } from 'react-native'
import React, { useState } from 'react'
import { RW, font, RH } from '@/theme/utils'
import { LIGHT_LABEL, WHITE, BACKGROUND, ICON, RED } from '@/theme/colors'
import Row from '@/components/wrappers/row'
import CloseSvg from '@/assets/svgs/closeSvg'
import Button from '@/components/buttons/Button'
import axiosInstance from '@/store/Api'
import Modal from '@/components/modal'
import { useNavigation } from '@react-navigation/native'




const successText = `Спасибо за ваше сообщение. В ближайшее время с вами свяжется менеджер приложения
«Играем».`
const failText = `Извините, что-то пошло не так, попробуйте повторить позднее`

const FeedbackAnswerModal = ({ body, close }) => {
    const navigation = useNavigation()
    const [errorText, setErrorText] = useState(false)
    const [value, setValue] = useState(null)
    const [modalText, setModalText] = useState(successText)
    const [isVisible, setIsVisible] = useState(false)

    const handleClick = async () => {
        if (!value) {
            setErrorText(true)
        } else {
            try {
                const data = await axiosInstance.put('/feedback', {
                    text: value,
                    feedbackId: body.feedback
                })
                if (data.data.message === "success") {
                    setModalText(successText)
                    setIsVisible(true)
                    setErrorText(false)
                }
            } catch (error) {
                setIsVisible(true)
                setModalText(failText)
            } finally {
                setTimeout(() => {
                    setIsVisible(false)
                    navigation.navigate('Home')
                    setValue('')
                }, 2500)

            }

        }
    }



    return (
        <View style={styles.modal}>
            <Row wrapper={styles.header}>
                <Text style={styles.text}>Oтвет от службы поддержки</Text>
                <Pressable onPress={() => {
                    close(false)
                }}>
                    <CloseSvg />
                </Pressable>

            </Row>
            <Text style={styles.message}>{body.text}</Text>
            <View style={styles.inputBlock}>
                <TextInput
                    onChangeText={setValue}
                    value={value}
                    placeholderTextColor={ICON}
                    multiline={true}
                    numberOfLines={10}
                    textAlignVertical={'top'}
                    placeholder={'Сообщение'}
                    style={[{ ...styles.input, }, Platform.OS == 'ios' && { fontSize: 16 }]}
                />
                {errorText ? (
                    <Text style={styles.errorText}>Обязательное поле для заполнения</Text>
                ) : null}
            </View>
            <View style={styles.buttonBlock}>
                <Button onPress={handleClick} style={{ width: 140 }} size={{ height: 32 }} label={'Отправить'} />
            </View>
            <Modal
                modalVisible={isVisible}
                setIsVisible={setIsVisible}
                item={
                    <View style={styles.feedbackModal}>
                        <Text style={styles.modalText}>
                            {modalText}
                        </Text>
                    </View>
                }
            />
        </View>
    )
}

export default FeedbackAnswerModal

const styles = StyleSheet.create({
    modal: {
        alignSelf: 'center',
        width: RW(356),
        backgroundColor: LIGHT_LABEL,
        borderRadius: RW(20),
        padding: RW(20),
        marginHorizontal: RW(30.5),
    },
    header: {
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: RH(15)
    },
    text: {
        ...font('bold', 19, WHITE, 20),
        textAlign: 'center',
    },
    message: {
        ...font('medium', 17, WHITE, 20),
        marginBottom: RH(15)
    },
    errorText: {
        ...font('regular', 16, RED, 24),
    },
    inputBlock: {
        marginBottom: RH(23),
    },
    input: {
        width: '100%',
        backgroundColor: BACKGROUND,
        color: ICON,
        borderRadius: RW(10),
        paddingHorizontal: RW(20),
    },
    feedbackModal: {
        width: RW(289),
        height: RH(199),
        paddingHorizontal: RW(26),
        paddingTop: RH(48),
        backgroundColor: LIGHT_LABEL,
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: RW(20),
        alignItems: 'center',
    },
    modalText: {
        ...font('regular', 16, WHITE, 24),
        textAlign: 'center',
        width: RW(235),
    },
})