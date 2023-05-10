import { RW } from '@/theme/utils'
import React, { useEffect, useRef, useState } from 'react'
import { View, PanResponder, Animated, Dimensions, Pressable, StyleSheet } from 'react-native'
import User from '@/components/User/user'
import ArrowSvg from './assets/ArrowSvg'
import { ICON } from '@/theme/colors'
import Row from '@/components/wrappers/row'

const SchemeUsers = ({ replacementPlayers, setReplacementPlayers }) => {
  const [scrollViewWidth, setScrollViewWidth] = useState(288)
  const [screenX, setScreenX] = useState(scrollViewWidth)
  const scrollRef = useRef(null)

  // const panResponders = users?.map((ref, index) =>
  //   PanResponder.create({
  //     onMoveShouldSetPanResponder: () => true,
  //     onPanResponderGrant: (event, gesture) => {
  //       dragUser(users[index])
  //     },
  //   }),
  // )

  const panResponders = replacementPlayers?.map((item, index) =>
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderStart: () => {
        console.log('onPanResponderStart')
      },
      onPanResponderMove: (event, gesture) => {
        console.log('onPanResponderMove')
        const { dx, dy } = gesture
        setReplacementPlayers((prevplayingPlayers) => {
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
        // if (
        //   replacementPlayers[index].moveX >= 95 &&
        //   replacementPlayers[index].moveX <= 301 &&
        //   replacementPlayers[index].moveY >= 195 &&
        //   replacementPlayers[index].moveY <= 500
        // ) {
        const currentComponent = replacementPlayers[index]
        replacementPlayers.forEach((item, i) => {
          if (item?.moveX && i !== index) {
            const differenceX = currentComponent.moveX - item.moveX
            const differenceY = currentComponent.moveY - item.moveY
            if (differenceX < 25 && differenceX > -25 && differenceY < 25 && differenceY > -25) {
              setReplacementPlayers((prevplayingPlayers) => {
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
        setReplacementPlayers((prevplayingPlayers) => {
          const updatedplayingPlayers = [...prevplayingPlayers]
          updatedplayingPlayers[index] = {
            ...updatedplayingPlayers[index],
            small: true,
          }
          return updatedplayingPlayers
        })
        // } else {
        //   setReplacementPlayers((prevplayingPlayers) => {
        //     const updatedplayingPlayers = [...prevplayingPlayers]
        //     updatedplayingPlayers[index] = {
        //       x: 0,
        //       y: 0,
        //       small: false,
        //     }
        //     return updatedplayingPlayers
        //   })
        // }
      },
    }),
  )
  return (
    <Row wrapper={styles.container}>
      <Pressable
        style={styles.arrowContainer}
        onPress={() => {
          if (scrollRef.current && screenX > scrollViewWidth) {
            scrollRef.current.scrollTo({
              x: screenX - scrollViewWidth,
              animated: true,
            })
            setScreenX(screenX - scrollViewWidth)
          }
        }}
      >
        <ArrowSvg />
      </Pressable>
      <Animated.ScrollView
        ref={scrollRef}
        horizontal
        snapToInterval={scrollViewWidth}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        bounces={false}
        scrollEventThrottle={1}
        style={{ zIndex: 999999, overflow: 'visible' }}
        onLayout={(e) => {
          setScrollViewWidth(e.nativeEvent.layout.width)
        }}
        scrollEnabled={false}
        contentContainerStyle={{ zIndex: 999999, overflow: 'visible' }}
      >
        {replacementPlayers?.map((user, index) => (
          <View
            key={index}
            ref={user.ref}
            style={[
              {
                paddingVertical: user.small ? RW(28) : 0,
                paddingHorizontal: user.small ? RW(22) : 0,
                zIndex: user.small ? 9 : 99,
                position: user.small ? 'absolute' : 'relative',
              },
              { transform: [{ translateX: user.x }, { translateY: user.y }] },
            ]}
            {...panResponders[index]?.panHandlers}
          >
            <User size={user.small ? RW(40) : RW(90)} />
          </View>
        ))}
      </Animated.ScrollView>
      <Pressable
        style={[styles.arrowContainer, { transform: [{ rotate: '180deg' }] }]}
        onPress={() => {
          if (scrollRef.current && screenX < replacementPlayers.length * RW(90) - scrollViewWidth) {
            setScreenX(screenX + scrollViewWidth)
            scrollRef.current.scrollTo({
              x: screenX + scrollViewWidth,
              animated: true,
            })
          }
        }}
      >
        <ArrowSvg />
      </Pressable>
    </Row>
  )
}

export default SchemeUsers

const styles = StyleSheet.create({
  container: {},
  // scrollContainer: {
  //   flex: 1,
  //   width: '100%',
  // },
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
