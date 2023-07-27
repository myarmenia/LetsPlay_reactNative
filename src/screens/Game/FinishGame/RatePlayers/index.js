import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import ScreenMask from '@/components/wrappers/screen'
import { RH, RW, font } from '@/theme/utils'
import { WHITE } from '@/theme/colors'
import LightButton from '@/assets/imgs/Button'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import User from '@/components/User/user'
import { setModalOptions } from '@/store/Slices/AppSlice'
import Row from '@/components/wrappers/row'
import StarSvg from '@/assets/svgs/StarSvg'
import { ratePlayersAfterFinishGame } from '@/store/Slices/GamesSlice'

const RatePlayers = ({ route }) => {
  // const gameFinishPhoto = useSelector(({ games }) => games.gameFinishPhoto)
  // const navigation = useNavigation()
  const gameId = route.params.gameId
  const dispatch = useDispatch()
  const [users, setUsers] = useState([
    {
      item: 1,
      rating: 1,
    },
    {
      item: 2,
      rating: 1,
    },
    {
      item: 3,
      rating: 1,
    },
    {
      item: 4,
      rating: 1,
    },
    {
      item: 5,
      rating: 1,
    },
    {
      item: 6,
      rating: 1,
    },
    {
      item: 7,
      rating: 1,
    },
    {
      item: 8,
      rating: 1,
    },
    {
      item: 9,
      rating: 1,
    },
    {
      item: 10,
      rating: 1,
    },
    {
      item: 11,
      rating: 1,
    },
    {
      item: 12,
      rating: 1,
    },
    {
      item: 13,
      rating: 1,
    },
    {
      item: 14,
      rating: 1,
    },
    {
      item: 15,
      rating: 1,
    },
  ])

  return (
    <ScreenMask>
      <View style={styles.main}>
        <Text style={styles.title}>Оцените игрока</Text>

        <FlatList
          data={users}
          style={styles.flatList}
          contentContainerStyle={styles.flatListContent}
          numColumns={3}
          showsVerticalScrollIndicator={false}
          renderItem={({ index, item }) => (
            <View style={{ margin: RW(8) }}>
              <User
                size={90}
                onPressItem={{
                  onClickFunc: () => {
                    dispatch(
                      setModalOptions({
                        visible: true,
                        type: 'RatePlayerModal',
                        body: {
                          item: item.item,
                          rating: item.rating,
                          setRating: (newRating) => {
                            dispatch(
                              ratePlayersAfterFinishGame({
                                user_id: 'string',
                                create_game_id: gameId,
                                rating: newRating / 100,
                              }),
                            )
                            setUsers((prev) => {
                              return prev.map((user, userIndex) => {
                                if (userIndex == index) {
                                  return {
                                    ...user,
                                    rating: newRating,
                                  }
                                }
                                return user
                              })
                            })
                          },
                        },
                      }),
                    )
                  },
                }}
              />
              <Row wrapper={{ marginTop: RH(10) }}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((elm, key) => (
                  <StarSvg key={key} fill={elm <= item.rating} width={10} height={9.5} />
                ))}
              </Row>
            </View>
          )}
        />
      </View>
      <LightButton
        // onPress={() => navigation.navigate('RatePlayers')}
        style={{ alignSelf: 'center', marginBottom: RH(30) }}
        size={{ width: RW(280), height: RH(48) }}
        label={false ? 'Далее' : 'Пропустить'}
      />
    </ScreenMask>
  )
}

export default RatePlayers

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
  // flatList: {},
  flatListContent: {
    alignItems: 'center',
    paddingBottom: RH(10),
  },
})
