import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { memo, useEffect, useState } from 'react'
import LightButton from '@/assets/imgs/Button'
import { useNavigation } from '@react-navigation/native'
import { font, RH, RW } from '@/theme/utils'
import { BACKGROUND, BLACK, ICON, LIGHT_LABEL, RADIO_TEXT, WHITE } from '@/theme/colors'
import ScreenMask from '@/components/wrappers/screen'
import Modal from '@/components/modal'
import Row from '@/components/wrappers/row'
import DarkButton from '@/assets/imgs/DarkButton'
import CloseSvg from '@/assets/svgs/closeSvg'
const GameTypeSelect = () => {
  const navigation = useNavigation()
  const [modalVisible, setModalVisible] = useState(false)
  const ModalItem = ({ onPressYes, onPressNo }) => {
    return (
      <View
        style={{
          position: 'absolute',
          zIndex: 999,
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
        }}
      >
        <View
          style={{
            backgroundColor: LIGHT_LABEL,
            paddingVertical: RH(22),
            paddingHorizontal: RW(44),
            borderRadius: RW(20),
            maxWidth: RW(306),
          }}
        >
          <Row wrapper={{ justifyContent: 'flex-end', marginBottom: RH(5), right: -20 }}>
            <Pressable onPress={() => setModalVisible(false)}>
              <CloseSvg width={24} height={24} />
            </Pressable>
          </Row>

          <Text style={{ ...font('regular', 16, '#fff', 25), textAlign: 'center' }}>
            Если Вы хотите сыграть прямо сейчас и у Вас уже собраны игроки для игры, но нет игровых
            атрибутов (карточек), то используйте игровой алгоритм через свой гаджет. Играть с
            помощью гаджета ?
          </Text>
          <Row wrapper={{ justifyContent: 'space-between', marginTop: RH(30) }}>
            <LightButton
              label="Да"
              size={{ width: 100 }}
              onPress={() => {
                setModalVisible(false)
                onPressYes()
              }}
            />
            <DarkButton
              label="Нет"
              size={{ width: 100 }}
              onPress={() => {
                setModalVisible(false)
                onPressNo()
              }}
            />
          </Row>
        </View>
      </View>
    )
  }
  return (
    <>
      <ScreenMask>
        <View style={styles.btnBlock}>
          <View style={styles.btnActiveGames}>
            <LightButton
              onPress={() => {
                navigation.navigate('CreateGameNavigator', {
                  screen: 'GameListCarousel',
                  params: { list: 'active', fromTournament: true },
                })
              }}
              label={'Активные игры'}
              size={{ width: 281, height: 50 }}
            />
          </View>
          <View>
            <LightButton
              onPress={() => {
                setModalVisible(true)
              }}
              label={'Настольные игры'}
              size={{ width: 281, height: 50 }}
            />
          </View>
          {modalVisible ? (
            <Modal
              modalVisible={modalVisible}
              setModalVisible={setModalVisible}
              item={
                <ModalItem
                  onPressYes={() => {
                    navigation.navigate('CreateGameNavigator', {
                      screen: 'GameListCarousel',
                      params: { list: 'qr' },
                    })
                  }}
                  onPressNo={() => {
                    navigation.navigate('CreateGameNavigator', {
                      screen: 'GameListCarousel',
                      params: { list: 'desktop' },
                    })
                  }}
                />
              }
            />
          ) : null}
        </View>
      </ScreenMask>
    </>
  )
}

export default memo(GameTypeSelect)

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    textAlign: 'center',
    color: WHITE,
  },
  btn: {
    width: RW(220),
    marginTop: RH(20),
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  btnBlock: {
    alignItems: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  gameTypeContainer: {
    alignSelf: 'center',
  },
  checkCheckbox: {
    padding: RW(10),
    flexDirection: 'row',
  },
  openedGameBtn: {
    borderRadius: RW(10),
    backgroundColor: BACKGROUND,
    width: RW(380),
    height: RH(48),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: RW(16),
  },

  typeText: {
    color: RADIO_TEXT,
    fontSize: RW(16),
    paddingHorizontal: RW(10),
  },
  gameTypeBtn: {
    backgroundColor: BACKGROUND,
    width: RW(366),
    height: RH(48),
    borderTopLeftRadius: RW(10),
    justifyContent: 'center',
    borderTopRightRadius: RW(10),
  },
  gameTypeLastBtn: {
    borderRadius: RW(0),
    backgroundColor: BACKGROUND,
    width: RW(366),
    height: RH(48),
    justifyContent: 'center',
  },
  gameTypeBtnText: {
    color: ICON,
    fontSize: RH(16),
    paddingHorizontal: RW(15),
  },
  arrowDown: {
    paddingHorizontal: RW(15),
  },
  someTitle: {
    color: ICON,
    marginLeft: RW(10),
    alignSelf: 'flex-start',
    top: '26%',
    // marginVertical: RH(10),
  },
  radioTitle: {
    color: ICON,
  },
  datesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: RH(20),
    width: RW(380),
    alignSelf: 'center',
    // marginBottom: RH(30),
  },

  btnActiveGames: {
    marginBottom: 24,
  },

  title: font('bold', 18, BLACK),
})
