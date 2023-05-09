import { useEffect } from 'react'
import { font, RH, RW } from '@/theme/utils'
import { memo, useState } from 'react'
import { BACKGROUND, ICON, RED, WHITE } from '@/theme/colors'
import { useDispatch, useSelector } from 'react-redux'
import { useIsFocused, useNavigation } from '@react-navigation/native'
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import {
  sendAliasGameId,
  setCommandsInGame,
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
import Modal from '@/components/modal'
import CloseSVG from './Components/CloseSVG'
const IniviteTeamPlayers = ({ route }) => {
  const navigation = useNavigation()
  const props = route.params
  const {
    commandsInGame,
    reservedUsers,
    aliasGameId,
    playersInGame,
    teamDatas,
    participateSuccess,
    userIsOrganizer,
  } = useSelector(({ alias }) => alias)
  const [i, setI] = useState(0)
  const [errorModal, setErrorModal] = useState(false)
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
  const handleClick = (elm) => {
    if (!reservedUsers?.includes(elm?._id)) {
      if (commandsInGame?.[i]?.members?.some((item) => item == elm?._id)) {
        dispatch(
          setCommandsInGame(
            commandsInGame?.map((elem) => {
              if (elem.members.includes(elm?._id)) {
                return { ...elem, members: elem.members.filter((item) => item !== elm?._id) }
              } else {
                return elem
              }
            }),
          ),
        )
      } else {
        dispatch(
          setCommandsInGame(
            commandsInGame?.map((item) =>
              item.command - 1 == i ? { ...item, members: [...item.members, elm?._id] } : item,
            ),
          ),
        )
      }
    }
  }

  const handleSubmit = async () => {
    if (commandsInGame[i].members.length >= 2) {
      setError(false)
      dispatch(setReservedUsers([...new Set([...reservedUsers, ...commandsInGame[i].members])]))
      dispatch(
        setPlayers({
          alias_id: aliasGameId,
          team_id: teamDatas[i]?._id,
          players: commandsInGame?.[i]?.members,
        }),
      )
      setI((prev) => prev + 1)
      i >= commandsInGame.length - 1 ? navigation.navigate('PlayNow') : null
    } else {
      setError(true)
      setErrorModal(true)
    }
  }
  const ErrorModal = () => {
    return (
      <Pressable
        style={styles.errorModalBox}
        onPress={() => {
          setErrorModal(false)
        }}
      >
        <View
          style={{
            height: '90%',
            width: '80%',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}
        >
          <CloseSVG />
          <Text style={styles.errorModalBoxText}>
            Не возможно начать игру. Количество игроков не соответствуют минимальному числу игроков
            для начала игры
          </Text>
        </View>
      </Pressable>
    )
  }

  return (
    <ScreenMask>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ justifyContent: 'center' }}>
          <View style={styles.mainContainer}>
            <Text style={styles.title}>Игроки добавились в игру</Text>
            <Text style={styles.title}>Распределите игроков</Text>
            <Text style={styles.commandName}>{commandsInGame?.[i]?.value}</Text>
            <ScrollView style={{ width: '100%' }} showsVerticalScrollIndicator={false}>
              <View style={styles.gridBox}>
                {playersInGame?.map((elm, j) => {
                  return (
                    <View
                      style={{
                        //  opacity: commandsInGame?.[i]?.members?.includes(elm.id) ? 0.5 : 1,
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
                          opacity={commandsInGame?.[i]?.members?.includes(elm?._id) ? 1 : 0}
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
        <Modal setIsVisible={setErrorModal} modalVisible={errorModal} item={<ErrorModal />} />

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
            {!!error && <Text style={styles.errorText}>Игроки не должны быть менее 4</Text>}
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
  errorModalBox: {
    alignSelf: 'center',
    height: RH(350),
    width: RW(300),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: BACKGROUND,
    borderRadius: RW(14),
  },
  errorModalBoxText: {
    ...font('medium', 16, WHITE),
    textAlign: 'center',
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
