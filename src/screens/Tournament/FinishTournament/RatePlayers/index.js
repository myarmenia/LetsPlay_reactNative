import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ScreenMask from '@/components/wrappers/screen'
import { RH, RW, font } from '@/theme/utils'
import { WHITE } from '@/theme/colors'
import LightButton from '@/components/buttons/Button'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import User from '@/components/User/user'
import { setModalOptions } from '@/store/Slices/AppSlice'
import Row from '@/components/wrappers/row'
import StarSvg from '@/assets/svgs/StarSvg'
import { finishTournament, addTournamentRating } from '@/store/Slices/TournamentReducer/TournamentApies'
import RatePlayerModal from './RateModal'
import { addPlayerRating } from '@/store/Slices/TournamentReducer/TournamentSlice'

const RateTourneyPlayers = ({ route }) => {
  const navigation = useNavigation()
  const { user } = useSelector(({ auth }) => auth)

  const [modalVisible, setModalVisible] = useState(false)
  const dispatch = useDispatch()
  const { playersForRating } = useSelector(({ tournament }) => tournament)
  const addRating = (item, elm) => {
    dispatch(addPlayerRating({
      id: item._id,
      rate: elm
    }))
  }


  // useEffect(()=>{


  // }, [route?.params?.sendInvitation])


  useEffect(() => {
    if (user._id !== playersForRating?.user?._id) {
      dispatch(setModalOptions({
        visible: true,
        type: 'RateOrganizerModal',
        body: { organizer: playersForRating?.user, fromTourney: true },
      }))
    }
  }, [])



  return (
    <ScreenMask>
      <View style={styles.main}>
        <Text style={styles.title}>Оцените {playersForRating.team_tourney ? 'игрока команды' : 'участника'} </Text>

        <FlatList
          data={!playersForRating.team_tourney ? playersForRating.players : []}
          style={styles.flatList}
          contentContainerStyle={styles.flatListContent}
          numColumns={3}
          showsVerticalScrollIndicator={false}
          renderItem={({ index, item }) => {
            return (
              <View style={{ margin: RW(8), }}>
                <User
                  size={90}
                  user={item}
                  onPressItem={{
                    onClickFunc: () => {
                      setModalVisible(true)
                    },
                  }}
                />
                <Row wrapper={{ marginTop: RH(10) }}>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((elm, key) => {
                    return <Pressable
                      key={key}
                      onPress={() => {
                        addRating(item, elm)
                      }}>
                      <StarSvg
                        fill={!item?.rating ? elm <= 1 : elm <= item?.rating}
                        width={10}
                        height={9.5} />
                    </Pressable>

                  })}
                </Row>
                <RatePlayerModal
                  item={item}
                  visible={modalVisible}
                  setVisible={(e) => { setModalVisible(e) }}
                  setRating={(elm, item) => {
                    addRating(item, elm)
                  }}
                />
              </View>
            )
          }}
        />
      </View>

      <LightButton
        onPress={() => {
          const obj =
          {
            "tourneyId": playersForRating._id,
            "rating": {}
          }

          const arr = [...playersForRating.players]

          arr.forEach((item) => {
            obj.rating = {
              ...obj.rating,
              [item._id]: !item?.rating ? 0.01 : item.rating / 100
            }
          })
          dispatch(addTournamentRating(obj)).unwrap()
          dispatch(finishTournament(playersForRating._id)).unwrap().then((res) => {

            if (res.statusCode === 200) {
              navigation.navigate('TabNavigator', {
                screen: 'Home',
              })
            }
          }).catch((error) => {
            console.log(error, 'err');
          })
        }}
        style={{ alignSelf: 'center', marginBottom: RH(30) }}
        size={{ width: RW(280), height: RH(48) }}
        label={'Завершить турнир'}
      />

    </ScreenMask>
  )
}

export default RateTourneyPlayers

const styles = StyleSheet.create({
  main: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    ...font('bold', 20, WHITE, 30),
    textAlign: 'center',
    marginTop: RH(10),
    marginBottom: RH(20),
  },
  flatListContent: {
    alignItems: 'center',
    paddingBottom: RH(10),
  },
})
