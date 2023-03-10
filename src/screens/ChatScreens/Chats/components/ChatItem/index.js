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
import Soccer from '@/assets/imgs/games/soccer.png'
import style from '../../style'
import { useNavigation } from '@react-navigation/native'
import { RH, RW } from '@/theme/utils'
import { LIGHT_RED } from '@/theme/colors'
import DeleteIconSVg from '@/assets/svgs/DeleteIconSVG'
import { _storageUrl } from '@/constants'

function Index({ id, item }) {
  const navigation = useNavigation()
  const [animation] = useState(new Animated.Value(85))
  const [swipeDirection, setSwipeDirection] = useState(null)
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (evt, gestureState) => {
        return Math.abs(gestureState.dx) > Math.abs(gestureState.dy * 2)
      },
      onPanResponderMove: (evt, gestureState) => {
        if (gestureState.dx > 0) {
          // petqa te che?
          setSwipeDirection('right')
        } else {
          setSwipeDirection('left')
        }
        animation.setValue(gestureState.dx)
      },
      onPanResponderRelease: (evt, gestureState) => {
        if (gestureState.moveX < 135) {
          Animated.timing(animation, {
            toValue: 0,
            duration: 200,
            useNativeDriver: true,
          }).start()
        } else {
          Animated.timing(animation, {
            toValue: 85,
            duration: 200,
            useNativeDriver: true,
          }).start()
        }
      },
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
        <View style={{ width: '20%' }}>
          <DeleteIconSVg />
        </View>
      </View>
      <Animated.View
        style={[style.containerr, { transform: [{ translateX: animation }] }]}
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
    </View>
  )
}

export default Index
