const usePanResponder = ({ user }) => {
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
  return {}
}

export default usePanResponder
