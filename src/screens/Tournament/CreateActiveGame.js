import React,  {useState} from 'react'
import {View, Text, TextInput} from 'react-native'
import ScreenMask from '@/components/wrappers/screen'
import LightButton from '@/assets/imgs/Button'
import Count from '@/components/inputs/count'
import TextArea from '@/components/textArea/TextArea'
import { RH, RW } from '@/theme/utils';
import Radio from '@/components/checkbox/radio';
import GestureRecognizer from 'react-native-swipe-gestures'
import {BACKGROUND, ICON, LIGHT_LABEL} from "@/theme/colors";

const CreateActiveGame = ({ navigation }) => {
    const initialState = {
        statusOrganizer: 'Индивидуальный',
    }
    const [data, setData] = useState(initialState)
    const handleNavigate = () => {
        if (data.statusOrganizer === 'Индивидуальный'){
            navigation.navigate('TournamentCreating' , {isTeam: data.statusOrganizer})
        }else {
            navigation.navigate('TournamentCreatingTeam' , {isTeam: data.statusOrganizer})
        }
    }
  return (
    <ScreenMask>
    <GestureRecognizer
        onSwipeRight={state => navigation.goBack()}
        style={{
          flex: 1,
        }}
      >
      <View style={{ marginTop: 50 }}></View>
      <View style={{alignItems:'center', }}>
        <TextInput placeholderTextColor={ICON} placeholder={'Название турнира'} style={{backgroundColor: BACKGROUND , color: ICON,paddingLeft: RW(20), width: RW(375) , borderRadius: RW(10)}}/>
      </View>
      <View style={{alignItems:'center', marginTop:RH(30)}}>
        <TextArea />
      </View>
      <Text style={{color:'#657AC5', marginTop:RH(20), marginHorizontal:RH(15), marginBottom:RH(25)}}>Формат турнира</Text>
        <View style={{marginLeft: RW(20)}}>
      <Radio type={'statusOrganizer'} data={data} setData={setData} list={[
            { id: 1, text: 'Индивидуальный', checked: true },
            { id: 2, text: 'Командный', checked: false },
          ]}/>
        </View>
      <View style={{alignItems:'flex-end', marginTop:RH(200) , marginRight: RW(20)}}>
          <LightButton onPress={handleNavigate} label={'Далее >>'} size={{ width: RW(144), height: RH(46) }} />
        </View>
        </GestureRecognizer>
    </ScreenMask>
  )
}

export default CreateActiveGame
