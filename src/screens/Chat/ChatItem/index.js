import React from 'react'
import { Image, Text, TouchableOpacity } from 'react-native'
import style from '../style'
import { useNavigation } from '@react-navigation/native'
import { _storageUrl } from '@/constants'

function Index({ id, img, name, updatedAt }) {
  const navigation = useNavigation()
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('PrivateChat', { id })}
      style={style.chatItemBlock}
    >
      <Image style={style.chatItemImg} source={{ uri: _storageUrl + img }} />
      <Text style={style.itemData}>{name}</Text>
      <Text style={style.itemData}>{updatedAt}</Text>
      <Text style={style.time}>1:01</Text>
    </TouchableOpacity>
  )
}

export default Index
