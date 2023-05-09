import { WHITE } from '@/theme/colors'
import { RH, RW } from '@/theme/utils'
import { useDispatch, useSelector } from 'react-redux'
import { _storageUrl } from '@/constants'
import { useIsFocused, useNavigation } from '@react-navigation/native'
import { Image, Text, View, StyleSheet } from 'react-native'
import Button from '@/assets/imgs/Button'
import ScreenMask from '@/components/wrappers/screen'
import { useEffect } from 'react'

function Index({ route }) {
  const commandsCount = route?.params
  const { qrGameImg, commandsInGame, explainYou } = useSelector(({ alias }) => alias)
  const navigation = useNavigation()
  const isFocused = useIsFocused()
  const dispatch = useDispatch()

  useEffect(() => {
    if (explainYou) {
      console.log('commandsInGame===', commandsInGame)
    }
  }, [isFocused])
  return (
    <ScreenMask>
      <View>
        <View style={styles.body}>
          <Text style={styles.title}>Пригласить игроков</Text>
          <View style={styles.qrBlock}>
            <Image style={styles.qr} source={{ uri: _storageUrl + qrGameImg }} />
          </View>
          <Button
            onPress={() => navigation.navigate('InviteTeamPlayers', commandsCount)}
            size={styles.btn}
            label={'Продолжить'}
          />
        </View>
      </View>
    </ScreenMask>
  )
}
const styles = StyleSheet.create({
  title: {
    color: WHITE,
    textAlign: 'center',
    fontSize: 24,
  },
  body: {
    marginTop: RW(125),
    marginLeft: 'auto',
    marginRight: 'auto',
    alignItems: 'center',
  },
  qrBlock: {
    width: RW(281),
    height: RH(280),
    marginTop: RH(127),
    marginBottom: RH(90),
  },
  qr: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  btn: {
    width: 281,
    height: 48,
  },
})

export default Index
