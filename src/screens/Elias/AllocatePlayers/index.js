import React, { useState } from 'react'
import { Pressable, ScrollView, Text, View } from 'react-native'
import ScreenMask from '@/components/wrappers/screen'
import { DraxProvider, DraxView } from 'react-native-drax'
import { styles } from './styles'
import User from '@/assets/imgs/user/user'
import { Players } from '@/assets/TestData'
import UserBg from '@/assets/imgs/user/userBg'
import { RH, RW } from '@/theme/utils'
import Button from '@/assets/imgs/Button'
import DarkButton from '@/assets/imgs/DarkButton'

const Elias = ({ navigation }) => {
  const [staged, setStaged] = React.useState([])
  const [comOne, setComOne] = useState([])
  const [comTwo, setComTwo] = useState([])
  const [list, setList] = useState(Players)
  const playerCount = [1, 2, 3, 4, 5]

  return (
    <ScreenMask>
      <DraxProvider>
        <View style={styles.container}>
          <Text style={styles.title}>Распределите игроков</Text>
          <Text style={styles.com}>Название команды 1</Text>
          <DraxView
            dragPayload={staged.join(' ')}
            draggable={staged.length > 0}
            renderContent={({ viewState }) => {
              const receivingDrag = viewState && viewState.receivingDrag
              const payload = receivingDrag && receivingDrag.payload
              const dragging = viewState && viewState.dragStatus !== 0
              const combinedStyles = [styles.centeredContent, styles.receivingZone, styles.cyan]
              if (dragging) {
                combinedStyles.push({ opacity: 0.2 })
              }
              return (
                <View style={styles.comBg}>
                  {playerCount.map((item, i) => {
                    return (
                      <View key={i} style={{ marginLeft: RW(5) }}>
                        <View>
                          <View>
                            <UserBg />
                          </View>
                          {comOne[i] ? (
                            <DraxView
                              key={i}
                              style={[styles.centeredContent, styles.draggableBox]}
                              draggingStyle={styles.dragging}
                              // dragReleasedStyle={styles.dragging}
                              // hoverDraggingStyle={styles.hoverDragging}
                              dragPayload={comOne[i]}
                              // longPressDelay={0}
                            >
                              <View style={{ ...styles.players, ...styles.playersComBlock }}>
                                <User user={comOne[i]} size={95} />
                              </View>
                            </DraxView>
                          ) : null}
                        </View>
                      </View>
                    )
                  })}
                </View>
              )
            }}
            renderHoverContent={({ viewState }) => {
              // const offsetStyle = viewState.grabOffset
              //   ? {
              //       marginLeft: viewState.grabOffset.x - 30,
              //       marginTop: viewState.grabOffset.y - 30,
              //     }
              //   : undefined
              // const combinedStyles = [
              //   styles.centeredContent,
              //   styles.draggableBox,
              //   styles.cyan,
              //   offsetStyle,
              // ]
              // if (dragging) {
              //   combinedStyles.push({ opacity: 0.2 })
              // } else if (receivingDrag) {
              //   combinedStyles.push(styles.receiving)
              // }
              return null
            }}
            onReceiveDragDrop={(event) => {
              if (
                event.dragged.payload.id &&
                comOne.length < 5 &&
                !comOne.filter((item, i) => item.id === event.dragged.payload?.id).length
              ) {
                setComOne([...comOne, event.dragged.payload])
                const filterDataComTwo = comTwo.filter(
                  (item, i) => item.id !== event.dragged.payload.id,
                )
                setComTwo(filterDataComTwo)
                const filterDataList = list.filter(
                  (item, i) => item.id !== event.dragged.payload.id,
                )
                setList(filterDataList)
              }

              setStaged([...staged, event.dragged.payload || '?'])
            }}
            onDragDrop={() => setStaged([])}
          />
        </View>

        <View style={styles.container}>
          <Text style={styles.com}>Название команды 2</Text>
          <DraxView
            dragPayload={staged.join(' ')}
            draggable={staged.length > 0}
            renderContent={({ viewState }) => {
              const receivingDrag = viewState && viewState.receivingDrag
              const payload = receivingDrag && receivingDrag.payload
              const dragging = viewState && viewState.dragStatus !== 0
              const combinedStyles = [styles.centeredContent, styles.receivingZone, styles.cyan]
              if (dragging) {
                combinedStyles.push({ opacity: 0.2 })
              }
              return (
                <View style={styles.comBg}>
                  {playerCount.map((item, i) => {
                    return (
                      <View key={i} style={{ marginLeft: RW(5) }}>
                        <View>
                          <View>
                            <UserBg />
                          </View>
                          {comTwo[i] ? (
                            <DraxView
                              key={i}
                              style={[styles.centeredContent, styles.draggableBox]}
                              draggingStyle={styles.dragging}
                              // dragReleasedStyle={styles.dragging}
                              // hoverDraggingStyle={styles.hoverDragging}
                              dragPayload={comTwo[i]}
                              // longPressDelay={0}
                            >
                              <View style={{ ...styles.players, ...styles.playersComBlock }}>
                                <User user={comTwo[i]} size={95} />
                              </View>
                            </DraxView>
                          ) : null}
                        </View>
                      </View>
                    )
                  })}
                </View>
              )
            }}
            renderHoverContent={({ viewState }) => {
              // const offsetStyle = viewState.grabOffset
              //   ? {
              //       marginLeft: viewState.grabOffset.x - 30,
              //       marginTop: viewState.grabOffset.y - 30,
              //     }
              //   : undefined
              // const combinedStyles = [
              //   styles.centeredContent,
              //   styles.draggableBox,
              //   styles.cyan,
              //   offsetStyle,
              // ]
              // if (dragging) {
              //   combinedStyles.push({ opacity: 0.2 })
              // } else if (receivingDrag) {
              //   combinedStyles.push(styles.receiving)
              // }
              return null
            }}
            onReceiveDragDrop={(event) => {
              if (
                event.dragged.payload.id &&
                comTwo.length < 5 &&
                !comTwo.filter((item, i) => item.id === event.dragged.payload?.id).length
              ) {
                setComTwo([...comTwo, event.dragged.payload])
                const filterDataComOne = comOne.filter(
                  (item, i) => item.id !== event.dragged.payload.id,
                )
                setComOne(filterDataComOne)
                const filterDataList = list.filter(
                  (item, i) => item.id !== event.dragged.payload.id,
                )
                setList(filterDataList)
              }

              setStaged([...staged, event.dragged.payload || '?'])
            }}
            onDragDrop={() => setStaged([])}
          />
        </View>
        <View style={styles.container}>
          <DraxView
            dragPayload={staged.join(' ')}
            draggable={staged.length > 0}
            renderContent={({ viewState }) => {
              const receivingDrag = viewState && viewState.receivingDrag
              const payload = receivingDrag && receivingDrag.payload
              // const dragging = viewState && viewState.dragStatus !== 0;
              const combinedStyles = [styles.centeredContent, styles.receivingZone, styles.cyan]
              // if (true) {
              //     combinedStyles.push({opacity: 0.2});
              // } else if (receivingDrag) {
              //     combinedStyles.push(styles.receiving);
              // }
              return (
                <View style={{ height: RH(200) }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: 'auto',
                      alignItems: 'center',
                      marginBottom: 'auto',
                    }}
                  >
                    {list.map((item, i) => (
                      <DraxView
                        key={i}
                        // style={[]}
                        draggingStyle={styles.dragging}
                        // dragReleasedStyle={styles.dragging}
                        // hoverDraggingStyle={styles.hoverDragging}
                        dragPayload={item}
                        // longPressDelay={0}
                      >
                        <View style={{ ...styles.players, marginLeft: i === 0 ? -RW(15) : null }}>
                          <User user={item} size={80} />
                        </View>
                      </DraxView>
                    ))}
                  </View>
                </View>
              )
            }}
            renderHoverContent={({ viewState }) => {
              // const offsetStyle = viewState.grabOffset
              //   ? {
              //       marginLeft: viewState.grabOffset.x - 30,
              //       marginTop: viewState.grabOffset.y - 30,
              //     }
              //   : undefined
              // const combinedStyles = [
              //   styles.centeredContent,
              //   styles.draggableBox,
              //   styles.cyan,
              //   offsetStyle,
              // ]
              // if (dragging) {
              //     combinedStyles.push({opacity: 0.2});
              // } else if (receivingDrag) {
              //     combinedStyles.push(styles.receiving);
              // }
              return null
            }}
            onReceiveDragDrop={(event) => {
              if (
                event.dragged.payload.id &&
                !list.filter((item, i) => item.id === event.dragged.payload?.id).length
              ) {
                setList([event.dragged.payload, ...list])
                const filterDataComOne = comOne.filter(
                  (item, i) => item.id !== event.dragged.payload.id,
                )
                setComOne(filterDataComOne)
                const filterDataComTwo = comTwo.filter(
                  (item, i) => item.id !== event.dragged.payload.id,
                )
                setComTwo(filterDataComTwo)
              }
              setStaged([...staged, event.dragged.payload || '?'])
            }}
            onDragDrop={() => setStaged([])}
          />
        </View>
      </DraxProvider>
      <View
        style={{
          marginLeft: 'auto',
          alignItems: 'center',
          marginVertical: 20,
          marginRight: 'auto',
        }}
      >
        <Button
          onPress={() => navigation.navigate('SettingsElias', { comTwo, comOne })}
          size={{ width: 281, height: 48 }}
          label={'Продолжить'}
        />
        <View style={{ marginTop: 20 }}>
          <DarkButton size={{ width: 281, height: 48 }} label={'Пригласить игроков'} />
        </View>
      </View>
    </ScreenMask>
  )
}

export default Elias
