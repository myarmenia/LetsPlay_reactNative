import React from 'react'
import ScreenMask from '@/components/wrappers/screen'
import {Platform, Text, TextInput, View} from 'react-native'
import styles from '../style'
import style from './style'
import {RH, RW} from '@/theme/utils'
import {ICON} from '@/theme/colors'
import Button from '@/assets/imgs/Button'
import {useState} from 'react'
import Modal from '@/components/modal'

function Index(props) {
    const {navigation} = props
    const [isVisible, setIsVisible] = useState(false);
    const [value, setValue] = useState('')
    const [secondValue, setSecondValue] = useState('')
    const [errorText, setErrorText] = useState(false)
    const handleClick = () => {
        if (value && secondValue) {
            setIsVisible(true)
            setTimeout(() => {
                navigation.navigate('Home')
            }, 3000)
        } else {
            setErrorText(true)
        }
    }

    return (
        <ScreenMask>
            <View style={styles.container}>
                <Text style={{...styles.title, marginTop: RH(53), marginBottom: RH(83)}}>
                    Обратная связь
                </Text>
                <View style={style.inputBlock}>
                    <TextInput onChangeText={(ev) => setValue(ev)} placeholderTextColor={ICON} placeholder={'Тема'}
                               style={[style.input, Platform.OS == 'ios' && {fontSize: 16, height: 51}]}
                    />
                    {errorText && !value ? <Text style={style.errorText}>Обязательное поле для заполнения</Text> : null}
                </View>
                <View style={style.inputBlock}>
                    <TextInput
                        onChangeText={(ev) => setSecondValue(ev)}
                        placeholderTextColor={ICON}
                        multiline={true}
                        numberOfLines={20}
                        textAlignVertical={'top'}
                        placeholder={'Сообщение'}
                        style={[{...style.input, height: RH(405)}, Platform.OS == 'ios' && {fontSize: 16}]}
                    />
                    {errorText && !secondValue ?
                        <Text style={style.errorText}>Обязательное поле для заполнения</Text> : null}
                </View>

                <View style={style.buttonBlock}><Button onPress={handleClick} size={{width: 356, height: 48}}
                                                        label={'Отправить'}/></View>
                <Modal
                    modalVisible={isVisible}
                    setIsVisible={setIsVisible}
                    item={
                        <View style={style.feedbackModal}>
                            <Text style={style.modalText}>
                                Спасибо за ваше сообщение. В ближайшее время с вами свяжется менеджер приложения
                                «Играем?».
                            </Text>
                        </View>
                    }
                />
            </View>
        </ScreenMask>
    )
}

export default Index
