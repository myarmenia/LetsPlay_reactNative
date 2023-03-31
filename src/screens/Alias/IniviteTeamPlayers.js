import { FlatList, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { memo, useCallback, useState } from 'react'
import ScreenMask from '@/components/wrappers/screen'
import { ICON, WHITE } from '@/theme/colors'
import { font, RH, RW } from '@/theme/utils'
import UserEmptyIcon from '@/assets/svgs/userEmptyIcon'
import LightButton from '@/assets/imgs/Button'
import DarkButton from '@/assets/imgs/DarkButton'
import { useEffect } from 'react'
import { TouchableOpacity } from 'react-native'
import { useIsFocused, useNavigation } from '@react-navigation/native'
import LinearGradient from 'react-native-linear-gradient'
import User from '@/components/User/user'
import BorderGradient from '@/assets/svgs/BorderGradiend'
import { useDispatch, useSelector } from 'react-redux'
import { setCommands } from '@/store/Slices/AliasSlice'

const IniviteTeamPlayers = ({ route }) => {
  const navigation = useNavigation()
  const { commands } = useSelector(({ alias }) => alias)
  const [selecteds, setSelecteds] = useState([])
  const [accepteds, setAccepteds] = useState([])
  const [i, setI] = useState(0)
  const dispatch = useDispatch()
  const isFocused = useIsFocused()

  useEffect(() => {
    setI(0)
  }, [isFocused])

  useEffect(() => {
    if (i >= commands?.length) {
      navigation.navigate('PlayNow')
    }
  }, [i])

  const handleApply = () => {
    setAccepteds([...selecteds])
    setSelecteds([])
    setI(i + 1)
    setAccepteds(selecteds)
    dispatch(
      setCommands([
        ...commands.map(elm => {
          return elm?.command - 1 == i ? { ...elm, members: selecteds } : elm
        }),
      ]),
    )
  }
  let [users, setUsers] = useState([
    { id: 0, f: '' },
    { id: 1, f: '' },
    { id: 2, f: '' },
    { id: 3, f: '' },
    { id: 4, f: '' },
    { id: 5, f: '' },
    { id: 6, f: '' },
    { id: 7, f: '' },
    { id: 8, f: '' },
  ])
  const UserItem = ({ elm, i }) => {
    const handleClick = () => {
      if (selecteds.some(item => item == elm.id)) {
        return setSelecteds(selecteds.filter(user => user !== elm.id))
      } else {
        return setSelecteds([...selecteds, elm.id])
      }
    }

    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', paddingVertical: RH(6) }}>
        <BorderGradient
          height={142}
          width={105}
          opacity={
            selecteds.some(elm => elm == i) && !commands?.[i]?.members?.find(item => item == elm.id)
              ? 1
              : 0
          }
        />
        <View style={{ position: 'absolute', zIndex: 65 }}>
          <User
            size={100}
            onPressItem={{
              item: <User size={390} />,
              modalClose: false,
              // onClickFunc: selecteds.some(el => el == elm) ? handleClick : console.log(selecteds),
              onClickFunc: commands?.[i]?.members?.find(item => item == elm.id)
                ? null
                : handleClick,
            }}
          />
        </View>
      </View>
    )
  }

  return (
    <ScreenMask>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ justifyContent: 'center' }}>
          <View style={styles.mainContainer}>
            <Text style={styles.title}>Игроки добавились в игру</Text>
            <Text style={styles.title}>Распределите игроков</Text>
            <Text style={styles.commandName}>{commands[i]?.value}</Text>
            <ScrollView style={{ width: '100%' }} showsVerticalScrollIndicator={false}>
              <View style={styles.gridBox}>
                {users.map((elm, j) => {
                  return (
                    <View
                      style={{
                        opacity: commands?.[i]?.members?.find(item => item == elm.id) ? 0.5 : 1,
                      }}
                    >
                      {console.log(commands?.[i]?.members?.find(item => item == elm.id))}
                      <UserItem i={j} elm={elm} key={j} />
                    </View>
                  )
                })}
              </View>
            </ScrollView>
          </View>
        </View>

        <View
          style={{
            width: '100%',
            alignSelf: 'center',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: RH(80),
            marginBottom: RH(20),
          }}
        >
          <View style={styles.btnBox}>
            <LightButton
              label={'Продолжить'}
              size={{ width: RW(310), height: RH(50) }}
              onPress={handleApply}
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

export default memo(IniviteTeamPlayers)

const styles = StyleSheet.create({
  title: {
    ...font('medium', 24, WHITE),
    textAlign: 'center',
    paddingVertical: RH(8),
  },
  commandName: {
    ...font('medium', 24, ICON),
    textAlign: 'center',
    paddingVertical: RH(8),
  },
  mainContainer: {
    width: '90%',
    zIndex: 200,
    overflow: 'visible',
    flex: 1,
    paddingTop: '22%',
    alignSelf: 'center',
  },

  gridBox: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  btnBox: {
    marginTop: RH(10),
  },
})
