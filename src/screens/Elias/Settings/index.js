import React, {useState} from 'react';
import {Image, Text, View,} from 'react-native';
import ScreenMask from '@/components/wrappers/screen';
import Button from '@/assets/imgs/Button';
import styles from '@/screens/Elias/Settings/styles';
import {RH} from '@/theme/utils';
import Slider from '@/components/range'

function Index({navigation}) {
    const [valWord, setValWord] = useState(0);
    const [valTime, setTimeVal] = useState(0);

    return (
        <ScreenMask>
            <Text style={styles.title}>Настройки</Text>
            <View>
                <View>
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <Text style={styles.time}>Количество слов</Text>
                        <Text style={styles.time}>{valWord}</Text>
                    </View>
                    <Text style={styles.timeTitle}>для достижения победы</Text>
                    <Slider step={9} maxValue={90} val={valWord} setVal={setValWord}/>
                </View>
                <View>
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <Text style={styles.time}>Время раунда</Text>
                        <Text style={styles.time}>{valTime}</Text>
                    </View>
                    <Text style={styles.timeTitle}>продолжительность в секундах</Text>
                    <Slider step={3} maxValue={180} val={valTime} setVal={setTimeVal}/>
                </View>
            </View>
            <View style={{marginLef: 'auto', marginVertical: RH(40), alignItems: 'center'}}>
                <Button
                    onPress={() => navigation.navigate('DifficultyLevel')}
                    size={styles.btn}
                    label={'Продолжить'}
                />
            </View>
        </ScreenMask>
    )
}

export default Index
