import { Image, Linking, Platform, Pressable, Text, View } from 'react-native'
import style from './styles'
import UserLine from '@/assets/imgs/user/userLine'
import UserCircle from '@/assets/imgs/user/userCircle'
import { font, RH, RW } from '@/theme/utils'
import { WHITE } from '@/theme/colors'
import Vk from '@/assets/imgs/vk'
import { useNavigation } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import { _storageUrl } from '@/constants'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../loader/Loader'

function Index({ user, size, onPressImg }) {
  const { name, surname, vk_id, avatar } = useSelector(({ auth }) => auth.user)
  const fontSizeTitle = size / RW(55)
  const fontSizeCount = size / RW(35)
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
          top: 8,
        }}
      >
        {console.log(avatar)}
        <Image
          style={[
            { ...style.image, borderRadius: size / RW(3), top: size < 40 ? '-50%' : 0 },
            { resizeMode: 'cover' },
          ]}
          source={
            !avatar
              ? require('../../assets/imgs/user/defualtUser.png')
              : avatar.startsWith('https://')
              ? { uri: avatar }
              : {
                  uri: _storageUrl + avatar,
                }
          }
        />
      </Pressable>
      <View style={[style.nameBlock, { marginTop: size < 40 ? RH(6) : RH(16) }]}>
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
        <UserCircle size={size} count={user.organizer} status={user.status} />
        <UserLine size={size - 20} status={user.status} />
        <UserCircle size={size} count={user.participant} status={user.status} />
      </View>
      <View
        style={{
          ...style.titleBigBloc,
          marginTop: size / RH(55),
          width: size / RH(2.75),
        }}
      >
        <View
          style={{
            ...style.titleBloc,
            width: size / RW(6),
            height: size / RH(14),
            marginTop: size / RH(60),
          }}
        >
          <Text style={{ ...font('bold', fontSizeTitle, WHITE), textAlign: 'center' }}>
            Создано игр
          </Text>
          <Text style={font('bold', fontSizeCount, WHITE)}>{user.gamesCreated}</Text>
        </View>
        <View
          style={{
            ...style.titleBloc,
            width: size / RW(6),
            height: size / RH(14),
            marginTop: size / RH(60),
          }}
        >
          <Text style={{ ...font('bold', fontSizeTitle, WHITE), textAlign: 'center' }}>
            Принято игр
          </Text>
          <Text style={font('bold', fontSizeCount, WHITE)}>{user.acceptedGames}</Text>
        </View>
        <View
          style={{
            ...style.titleBloc,
            width: size / RW(6),
            height: size / RH(14),
            marginTop: size / RH(60),
          }}
        >
          <Text style={{ ...font('bold', fontSizeTitle, WHITE), textAlign: 'center' }}>
            Отменено игр
          </Text>
          <Text style={font('bold', fontSizeCount, WHITE)}>{user.canceledGames}</Text>
        </View>
        <View
          style={{
            ...style.titleBloc,
            width: size / RW(6),
            height: size / RH(14),
            marginTop: size / RH(60),
          }}
        >
          <Text style={{ ...font('bold', fontSizeTitle, WHITE), textAlign: 'center' }}>
            Отклонено игр
          </Text>
          <Text style={font('bold', fontSizeCount, WHITE)}>{user.disabledGames}</Text>
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
        style={{ ...style.soc, marginTop: size / RH(110) }}
      >
        <Vk size={size / RH(12)} />
      </Pressable>
    </View>
  )
}

export default Index
