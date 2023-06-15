import { Dimensions, Image, Linking, Platform, Pressable, Text, View } from 'react-native'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { font, RH, RW } from '@/theme/utils'
import { _storageUrl } from '@/constants'
import { useSelector } from 'react-redux'
import { WHITE } from '@/theme/colors'
import style from './styles'
import UserLine from '../userLine'
import UserCircle from '../userCircle'
import Vk from './vk'
import Modal from '@/components/modal'
import { Grayscale } from 'react-native-color-matrix-image-filters'

function Index({ size, size2, onPressImg, userProps, pressedUser }) {
  let authedUser = useSelector(({ auth }) => auth.user)
  let user = pressedUser ? pressedUser : authedUser
  if (userProps) {
    user = userProps
  }
  if (user?.user) {
    user = user.user
  }
  const { name, surname, avatar } = user || {}
  const fontSizeTitle = size > 150 ? size / RW(33) : size / RW(50)
  const fontSizeCount = size > 150 ? size / RW(22) : size / RW(30)
  const [modalVisible, setModalVisible] = useState(false)

  const screenWidth = Dimensions.get('screen').width

  const sizing = {
    padding: size > 40 ? RH(5) : RH(0),
    marginTop: size > 150 ? RH(4) : RH(-1),
    width: size < 40 ? size / RW(3) : size / RW(4.3),
  }

  return (
    <View
      style={{
        overflow: Platform.OS == 'ios' ? 'visible' : 'hidden',
        alignItems: 'center',
      }}
    >
      <View
        style={{
          flex: 1,
          width: size / 2.8,
          height: size / 2.8,
          resizeMode: 'cover',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          top: size2 == 150 ? 13 : 8,
        }}
      >
        <Grayscale style={{ flex: 1 }}>
          <Image
            style={[
              {
                ...style.image,
                borderRadius: size / RW(3),
                top: size > 150 ? '0%' : size < 40 ? '-45%' : '-20%',
                left: RW(0.1),
              },
              { resizeMode: 'cover' },
            ]}
            source={
              !avatar
                ? require('../../../assets/defualtUser.png')
                : avatar.startsWith('https://')
                ? { uri: avatar }
                : {
                    uri: _storageUrl + avatar, //userNow.avatar
                  }
            }
          />
        </Grayscale>
      </View>
      <View style={[style.nameBlock, { marginTop: size < 40 ? RH(4) : RH(10) }]}>
        <Text style={font('bold', size > 150 ? size / RW(20) : size / RW(25), WHITE)}>
          {name ? name : 'Имя'}
        </Text>
        <Text style={font('bold', size > 150 ? size / RW(20) : size / RW(25), WHITE)}>
          {surname ? surname : 'Фамилия'}
        </Text>
      </View>
      <View
        style={{
          ...style.statusBlock,
          width: screenWidth >= 420 ? size / RW(1.6) : size / RW(1.75),
          overflow: 'visible',
          marginTop: size > 150 ? size / RH(70) : size / RH(80),
        }}
      >
        <UserCircle
          size={size > 150 ? size + RW(25) : size - RW(25)}
          count={user?.create_games?.length}
          status={user?.status}
        />
        <UserLine size={screenWidth >= 420 ? size / 1.05 : size} status={user?.status} />
        <UserCircle
          size={size > 150 ? size + RW(25) : size - RW(25)}
          count={user?.took_part_games?.length}
          status={user?.status}
        />
      </View>
      <View
        style={{
          ...style.titleBigBloc,
          height: size < 40 ? size / RH(2.9) : size / RW(8.4),
          marginTop: size > 150 ? size / RH(55) : size / RH(90),
          width: size < 40 ? size / RW(1.5) : size / RW(2.1),
          justifyContent: 'space-evenly',
        }}
      >
        <View style={[style.titleBloc, sizing]}>
          <Text style={{ ...font('openSans_medium', fontSizeTitle, WHITE), textAlign: 'center' }}>
            Создано игр
          </Text>
          <Text style={font('exo_bold', fontSizeCount, WHITE)}>{user?.create_games?.length}</Text>
        </View>
        <View style={[style.titleBloc, sizing]}>
          <Text style={{ ...font('openSans_medium', fontSizeTitle, WHITE), textAlign: 'center' }}>
            Принято игр
          </Text>
          <Text style={font('exo_bold', fontSizeCount, WHITE)}>
            {user?.took_part_games?.length}
          </Text>
        </View>
        <View style={[style.titleBloc, sizing]}>
          <Text style={{ ...font('openSans_medium', fontSizeTitle, WHITE), textAlign: 'center' }}>
            Отменено игр
          </Text>
          <Text style={{ ...font('exo_bold', fontSizeCount, WHITE) }}>
            {user?.destroy_the_game}
          </Text>
        </View>
        <View style={[style.titleBloc, sizing]}>
          <Text style={{ ...font('openSans_medium', fontSizeTitle, WHITE), textAlign: 'center' }}>
            Отклонено игр
          </Text>
          <Text style={font('exo_bold', fontSizeCount, WHITE)}>{user?.exit_the_game}</Text>
        </View>
      </View>
      {/* need detect user have a vk account and show it overwise show some text */}
      <Modal
        item={
          <View style={style.modal}>
            <Text style={style.successTeam}>Аккаунт игрока не привязан к VK</Text>
          </View>
        }
        modalVisible={modalVisible}
        setIsVisible={setModalVisible}
        // navigationText={'Home'}
      />
      <View style={{ ...style.soc, marginTop: screenWidth > 380 ? size / RH(7.5) : size / RH(10) }}>
        <Vk size={size / RH(12)} />
      </View>
    </View>
  )
}

export default Index