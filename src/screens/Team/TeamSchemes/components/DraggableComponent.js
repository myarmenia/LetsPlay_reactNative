import { RW } from '@/theme/utils'
import React, { useRef, useState } from 'react'
import { View, PanResponder, Animated, Dimensions, Pressable, StyleSheet } from 'react-native'
import User from '@/components/User/user'
import ArrowSvg from './assets/ArrowSvg'
import { ICON } from '@/theme/colors'
import Row from '@/components/wrappers/row'

const DraggableComponent = ({ dragedUser, playingPlayers, setPlayingPlayers }) => {
  const panResponders = playingPlayers?.map((ref, index) =>
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        const { dx, dy } = gesture
        setPlayingPlayers((prevplayingPlayers) => {
          console.log(prevplayingPlayers)
          const updatedplayingPlayers = [...prevplayingPlayers]
          updatedplayingPlayers[index] = {
            small: false,
            x: prevplayingPlayers[index].x + dx,
            y: prevplayingPlayers[index].y + dy,
            moveX: gesture.moveX,
            moveY: gesture.moveY,
          }
          return updatedplayingPlayers
        })
      },
      onPanResponderEnd: (event, gesture) => {
        if (
          playingPlayers[index].moveX >= 95 &&
          playingPlayers[index].moveX <= 301 &&
          playingPlayers[index].moveY >= 195 &&
          playingPlayers[index].moveY <= 500
        ) {
          const currentComponent = playingPlayers[index]
          playingPlayers.forEach((item, i) => {
            if (item?.moveX && i !== index) {
              const differenceX = currentComponent.moveX - item.moveX
              const differenceY = currentComponent.moveY - item.moveY
              if (differenceX < 25 && differenceX > -25 && differenceY < 25 && differenceY > -25) {
                setPlayingPlayers((prevplayingPlayers) => {
                  const updatedplayingPlayers = [...prevplayingPlayers]
                  updatedplayingPlayers[i] = {
                    x: 0,
                    y: 0,
                    small: false,
                  }
                  return updatedplayingPlayers
                })
              }
            }
          })
          setPlayingPlayers((prevplayingPlayers) => {
            const updatedplayingPlayers = [...prevplayingPlayers]
            updatedplayingPlayers[index] = {
              ...updatedplayingPlayers[index],
              small: true,
            }
            return updatedplayingPlayers
          })
        } else {
          setPlayingPlayers((prevplayingPlayers) => {
            const updatedplayingPlayers = [...prevplayingPlayers]
            updatedplayingPlayers[index] = {
              x: 0,
              y: 0,
              small: false,
            }
            return updatedplayingPlayers
          })
        }
      },
    }),
  )
  return (
    <Row wrapper={styles.container}>
      {playingPlayers?.map((user, index) => (
        <View
          key={index}
          ref={user.ref}
          style={[
            {
              paddingVertical: user.small ? RW(28) : 0,
              paddingHorizontal: user.small ? RW(23) : 0,
              zIndex: user.small ? 9 : 99,
            },
            { transform: [{ translateX: user.x }, { translateY: user.y }] },
          ]}
          {...panResponders[index]?.panHandlers}
          onContentSizeChange={(e) => {
            console.log('onContentSizeChange', e)
          }}
        >
          <User size={user.small ? RW(40) : RW(90)} />
        </View>
      ))}
    </Row>
  )
}

const styles = StyleSheet.create({
  container: {},
  scrollContainer: {
    flex: 1,
    width: '100%',
  },
  arrowContainer: {
    backgroundColor: ICON,
    width: RW(40),
    height: RW(40),
    borderRadius: RW(20),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
})
export default DraggableComponent
