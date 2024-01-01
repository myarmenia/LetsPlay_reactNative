import React from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import ScreenMask from '@/components/wrappers/screen'
import { useNavigation } from '@react-navigation/native'
import { _storageUrl } from '@/constants'
import { useSelector } from 'react-redux'
import FastImage from 'react-native-fast-image'
import { RH, RW, font } from '@/theme/utils'
import { DARK_BLUE, ICON, WHITE } from '@/theme/colors'
import ScreenMask2 from '@/components/wrappers/screen2'
import { getDocumentRules } from '@/store/Slices/AuthSlice'
import { useDispatch } from 'react-redux'

const index = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const { avatar, name, surname, _id } = useSelector(({ auth }) => auth.user)

  const list = [
    { id: 1, text: 'Мои данные', navigateTo: 'MyDetails' },
    { id: 2, text: 'Моя галерея', navigateTo: 'Gallery', params: { isMe: true, canDelete: true } },
    { id: 3, text: 'Мои предпочтения', navigateTo: 'Preference' },
    { id: 5, text: 'Условия использования', navigateTo: 'Rules' },
    { id: 6, text: 'Обратная связь', navigateTo: 'Feedback' },
  ]
  const forNavigate = (item) => {
    if (item.id !== 5) {
      navigation.navigate('ProfileNavigator', { screen: item.navigateTo, params: item?.params })
    } else {
      navigation.navigate('ProfileNavigator', { screen: item.navigateTo, params: item?.params })
      dispatch(getDocumentRules())
    }
  }

  const LinkItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => forNavigate(item)}
      style={
        item.id === 6 ? { ...styles.linkBlock, borderBottomWidth: 0 } : { ...styles.linkBlock }
      }
    >
      <Text style={styles.linkText}>{item.text}</Text>
    </TouchableOpacity>
  )
  const renderItem = ({ item }) => <LinkItem item={item} />

  return (
    <ScreenMask2 style={{ paddingHorizontal: 0 }}>
      <View style={styles.container}>
        <Text style={styles.title}>Мой кабинет</Text>
        <View style={styles.infoBlock}>
          <View style={styles.imageBlock}>
            <FastImage
              style={styles.image}
              resizeMode="cover"
              source={
                !avatar
                  ? require('../../../assets/defualtUser.png')
                  : avatar.startsWith('https://')
                    ? { uri: avatar }
                    : {
                      uri: _storageUrl + avatar,
                    }
              }
            />
          </View>
          <View style={styles.userInfoBlock}>
            <Text style={styles.name} numberOfLines={2}>{name + ' ' + surname}</Text>
            <Text style={styles.id} numberOfLines={2}>{`Номер ID: ${_id}`}</Text>
          </View>
        </View>
      </View>
      <FlatList data={list} renderItem={renderItem} keyExtractor={(item) => item.id} />
    </ScreenMask2>
  )
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: RW(27),
    alignItems: 'center',
    paddingLeft: RW(30),
    paddingRight: RH(15)
  },
  title: {
    ...font('bold', 24, WHITE, 24),
    marginBottom: RW(15),
  },

  infoBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    overflow: 'hidden',
    marginBottom: RH(30),
    marginTop: RH(15),
    maxHeight: RH(160),
  },


  imageBlock: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '20%',
  },
  image: {
    width: '100%',
    // height: '100%',
    aspectRatio: 1,
    borderRadius: 43.5,
    alignSelf: 'center',
  },

  userInfoBlock: {
    width: '80%',
    paddingLeft: RW(18)
  },
  name: {
    ...font('bold', 24, ICON, 28),
    flexGrow: 1,
  },
  id: {
    ...font('regular', 15, ICON, 19),
    marginTop: RH(8),
    width: '87%',
  },
  linkText: {
    ...font('regular', 16, WHITE, 19),
    paddingHorizontal: RW(12),
    paddingVertical: RH(10),
  },
  linkBlock: {
    width: '100%',
    paddingVertical: RH(17),
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: DARK_BLUE,
    paddingLeft: RW(44),
  },
})

export default index
