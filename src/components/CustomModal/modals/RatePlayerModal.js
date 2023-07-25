import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { RH, RW, font } from '@/theme/utils'
import { LIGHT_LABEL, WHITE } from '@/theme/colors'
import StarSvg from '@/assets/svgs/StarSvg'
import User from '@/components/User/user'
import Row from '@/components/wrappers/row'

const RatePlayerModal = ({ body }) => {
  let { item, rating, setRating } = body
  const [userRating, setUserRating] = useState(rating)
  useEffect(() => {
    setUserRating(rating)
  }, [rating])
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

      <User size={250} />
      <Row>
        <Text style={styles.text}>Хотите пригласить игрока в свою команду?</Text>
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
  text: {
    ...font('inter', 16, WHITE, 20),
    textAlign: 'center',
    marginTop: RH(20),
  },
})
