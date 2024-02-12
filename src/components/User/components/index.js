import Modal from '@/components/modal'
import { _storageUrl } from '@/constants'
import { LIGHT_LABEL, WHITE } from '@/theme/colors'
import { RW, font } from '@/theme/utils'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { Linking, Platform, Pressable, StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import UserCircle from './userCircle'
import UserLine from './userLine'
import FastImage from 'react-native-fast-image'
import VKIcon from '@/assets/imgs/VKIcon'


function Index({ size, userProps, pressedUser }) {
  const imageWidth = size * 140 / 270
  const imageFrame = size * 155 / 270

  let authedUser = useSelector(({ auth }) => auth.user)
  let user = pressedUser ? pressedUser : authedUser
  if (userProps) {
    user = userProps
  }
  if (user?.user) {
    user = user.user
  }



  const { name, surname, vk_id, avatar, vk_uri } = user || {}
  const fontSizeTitle = size * 10 / 270
  const fontSizeCount = size * 16 / 270
  const [modalVisible, setModalVisible] = useState(false)
  const navigation = useNavigation()
  const isMe = user?._id === authedUser?._id






  const onImagePress = () => {
    if (size > 100) {
      navigation.navigate('ProfileNavigator', {
        screen: 'Gallery',
        params: {
          isMe,
          userId: user?._id,
          canDelete: false,
        },
      })
    }
  }

  const imgStyle = {
    width: imageWidth,
    borderRadius: imageWidth / 2,
  }


  return (
    <View style={styles.container}>
      <Pressable
        onPress={onImagePress}
        style={[styles.frameStyle, { height: imageFrame, aspectRatio: 1 }]}>
        <FastImage
          style={[styles.image, imgStyle]}
          resizeMode="cover"
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
      </Pressable>
      <View style={styles.nameBlock}>
        <Text
          style={[font('bold', undefined, WHITE), { fontSize: size * 20 / 270 }]}
        >
          {name ? name : 'Имя'}
        </Text>
        <Text
          style={[font('bold', undefined, WHITE), { fontSize: size * 20 / 270 }]}
        >
          {surname ? surname : 'Фамилия'}
        </Text>
      </View>
      <View
        style={{
          ...styles.statusBlock,
          width: '100%',
          height: size * 22 / 270,
          paddingHorizontal: size * 26 / 270,
          overflow: 'visible',
          alignItems: 'center',
          marginTop: size * 10 / 270,
        }}
      >
        <UserCircle size={size} count={user?.create_games?.length} />
        <UserLine size={size} status={user?.status} />
        <UserCircle size={size} count={user?.took_part_games?.length} />
      </View>

      {size > 50 ? (
        <View
          style={{
            ...styles.titleBigBloc,
            marginTop: size * 13 / 270,
            width: size * 170 / 270,
            alignItems: 'center',
          }}
        >
          <View style={[styles.rowComponent, { padding: size * 5 / 270 }]}>
            <View style={[styles.titleBloc,]}>
              <Text style={{ ...font('openSans_medium', undefined, WHITE), textAlign: 'center', fontSize: fontSizeTitle }}>
                Создано игр
              </Text>
              <Text style={{ ...font('exo_bold', undefined, WHITE), textAlign: 'center', fontSize: fontSizeCount }}>{user?.create_games?.length}</Text>
            </View>
            <View style={styles.titleBloc}>
              <Text style={{ ...font('openSans_medium', undefined, WHITE), textAlign: 'center', fontSize: fontSizeTitle }}>
                Принято игр
              </Text>
              <Text style={{ ...font('exo_bold', undefined, WHITE), textAlign: 'center', fontSize: fontSizeCount }}>
                {user?.took_part_games?.length}
              </Text>
            </View>
          </View>

          <View style={[styles.rowComponent, { padding: size * 5 / 270 }]}>
            <View style={styles.titleBloc}>
              <Text style={{ ...font('openSans_medium', undefined, WHITE), textAlign: 'center', fontSize: fontSizeTitle }}>
                Отменено игр
              </Text>
              <Text style={{ ...font('exo_bold', undefined, WHITE), textAlign: 'center', fontSize: fontSizeCount }}>
                {user?.destroy_the_game}
              </Text>
            </View>
            <View style={styles.titleBloc}>
              <Text style={{ ...font('openSans_medium', undefined, WHITE), textAlign: 'center', fontSize: fontSizeTitle }}>
                Отклонено игр
              </Text>
              <Text style={{ ...font('exo_bold', undefined, WHITE), textAlign: 'center', fontSize: fontSizeCount }}>{user?.exit_the_game}</Text>
            </View>
          </View>
        </View>
      ) : null}

      <Modal
        item={
          <View style={styles.modal}>
            <Text style={styles.successTeam}>Аккаунт игрока не привязан к VK</Text>
          </View>
        }
        modalVisible={modalVisible}
        setIsVisible={setModalVisible}
      />
      <Pressable
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
          ...styles.soc,
          // marginTop: size * 10 / 270

        }}
      >
        <VKIcon size={size} />
      </Pressable>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    overflow: Platform.OS == 'ios' ? 'visible' : 'hidden',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    height: '100%',
  },
  frameStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleBigBloc: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  titleBloc: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  image: {
    alignItems: 'center',
    justifyContent: 'center',
    aspectRatio: 1,
  },
  rowComponent: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  modal: {
    width: RW(306),
    backgroundColor: LIGHT_LABEL,
    borderRadius: RW(20),
    padding: RW(20),
    marginHorizontal: RW(30.5),
  },
  successTeam: {
    ...font('inter', 16, WHITE, 20),
    textAlign: 'center',
  },
  nameBlock: {
    alignItems: 'center',
  },
  soc: {
    backgroundColor: 'rgba(52, 52, 52, 0)',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
export default Index
