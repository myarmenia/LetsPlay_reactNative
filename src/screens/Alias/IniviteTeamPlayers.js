import { useEffect } from 'react'
import { font, RH, RW } from '@/theme/utils'
import { memo, useState } from 'react'
import { ICON, RED, WHITE } from '@/theme/colors'
import { useDispatch, useSelector } from 'react-redux'
import { useIsFocused, useNavigation } from '@react-navigation/native'
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import {
  sendAliasGameId,
  setCommands,
  setParticipateSuccess,
  setPlayers,
  setReservedUsers,
  setUsersInGame,
} from '@/store/Slices/AliasSlice'
import LightButton from '@/assets/imgs/Button'
import DarkButton from '@/assets/imgs/DarkButton'
import User from '@/components/User/user'
import BorderGradient from '@/assets/svgs/BorderGradiend'
import ScreenMask from '@/components/wrappers/screen'
import { setPending } from '@/store/Slices/AuthSlice'

const IniviteTeamPlayers = ({ route }) => {
  const navigation = useNavigation()
  const props = route.params
  const {
    commands,
    reservedUsers,
    aliasGameId,
    playersInGame,
    teamDatas,
    participateSuccess,
    userIsOrganizer,
    usersInGame,
  } = useSelector(({ alias }) => alias)
  const [i, setI] = useState(0)
  const [error, setError] = useState(false)
  const dispatch = useDispatch()
  const isFocused = useIsFocused()
  useEffect(() => {
    setI(0)
  }, [isFocused])

  useEffect(() => {
    if (props.id) {
      dispatch(sendAliasGameId(props?.id))
    }
  }, [props])
  useEffect(() => {
    if (participateSuccess === false) {
      alert('Что-то пошло не так')
      // navigation.navigate('Home')
      dispatch(setParticipateSuccess(null))
    }
    dispatch(setPending(false))
  }, [participateSuccess])
  const handleClick = elm => {
    if (!reservedUsers?.includes(elm?._id)) {
      if (commands?.[i]?.members?.some(item => item == elm?._id)) {
        dispatch(
          setCommands(
            commands?.map(elem => {
              if (elem.members.includes(elm?._id)) {
                return { ...elem, members: elem.members.filter(item => item !== elm?._id) }
              } else {
                return elem
              }
            }),
          ),
        )
      } else {
        dispatch(
          setCommands(
            commands?.map(item =>
              item.command - 1 == i ? { ...item, members: [...item.members, elm?._id] } : item,
            ),
          ),
        )
      }
    }
  }

  const handleSubmit = async () => {
    if (commands[i].members.length >= 2) {
      setError(false)
      dispatch(setReservedUsers([...new Set([...reservedUsers, ...commands[i].members])]))
      dispatch(
        setPlayers({
          alias_id: aliasGameId,
          team_id: teamDatas[i]?._id,
          players: commands?.[i]?.members,
        }),
        )
        // dispatch(setUsersInGame(...usersInGame, playersInGame.filter((elm,j) => elm?._id == commands[i].members[j])))
        // console.log("0000000000", playersInGame.filter((elm,j) => elm?._id == commands[i].members[j]));
        setI(prev => prev + 1)
      i >= commands.length - 1 ? navigation.navigate('PlayNow') : null
    } else {
      setError(true)
    }
  }

  useEffect(()=>{
    console.log("usersInGame ========", usersInGame);
  },[usersInGame])

  return (
    <ScreenMask>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ justifyContent: 'center' }}>
          <View style={styles.mainContainer}>
            <Text style={styles.title}>Игроки добавились в игру</Text>
            <Text style={styles.title}>Распределите игроков</Text>
            <Text style={styles.commandName}>{commands?.[i]?.value}</Text>
            <ScrollView style={{ width: '100%' }} showsVerticalScrollIndicator={false}>
              <View style={styles.gridBox}>
                {playersInGame?.map((elm, j) => {
                  return (
                    <View
                      style={{
                        //  opacity: commands?.[i]?.members?.includes(elm.id) ? 0.5 : 1,
                        opacity: reservedUsers?.includes(elm?._id) ? 0.5 : 1,
                      }}
                      key={j + 10}
                    >
                      <View
                        style={{
                          alignItems: 'center',
                          justifyContent: 'center',

                          // paddingVertical: RH(6),
                        }}
                      >
                        <BorderGradient
                          height={142}
                          width={105}
                          opacity={commands?.[i]?.members?.includes(elm?._id) ? 1 : 0}
                        />
                        <Pressable
                          style={{
                            position: 'absolute',
                            zIndex: 65,
                          }}
                          onPress={() => handleClick(elm)}
                        >
                          <User
                            size={100}
                            pressedUser={elm}
                            zoom={true}
                            onPressItem={{
                              item: <User size={390} pressedUser={elm} />,
                              modalClose: false,
                              onClickFunc: () => handleClick(elm),
                            }}
                          />
                        </Pressable>
                      </View>
                    </View>
                  )
                })}
              </View>
            </ScrollView>
          </View>
        </View>

        {userIsOrganizer ? (
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
            {!!error && <Text style={styles.errorText}>Игроки не должны быть менее 2</Text>}
            <View style={styles.btnBox}>
              <LightButton
                label={'Продолжить'}
                size={{ width: RW(310), height: RH(50) }}
                onPress={handleSubmit}
              />
            </View>
            <View style={styles.btnBox}>
              <DarkButton label={'Пригласить игроков'} size={{ width: RW(310), height: RH(50) }} />
            </View>
          </View>
        ) : null}
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
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  btnBox: {
    marginTop: RH(10),
  },
  errorText: {
    ...font('regular', 17, RED, 24),
  },
})
