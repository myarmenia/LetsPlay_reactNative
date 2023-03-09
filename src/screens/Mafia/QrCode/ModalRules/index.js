import React from 'react'
import {Text, Pressable, View} from 'react-native'
import {styles} from './styles'

function ModalRules({setModalRules}) {
    return (
        <Pressable onPress={() => setModalRules(false)} style={styles.body}>
            <Text style={styles.title}>Правила</Text>
            <Text style={{...styles.text, marginBottom: 20}}>Мафия захватывает мирный город, и честные жители больше не
                могут спать спокойно: им нужно вычислить кто есть кто и выгнать всю мафию, чтобы спастись. Если им не
                удастся это сделать, мафия захватит город, и мирные жители будут обречены.
            </Text>
            <Text style={styles.text}>
                Игра делится на два периода: утро и ночь. В утреннем обсуждении — участвуют все игроки, а ночью… у
                каждого персонажа своя роль.
                Весь игровой процесс используется при помощи мобильного устройства. Вам не нужны ни карты, ни маски, ни
                ведущий. Количество игроков должно быть не менее 5 человек.
                Удачной игры!
            </Text>
        </Pressable>
    )
}

export default ModalRules
