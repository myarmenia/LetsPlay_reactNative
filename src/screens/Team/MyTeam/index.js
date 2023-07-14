import { RH } from '@/theme/utils'
import { _storageUrl } from '@/constants'
import { useEffect, useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { getMyTeams, getTeams, saveTeamDataForCreating } from '@/store/Slices/TeamSlice'
import ScreenMask from '@/components/wrappers/screen'
import Modal from '@/components/modal'
import style from './style'
import LightButton from '@/assets/imgs/Button'
import DarkButton from '@/assets/imgs/DarkButton'
import EachCommand from './EachCommand'

function Index({ route }) {
  const props = route.params

  const navigation = useNavigation()
  const [modalVisible, setModalVisible] = useState(false)
  const { teamChatsList } = useSelector(({ teams }) => teams)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMyTeams(setModalVisible))
    dispatch(saveTeamDataForCreating({}))
  }, [])
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
            onPress={() => {
              setModalVisible(false)
              navigation.navigate('CreateTeamTitle')
            }}
          ></LightButton>
          <DarkButton
            label={'Нет'}
            size={{ width: 100 }}
            onPress={() => {
              setModalVisible(false)
              navigation.navigate('Home')
            }}
          ></DarkButton>
        </View>
      </View>
    )
  }

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
          teamChatsList?.map((command, i) => <EachCommand data={props} command={command} key={i} />)
        ) : (
          <View style={{ alignSelf: 'center' }}>
            <Text style={style.text}>Загрузка...</Text>
          </View>
        )}
      </ScrollView>
    </ScreenMask>
  )
}

export default Index
