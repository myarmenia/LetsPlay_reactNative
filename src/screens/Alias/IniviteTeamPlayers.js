import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import ScreenMask from '@/components/wrappers/screen'
import { WHITE } from '@/theme/colors'
import { font, RH, RW } from '@/theme/utils'
import UserEmptyIcon from '@/assets/svgs/userEmptyIcon'
import LightButton from '@/assets/imgs/Button'
import DarkButton from '@/assets/imgs/DarkButton'
import { useEffect } from 'react'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const IniviteTeamPlayers = ({ route }) => {
  const commands = route?.params
  let commandCount = 0
  let playersCount = 1
  const navigation = useNavigation()
  const [arr, setArr] = useState(commands?.map(() => [0, 0, 0, 0]))
  //          [[0,0,0,0],[0,0,0,0]]
  const [users, setUsers] = useState([1, 2, 3, 4, 5, 6, 7, 8])
  const RenderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          if (commandCount <= commands.length) {
            let changedUser = false

            arr[commandCount] = arr[commandCount].map((elm, i) => {
              // return i == commandCount ? 1 : 0
              if (!changedUser && elm == 0) {
                changedUser = true
                return 1
              } else {
                return 0
              }
            })

            console.log(arr)
            setArr(arr)
            playersCount++
            if (playersCount == 4) {
              commandCount++
              playersCount = 0
            }
          }

          // setUsers([users.filter(elm => elm !== item)])
        }}
      >
        {/* <User size={80} /> */}
        <View style={{ backgroundColor: 'red', width: 100, height: 100, margin: 10 }}></View>
      </TouchableOpacity>
    )
  }
  return (
    <ScreenMask>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ justifyContent: 'center' }}>
          <View style={styles.mainContainer}>
            <Text style={styles.title}>Распределите игроков</Text>
            {arr?.map((elem, i) => {
              return (
                <View key={i} style={{ paddingTop: RH(30) }}>
                  <Text style={styles.commandName}>Название команды {i + 1}</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      width: '100%',
                      justifyContent: 'space-evenly',
                      paddingVertical: RH(15),
                    }}
                  >
                    {elem.map((elm, index) => {
                      return elm == 0 ? (
                        <UserEmptyIcon />
                      ) : (
                        <View
                          style={{ backgroundColor: 'red', width: 100, height: 100, margin: 10 }}
                        />
                      ) // <User pressedUser={elem} size={80} />
                    })}
                  </View>
                </View>
              )
            })}
            <View>
              <Text style={styles.title}>Игроки которые добавились</Text>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={users}
                bounces={false}
                keyExtractor={(item, i) => i.toString()}
                renderItem={({ item, i }) => {
                  return <RenderItem item={item} />
                }}
                style={styles.flatlist}
              />
            </View>
          </View>
        </View>

        <View
          style={{
            width: '100%',
            alignSelf: 'center',
            justifyContent: 'space-between',
            alignItems: 'center',
            // height: RH(100),
            marginTop: RH(80),
            marginBottom: RH(20),
          }}
        >
          <View style={styles.btnBox}>
            <DarkButton label={'Сбросить'} size={{ width: RW(310), height: RH(50) }} />
          </View>
          <View style={styles.btnBox}>
            <LightButton
              label={'Продолжить'}
              size={{ width: RW(310), height: RH(50) }}
              onPress={() => navigation.navigate('')}
            />
          </View>
          <View style={styles.btnBox}>
            <DarkButton label={'Пригласить игроков'} size={{ width: RW(310), height: RH(50) }} />
          </View>
        </View>
      </ScrollView>
    </ScreenMask>
  )
}

export default IniviteTeamPlayers

const styles = StyleSheet.create({
  title: {
    ...font('medium', 24, WHITE),
  },
  mainContainer: {
    width: '90%',
    zIndex: 200,
    overflow: 'visible',
    flex: 1,
    paddingTop: '28%',
    alignSelf: 'center',
  },
  commandName: {
    ...font('medium', 20, WHITE),
  },
  flatlist: {
    flex: 1,
    marginTop: '4%',
    zIndex: 100,
    overflow: 'visible',
  },
  btnBox: {
    marginTop: RH(10),
  },
})
