import { RH, RW, font } from '@/theme/utils'
import { _storageUrl } from '@/constants'
import { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { getMyTeams, saveTeamDataForCreating } from '@/store/Slices/TeamSlice'
import Modal from '@/components/modal'
import LightButton from '@/components/buttons/Button'
import DarkButton from '@/components/buttons/DarkButton'
import EachCommand from './EachCommand'
import { LIGHT_LABEL, WHITE } from '@/theme/colors'
import ScreenMask2 from '@/components/wrappers/screen2'

function Index({ route }) {
  const { params } = route

  const navigation = useNavigation()
  const [modalVisible, setModalVisible] = useState(false)
  const { myTeams } = useSelector(({ teams }) => teams)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMyTeams())
    dispatch(saveTeamDataForCreating({}))
  }, [])

  const ModalItem = () => {
    return (
      <View style={styles.modalContainer}>
        <Text style={styles.modalText}>У Вас еще нет своей команды. Создать команду?</Text>
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
            onPress={() => {
              setModalVisible(false)
              navigation.navigate('CreateTeamTitle')
            }}
          />
          <DarkButton
            label={'Нет'}
            size={{ width: 100 }}
            onPress={() => {
              setModalVisible(false)
              if (params?.navigateFrom == 'RatePlayerModal') {
                navigation.navigate('CreateGameNavigator', {
                  screen: 'RatePlayers',
                  params: { ...route.params.body, navigateFrom: 'MyTeam' },
                })
              } else {
                navigation.navigate('Home')
              }
            }}
          ></DarkButton>
        </View>
      </View>
    )
  }



  return (
    <ScreenMask2>
      {modalVisible && (
        <Modal
          modalVisible={modalVisible}
          setIsVisible={setModalVisible}
          item={<ModalItem />}
          btnClose={false}
          navigationText={'teamStart'}
        />
      )}
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        <Text style={styles.title}>Мои команды</Text>
        {myTeams?.length ? (
          myTeams?.map((command, i) => <EachCommand data={params} command={command} key={i} />)
        ) : (
          <View style={{ alignSelf: 'center' }}>
            <Text style={styles.text}>Нет команд</Text>
          </View>
        )}
      </ScrollView>
    </ScreenMask2>
  )
}
const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    ...font('bold', 20, WHITE),
    marginVertical: RH(15),
  },
  modalContainer: {
    backgroundColor: LIGHT_LABEL,
    borderRadius: RW(20),
    alignSelf: 'center',
    width: RW(306),
    minHeight: RH(191),
    padding: RW(35),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  modalText: {
    ...font('bold', 17, WHITE),
    textAlign: 'center',
  },
  text: {
    marginVertical: RH(3),
    ...font('bold', 15, WHITE),
    flexGrow: 1,
    flexWrap: 'nowrap',
    width: '74%',
  },
})

export default Index
