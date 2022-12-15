import React from 'react'
import { View, Text } from 'react-native'
import ScreenMask from '@/components/wrappers/screen'
import LightButton from '@/assets/imgs/Button'
import Count from '@/components/inputs/count'
import TextArea from '@/components/textArea/TextArea'
import { RH, RW } from '@/theme/utils';
import Radio from '@/components/checkbox/radio';

const CreateActiveGame = ({ navigation }) => {
  return (
    <ScreenMask>
      <View style={{ marginTop: 50 }}></View>
      <View>
        <Count placeholder={'Название турнира'} width={375} height={48} />
      </View>
      <View style={{alignItems:'center', marginTop:RH(30)}}>
        <TextArea />
      </View>
      <Text style={{color:'#657AC5', marginTop:RH(20), marginHorizontal:RH(5)}}>
      Формат турнира
      </Text>
      {/* <Radio/> */}
      <View style={{alignItems:'flex-end', marginTop:200}}>
          <LightButton label={'Далее >>'} size={{ width: 144, height: 36 }} />
        </View>
    </ScreenMask>
  )
}

export default CreateActiveGame
