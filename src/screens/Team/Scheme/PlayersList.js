import React from 'react'
import { SafeAreaView, ScrollView, View } from 'react-native'
import { Players } from '@/assets/TestData'
import Draggable from 'react-native-draggable'
import User from '@/components/User/user'

function PlayersList(props) {
  const count = [1, 2, 3, 4, 5, 6, 7]
  return (
    <ScrollView style={{ backgroundColor: 'red', paddingBottom: 'auto', height: 50 }}>
      {count.map((ev) => (
        <Draggable key={ev.id} x={ev.id === 1 ? 20 : 50 * (ev.id - 0.6)} minX={20} minY={20}>
          <User
            size={50}
            user={Players[ev.id - 1]}
            onPressItem={{
              item: <User user={Players[ev.id - 1]} size={390} />,
              modalClose: false,
            }}
          />
        </Draggable>
      ))}
    </ScrollView>
  )
}

export default PlayersList
