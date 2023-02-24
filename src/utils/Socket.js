import React, { useState } from 'react'
import { Pressable, Text, View } from 'react-native'
import { io } from 'socket.io-client'

const socket = io.connect('http://to-play.ru/vk/authorize', {
  transports: ['websocket'],
})
socket.on('message', (m) => {
  // console.log('vkAuthInfo', JSON.parse(m.vkAuthInfo))
})

const Socket = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>SOCET</Text>
    </View>
  )
}
export default Socket
