import React from 'react'
import { FlatList, Image, Text, TouchableOpacity, View, Linking } from 'react-native'
import style from '../style'
import ScreenMask from '@/components/wrappers/screen'
import { useNavigation } from '@react-navigation/native'
import { _storageUrl } from '@/constants'
import { useSelector } from 'react-redux'

const index = () => {
  const navigation = useNavigation()
  const { avatar, name, surname, _id } = useSelector(({ auth }) => auth.user)
  const list = [
    { id: 1, text: 'Мои данные', navigateTo: 'MyDetails' },
    { id: 2, text: 'Моя галерея', navigateTo: 'Gallery' },
    { id: 3, text: 'Мои предпочтения', navigateTo: 'Preference' },
    { id: 4, text: 'Мой кошелек', navigateTo: 'Wallet' },
    { id: 5, text: 'Условия использования' },
    { id: 6, text: 'Обратная связь', navigateTo: 'Feedback' },
  ]
  const forNavigate = item => {
    if (item.id !== 5) {
      navigation.navigate('ProfileNavigator', { screen: item.navigateTo })
    }
  }

  const LinkItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => forNavigate(item)}
      style={item.id === 6 ? { ...style.linkBlock, borderBottomWidth: 0 } : { ...style.linkBlock }}
    >
      <Text style={style.linkText}>{item.text}</Text>
    </TouchableOpacity>
  )
  const renderItem = ({ item }) => <LinkItem item={item} />
  return (
    <ScreenMask style={{ paddingHorizontal: 0 }}>
      <View style={style.container}>
        <Text style={style.title}>Мой кабинет</Text>
        <View style={style.infoBlock}>
          <View style={style.imageBlock}>
            <Image
              style={[style.image]}
              source={
                !avatar
                  ? require('../../../assets/imgs/user/defualtUser.png')
                  : avatar.startsWith('https://')
                  ? { uri: avatar }
                  : {
                      uri: _storageUrl + avatar,
                    }
              }
            />
          </View>
          <View>
            <Text style={style.name}>{name + ' ' + surname}</Text>
            <Text style={style.id}>{`Номер ID: ${_id}`}</Text>
          </View>
        </View>
      </View>
      <FlatList data={list} renderItem={renderItem} keyExtractor={item => item.id} />
    </ScreenMask>
  )
}

export default index
