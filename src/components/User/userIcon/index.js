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
import Vk from '@/assets/imgs/vk'
import Modal from '@/components/modal'
import FastImage from 'react-native-fast-image'

function Index({ size, onPressImg, userProps, pressedUser }) {
  let authedUser = useSelector(({ auth }) => auth.user)
  let user = pressedUser ? pressedUser : authedUser
  if (userProps) {
    user = userProps
  }
  if (user?.user) {
    user = user.user
  }
  const { name, surname, vk_id, avatar, vk_uri } = user || {}
  const fontSizeTitle = size < RW(50) ? RW(1.5) : size > 100 ? size / RW(33) : size / RW(50)
  const fontSizeCount = size < RW(50) ? RW(1) : size > 100 ? size / RW(22) : size / RW(30)
  // const fontSizeTitle = size / RW(33)
  // const fontSizeCount = size / RW(22)
  const [modalVisible, setModalVisible] = useState(false)
  const navigation = useNavigation()
  const screenWidth = Dimensions.get('screen').width

  const sizing = {
    padding: size > 40 ? RH(5) : RH(0),
    marginTop: size > 150 ? RH(4) : RH(-1),
    width: size < 40 ? size / RW(3) : size / RW(4.3),
  }

  const ImagePressableComponent = !onPressImg || size < 100 ? View : Pressable
  const VkPressableComponent = size < 100 ? View : Pressable

  return (
    <View
      style={{
        overflow: Platform.OS == 'ios' ? 'visible' : 'hidden',
        alignItems: 'center',
      }}
    >
      <ImagePressableComponent
        onPress={
          onPressImg
            ? () => {
                navigation.navigate('ProfileNavigator', { screen: 'Gallery' })
              }
            : null
        }
        style={{
          width: size < 50 ? size / 2.25 : size < 100 ? size / 2.5 : size / 2.8,
          height: size < 50 ? size / 2.25 : size < 100 ? size / 2.5 : size / 2.8,
          resizeMode: 'cover',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <FastImage
          style={[
            {
              ...style.image,
              borderRadius: size / RW(3),
              top:
                size <= RW(30)
                  ? screenWidth >= 380
                    ? size / 4.5
                    : Platform.OS == 'android'
                    ? size * 1.5
                    : size / 7.5
                  : size < 50
                  ? size / 10
                  : size < 100
                  ? size / 25
                  : size / 40,
              left: Platform.OS == 'android' && size <= RW(30) ? RW(-0.2) : 0,
            },
          ]}
          resizeMode='cover'
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
      </ImagePressableComponent>
      <View style={[style.nameBlock, { marginTop: size < 50 ? RH(10) : RH(10) }]}>
        <Text style={[font('bold', name.length > 15 || surname.length > 15 ? size / RW(25) : size > 150 ? size / RW(20) : size / RW(25), WHITE), {maxHeight: RH(30), maxWidth: RW(220)}]}>
          {name ? name : 'Имя'}
        </Text>
        <Text style={[font('bold', name.length > 15 || surname.length > 15 ? size / RW(25) :  size > 150 ? size / RW(20) : size / RW(25), WHITE), {maxHeight: RH(30), maxWidth: RW(220)}]}>
          {surname ? surname : 'Фамилия'}
        </Text>
      </View>
      <View
        style={{
          ...style.statusBlock,
          width: screenWidth >= 420 ? size / RW(1.6) : size / RW(1.75),
          overflow: 'visible',
          marginTop: size > 150 ? size / RH(70) : size < 100 ? size / RH(40) : size / RH(80),
        }}
      >
        <UserCircle
          size={screenWidth >= 420 ? size / 1.05 : size}
          count={user?.create_games?.length}
          status={user?.status}
        />
        <UserLine size={screenWidth >= 420 ? size / 1.05 : size} status={user?.status} />
        <UserCircle
          size={screenWidth >= 420 ? size / 1.05 : size}
          count={user?.took_part_games?.length}
          status={user?.status}
        />
      </View>

      {size > RW(50) ? (
        <View
          style={{
            ...style.titleBigBloc,
            height: size <= RW(45) ? size / RH(3.5) : size < 100 ? size / RH(7) : size / RW(8.4),
            marginTop: size <= RW(45) ? RH(1) : size > 150 ? size / RH(55) : size / RH(90),
            width: size <= RW(45) ? size / RW(1.5) : size / RW(2.1),
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
      ) : null}

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
      <VkPressableComponent
        onPress={() => {
          if (vk_uri) {
            Linking.openURL(vk_uri)
          } else if (vk_id) {
            Linking.canOpenURL(`https://vk.com/id${vk_id}`).then((e) => {
              if (e) {
                Linking.openURL(`https://vk.com/id${vk_id}`)
              }
            })
          } else {
            setModalVisible(true)
          }
        }}
        style={{
          ...style.soc,
          marginTop:
            size <= RW(50)
              ? screenWidth > 400
                ? size / RH(2.5)
                : screenWidth > 380
                ? size / RH(3)
                : size / RH(4)
              : size > 100
              ? screenWidth > 400
                ? size / RH(5.5)
                : screenWidth > 380
                ? size / RH(7.5)
                : size / RH(10)
              : screenWidth > 400
              ? size / RH(4)
              : screenWidth > 380
              ? Platform.OS == 'ios'
                ? size / RH(4.5)
                : size / RH(6.5)
              : size / RH(10),
        }}
      >
        <Vk size={size / (screenWidth <= 375 ? RH(15) : RH(12))} />
      </VkPressableComponent>
    </View>
  )
}

export default Index
