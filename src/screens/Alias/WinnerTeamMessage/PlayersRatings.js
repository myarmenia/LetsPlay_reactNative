import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import ScreenMask from '@/components/wrappers/screen'
import InfoSvg from '@/assets/svgs/infoSvg'
import User from '@/components/User/user'
import { useDispatch, useSelector } from 'react-redux'
import LightButton from '@/assets/imgs/Button'
import { RH, RW, font } from '@/theme/utils'
import { ICON, WHITE } from '@/theme/colors'
import { useIsFocused, useNavigation } from '@react-navigation/native'
import { cleanDataAndPlayAgain, setLoader, setStoping, setTeams } from '@/store/Slices/AliasSlice'
import AliasLoader from '../Components/AliasLoader'

const PlayersRatings = () => {
  const { user } = useSelector(({ auth }) => auth)
  const { allTeams, userIsOrganizer } = useSelector(({ alias }) => alias)
  const dispatch = useDispatch()
  const isFocused = useIsFocused()
  const navigation = useNavigation()
  // useEffect(() => {
  //   if (isFocused) {
  //     dispatch(setStoping(true))
  //   }
  // }, [isFocused])
  return (
    <ScreenMask>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headerBox}>
          <Text style={styles.ratingText}>Рейтинги игроков</Text>
        </View>
        <View>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((elm) => {
            return (
              <View
                style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: RH(16) }}
                key={Math.random().toString()}
              >
                <View>
                  <User user={user} size={80} />
                </View>
                <View style={styles.infoBox}>
                  <Text style={styles.infoText}>
                    Объяснил слов {'\n'}
                    {'\n'}5
                  </Text>
                </View>
              </View>
            )
          })}
        </View>
        <View
          style={{
            alignSelf: 'center',
            height: userIsOrganizer ? RH(115) : RH(50),
            justifyContent: 'space-between',
          }}
        >
          <LightButton
            label={'Завершить игру'}
            size={{ width: 370, height: 48 }}
            onPress={() => {
              navigation.navigate('TabNavigator', {
                screen: 'Home',
              })
            }}
          />
          {!!userIsOrganizer && (
            <LightButton
              label={'Играть заново'}
              size={{ width: 370, height: 48 }}
              onPress={() => {
                dispatch(cleanDataAndPlayAgain())
                dispatch(setTeams([...allTeams.map((elm) => ({ ...elm, members: [] }))]))
                navigation.navigate('QrCode')
              }}
            />
          )}
        </View>
      </ScrollView>
    </ScreenMask>
  )
}

export default PlayersRatings

const styles = StyleSheet.create({
  infoText: {
    ...font('bold', 16, WHITE),
  },
  infoBox: {
    paddingHorizontal: RW(10),
  },
  ratingText: {
    ...font('bold', 24, ICON),
    paddingVertical: RH(5),
  },
  headerBox: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
})