import React from 'react'
import { View, Text, SafeAreaView, FlatList, ScrollView } from 'react-native'
import ScreenMask from '@/components/wrappers/screen'
import { Players } from '@/assets/TestData'
import User from '@/assets/imgs/user/user'
import { styles } from './styles'
import Button from '@/assets/imgs/Button'
import DarkButton from '@/assets/imgs/DarkButton'
import PlayerList from "@/components/playerList";

function Index({ navigation }) {
  return (
    <ScreenMask>
      <Text style={styles.title}>Игроки добавились в игру</Text>
        <PlayerList players={Players} isSelected={false}/>
      <View
        style={{ marginLeft: 'auto', alignItems: 'center', marginTop: 20, marginRight: 'auto' }}
      >
        <Button
          onPress={() => navigation.navigate('EliasAllocatePlayers')}
          size={{ width: 281, height: 48 }}
          label={'Продолжить'}
        />
        <View style={{ marginTop: 20 }}>
          <DarkButton size={{ width: 281, height: 48 }} label={'Пригласить игроков'} />
        </View>
      </View>
    </ScreenMask>
  )
}

export default Index
