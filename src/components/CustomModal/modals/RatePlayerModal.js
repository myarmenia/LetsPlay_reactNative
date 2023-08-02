import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { RH, RW, font } from '@/theme/utils'
import { LIGHT_LABEL, WHITE } from '@/theme/colors'
import StarSvg from '@/assets/svgs/StarSvg'
import User from '@/components/User/user'
import Row from '@/components/wrappers/row'
import AddSvg from '@/assets/svgs/addSvg'
import CircleMain from '@/components/buttons/Circle/CircleMain'
import CheckSvg from '@/assets/svgs/CheckSvg'

const RatePlayerModal = ({ body }) => {
  let { item, rating, setRating } = body
  const [userRating, setUserRating] = useState(1)
  const [addedToTeam, setAddedToTeam] = useState(true)

  useEffect(() => {
    setUserRating(rating)
  }, [rating, item])
  return (
    <View style={styles.modal}>
      <View style={styles.starsContainer}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((elm, key) => (
          <Pressable
            key={key}
            onPress={() => {
              setUserRating(elm)
              setRating(elm)
            }}
          >
            <StarSvg fill={elm <= userRating} />
          </Pressable>
        ))}
      </View>

      <User size={250} user={item} />
      <Row wrapper={styles.row}>
        <Text style={styles.text}>Хотите пригласить игрока в свою команду?</Text>
        <Pressable>
          <CircleMain
            size={32}
            label={addedToTeam ? <CheckSvg /> : <AddSvg plusColor={'#fff'} strokeWidth={3} />}
          />
        </Pressable>
      </Row>
    </View>
  )
}

export default RatePlayerModal

const styles = StyleSheet.create({
  modal: {
    width: RW(306),
    backgroundColor: LIGHT_LABEL,
    borderRadius: RW(20),
    padding: RW(20),
    marginHorizontal: RW(30.5),
  },
  starsContainer: {
    flexDirection: 'row',
    marginBottom: RH(30),
  },
  row: {
    marginTop: RH(20),

    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
  },
  text: {
    ...font('inter', 16, WHITE),
    width: '80%',
  },
})
