import { Text, View, Image, ImageBackground } from 'react-native'
import React from 'react'
import Modal from '@/components/modal'
import { font, RH } from '@/theme/utils'
import { WHITE } from '@/theme/colors'
import { useSelector } from 'react-redux'
import { _storageUrl } from '@/constants'

const MafiaModal = ({ modalVisible, setModalVisible }) => {
  const mafiaRole = useSelector(({ mafia }) => mafia.mafiaRole)
  return (
    <View>
      <Modal
        modalVisible={modalVisible}
        setIsVisible={setModalVisible}
        item={
          <>
            <Text
              style={{
                position: 'absolute',
                color: '#fff',
                top: RH(100),
                alignSelf: 'center',
                ...font('bold', 24, WHITE, 47),
                textAlign: 'center',
              }}
            >
              Игра началась!{'\n'}Вашa роль в игре
            </Text>
            <ImageBackground
              source={require('../assets/modalBg.png')}
              resizeMode={'contain'}
              style={{ height: RH(370), justifyContent: 'center', alignItems: 'center' }}
            >
              <Image
                source={{ uri: _storageUrl + mafiaRole?.img }}
                style={{ height: RH(180), width: RH(150), resizeMode: 'contain' }}
              />
              <Text
                style={{
                  textAlign: 'center',
                  ...font('bold', 30, '#000'),
                  marginTop: RH(10),
                }}
              >
                {mafiaRole?.name}
              </Text>
            </ImageBackground>
          </>
        }
      />
    </View>
  )
}

export default MafiaModal
