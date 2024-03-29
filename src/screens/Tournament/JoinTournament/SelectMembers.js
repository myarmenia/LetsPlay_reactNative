import { StyleSheet, Text, View, Pressable, ScrollView } from 'react-native'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import ScreenMask from '@/components/wrappers/screen'
import { RH, RW, font } from '@/theme/utils'
import { WHITE } from '@/theme/colors'
import { _storageUrl } from '@/constants'
import LightButton from '@/components/buttons/Button'
import User from '@/components/User/User'
import BorderGradient from '@/assets/svgs/BorderGradiend'
import { useNavigation } from '@react-navigation/native'
import FastImage from 'react-native-fast-image'
import { setJoinedTeamInfo } from '@/store/Slices/TournamentReducer/TournamentSlice'
import { useDispatch, useSelector } from 'react-redux'
import { setModalOptions } from '@/store/Slices/AppSlice'


const SelectMembers = ({ route }) => {
  const { params } = route
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const players = useRef([])
  const { selectedTeam, singleTournir, choosenTournir } = useSelector(({ tournament }) => tournament)
  const [choosenUsers, setChoosenUsers] = useState([])
  const game = route?.params?.fromJoinTournament ? choosenTournir?.game?.name : singleTournir?.tournamentGameType
  const needScheme = useMemo(() => {
    const schemaGames = ["Футбол", "Хоккей", "Баскетбол", "Волейбол", "Пионербол"]
    if (schemaGames.includes(game)) {
      return true
    }
    return false
  }, [choosenTournir?.game?.name, singleTournir?.tournamentGameType])





  const handleClick = (user) => {
    if (!choosenUsers.includes(user._id)) {
      setChoosenUsers([...choosenUsers, user._id])
      players.current.push(user)
    } else {
      setChoosenUsers(choosenUsers.filter((elm) => elm !== user._id))
      let filteredPlayers = players?.current?.filter(item => item._id !== user._id)
      players.current = filteredPlayers
    }
  }


  const handleSubmit = () => {
    const allPlayers = selectedTeam.invited_players.reduce((acc, item) => {
      acc.push(item._id)
      return acc
    }, [])
    const joinTeamInfo = {
      tourney_id: route?.params?.fromJoinTournament ? choosenTournir._id : singleTournir._id,
      team_id: selectedTeam._id,
      players: choosenUsers.length ? choosenUsers : allPlayers
    }
    dispatch(setJoinedTeamInfo(joinTeamInfo))
  }

  useEffect(() => {
    dispatch(
      setModalOptions({
        visible: true,
        type: 'message',
        body: `Необходимо утвердить ${"\n"}  состав игроков команды ${"\n"} на турнир!`,
      }),
    )
  }, [])


  const onSchemeButtonPress = () => {
    handleSubmit()
    navigation.navigate('TeamSchema',
      {
        players: players.current.length ? players.current : selectedTeam?.invited_players,
        teamImg: selectedTeam?.img,
        teamName: selectedTeam?.name,
        navigateTo: params.fromJoinTournament ? 'JoinTournament' : 'CreateTournament',
        gameType: game,
      })
  }

  const onConfirmButtonPress = () => {
    handleSubmit()
    navigation.navigate(params.fromJoinTournament ? 'JoinTournament' : 'CreateTournament')
  }





  const EachUser = ({ user }) => {
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          padding: RW(5),
        }}
      >
        <BorderGradient height={142} width={105} opacity={choosenUsers.includes(user._id) ? 1 : 0} />
        <Pressable
          style={{ position: 'absolute', zIndex: 65 }}
          onPress={() => handleClick(user)}
        >
          <User
            size={100}
            user={user}
            onPressItem={{
              item: <User size={390} />,
              modalClose: false,
              onClickFunc: () => handleClick(user),
            }}
          />
        </Pressable>
      </View>
    )
  }

  return (
    <ScreenMask>
      <View style={{ flex: 1, justifyContent: 'space-between' }}>
        <View style={styles.header}>
          <View style={styles.headerChild}>
            <FastImage
              source={{ uri: _storageUrl + selectedTeam?.img }}
              style={styles.commandImg}
              resizeMode="cover"
            />
            <Text style={styles.teamName}>{selectedTeam?.name}</Text>
          </View>
        </View>
        <ScrollView>
          <View style={styles.usersContainer}>
            {selectedTeam?.invited_players?.map((user, i) => {
              return <EachUser key={i} user={user} />
            })}
          </View>
        </ScrollView>
        <View style={{ alignSelf: 'center', paddingBottom: RH(50) }}>
          <LightButton
            label={needScheme ? 'Схема игры' : 'Подтвердить'}
            size={{ width: 280, height: 43 }}
            onPress={needScheme ? onSchemeButtonPress : onConfirmButtonPress} />
        </View>
      </View>
    </ScreenMask>
  )
}

export default SelectMembers

const styles = StyleSheet.create({
  commandImg: {
    width: RW(40),
    aspectRatio: 1,
    borderRadius: RW(20),
    right: '20%',
    borderWidth: 1,
    borderColor: WHITE,
  },
  headerChild: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    paddingTop: '5%',
  },
  teamName: {
    ...font('medium', 20, WHITE),
  },
  usersContainer: {
    width: '96%',
    paddingTop: '11%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
})
