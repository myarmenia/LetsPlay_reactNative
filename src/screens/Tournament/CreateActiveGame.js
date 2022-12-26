import React,  {useState} from 'react'
import { View, Text } from 'react-native'
import ScreenMask from '@/components/wrappers/screen'
import LightButton from '@/assets/imgs/Button'
import Count from '@/components/inputs/count'
import TextArea from '@/components/textArea/TextArea'
import { RH, RW } from '@/theme/utils';
import Radio from '@/components/checkbox/radio';
import GestureRecognizer from 'react-native-swipe-gestures'

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
      <View>
        <Count placeholder={'Название турнира'} width={375} height={48} />
      </View>
      <View style={{alignItems:'center', marginTop:RH(30)}}>
        <TextArea />
      </View>
      <Text style={{color:'#657AC5', marginTop:RH(20), marginHorizontal:RH(5), marginBottom:RH(25)}}>
      Формат турнира
      </Text>
      <Radio type={'statusOrganizer'} data={data} setData={setData} list={[
            { id: 1, text: 'Индивидуальный', checked: true },
            { id: 2, text: 'Командный', checked: false },
          ]}/>
      <View style={{alignItems:'flex-end', marginTop:RH(200)}}>
          <LightButton onPress={handleNavigate} label={'Далее >>'} size={{ width: RW(144), height: RH(46) }} />
        </View>
        </GestureRecognizer>
    </ScreenMask>
  )
}

export default CreateActiveGame

