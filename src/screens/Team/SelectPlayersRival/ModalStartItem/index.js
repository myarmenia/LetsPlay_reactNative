import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { RH, RW, font } from '@/theme/utils'
import { WHITE } from '@/theme/colors'

function Index() {
  return (
    <View style={styles.bg}>
      <Text style={styles.text}>Необходимо утвердить состав игроков команды на игру!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#001034',
    width: RW(306),
    height: RH(191),
    borderRadius: RW(20),
    marginLeft: 'auto',
    marginRight: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: RW(20),
  },
  text: {
    textAlign: 'center',
    ...font('bold', 18, WHITE),
  },
})

export default Index
