import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { RW, font, RH } from '@/theme/utils'
import { LIGHT_LABEL, WHITE, BACKGROUND, ICON, RED } from '@/theme/colors'
import Row from '@/components/wrappers/row'
import CloseSvg from '@/assets/svgs/closeSvg'
import Button from '@/components/buttons/Button'
import { useDispatch } from 'react-redux'
import { setModalOptions } from '@/store/Slices/AppSlice'
import axiosInstance from '@/store/Api'
const FeedbackAnswerModal = ({ message }) => {
    const dispatch = useDispatch()
    const [errorText, setErrorText] = useState(false)
    const [value, setValue] = useState(null)

    const handleClick = async () => {
        if (!value) {
            setErrorText(true)
        } else {
            try {
                const data = await axiosInstance.post('/feedback', {
                    "title": 'description',
                    "text": value
                })

                if (data.data.message === "success") {
                    setTimeout(() => {
                        closeModal()
                    }, 1500)
                }
            } catch (error) {
                console.log(error, 'error');
            }

        }

    }

    const closeModal = () => {
        dispatch(
            setModalOptions({
                visible: false,
            }),
        )
    }

    useEffect(() => {
        return () => {
            setErrorText(false)
            setValue('')
        }
    }, [])


    return (
        <View style={styles.modal}>
            <Row wrapper={styles.header}>
                <Text style={styles.text}>Oтвет от службы поддержки</Text>
                <Pressable onPress={closeModal}>
                    <CloseSvg />
                </Pressable>

            </Row>
            <Text style={styles.message}>{message}</Text>
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
                <Button onPress={handleClick} size={{ height: 32 }} label={'Отправить'} />
            </View>
        </View>
    )
}

export default FeedbackAnswerModal

const styles = StyleSheet.create({
    modal: {
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
})