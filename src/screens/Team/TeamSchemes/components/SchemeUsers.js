import { RW } from '@/theme/utils'
import React, { useRef, useState } from 'react'
import { View, PanResponder, Pressable, StyleSheet, Animated } from 'react-native'
import User from '@/components/User/user'
import ArrowSvg from './assets/ArrowSvg'
import { BACKGROUND, ICON } from '@/theme/colors'
import Row from '@/components/wrappers/row'

const SchemeUsers = ({ replacementPlayers, setReplacementPlayers }) => {
  const [scrollViewWidth, setScrollViewWidth] = useState(288)
  const [screenX, setScreenX] = useState(0)
  const scrollRef = useRef(null)
  const componentWidth = useRef(0)

  const panResponders = replacementPlayers?.map((ref, index) =>
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,

      onPanResponderMove: (event, gesture) => {
        // console.log('prevplayingPlayers[index].moveX', replacementPlayers[index].moveX)
        // if (replacementPlayers[index].moveX == 0 || replacementPlayers[index].moveY == 0) {
        //   console.log('if')
        //   console.log('gesture.moveX', gesture.moveX)

        //   setReplacementPlayers((prevplayingPlayers) => {
        //     const updatedplayingPlayers = [...prevplayingPlayers]
        //     updatedplayingPlayers[index] = {
        //       small: false,
        //       inGame: false,
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
            inGame: true,
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
                    inGame: false,
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
              inGame: true,
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
              inGame: false,
            }
            return updatedplayingPlayers
          })
        }
      },
    }),
  )
  console.log(screenX)
  return (
    <Row wrapper={styles.container}>
      <View
        style={[
          styles.btnContainer,
          // { borderBottomLeftRadius: RW(10), borderTopLeftRadius: RW(10) },
        ]}
      >
        <Pressable
          style={styles.arrowContainer}
          onPress={() => {
            // if (scrollRef.current && screenX > scrollViewWidth) {
            //   scrollRef.current.scrollTo({
            //     x: screenX - scrollViewWidth,
            //     // animated: true,
            //   })
            //   setScreenX(screenX - scrollViewWidth)
            // }
            if (screenX > componentWidth.current * 4) {
              setScreenX(0)
            } else if (screenX > 0) {
              setScreenX(screenX - componentWidth.current * 4)
            }
          }}
        >
          <ArrowSvg />
        </Pressable>
      </View>

      <View
        style={{
          width: '80%',
          // width: screenX + RW(92) * 4,
          // height: '100%',
          overflow: 'visible',
          // backgroundColor: '#415590',
          backgroundColor: BACKGROUND,
        }}
      >
        <Row
          wrapper={{
            height: RW(100),
            // alignSelf: 'flex-start',
            // justifyContent: 'flex-start',
            backgroundColor: 'blue',
          }}
        >
          {replacementPlayers?.map((user, index) => (
            <Animated.View
              key={index}
              ref={user.ref}
              onLayout={(e) => {
                if (!componentWidth.current) componentWidth.current = e.nativeEvent.layout.width
              }}
              style={[
                {
                  zIndex: user.small ? 9 : user?.inGame ? 999 : 99,
                  position: user.inGame ? 'absolute' : 'relative',
                  paddingVertical: user.small ? RW(21.05) : 0,
                  paddingHorizontal: user.small ? RW(20.15) : RW(2.2),
                  backgroundColor: index % 2 ? 'red' : 'green',
                },
                user.inGame
                  ? {
                      transform: [{ translateX: user.x }, { translateY: user.y }],
                    }
                  : {
                      transform: [{ translateX: -screenX }],
                    },
              ]}
              {...panResponders[index]?.panHandlers}
            >
              <User size={user.small ? RW(45) : RW(90)} />
            </Animated.View>
          ))}
        </Row>
      </View>

      <View
        style={[
          styles.btnContainer,
          // { borderBottomRightRadius: RW(10), borderTopRightRadius: RW(10) },
        ]}
      >
        <Pressable
          style={[styles.arrowContainer, { transform: [{ rotate: '180deg' }] }]}
          onPress={() => {
            let outGamePlayers = replacementPlayers.filter((item) => !item.inGame)
            console.log(
              'componentWidth.current % 4',
              outGamePlayers.length % 4 ? componentWidth.current * 4 : 0,
            )
            // console.log(
            //   'Math.floor(outGamePlayers.length / 4)',
            //   Math.floor(outGamePlayers.length / 4) * componentWidth.current * 4,
            // )
            if (
              screenX <
              Math.floor(outGamePlayers.length / 4) * componentWidth.current * 4 -
                (!outGamePlayers.length % 4 ? componentWidth.current * 4 : 0)
            ) {
              setScreenX(screenX + componentWidth.current * 4)
            }
          }}
        >
          <ArrowSvg />
        </Pressable>
      </View>
    </Row>
  )
}

export default SchemeUsers

const styles = StyleSheet.create({
  container: {
    height: RW(100),
    backgroundColor: BACKGROUND,
    justifyContent: 'space-between',
    // borderRadius: RW(10),
    width: RW(428),
    left: -RW(16),
  },
  scrollContainer: {
    flex: 1,
    width: '100%',
    overflow: 'scroll',
    zIndex: 9999,
  },
  btnContainer: {
    backgroundColor: BACKGROUND,
    width: '10%',
    height: '100%',
    justifyContent: 'center',
    zIndex: 9999,
    paddingHorizontal: RW(5),
  },
  arrowContainer: {
    // backgroundColor: ICON,
    width: RW(40),
    height: RW(40),
    borderRadius: RW(20),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
})
