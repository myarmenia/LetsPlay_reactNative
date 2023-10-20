import React, { useRef, useState } from 'react'
import {
  Animated,
  PanResponder,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { RH, RW, font } from '@/theme/utils'
import Modal from '@/components/modal'
import DeleteIconSVg from '@/assets/svgs/DeleteIconSVG'
import { _storageUrl } from '@/constants'
import LightButton from '@/components/buttons/Button'
import DarkButton from '@/components/buttons/DarkButton'
import { deleteChat, deleteMemberChat } from '@/store/Slices/ChatsSlice'
import { useDispatch, useSelector } from 'react-redux'
import { setTookPartGames } from '@/store/Slices/AuthSlice'
import { deletePlayerFromTeam, setMyTeams } from '@/store/Slices/TeamSlice'
import LinearGradient from 'react-native-linear-gradient'
import FastImage from 'react-native-fast-image'
import { DARK_BLUE, ICON, LIGHT_GRAY, LIGHT_RED, WHITE } from '@/theme/colors'
import moment from 'moment'

function ChatItem({ item, type, playersLength }) {
  console.log(item, type, playersLength)

  const navigation = useNavigation()
  const [animation] = useState(new Animated.Value(RW(95)))
  const [swipeDirection, setSwipeDirection] = useState(null)
  const [deleting, setDeleting] = useState(null)
  const [back, setBack] = useState(false)

  const { user } = useSelector(({ auth }) => auth)
  const { myTeams } = useSelector(({ teams }) => teams)
  const dispatch = useDispatch()
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (evt, gestureState) => {
        return Math.abs(gestureState.dx) > Math.abs(gestureState.dy * 2)
      },

      onPanResponderMove: (evt, gestureState) => {
        if (gestureState.dx > 86) {
          setSwipeDirection('right')
        } else {
          setSwipeDirection('left')
        }
        animation.setValue(gestureState.dx)
      },
      onPanResponderRelease: (evt, gestureState) => {
        if (gestureState.moveX < 160) {
          setDeleting(true)
          Animated.timing(animation, {
            toValue: 20,
            duration: 200,
            useNativeDriver: true,
          }).start()
        } else {
          Animated.timing(animation, {
            toValue: 20,
            duration: 200,
            useNativeDriver: true,
          }).start()
        }
      },
    }),
  ).current
  const lastMessageTimeArray = new Date(item.last_message).toLocaleTimeString().split(':')
  const lastMessageTime = lastMessageTimeArray[0] + ':' + lastMessageTimeArray[1]
  const createAtTimeArray = new Date(item.createdAt).toLocaleTimeString().split(':')
  const createAtTime = createAtTimeArray[0] + ':' + createAtTimeArray[1]
  return (
    <View style={styles.layer}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'flex-end',
          flexDirection: 'row',
          width: RW(372),
          zIndex: -33,
        }}
      >
        <View style={{ width: '80%' }}></View>
        <TouchableOpacity
          style={{ width: '20%' }}
          onPress={() => {
            setDeleting(true)
          }}
        >
          <DeleteIconSVg />
        </TouchableOpacity>
      </View>
      <Animated.View
        style={[
          styles.containerr,
          { transform: [{ translateX: swipeDirection == 'right' ? RW(95) : animation }] },
        ]}
        {...panResponder.panHandlers}
      >
        <Pressable
          onPressIn={() => {
            setBack(true)
          }}
          onPressOut={() => {
            setBack(false)
          }}
          onPress={() =>
            navigation.navigate('PrivateChat', {
              id: item._id,
              type: type,
              playersLength: playersLength,
              team: item.team,
            })
          }
          style={styles.chatItemBlock}
        >
          {!back ? (
            <LinearGradient
              colors={['#7DCE8A', '#4D7CFE']}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 0 }}
              useAngle={true}
              angle={105}
              angleCenter={{ x: 0.5, y: 0.5 }}
              style={{
                width: '130%',
                height: '150%',
                zIndex: -1,
                alignSelf: 'center',
                opacity: 0.6,
                position: 'absolute',
                borderRadius: RW(10),
              }}
            ></LinearGradient>
          ) : (
            <LinearGradient
              colors={['#7DCE8A', '#4D7CFE']}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 0 }}
              useAngle={true}
              angle={105}
              angleCenter={{ x: 0.5, y: 0.5 }}
              style={{
                width: '130%',
                height: '150%',
                zIndex: -1,
                alignSelf: 'center',
                position: 'absolute',
                opacity: 0.8,
                borderRadius: RW(10),
              }}
            ></LinearGradient>
          )}

          <FastImage
            style={styles.chatItemImg}
            resizeMode="cover"
            source={{
              uri: _storageUrl + (type == 'team' ? item?.team?.img : item?.img || item?.game?.img),
            }}
          />
          <Text style={styles.itemData}>
            {type == 'team'
              ? `${item?.team.name} ${item.team.address_name}`
              : `${item?.createdAt?.substring(0, 10)} ${new Date(item?.createdAt)
                  .toTimeString()
                  .substring(0, 5)} ${item?.address_name || item?.game?.name}`}
          </Text>
          <View>
            <Text style={styles.time}>{item.last_message ? lastMessageTime : createAtTime}</Text>
            <LinearGradient
              style={styles.messagesCount}
              colors={['#7DCE8A', '#4D7CFE']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            >
              <Text style={styles.messagesCountText}>{item?.chats?.length}</Text>
            </LinearGradient>
          </View>
        </Pressable>
      </Animated.View>
      {deleting && (
        <Modal
          modalVisible={deleting}
          setIsVisible={setDeleting}
          btnClose={false}
          item={
            <View style={styles.modalBlock}>
              <Text style={styles.modalText}>Вы точно хотите удалить игру и чат?</Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  width: '100%',
                  paddingVertical: RW(20),
                  alignSelf: 'center',
                }}
              >
                <LightButton
                  onPress={() => {
                    if (type == 'Игра') {
                      dispatch(deleteChat(item?._id, () => setDeleting(false)))
                    } else if (type == 'Участник') {
                      dispatch(deleteMemberChat(item?._id, setDeleting))
                      dispatch(
                        setTookPartGames(
                          user?.took_part_games?.filter((elm) => elm._id !== item?._id),
                        ),
                      )
                    } else if (type == 'team') {
                      dispatch(deletePlayerFromTeam(item?.id, () => setDeleting(false)))
                      dispatch(setMyTeams(myTeams?.filter((elm) => elm._id !== item?._id)))
                    }
                  }}
                  size={{ width: 100, height: 36 }}
                  label={'Да'}
                />
                <DarkButton
                  onPress={() => setDeleting(false)}
                  size={{ width: 100, height: 36 }}
                  label={'Нет'}
                />
              </View>
            </View>
          }
        />
      )}
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    marginTop: RH(56),
    alignItems: 'center',
  },
  containerr: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    width: '103%',
    height: '101%',
    right: RW(279),
    overflow: 'visible',
  },
  layer: {
    width: RW(368),
    alignSelf: 'center',
    marginBottom: RH(9),
    overflow: 'visible',
    backgroundColor: LIGHT_RED,
    borderRadius: RW(10),
    alignItems: 'center',
    flexDirection: 'row-reverse',
  },

  modalBlock: {
    width: RW(260),
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: RW(10),
    backgroundColor: DARK_BLUE,
  },
  modalText: {
    padding: RH(20),
    textAlign: 'center',
    ...font('regular', 21, WHITE, 26),
  },
  title: {
    ...font('bold', 24, LIGHT_GRAY, 29),
    marginBottom: RW(27),
  },
  chatItemImg: {
    width: RW(42),
    height: RH(43),
    borderRadius: RH(22),
  },
  chatItemBlock: {
    backgroundColor: ICON,
    width: '100%',
    borderRadius: RW(10),
    paddingLeft: RW(13),
    paddingTop: RH(17),
    paddingBottom: RH(17),
    paddingRight: RW(6),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  itemData: {
    ...font('bold', 18, WHITE, 20),
    width: RW(245),
  },
  time: {
    ...font('regular', 14, WHITE, 20),
    marginBottom: RH(20),
    marginRight: RW(10),
  },
  messagesCount: {
    width: RW(22),
    height: RW(22),
    borderRadius: RW(11),
    justifyContent: 'center',
    alignItems: 'center',
  },
  messagesCountText: font('bold', 12, '#fff'),
})

