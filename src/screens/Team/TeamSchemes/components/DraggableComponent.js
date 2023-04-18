import React, { useRef, useState } from 'react'
import { View, StyleSheet, PanResponder } from 'react-native'
const DraggableComponent = ({ children, style, maxTop }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const componentRef = useRef(null)
  const currentPosition = { x: 0, y: 0, height: 0, width: 0 }
  const handleLayout = () => {
    componentRef.current.measure((x, y, width, height, pageX, pageY) => {
      currentPosition.y = pageY
      currentPosition.x = pageX
      currentPosition.height = height
      currentPosition.width = width
    })
  }
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        console.log('maxTop', maxTop)
        if (gesture.moveY >= 122) {
          setPosition({
            x: gesture.moveX - currentPosition.x - currentPosition.width / 2,
            y: gesture.moveY - currentPosition.y - currentPosition.height / 2,
          })
        }
      },
    }),
  ).current
  return (
    <View
      style={[
        {
          alignSelf: 'flex-start',
          transform: [{ translateX: position?.x }, { translateY: position?.y }],
        },
        style,
      ]}
      {...panResponder.panHandlers}
      onLayout={handleLayout}
      ref={componentRef}
    >
      {children}
    </View>
  )
}
export default DraggableComponent
const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    zIndex: 9999,
  },
})

// import React from 'react'
// import { StyleSheet, Text, View } from 'react-native'

// import usePanResponder from './helpers/usePanResponder'

// export default function App() {
//   const [state, panHandlers] = usePanResponder()

//   const { dragging, initialY, initialX, offsetY, offsetX } = state

//   const style = {
//     backgroundColor: dragging ? '#2DC' : '#0BA',
//     transform: [{ translateX: initialX + offsetX }, { translateY: initialY + offsetY }],
//   }

//   return (
//     <View style={styles.container}>
//       <View
//         // Put all panHandlers into the View's props
//         {...panHandlers}
//         style={[styles.square, style]}
//       >
//         <Text style={styles.text}>DRAG ME</Text>
//       </View>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   square: {
//     position: 'absolute',
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: {
//     color: 'white',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
// })
