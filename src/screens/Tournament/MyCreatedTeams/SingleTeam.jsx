import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { RH, RW, font } from '@/theme/utils'
import { _storageUrl } from '@/constants'
import { useNavigation } from '@react-navigation/native'
import FastImage from 'react-native-fast-image'
import { WHITE } from '@/theme/colors'
import { useDispatch } from 'react-redux'
import { addSelectedTeam } from '@/store/Slices/TournamentReducer/TournamentSlice'
import { addToTeam } from '@/store/Slices/TournamentReducer/TournamentApies'
import { setModalOptions } from '@/store/Slices/AppSlice'

const SingleTeam = ({ command, data }) => {
    const onTeamPress = () => {
        if (data?.navigateFrom == 'addToTeamFromTournament') {
            const index = command?.invited_players.findIndex(item => item._id === data.id)
            if (index !== -1) {
                dispatch(
                    setModalOptions({
                        visible: true,
                        type: 'error',
                        body: 'пользователь уже находится в команде',
                    }))
            } else {
                const obj = {
                    team_id: command._id,
                    user_id: data.id
                }
                dispatch(addToTeam(obj))
                    .unwrap()
                    .then((res) => {
                        if (res?.statusCode === 200) {
                            navigation.navigate('TournamentNavigator', {
                                screen: 'RateTourneyPlayers',
                                params: { sendInvitation: true }
                            })
                        }
                    })
            }
        }
        else if (data?.fromTournament || data?.fromJoinTournament) {
            navigation.navigate('SelectMembers', data)
            dispatch(addSelectedTeam(command))
        }
    }

    const dispatch = useDispatch()
    const navigation = useNavigation()
    return (
        <TouchableOpacity
            style={styles.homeBlock}
            onPress={onTeamPress}>
            <LinearGradient
                colors={['#4A806C', '#3257AB']}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 0 }}
                useAngle={true}
                angle={105}
                angleCenter={{ x: 0.7, y: 0.5 }}
                style={styles.linear}
            >
                <FastImage
                    style={styles.image}
                    source={{ uri: _storageUrl + command?.img }}
                    resizeMode="cover"
                />
                <View style={styles.textBlock}>
                    <Text style={styles.text}>{command.name}</Text>
                    <Text style={styles.text}>{command.address_name}</Text>
                    <Text style={styles.text}>{command.id}</Text>
                </View>
            </LinearGradient>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    homeBlock: {
        width: RW(395),
        height: RH(111),
        marginVertical: RW(6),
        alignItems: 'flex-start',
        justifyContent: 'center',

    },
    linear: {
        width: '100%',
        height: '100%',
        borderRadius: RW(10),
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        height: RW(80),
        aspectRatio: 1,
        borderRadius: RW(40),
        marginLeft: RW(20)
    },
    text: {
        marginVertical: RH(3),
        ...font('bold', 14, WHITE),
        flexGrow: 1,
        flexWrap: 'nowrap',
        width: '74%',
    },
    textBlock: {
        width: RW(295),
        marginLeft: RW(17),
        paddingVertical: RH(15),
    },
})

export default SingleTeam


