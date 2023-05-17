import { RW } from '@/theme/utils'
import React, { useEffect, useRef, useState } from 'react'
import { View, PanResponder, Pressable, StyleSheet, Animated, ScrollView } from 'react-native'
import User from '@/components/User/user'
import ArrowSvg from './assets/ArrowSvg'
import { ICON } from '@/theme/colors'
import Row from '@/components/wrappers/row'

const SchemeUsers = ({ replacementPlayers, setReplacementPlayers }) => {
  const [scrollViewWidth, setScrollViewWidth] = useState(288)
  const [screenX, setScreenX] = useState(scrollViewWidth)
  const scrollRef = useRef(null)

  // console.log('replacementPlayers', replacementPlayers)

  // const panResponders = users?.map((ref, index) =>
  //   PanResponder.create({
  //     onMoveShouldSetPanResponder: () => true,
  //     onPanResponderGrant: (event, gesture) => {
  //       dragUser(users[index])
  //     },
  //   }),
  // )

  const panResponders = replacementPlayers?.map((ref, index) =>
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderStart: (event, gesture) => {},
      onPanResponderMove: (event, gesture) => {
        // console.log('prevplayingPlayers[index].moveX', replacementPlayers[index].moveX)
        // if (replacementPlayers[index].moveX == 0 || replacementPlayers[index].moveY == 0) {
        //   console.log('if')
        //   console.log('gesture.moveX', gesture.moveX)

        //   setReplacementPlayers((prevplayingPlayers) => {
        //     const updatedplayingPlayers = [...prevplayingPlayers]
        //     updatedplayingPlayers[index] = {
        //       small: false,
        //       inGamae: false,
        //       x: prevplayingPlayers[index].x + gesture.moveX,
        //       y: prevplayingPlayers[index].y + gesture.moveY,
        //       moveX: prevplayingPlayers[index].moveX,
        //       moveY: prevplayingPlayers[index].moveY,
        //     }
        //     return updatedplayingPlayers
        //   })
        // }
        // console.log('gesture', gesture)

        const { dx, dy } = gesture

        setReplacementPlayers((prevplayingPlayers) => {
          const updatedplayingPlayers = [...prevplayingPlayers]
          updatedplayingPlayers[index] = {
            small: false,
            inGamae: true,
            x:
              prevplayingPlayers[index].x +
              dx +
              (updatedplayingPlayers[index].x == 0 ? gesture.moveX - RW(45) : 0),
            y: prevplayingPlayers[index].y + dy,
            moveX: gesture.moveX,
            moveY: gesture.moveY,
          }
          return updatedplayingPlayers
        })
      },
      onPanResponderEnd: (event, gesture) => {
        console.log('replacementPlayers', replacementPlayers[index])
        if (
          replacementPlayers[index].moveX >= 95 &&
          replacementPlayers[index].moveX <= 301 &&
          replacementPlayers[index].moveY >= 195 &&
          replacementPlayers[index].moveY <= 500
        ) {
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
                    inGamae: false,
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
              inGamae: true,
            }
            return updatedplayingPlayers
          })
        } else {
          setReplacementPlayers((prevplayingPlayers) => {
            const updatedplayingPlayers = [...prevplayingPlayers]
            updatedplayingPlayers[index] = {
              ...updatedplayingPlayers[index],
              x: 0,
              y: 0,
              small: false,
              inGamae: false,
            }
            return updatedplayingPlayers
          })
        }
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
              // animated: true,
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
        style={styles.scrollContainer}
        onLayout={(e) => {
          setScrollViewWidth(e.nativeEvent.layout.width)
        }}
        scrollEnabled={false}
      >
        {/* <ScrollView
        // ref={scrollRef}
        horizontal
        // snapToInterval={scrollViewWidth}
        decelerationRate="fast"
        // showsHorizontalScrollIndicator={false}
        // bounces={false}
        // scrollEventThrottle={1}
        style={styles.scrollContainer}
        // onLayout={(e) => {
        //   // setScrollViewWidth(e.nativeEvent.layout.width)
        // }}
        scrollEnabled={false}
      > */}
        {replacementPlayers?.map((user, index) => (
          <Animated.View
            key={index}
            ref={user.ref}
            style={[
              {
                zIndex: user.small ? 9 : user?.inGamae ? 999 : 99,
                position: user.inGamae ? 'absolute' : 'relative',
                paddingVertical: user.small ? RW(21.05) : 0,
                paddingHorizontal: user.small ? RW(20.15) : 0,
                backgroundColor: 'red',
              },
              {
                transform: [{ translateX: user.x }, { translateY: user.y }],
              },
            ]}
            {...panResponders[index]?.panHandlers}
          >
            <User size={user.small ? RW(45) : RW(90)} style={{}} />
          </Animated.View>
        ))}
        {/* </ScrollView> */}
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
  container: { height: RW(100) },
  scrollContainer: {
    flex: 1,
    width: '100%',
    overflow: 'visible',
    zIndex: 9999,
  },
  arrowContainer: {
    backgroundColor: ICON,
    width: RW(40),
    height: RW(40),
    borderRadius: RW(20),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    zIndex: 9999,
  },
})
