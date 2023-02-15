import * as React from 'react'
import Svg, { LinearGradient, Stop, Path, Defs, Mask, Circle, G } from 'react-native-svg'
import { RH, RW } from '@/theme/utils'
import User from '@/components/userIcon'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import Modal from '@/components/modal'
import { useState } from 'react'

function SvgComponent({ size = RW(100), user, onPressItem, onPressImg }) {
  const width = RW(size < 40 ? 40 : size)

  const [modalVisible, setModalVisible] = useState(false)

  const item = (
    <View
      style={{
        position: 'relative',
        alignItems: 'center',
      }}
    >
      <Svg
        width={width}
        height={width + RH(size < 200 ? 15 : 25)}
        xmlns="http://www.w3.org/2000/svg"
        x={0}
        y={0}
        viewBox="0 0 271 414"
        style={{
          enableBackground: 'new 0 0 271 414',
        }}
        xmlSpace="preserve"
      >
        <LinearGradient
          id="SVGID_1_"
          x1={4}
          y1={190}
          x2={258}
          y2={187.5}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#157185" />
          <Stop offset={0.249292} stopColor="#87C4CC" />
          <Stop offset={0.517997} stopColor="#1568A7" />
          <Stop offset={0.829809} stopColor="#7BADE6" />
          <Stop offset={1} stopColor="#024ABA" />
        </LinearGradient>
        <Path
          d="M258.9 182.5c0 19.2-.3 38.4 0 57.6.8 46.9-18.2 84.9-51.5 116.6-19.4 18.4-41.9 33.3-66.4 43.9-1.8.8-4.2 1.3-6.3 1.3-1.2 0-2.4-.2-3.4-.7-40.5-18.1-75.1-43.5-98.7-82.2-13.7-22.1-20.8-47.6-20.9-73.6-.3-45.9 0-91.9-.2-137.8 0-5.5 1.7-7.2 7.2-7.9 39.4-5.3 78-13.4 113.4-32.8 1-.5 2.2-.7 3.3-.7s2.3.2 3.3.7c35.4 19.4 73.9 27.5 113.3 32.9 1.9.3 3.5.6 4.5 1.2 2 1.2 2.5 3.3 2.5 6.8-.2 24.9-.1 49.8-.1 74.7z"
          style={{
            fill: 'url(#SVGID_1_)',
          }}
        />
        <LinearGradient
          id="SVGID_00000043452231884390264870000014223854186316459158_"
          gradientUnits="userSpaceOnUse"
          x1={-8.897}
          y1={634.459}
          x2={278.468}
          y2={634.459}
          gradientTransform="translate(0 -428)"
        >
          <Stop
            offset={0}
            style={{
              stopColor: '#873b23',
            }}
          />
          <Stop
            offset={0.058}
            style={{
              stopColor: '#a66842',
            }}
          />
          <Stop
            offset={0.276}
            style={{
              stopColor: '#e5ba8c',
            }}
          />
          <Stop
            offset={0.485}
            style={{
              stopColor: '#e8d2ae',
            }}
          />
          <Stop
            offset={0.708}
            style={{
              stopColor: '#c09067',
            }}
          />
          <Stop
            offset={1}
            style={{
              stopColor: '#a05e2e',
            }}
          />
        </LinearGradient>
        <Path
          style={{
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            fill: 'url(#SVGID_00000043452231884390264870000014223854186316459158_)',
          }}
          d="M213.2 78.3V81c16.2 3.6 32.6 6.3 49.2 8.5 6.2.8 7.7 2.9 7.6 8.6-.2 19.5-.2 39.2-.1 58.8V178c0 6.9 0 13.7-.1 20.6-.1 13.7-.1 27.4.1 41.1.9 50.3-19.9 91-56.1 124.9-21.1 19.7-45.6 35.6-72.3 46.9-3.1 1.3-7.6 2-10.4.8-44.1-19.4-81.8-46.7-107.5-88.1C8.7 300.6.8 273.4.7 245.5.5 219.2.6 193 .6 166.7c0-23 0-45.9-.1-68.9 0-5.9 1.9-7.7 7.8-8.5 16.5-2.2 33-5 49.1-8.6 0-.9-.1-1.7-.1-2.6-.6-27.1 13.4-51.2 34.6-65.2C104.4 4.7 119.3 0 135.2 0c14.7 0 28.6 4 40.5 11.1 7.3 4.3 13.8 9.8 19.3 16.2 7.1 8.3 12.5 18.2 15.5 29.1 1 3.7 1.8 7.6 2.2 11.5.4 3.4.5 6.9.5 10.4zm45.5 123.4c0-6.4.1-12.8.1-19.2v-19.7c0-18.3-.1-36.7.1-54.9.1-5.4-1.3-7.3-7-8C212.5 94.5 174 86.4 138.6 67c-1-.5-2.2-.7-3.3-.7s-2.3.2-3.3.7C96.6 86.4 58 94.5 18.7 99.9c-5.5.7-7.2 2.4-7.2 7.9.1 21.4.1 42.8.1 64.3 0 24.5 0 49 .1 73.5.1 26 7.3 51.4 21 73.5 23.6 38.6 58.2 64.1 98.7 82.2 2.6 1.2 6.7.5 9.6-.7 24.5-10.6 47-25.4 66.4-43.8 33.2-31.7 52.3-69.6 51.5-116.6-.3-12.9-.2-25.7-.2-38.5z"
        />
      </Svg>
      <View
        style={{
          position: 'absolute',
        }}
      >
        <User user={user} size={width} onPressImg={onPressImg} />
      </View>
    </View>
  )

  return onPressItem ? (
    <TouchableOpacity
      onPress={() => setModalVisible(true)}
      style={{
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 100,
      }}
    >
      {item}
      <View
        style={{
          position: 'absolute',
        }}
      >
        <Modal
          modalVisible={modalVisible}
          modalClose={onPressItem.modalClose}
          item={onPressItem.item}
          setIsVisible={setModalVisible}
        />
      </View>
    </TouchableOpacity>
  ) : (
    <View
      style={{
        zIndex: 10,
      }}
    >
      {item}
    </View>
  )
}

export default SvgComponent
