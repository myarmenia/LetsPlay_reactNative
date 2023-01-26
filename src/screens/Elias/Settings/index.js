import React, {useState} from 'react';
import {Image, Text, View,} from 'react-native';
import ScreenMask from '@/components/wrappers/screen';
import Button from '@/assets/imgs/Button';
import styles from '@/screens/Elias/Settings/styles';
import {RH} from '@/theme/utils';
import Slider from '@/components/range';
import ToggleSwitch from "@/components/toggleSwitch/Toggle";

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
                    <Slider step={9} minVal={10} maxValue={90} val={valWord} setVal={setValWord}/>
                </View>
                <View>
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <Text style={styles.time}>Время раунда</Text>
                        <Text style={styles.time}>{valTime}</Text>
                    </View>
                    <Text style={styles.timeTitle}>продолжительность в секундах</Text>
                    <Slider step={3} minVal={30} maxValue={180} val={valTime} setVal={setTimeVal}/>
                </View>
            </View>
            <View  style={{
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'space-around'
            }}>
                <View>
                    <Text style={{...styles.time,  marginTop:RH(50), marginBottom:5}} >Штраф за пропуск</Text>
                    <Text style={{...styles.timeTitle, marginVertical:2, fontSize:11}}>каждое пропущенное слово отнимает одно очко</Text>
                </View>
                <View style={{
                    marginTop:RH(30)
                }}>
                <ToggleSwitch />
                </View>

            </View>
            <View style={{marginLef: 'auto', marginVertical: RH(80), alignItems: 'center'}}>
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
