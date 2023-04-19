import { RH, RW } from '@/theme/utils'
import React, { useRef, useState } from 'react'
import { View, PanResponder } from 'react-native'
import User from '@/components/User/user'
const DraggableComponent = ({ style, itemId }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [smallSize, setSmallSize] = useState(false)

  const componentRef = useRef(null)
  const panResponder = useRef(null)

  const handleLayout = () => {
    componentRef.current.measure((x, y, width, height, pageX, pageY) => {
      let currentPosition = { x: pageX, y: 596, height: height, width: width }
      panResponder.current = PanResponder.create({
        onMoveShouldSetPanResponder: () => true,
        onPanResponderMove: (event, gesture) => {
          setSmallSize(false)
          setPosition({
            x: gesture.moveX - currentPosition.x - RW(50), // - currentPosition.width / 2
            y: gesture.moveY - currentPosition.y - RW(smallSize ? 50 : 100), // - currentPosition.height / 2
          })
        },
        onPanResponderEnd: (event, gesture) => {
          if (
            gesture.moveX >= 95 &&
            gesture.moveX <= 301 &&
            gesture.moveY >= 195 &&
            gesture.moveY <= 500
          ) {
            setSmallSize(true)
          } else {
            setPosition({
              x: 0,
              y: 0,
            })
          }
        },
      })
    })
  }

  return (
    <View
      onLayout={handleLayout}
      ref={componentRef}
      style={[
        {
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          transform: [{ translateX: position?.x }, { translateY: position?.y }],
        },
        style,
        // { flex: 1, justifyContent: 'space-between' },
      ]}
      {...panResponder.current?.panHandlers}
    >
      {/* <View style={{ width: RW(100), height: RW(100) }} /> */}
      <User size={smallSize ? RW(40) : RW(100)} />
    </View>
  )
}
export default DraggableComponent
