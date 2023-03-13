import { Image, Linking, Platform, Pressable, Text, View } from 'react-native'
import style from './styles'
import UserLine from '@/components/User/userLine'
import UserCircle from '@/components/User/userCircle'
import { font, RH, RW } from '@/theme/utils'
import { WHITE } from '@/theme/colors'
import Vk from '@/assets/imgs/vk'
import { useNavigation } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import { _storageUrl } from '@/constants'
import { useSelector } from 'react-redux'

function Index({ size, onPressImg }) {
  const user = useSelector(({ auth }) => auth.user)
  const { name, surname, vk_id, avatar } = user
  const fontSizeTitle = size / RW(35)
  const fontSizeCount = size / RW(25)
  const [loader, setLoader] = useState(true)
  const navigation = useNavigation()
  useEffect(() => {
    avatar ? setLoader(false) : setLoader(true)
    setTimeout(() => {
      if (!avatar) {
        setLoader(false)
      }
    }, 3000)
  }, [])
  const sizing = {
    padding: size > 40 ? RH(5) : RH(0),
    marginTop: size > 40 ? RH(4) : RH(3),
    width: size < 40 ? size / RW(3) : size / RW(4.3),
  }
  return (
    <View
      style={{
        overflow: Platform.OS == 'ios' ? 'visible' : 'hidden',
        alignItems: 'center',
      }}
    >
      <Pressable
        onPress={() =>
          onPressImg ? navigation.navigate('ProfileNavigator', { screen: 'Gallery' }) : null
        }
        style={{
          width: size / 2.8,
          height: size / 2.8,
          width: size / 2.8,
          height: size / 2.8,
          resizeMode: 'cover',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          top: 8,
        }}
      >
        <Image
          style={[
            { ...style.image, borderRadius: size / RW(3), top: size < 40 ? '-50%' : 0 },
            { resizeMode: 'cover' },
          ]}
          source={
            !avatar
              ? require('../../../assets/defualtUser.png')
              : avatar.startsWith('https://')
              ? { uri: avatar }
              : {
                  uri: _storageUrl + avatar,
                }
          }
        />
      </Pressable>
      <View style={[style.nameBlock, { marginTop: size < 40 ? RH(4) : RH(16) }]}>
        <Text style={font('bold', size / RW(22), WHITE)}>{name ? name : 'Имя'}</Text>
        <Text style={font('bold', size / RW(22), WHITE)}>{surname ? surname : 'Фамилия'}</Text>
      </View>
      <View
        style={{
          ...style.statusBlock,
          width: size / RW(1.8),
          overflow: 'visible',
          marginTop: size / RH(70),
        }}
      >
        <UserCircle size={size + RW(15)} count={user?.create_games?.length} status={user.status} />
        <UserLine size={size} status={user.status} />
        <UserCircle
          size={size + RW(15)}
          count={user?.took_part_games?.length}
          status={user.status}
        />
      </View>
      <View
        style={{
          ...style.titleBigBloc,
          height: size < 40 ? size / RH(2.9) : size / RW(4.4),
          marginTop: size / RH(55),
          width: size < 40 ? size / RW(1.5) : size / RW(2.1),
          justifyContent: 'space-evenly',
        }}
      >
        <View style={[style.titleBloc, sizing]}>
          <Text style={{ ...font('openSans', fontSizeTitle, WHITE), textAlign: 'center' }}>
            Создано игр
          </Text>
          <Text style={font('exo', fontSizeCount, WHITE)}>{user?.create_games?.length}</Text>
        </View>
        <View style={[style.titleBloc, sizing]}>
          <Text style={{ ...font('openSans', fontSizeTitle, WHITE), textAlign: 'center' }}>
            Принято игр
          </Text>
          <Text style={font('exo', fontSizeCount, WHITE)}>{user?.took_part_games?.length}</Text>
        </View>
        <View style={[style.titleBloc, sizing]}>
          <Text style={{ ...font('openSans', fontSizeTitle, WHITE), textAlign: 'center' }}>
            Отменено игр
          </Text>
          <Text style={{ ...font('exo', fontSizeCount, WHITE) }}>{user?.create_games?.length}</Text>
        </View>
        <View style={[style.titleBloc, sizing]}>
          <Text style={{ ...font('openSans', fontSizeTitle, WHITE), textAlign: 'center' }}>
            Отклонено игр
          </Text>
          <Text style={font('exo', fontSizeCount, WHITE)}>{user?.took_part_games?.length}</Text>
        </View>
      </View>
      <Pressable
        onPress={() => {
          if (vk_id) {
            Linking.canOpenURL(`https://vk.com/id${vk_id}`).then((e) => {
              if (e) {
                Linking.openURL(`https://vk.com/id${vk_id}`)
              }
            })
          }
        }}
        style={{ ...style.soc, marginTop: size / RH(30) }}
      >
        <Vk size={size / RH(12)} />
      </Pressable>
    </View>
  )
}

export default Index
