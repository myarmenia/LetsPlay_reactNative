import React, { useEffect, useState } from 'react'
import { useIsFocused, useNavigation } from '@react-navigation/native'
import { Image, Pressable, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { getTeams } from '@/store/Slices/TeamSlice'
import { _storageUrl } from '@/constants'
import { RH, RW } from '@/theme/utils'
import ScreenMask from '@/components/wrappers/screen'
import BgMyTem from '@/assets/bgMyTem'
import Modal from '@/components/modal'
import style from './style'
import LightButton from '@/assets/imgs/Button'
import DarkButton from '@/assets/imgs/DarkButton'
import LinearGradient from 'react-native-linear-gradient'
import EachCommand from './EachCommand'

function Index() {
  const navigation = useNavigation()
  const [modalVisible, setModalVisible] = useState(false)
  const [back, setBack] = useState(false)
  const { teamChatsList } = useSelector(({ teams }) => teams)
  const ModalItem = () => {
    return (
      <View style={style.modalContainer}>
        <Text style={style.modalText}>У Вас еще нет своей команды. Создать команду?</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            width: '100%',
            paddingVertical: RH(20),
          }}
        >
          <LightButton
            label={'Да'}
            size={{ width: 100 }}
            onPress={() => navigation.navigate('CreateTeamTitle')}
          ></LightButton>
          <DarkButton
            label={'Нет'}
            size={{ width: 100 }}
            onPress={() => navigation.navigate('teamStart')}
          ></DarkButton>
        </View>
      </View>
    )
  }
  const dispatch = useDispatch()
  const isFocused = useIsFocused()
  useEffect(() => {
    dispatch(getTeams(setModalVisible))
  }, [isFocused])
  // useEffect(() => {
  //   !teamChatsList.length ? setModalVisible(true) : setModalVisible(false)
  // }, [teamChatsList])
  //==========================//
  // need detect in map user is member other command or cammand is his
  //==========================//
  return (
    <ScreenMask>
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        <Text style={style.title}>Мои команды</Text>
        {modalVisible && (
          <Modal
            modalVisible={modalVisible}
            setIsVisible={setModalVisible}
            item={<ModalItem />}
            btnClose={false}
            navigationText={'teamStart'}
          />
        )}
        {teamChatsList?.length ? (
          teamChatsList?.map((command, i) => <EachCommand command={command} i={i} key={i} />)
        ) : (
          <View style={{ alignSelf: 'center' }}>
            <Text style={style.text}>Загрузка...</Text>
          </View>
        )}
        <Text style={style.title}>Участник команды</Text>
      </ScrollView>
    </ScreenMask>
  )
}

export default Index