export default ChatItem

let x = {
  __v: 0,
  _id: '64fac61d05260fbbc3d90149',
  address_name: 'ул. Моховая, 14, Москва, Россия, 125009',
  between_players: true,
  chats: [],
  clicked_end_players: [],
  confirm_players: [],
  createdAt: '2023-09-08T06:58:37.571Z',
  enemy_confirm: true,
  enemy_players: [],
  enemy_team_name: null,
  format: null,
  game: {
    _id: '63ec910c338f6ba3d35e9ee9',
    category: '63ec8d46338f6ba3d35e9ee1',
    description: null,
    formats: ['3:3', '5:5', '8:8', '11:11'],
    img: '/game_imgs/soccer-ball 1.png',
    name: 'Футбол',
    rules:
      'Футбол — командный вид спорта, в котором целью является забить мяч в ворота соперника ногами или другими частями тела (кроме рук) большее количество раз, чем команда соперника. Команда, которая забьет больше голов к концу игры, становится победителем.Организуйте увлекательную игру: подберите подходящую для Вас площадку в Вашем городе и с помощью “Играем” найдите единомышленников для совместной игры. Количество игроков должно быть не менее 3 человек.Главное - собраться. Удачной игры!',
    schema_img: '/game_schema_img/Group 1805.png',
    updatedAt: '2023-10-11T08:32:31.193Z',
  },
  id: '64fac61d05260fbbc3d90149',
  location: { coordinates: [37.6108046, 55.75195129999999], type: 'Point' },
  players: [
    {
      _id: '64e5f5acd199e848be438230',
      avatar: '/user/avatar/c05d45a5-5e3a-4468-999d-ddb7ffb67363.jpg',
      dob: '1994-10-10T00:00:00.000Z',
      email: 'edvardavagyan7@gmail.com',
      id: '64e5f5acd199e848be438230',
      name: 'Eduard',
      phone_number: null,
      surname: 'Avagyan',
    },
    {
      _id: '647f499e244763e0fa02dbaf',
      avatar: '/user/avatar/ac89a12d-aa93-4c3c-be54-ca6ebf4363e0.jpg',
      dob: '1991-06-06T15:03:17.393Z',
      email: 'arshakgasparyan1@gmail.com',
      id: '647f499e244763e0fa02dbaf',
      name: 'Arshak',
      phone_number: null,
      surname: 'Gasparyan',
    },
  ],
  qr_link: 'qr/64fac61d05260fbbc3d90149.png',
  rating: {},
  start_date: '2023-09-08T07:57:00.000Z',
  team: {
    __v: 2,
    _id: '64f722e37662756f8c2b09f1',
    address_name: '43 Pavstos Buzand St, Yerevan, Армения',
    admins: [],
    createdAt: '2023-09-05T12:45:23.567Z',
    id: '64f722e37662756f8c2b09f1',
    img: '/team/image/40e32e02-569b-479e-b8d2-ed799eb4fa70.jpg',
    invited_players: ['64e5f5acd199e848be438230', '647f499e244763e0fa02dbaf'],
    location: { coordinates: [Array], type: 'Point' },
    name: 'Yytt',
    updatedAt: '2023-09-08T06:48:46.270Z',
    user: '647f499e244763e0fa02dbaf',
  },
  ticket_price: 0,
  updatedAt: '2023-09-08T06:58:37.686Z',
  user: {
    _id: '64e5f5acd199e848be438230',
    avatar: '/user/avatar/c05d45a5-5e3a-4468-999d-ddb7ffb67363.jpg',
    dob: '1994-10-10T00:00:00.000Z',
    email: 'edvardavagyan7@gmail.com',
    id: '64e5f5acd199e848be438230',
    name: 'Eduard',
    phone_number: null,
    surname: 'Avagyan',
  },
}
