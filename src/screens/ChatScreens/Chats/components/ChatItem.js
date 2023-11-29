import React, { useMemo, useRef, useState } from 'react'
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
import { deleteGameChat, deleteTeamCreateGameChat, deleteTourneyChat, deleteTeamChat } from '@/store/Slices/ChatsSlice'
import { useDispatch, useSelector } from 'react-redux'
import LinearGradient from 'react-native-linear-gradient'
import FastImage from 'react-native-fast-image'
import { DARK_BLUE, ICON, LIGHT_GRAY, LIGHT_RED, WHITE } from '@/theme/colors'
import moment from 'moment'

function ChatItem({ item, type, playersLength }) {
  const navigation = useNavigation()
  const [animation] = useState(new Animated.Value(RW(95)))
  const [swipeDirection, setSwipeDirection] = useState(null)
  const [deleting, setDeleting] = useState(false)
  const [back, setBack] = useState(false)

  const { user } = useSelector(({ auth }) => auth)
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

  const lastMessageTime = moment(item.last_message).format('HH.mm')
  const createAtTime = moment(item?.createdAt).format('HH.mm')
  const gameData = `${moment(item?.createdAt).format('DD.MM.YYYY, hh:mm')}, ${item?.address_name}`
  const tournirData = `${moment(item?.createdAt).format('DD.MM.YYYY, hh:mm')}, ${item?.address_name}`
  const teamData = `${item.name}, ${item.address_name}, (ID${item._id})`
  const tournireImage = item?.team_tourney ? require('../../../../assets/imgs/tournir.png') : require('../../../../assets/imgs/team_tourney.png')


  const deleteText = useMemo(() => {
    if (type === 'game') {
      if (user._id !== item?.user?.id) {
        return 'Вы точно хотите покинуть чат и игру?'
      } else {
        return 'Вы точно хотите удалить чат и игру?'
      }
    } else if (type === 'team') {
      if (user._id === item?.user?._id) {
        return 'Вы точно хотите покинуть чат и выйти из числа игроков?'
      } else {
        return 'Вы точно хотите покинуть чат и команду?'
      }
    } else if (type === 'tournament') {
      if (user._id === item?.user?._id) {
        return 'Вы точно хотите удалить чат и турнир?'
      } else {
        return 'Вы точно хотите покинуть чат и турнир?'
      }
    }
    else if (type === 'team_game') {
      if (user._id !== item?.user?.id) {
        return 'Вы точно хотите покинуть чат и командную игру?'
      } else {
        return 'Вы точно хотите удалить чат и командную игру?'
      }
    }
  }, [type, item?.user])



  const deleteSingleChat = () => {
    if (type == 'game') {
      dispatch(deleteGameChat(item?._id, setDeleting))
    } else if (type === 'team') {
      dispatch(deleteTeamChat({
        team_id: item?._id.toString(),
        playerId: user._id.toString()
      }))

    } else if (type === 'tournament') {
      dispatch(deleteTourneyChat(item?._id, setDeleting))
    } else {
      dispatch(deleteTeamCreateGameChat(item?._id, setDeleting))
    }
  }


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
            source={
              type === 'tournament' ? tournireImage : {
                uri: _storageUrl + ((type === 'game' || type === 'team_game') ? item?.game?.img : item?.img)
              }}
          />
          <Text style={styles.itemData} numberOfLines={3}>
            {(type === 'game' || type === 'team_game') ? gameData : type === 'team' ? teamData : tournirData}

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
              <Text style={styles.modalText}>
                {deleteText}
              </Text>
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
                  onPress={deleteSingleChat}
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
