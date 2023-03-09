import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
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

function Index() {
  const navigation = useNavigation()
  const [modalVisible, setModalVisible] = useState(false)
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
  useEffect(() => {
    dispatch(getTeams(setModalVisible))
  }, [])
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
        {teamChatsList.length ? (
          teamChatsList.map((command, i) => (
            <TouchableOpacity key={i} onPress={() => navigation.navigate('MyTeamInfo', command)}>
              <View style={style.homeBlock}>
                <View
                  style={{
                    zIndex: 1,
                    marginLeft: RW(10),
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <View style={style.imageBlock}>
                    <Image
                      style={style.image}
                      source={{ uri: _storageUrl + command.img }}
                      resizeMode="cover"
                    />
                  </View>
                  <View style={style.textBlock}>
                    <Text style={style.text}>{command.name}</Text>
                    <Text style={style.text}>{command.address_name}</Text>
                    <Text style={style.text}>
                      {command._id.substring(0, command._id.length - 1)}
                    </Text>
                  </View>
                </View>
                <View style={{ position: 'absolute' }}>
                  <BgMyTem />
                </View>
              </View>
            </TouchableOpacity>
          ))
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
