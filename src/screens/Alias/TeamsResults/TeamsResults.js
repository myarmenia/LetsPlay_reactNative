import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import ScreenMask from '@/components/wrappers/screen'
import { useDispatch, useSelector } from 'react-redux'
import { RH, RW, font } from '@/theme/utils'
import { ICON, WHITE } from '@/theme/colors'
import LightButton from '@/assets/imgs/Button'
import { useIsFocused, useNavigation } from '@react-navigation/native'
import { setEndRound, setExplainYou, setWords, setExplainerTeam } from '@/store/Slices/AliasSlice'

const TeamsResults = () => {
  const dispatch = useDispatch()
  const isFocused = useIsFocused()
  const navigation = useNavigation()
  const { allTeams, countWords, userIsOrganizer } = useSelector(({ alias }) => alias)

  return (
    <ScreenMask>
      <View style={styles.container}>
        <View style={styles.mainContainer}>
          {allTeams?.map((elm, i) => {
            return (
              <View key={Math.random().toString()}>
                <View style={styles.commandOne}>
                  <Text style={styles.commandName}>{elm.value}</Text>

                  <Text style={styles.points}>{`Очки: ${allTeams[i]?.points}`}</Text>
                </View>
                {i !== allTeams.length - 1 ? <View style={styles.line}></View> : null}
              </View>
            )
          })}
        </View>
      </View>
      <View style={styles.btnBox}>
        <LightButton
          label={'Продолжить'}
          size={{ width: 288, height: 48 }}
          onPress={async () => {
            dispatch(setExplainYou(false)), dispatch(setWords([])), dispatch(setExplainerTeam(null))
            if (
              countWords !== null &&
              countWords <= Math.max(...allTeams.map((item) => item.points))
            ) {
              navigation.navigate('WinnerTeamMessage')
            } else {
              dispatch(setExplainYou(false)),
                dispatch(setWords([])),
                dispatch(setExplainerTeam(null))
              userIsOrganizer ? dispatch(setEndRound(true)) : null,
                navigation.navigate('GameStart', { fromRes: true })
            }

            // setExplainYou,
            // setWords,
            // setExplainingUser,
            // setExplainerTeam,
            // setEndRound,
          }}
        />
      </View>
    </ScreenMask>
  )
}

export default TeamsResults

const styles = StyleSheet.create({
  mainContainer: {
    flex: 0.6,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  line: {
    width: RW(277),
    height: RH(1.5),
    top: '30%',
    backgroundColor: ICON,
  },
  commandName: {
    ...font('bold', 48, ICON),
    textAlign: 'center',
  },
  points: {
    ...font('bold', 48, WHITE),
    textAlign: 'center',
    paddingTop: RH(10),
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnBox: {
    alignSelf: 'center',
    paddingBottom: RH(30),
  },
})
