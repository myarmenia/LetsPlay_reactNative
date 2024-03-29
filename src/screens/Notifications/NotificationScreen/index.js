import React, { useEffect } from 'react'
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import Row from '@/components/wrappers/row'
import FilterSvg from '@/assets/svgs/FilterSvg'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { deleteAllNotifications, getNotifications } from '@/store/Slices/AppSlice'
import { ICON, WHITE } from '@/theme/colors'
import { font, RH, RW } from '@/theme/utils'
import NotificationItem from './NotificationItem'
import ScreenMask2 from '@/components/wrappers/screen2'
import FeedbackAnswerModal from '@/components/CustomModal/modals/FeedbackAnswerModal'

function NotificationScreen() {
  const { notifications } = useSelector(({ app }) => app)
  console.log(notifications);



  const navigation = useNavigation()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getNotifications())
  }, [])
  return (
    <ScreenMask2>
      <View style={styles.container}>
        <Text style={styles.title}>Уведомления</Text>
        <Row wrapper={styles.row}>
          <Pressable
            style={styles.settings}
            onPress={() => navigation.navigate('NotificationSettings')}
          >
            <Text style={styles.settingsText}>Настройки</Text>
            <FilterSvg />
          </Pressable>
          <Pressable style={styles.deleteAll} onPress={() => dispatch(deleteAllNotifications())}>
            <Text style={styles.deleteAllText}>Очистить все</Text>
          </Pressable>
        </Row>

        <FlatList
          contentContainerStyle={{ paddingBottom: RH(90) }}
          showsVerticalScrollIndicator={false}
          data={[...notifications].reverse()}
          renderItem={(elm) => <NotificationItem elm={elm?.item} />}
        />
      </View>
    </ScreenMask2>
  )
}
const styles = StyleSheet.create({
  container: {
    paddingTop: RH(36),
    alignItems: 'center',
  },
  title: {
    ...font('bold', 24, WHITE, 29),
    marginBottom: RH(32),
  },
  row: {
    justifyContent: 'space-between',
    width: '100%',
    marginHorizontal: RW(13),
    marginBottom: RH(16),
  },
  settings: {
    backgroundColor: '#142A5C',
    borderRadius: 30,
    borderWidth: RW(1),
    borderColor: '#657AC5',
    paddingVertical: RW(5),
    paddingHorizontal: RW(7),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  settingsText: {
    ...font('bold', 14, ICON, 17),
    marginRight: RW(5),
  },
  deleteAll: {},
  deleteAllText: {
    ...font('bold', 14, ICON, 17),
    textDecorationLine: 'underline',
  },
})

export default NotificationScreen
