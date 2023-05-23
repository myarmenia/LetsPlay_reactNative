import { RW } from '@/theme/utils'
import React, { useRef, useState } from 'react'
import { View, PanResponder } from 'react-native'
import User from '@/components/User/user'
const DraggableComponent = ({ style, itemId }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [small, setSmall] = useState(false)
  const componentRef = useRef()

  const panResponders = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gesture) => {
      const { dx, dy } = gesture
      setPosition((prevposition) => {
        const updatedposition = {
          x: prevposition.x + dx,
          y: prevposition.y + dy,
          moveX: gesture.moveX,
          moveY: gesture.moveY,
        }
        return updatedposition
      })
    },
    onPanResponderEnd: (event, gesture) => {
      if (
        position.moveX >= 95 &&
        position.moveX <= 301 &&
        position.moveY >= 195 &&
        position.moveY <= 500
      ) {
        setSmall(true)
      } else {
        setPosition({
          ...position,
          x: 0,
          y: 0,
        })
        setSmall(false)
      }
    },
  })
  return (
    <View style={{ justifyContent: 'center', flexDirection: 'row' }}>
      <View
        ref={componentRef}
        style={[
          {
            paddingVertical: small ? RW(30) : 0,
            paddingHorizontal: small ? RW(26) : 0,
          },
          { transform: [{ translateX: position.x }, { translateY: position.y }] },
        ]}
        {...panResponders?.panHandlers}
      >
        <User size={small ? RW(40) : RW(100)} />
      </View>
    </View>
  )
}
export default DraggableComponent
