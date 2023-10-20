import { StyleSheet, Text, View, Pressable, ScrollView } from 'react-native'
import React, { useState } from 'react'
import ScreenMask from '@/components/wrappers/screen'
import { RH, RW, font } from '@/theme/utils'
import { WHITE } from '@/theme/colors'
import { _storageUrl } from '@/constants'
import LightButton from '@/components/buttons/Button'
import User from '@/components/User/user'
import BorderGradient from '@/assets/svgs/BorderGradiend'
import { useNavigation } from '@react-navigation/native'
import FastImage from 'react-native-fast-image'
import { setJoinedTeamInfo } from '@/store/Slices/TournamentReducer/TournamentSlice'
import { useDispatch, useSelector } from 'react-redux'


const SelectMembers = ({ route }) => {
  const { params } = route
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const { selectedTeam, choosenTournir } = useSelector(({ tournament }) => tournament)


  const [choosenUsers, setChoosenUsers] = useState([])


  const handleClick = (user) => {
    if (!choosenUsers.includes(user._id)) {
      setChoosenUsers([...choosenUsers, user._id])
    } else {
      setChoosenUsers(choosenUsers.filter((elm) => elm !== user._id))
    }
  }


  const handleSubmit = () => {
    const allPlayers = selectedTeam.invited_players.reduce((acc, item) => {
      acc.push(item._id)
      return acc
    }, [])

    const joinTeamInfo = {
      tourney_id: choosenTournir._id,
      team_id: selectedTeam._id,
      players: choosenUsers.length ? choosenUsers : allPlayers
    }
    dispatch(setJoinedTeamInfo(joinTeamInfo))
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
            label={'Подтвердить'}
            size={{ width: 280, height: 43 }}
            onPress={handleSubmit}
          />
        </View>
      </View>
    </ScreenMask>
  )
}

export default SelectMembers

const styles = StyleSheet.create({
  commandImg: {
    width: RW(40),
    height: RH(40),
    borderRadius: RW(20),
    right: '20%',
    borderWidth: 2,
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
