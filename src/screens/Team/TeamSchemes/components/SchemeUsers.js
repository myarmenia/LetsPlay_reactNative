import { RW } from '@/theme/utils'
import React, { useEffect, useRef, useState } from 'react'
import { View, PanResponder, Animated, Dimensions, Pressable, StyleSheet } from 'react-native'
import User from '@/components/User/user'
import ArrowSvg from './assets/ArrowSvg'
import { ICON } from '@/theme/colors'
import Row from '@/components/wrappers/row'

const SchemeUsers = ({ users, dragUser }) => {
  const [scrollViewWidth, setScrollViewWidth] = useState(288)
  const [screenX, setScreenX] = useState(scrollViewWidth)
  const scrollRef = useRef(null)

  const panResponders = users?.map((ref, index) =>
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: (event, gesture) => {
        dragUser(users[index])
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
        scrollEnabled={false}
      >
        {users?.map((user, index) => (
          <View key={index} ref={user.ref} {...panResponders[index]?.panHandlers}>
            <User size={RW(90)} />
          </View>
        ))}
      </Animated.ScrollView>
      <Pressable
        style={[styles.arrowContainer, { transform: [{ rotate: '180deg' }] }]}
        onPress={() => {
          if (scrollRef.current && screenX < users.length * RW(90) - scrollViewWidth) {
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
