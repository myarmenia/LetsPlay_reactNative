import { RW } from '@/theme/utils'
import React, { useRef, useState } from 'react'
import { View, PanResponder, Animated, Dimensions, Pressable, StyleSheet } from 'react-native'
import User from '@/components/User/user'
import ArrowSvg from './assets/ArrowSvg'
import { ICON } from '@/theme/colors'
import Row from '@/components/wrappers/row'

const DraggableComponent = ({ style, itemId }) => {
  const [positions, setPositions] = useState([
    { x: 0, y: 0, small: false },
    { x: 0, y: 0, small: false },
    { x: 0, y: 0, small: false },
    { x: 0, y: 0, small: false },
    { x: 0, y: 0, small: false },
    { x: 0, y: 0, small: false },
    { x: 0, y: 0, small: false },
    { x: 0, y: 0, small: false },
    { x: 0, y: 0, small: false },
    { x: 0, y: 0, small: false },
    { x: 0, y: 0, small: false },
    { x: 0, y: 0, small: false },
    { x: 0, y: 0, small: false },
    { x: 0, y: 0, small: false },
    { x: 0, y: 0, small: false },
    { x: 0, y: 0, small: false },
    { x: 0, y: 0, small: false },
    { x: 0, y: 0, small: false },
    { x: 0, y: 0, small: false },
    { x: 0, y: 0, small: false },
    { x: 0, y: 0, small: false },
    { x: 0, y: 0, small: false },
    { x: 0, y: 0, small: false },
    { x: 0, y: 0, small: false },
    { x: 0, y: 0, small: false },
    { x: 0, y: 0, small: false },
    { x: 0, y: 0, small: false },
    { x: 0, y: 0, small: false },
  ])
  const [scrollViewWidth, setScrollViewWidth] = useState(288)
  const componentRefs = [
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
  ]
  const scrollRef = useRef(null)
  const [screenX, setScreenX] = useState(scrollViewWidth)

  const panResponders = componentRefs?.map((ref, index) =>
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        const { dx, dy } = gesture
        setPositions((prevPositions) => {
          const updatedPositions = [...prevPositions]
          updatedPositions[index] = {
            small: false,
            x: prevPositions[index].x + dx,
            y: prevPositions[index].y + dy,
            moveX: gesture.moveX,
            moveY: gesture.moveY,
          }
          return updatedPositions
        })
      },
      onPanResponderEnd: (event, gesture) => {
        if (
          positions[index].moveX >= 95 &&
          positions[index].moveX <= 301 &&
          positions[index].moveY >= 195 &&
          positions[index].moveY <= 500
        ) {
          const currentComponent = positions[index]
          positions.forEach((item, i) => {
            if (item?.moveX && i !== index) {
              const differenceX = currentComponent.moveX - item.moveX
              const differenceY = currentComponent.moveY - item.moveY
              if (differenceX < 25 && differenceX > -25 && differenceY < 25 && differenceY > -25) {
                setPositions((prevPositions) => {
                  const updatedPositions = [...prevPositions]
                  updatedPositions[i] = {
                    x: 0,
                    y: 0,
                    small: false,
                  }
                  return updatedPositions
                })
              }
            }
          })

          setPositions((prevPositions) => {
            const updatedPositions = [...prevPositions]
            updatedPositions[index] = {
              ...updatedPositions[index],
              small: true,
            }
            return updatedPositions
          })
        } else {
          setPositions((prevPositions) => {
            const updatedPositions = [...prevPositions]
            updatedPositions[index] = {
              x: 0,
              y: 0,
              small: false,
            }
            return updatedPositions
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
        style={styles.scrollContainer}
        onLayout={(e) => {
          setScrollViewWidth(e.nativeEvent.layout.width)
        }}
        // scrollEnabled={false}
      >
        {positions?.map((position, index) => (
          <View
            key={index}
            ref={componentRefs[index]}
            style={[
              {
                paddingVertical: position.small ? RW(30) : 0,
                paddingHorizontal: position.small ? RW(26) : 0,
                zIndex: position.small ? 9 : 99,
              },
              { transform: [{ translateX: position.x }, { translateY: position.y }] },
            ]}
            {...panResponders[index]?.panHandlers}
            onContentSizeChange={(e) => {
              console.log('onContentSizeChange', e)
            }}
          >
            <User size={position.small ? RW(40) : RW(90)} />
          </View>
        ))}
      </Animated.ScrollView>
      <Pressable
        style={[styles.arrowContainer, { transform: [{ rotate: '180deg' }] }]}
        onPress={() => {
          if (scrollRef.current && screenX < positions.length * RW(90) - scrollViewWidth) {
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 99999999,
    overflow: 'visible',
  },
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
