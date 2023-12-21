import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { RH, RW, font } from '@/theme/utils'
import DotSvg from './assets/DotSvg'
import Row from '@/components/wrappers/row'
import LightButton from '@/components/buttons/Button'
import CloseSvg from '@/assets/svgs/closeSvg'
import { LIGHT_GRAY, WHITE } from '@/theme/colors'
import { useDispatch, useSelector } from 'react-redux'
import {
  deleteNotification,
  notificationButtonClciked,
  setModalOptions,
  setModalVisible,
  setNotifications,
} from '@/store/Slices/AppSlice'
import { joinPlayerTeam, rejectTeamCreateGame, saveTeamDataForCreating, setCreateGameInfo } from '@/store/Slices/TeamSlice'
import { useNavigation } from '@react-navigation/native'
import { callEndGame, getGameById } from '@/store/Slices/GamesSlice'
import { confirmJoin, rejectJoin, getPlayers } from '@/store/Slices/TournamentReducer/TournamentApies'
import { changeMediaForTournament } from '@/store/Slices/TournamentReducer/TournamentSlice'
import axiosInstance from '@/store/Api'

const NotificationItem = ({ elm }) => {
  const { notifications } = useSelector(({ app }) => app)

  const notificationText = elm.text
  const updateDateArray = new Date(elm.createdAt).toLocaleTimeString().split(':')
  const updated = updateDateArray[0] + ':' + updateDateArray[1]
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const buttonOptions = {
    team_inite: {
      secondaryClick: false,
      label: 'Присоединиться',
      onPress: () => {
        dispatch(
          joinPlayerTeam({
            team_id: elm.team._id,
          }),
        )
      },
    },
    qr: {
      secondaryClick: true,
      label: 'Показать QR',
      onPress: () => {
        dispatch(
          setModalOptions({
            visible: true,
            type: 'QrModal',
            body: elm.link,
          }),
        )
      },
    },
    finish_game: {
      label: 'Итоги игры',
      onPress: () => {
        dispatch(
          setModalOptions({
            visible: true,
            type: 'BestPlayer',
            body: {
              best_players: elm?.best_players,
            },
          }),
        )
      },
    },
    end_game: {
      label: 'Завершить',
      onPress: () => {
        dispatch(callEndGame(elm?.create_game))
      },
    },
    mark_file: {
      label: 'Открыть',
      secondaryClick: true,
      onPress: () => {
        dispatch(
          setModalOptions({
            visible: true,
            type: 'PhotoAfterFinishGameModal',
            body: elm?.file,
          }),
        )
      },
    },
    edit_game: {
      label: 'Изменить',
      onPress: () => {
        dispatch(
          getGameById(elm?.create_game, (game, editData) => {
            if (game) {
              navigation?.replace('CreateGameNavigator', {
                screen: 'GameCreating',
                params: {
                  game: game,
                  editData: editData,
                },
              })
            }
          }),
        )
      },
    },
    impression: {
      label: 'фото/видео',
      onPress: () => {
        navigation.navigate('CreateGameNavigator', {
          screen: 'AddPhoto',
          params: {
            gameId: elm?.create_game,
            users: elm?.users,
            organizer: elm?.organizer,
          },
        })
      },
    },
    confirm_tourney: {
      label: 'Принять',
      secondButton: true,
      onPress: async () => {
        dispatch(confirmJoin(elm?.tourney))
          .unwrap()
          .then((res) => {
          }).catch((err) => {
          })
      },
      onSecondButtonPress: () => {
        dispatch(rejectJoin(elm?.tourney))
          .unwrap()
          .then((res) => {
            if (res.status === 201) {
              dispatch(notificationButtonClciked(elm?._id))
            }
          }).catch((err) => {
          })
      }
    },
    end_tourney_game: {
      label: 'Завершить',
      onPress: async () => {
        dispatch(changeMediaForTournament(true))
        dispatch(getPlayers(elm.tourney))
          .unwrap()
          .then((res) => {
            navigation.navigate('TournamentNavigator', {
              screen: 'AddTournamentPhoto',
            })
          })

      },
    },
    mark_tourney_file: {
      label: 'Открыть',
      // secondaryClick: true,
      onPress: () => {
        dispatch(
          setModalOptions({
            visible: true,
            type: 'PhotoAfterFinishGameModal',
            body: { ...elm?.tourneyFile, fromTourney: true },
          }),
        )
      },
    },
    finish_tourney: {
      label: 'Итоги турнира',
      secondaryClick: true,
      onPress: () => {
        dispatch(
          setModalOptions({
            visible: true,
            type: 'BestPlayer',
            body: {
              best_players: { ...elm?.best_players, fromTourney: true },
            },
          }),
        )
      },
    },
    tourney_join_user: {
      label: 'Посмотреть',
      secondaryClick: true,
      onPress: () => {
        dispatch(
          setModalOptions({
            visible: true,
            type: 'UserInfo',
            body: elm.userInfo
          }),
        )
      },
    },
    confirm_enemy_team_create_game: {
      label: 'Принять',
      secondButton: true,
      secondaryClick: false,
      onPress: () => {
        const team = {
          ...elm.team,
          notificationData: elm,
        }
        dispatch(saveTeamDataForCreating(team))
        dispatch(setCreateGameInfo(elm?.team_create_game))
        navigation.navigate('TeamNavigator', { screen: 'EditTeamPlayers' })
      },
      onSecondButtonPress: () => {
        dispatch(rejectTeamCreateGame(elm.team_create_game))
        dispatch(notificationButtonClciked(elm?._id))
      }
    },
    follow: {
      label: 'Принять',
      secondButton: true,
      secondaryClick: false,
      onPress: async () => {
        await axiosInstance.post(`api/participate/${elm.create_game}`)
      },
      onSecondButtonPress: () => {
        dispatch(notificationButtonClciked(elm?._id))
      }

    }
  }

  useEffect(() => {
    return () => {
      dispatch(setModalVisible(false))
    }
  }, [])
  if (!notificationText) return null
  return (
    <View style={styles.mainContainer}>
      <View style={styles.line} />
      <Row wrapper={styles.row}>
        <Row wrapper={styles.midBox}>

          <View style={{ width: elm.readed ? 0 : '10%', overflow: 'hidden' }}>
            <DotSvg width={20} height={20} />
          </View>
          <View style={{ width: elm.readed ? '100%' : '90%' }}>
            <Text style={styles.notificationText}>{notificationText}</Text>
            {buttonOptions?.[elm?.type] &&
              <Row wrapper={styles.buttonComponent}>
                <LightButton
                  onPress={() => {
                    if (!buttonOptions[elm?.type].secondaryClick && !elm?.click && elm.type !== 'confirm_enemy_team_create_game') {
                      dispatch(notificationButtonClciked(elm?._id))
                    }
                    if (!elm?.click || buttonOptions[elm?.type].secondaryClick) {
                      buttonOptions[elm?.type].onPress()
                    }

                  }}
                  label={buttonOptions[elm?.type]?.label}
                  labelStyle={{ ...font('bold', 17, '#001034') }}
                  style={{
                    opacity: !buttonOptions[elm?.type]?.secondaryClick && elm?.click ? 0.5 : 1,
                  }}
                  size={{ width: RH(172) }}
                />

                {(buttonOptions[elm?.type].secondButton) &&
                  <LightButton
                    onPress={buttonOptions[elm?.type].onSecondButtonPress}
                    label={'Отклонить'}
                    labelStyle={{ ...font('bold', 17, '#001034') }}
                    style={{
                      opacity: !buttonOptions[elm?.type]?.secondaryClick && elm?.click ? 0.5 : 1, marginLeft: 15
                    }}
                    size={{ width: RH(172) }}
                  />}

              </Row>}
          </View>
        </Row>

        <View style={styles.endBox}>
          <Pressable
            onPress={() => {
              const filteredData = notifications.filter((item) => item?._id != elm?._id)
              dispatch(setNotifications(filteredData))
              dispatch(deleteNotification(elm?._id))
            }}
          >
            <CloseSvg width={13} height={13} />
          </Pressable>

          <Text style={styles.time}>{updated}</Text>
        </View>
      </Row>
    </View>
  )
}

export default NotificationItem

const styles = StyleSheet.create({
  mainContainer: {
  },
  line: {
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
    height: RH(1),
    backgroundColor: '#1A2848',
    marginVertical: RH(12),
  },
  row: {
    justifyContent: 'space-between',
    width: '100%',
  },
  midBox: {
    width: '90%',
    paddingRight: 10
    // overflow: 'hidden'  
  },
  endBox: {
    width: '10%',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  notificationText: {
    marginBottom: RH(10),
    width: '100%',
    ...font('medium', 14, WHITE),
  },
  time: {
    paddingTop: RH(9),
    ...font('medium', 12, LIGHT_GRAY),
  },
  buttonComponent: {
    width: '100%',
  }
})
