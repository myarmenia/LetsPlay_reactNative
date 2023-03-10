import React from 'react'
import ScreenMask from '@/components/wrappers/screen'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import styles from '../style'
import { RH, RW } from '@/theme/utils'
import style from '@/screens/Profile/Wallet/style'
import Button from '@/assets/imgs/Button'
import ToggleSwitch from '@/components/ToggleSwitch'

function Index(props) {
  const list = [
    { id: 1, text: 'Входной билет' },
    { id: 2, text: 'Продвижение игры' },
    { id: 3, text: 'Все и сразу' },
  ]
  const LinkItem = ({ item }) => (
    <View
      style={
        item.id === 3
          ? { ...styles.linkBlock, borderBottomWidth: 1, borderTopWidth: 1 }
          : { ...styles.linkBlock, borderBottomWidth: 0, borderTopWidth: 1 }
      }
    >
      <Text style={styles.linkText}>{item.text}</Text>
      <View style={{ marginLeft: 'auto', marginRight: RW(30) }}>
        <ToggleSwitch />
      </View>
    </View>
  )
  const renderItem = ({ item }) => <LinkItem item={item} />
  return (
    <ScreenMask style={{ paddingHorizontal: 0 }}>
      <Text
        style={{
          ...styles.title,
          marginTop: RW(43),
          marginLeft: 'auto',
          marginRight: 'auto',
          marginBottom: RH(45),
        }}
      >
        Платные услуги
      </Text>
      <View style={style.bannerTitleBlock}>
        <Text style={style.bannerTitle}>Подписки за месяц:</Text>
      </View>
      <FlatList data={list} renderItem={renderItem} keyExtractor={item => item.id} />
      <View style={style.buttonBlock}>
        <Button size={{ width: 281, height: 48 }} label={'Подтвердить'} />
      </View>
    </ScreenMask>
  )
}

export default Index
