import React from 'react'
import { View, Text } from 'react-native'
import ScreenMask from '@/components/wrappers/screen'
import LightButton from '@/assets/imgs/Button'
import Count from '@/components/inputs/count'
import TextArea from '@/components/textArea/TextArea'
import { RH, RW } from '@/theme/utils';
import Radio from '@/components/checkbox/radio';
import GestureRecognizer from 'react-native-swipe-gestures'

const CreateActiveGame = ({ navigation }) => {
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
      <Radio list={[
            { id: 1, text: 'Индивидуальный', checked: true },
            { id: 2, text: 'Командный', checked: false },
          ]}/>
      <View style={{alignItems:'flex-end', marginTop:RH(200)}}>
          <LightButton onPress={() => {
            navigation.navigate('GameCreating')
          }} label={'Далее >>'} size={{ width: RW(144), height: RH(46) }} />
        </View>
        </GestureRecognizer>
    </ScreenMask>
  )
}

export default CreateActiveGame
