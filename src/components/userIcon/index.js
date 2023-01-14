import React from 'react'
import { Image, Platform, Text, View } from 'react-native'
import style from './styles'
import UserDefault from '@/assets/imgs/user/userDefault'
import UserLine from '@/assets/imgs/user/userLine'
import UserCircle from '@/assets/imgs/user/userCircle'
import { font, RH, RW } from '@/theme/utils'
import { WHITE } from '@/theme/colors'
import Vk from '@/assets/imgs/vk'


function Index({ user, size }) {
  const fontSizeTitle = size / RW(55)
  const fontSizeCount = size / RW(35)
  return (
    <View
      style={{
        marginLeft: 'auto',
        marginRight: 'auto',
        height: '100%',
        overflow: Platform.OS == 'ios' ? 'visible' : 'hidden',
        alignItems: 'center',
      }}
    >
      <View
        style={{
          width: size / RW(3),
          height: size / RW(3),
          marginLeft: 'auto',
          marginRight: 'auto',
          resizeMode: 'cover',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'flex-end',
        }}
      >
        {user.image ? (
          <Image
            style={[
              { ...style.image, borderRadius: size / RW(3) },
              Platform.OS == 'ios' && { resizeMode: 'cover' },
            ]}
            source={{ uri: user.image }}
          />
        ) : (
          <UserDefault size={size} />
        )}
      </View>
      <View style={style.nameBlock}>
        <Text style={font('bold', size / RW(22), WHITE)}>{user.lName ? user.lName : 'Имя'}</Text>
        <Text style={font('bold', size / RW(22), WHITE)}>
          {user.fName ? user.fName : 'Фамилия'}
        </Text>
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
      <View style={{ ...style.soc, marginTop: size / RH(110) }}>
        <Vk size={size / RH(12)} />
      </View>
    </View>
    //   </View>
    //   <View style={{ ...style.soc, marginTop: size / RH(110) }}>
    //     <Vk size={size / RH(12)} />
    //   </View>
    // </View>
  )
}

export default Index
