import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const MafiaLoader = () => {
  const { loader } = useSelector(({ mafia }) => mafia)
  if (!loader) {
    return null
  }
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        zIndex: 99999,
        top: 0,
        bottom: 0,
        left: -40,
        right: -40,
        paddingHorizontal: 40,
        backgroundColor: 'rgba(0,0,0,0.5)',
      }}
    >
      <ActivityIndicator size="large" color={'#fff'} />
      <Text style={{ color: '#fff', fontSize: 20, textAlign: 'center' }}>
        Не все игроки готовы. Ждем остальных!
      </Text>
    </View>
  )
}

export default MafiaLoader

const styles = StyleSheet.create({})
