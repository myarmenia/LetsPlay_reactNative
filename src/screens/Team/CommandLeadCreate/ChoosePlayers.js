import React, { useState } from 'react'
import ScreenMask from '@/components/wrappers/screen'
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import { _storageUrl } from '@/constants'
import { font, RH, RW } from '@/theme/utils'
import { LIGHT_LABEL, WHITE } from '@/theme/colors'
import BorderGradient from '@/assets/svgs/BorderGradiend'
import User from '@/components/User/user'
import EmptyBorderedAvatar from '@/assets/svgs/EmptyBorderedAvatar'
import LightButton from '@/assets/imgs/Button'
import Modal from '@/components/modal'
const ChoosePlayers = ({ route }) => {
  const command = route.params
  const [modalVisible, setModalVisible] = useState(false)
  const UserItem = ({ elm }) => {
    const [visible, setVisible] = useState(false)
    return (
      <>
        <Pressable style={styles.eachUser} onPress={() => setVisible(!visible)}>
          {elm !== 2 ? (
            //need detect user accept invite or not and set opacity and don't navigate another show modal
            // <View style={{ opacity: 0.6 }}>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <BorderGradient height={142} width={105} opacity={visible ? 1 : 0} />
              <View style={{ position: 'absolute' }}>
                <User
                  size={110}
                  // pressedUser={{ avatar: '/team/image/4caea4a8-8864-4ad1-bd20-bf5539558622.jpg' }}
                />
              </View>
            </View>
          ) : (
            <EmptyBorderedAvatar />
          )}
        </Pressable>
      </>
    )
  }
  return (
    <ScreenMask>
      <ScrollView showsVerticalScrollIndicator={false} horizontal={false}>
        <View>
          <View style={styles.rowBox}>
            <Text style={styles.topTitle}>{command?.name}</Text>
            <Image
              style={styles.commandImg}
              source={{ uri: _storageUrl + command?.img }}
              resizeMode="cover"
            />
          </View>
          <View style={styles.playersContainer}>
            {/* map in players in team */}
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => {
              return <UserItem />
            })}
          </View>
        </View>
        <View style={{ alignSelf: 'center', paddingTop: RH(130), marginBottom: RH(20) }}>
          <LightButton
            label={'Подтвердить'}
            size={{ width: 265, height: 42 }}
            onPress={() => setModalVisible(true)}
          />
        </View>
        {modalVisible && (
          <Modal
            item={
              <View style={styles.modal}>
                <Text style={styles.successTeam}>Вы успешно создали командную игру!</Text>
              </View>
            }
            modalVisible={modalVisible}
            setIsVisible={setModalVisible}
            navigationText={'Home'}
          />
        )}
      </ScrollView>
    </ScreenMask>
  )
}

export default ChoosePlayers

const styles = StyleSheet.create({
  topTitle: {
    textAlign: 'center',
    ...font('bold', 22, WHITE),
    marginVertical: RH(15),
  },
  commandImg: {
    width: RW(40),
    height: RW(40),
    borderRadius: RW(20),
    marginRight: '3%',
    borderWidth: 1,
    borderColor: WHITE,
  },
  rowBox: {
    width: '100%',
    flexDirection: 'row-reverse',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    top: RH(15),
  },
  playersContainer: {
    width: '100%',
    top: '10%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  eachUser: {
    padding: RW(5),
  },
  modal: {
    width: RW(306),
    backgroundColor: LIGHT_LABEL,
    borderRadius: RW(20),
    padding: RW(40),
    marginHorizontal: RW(30.5),
  },
  successTeam: {
    ...font('inter', 17, WHITE, 20),
    textAlign: 'center',
  },
})
