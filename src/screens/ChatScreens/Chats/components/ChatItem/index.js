import React, { useRef, useState } from 'react'
import {
  Animated,
  Image,
  PanResponder,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import style from '../../style'
import { useNavigation } from '@react-navigation/native'
import { RH, RW } from '@/theme/utils'
import Modal from '@/components/modal'
import DeleteIconSVg from '@/assets/svgs/DeleteIconSVG'
import { _storageUrl } from '@/constants'
import LightButton from '@/assets/imgs/Button'
import DarkButton from '@/assets/imgs/DarkButton'
import { deleteMemberChat, deleteOrganizerChat } from '@/store/Slices/ChatsSlice'
import { useDispatch, useSelector } from 'react-redux'
import { setTookPartGames } from '@/store/Slices/AuthSlice'
import { setTeamChats } from '@/store/Slices/TeamSlice'

function Index({ id, item, type }) {
  const navigation = useNavigation()
  const [animation] = useState(new Animated.Value(85))
  const [swipeDirection, setSwipeDirection] = useState(null)
  const [deleting, setDeleting] = useState(null)

  const { user } = useSelector(({ auth }) => auth)
  const { teamChatsList } = useSelector(({ teams }) => teams)
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
            toValue: 0,
            duration: 200,
            useNativeDriver: true,
          }).start()
        } else {
          Animated.timing(animation, {
            toValue: 0,
            duration: 200,
            useNativeDriver: true,
          }).start()
        }
      },
      // onPanResponderGrant: (evt, gestureState) => {
      //   if (gestureState.dx > 80) {
      //     console.log('Xxxxxx', gestureState.dx)
      //     Animated.spring(animation, {
      //       toValue: 85,
      //       duration: 200,
      //       useNativeDriver: true,
      //     }).start()
      //   }
      // },
    }),
  ).current

  return (
    <View style={style.layer}>
      {/* pressable kam touchableOpacity */}
      <View
        style={{
          // alignSelf: 'flex-end',
          alignItems: 'center',
          justifyContent: 'flex-end',
          flexDirection: 'row',
          width: RW(372),
          zIndex: -22,
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
          style.containerr,
          { transform: [{ translateX: swipeDirection == 'right' ? 85 : animation }] },
        ]}
        {...panResponder.panHandlers}
      >
        <Pressable
          onPress={() => navigation.navigate('PrivateChat', { id: item._id })}
          style={style.chatItemBlock}
        >
          <Image
            style={style.chatItemImg}
            source={{ uri: _storageUrl + (item?.img || item?.game?.img) }}
          />
          <Text style={style.itemData}>
            {`${item?.createdAt?.substring(0, 10)} ${new Date(item?.createdAt)
              .toTimeString()
              .substring(0, 5)} ${item?.address_name || item?.game?.name}`}
          </Text>
          <Text style={style.time}>1:01</Text>
        </Pressable>
      </Animated.View>
      {deleting && (
        <Modal
          modalVisible={deleting}
          setIsVisible={setDeleting}
          btnClose={false}
          item={
            <View style={style.modalBlock}>
              <Text style={style.modalText}>Вы хотите удалить чат?</Text>
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
                  light={true}
                  onPress={() => {
                    type == 'Участник'
                      ? dispatch(deleteMemberChat(item?._id, setDeleting))
                      : dispatch(deleteOrganizerChat(item?.id, setDeleting))
                    type == 'Участник'
                      ? dispatch(
                          setTookPartGames(
                            user?.took_part_games?.filter(elm => elm._id !== item?._id),
                          ),
                        )
                      : dispatch(setTeamChats(teamChatsList?.filter(elm => elm._id !== item?._id)))
                  }}
                  size={{ width: 100, height: 36 }}
                  label={'Да'}
                />
                <DarkButton
                  light={false}
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

export default Index
