import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenMask from '@/components/wrappers/screen'
import { RH, RW, font } from '@/theme/utils'
import { ICON, WHITE } from '@/theme/colors'
import LightButton from '@/assets/imgs/Button'
import { useNavigation } from '@react-navigation/native'

const ResultsOfAnswers = ({route}) => {
  const navigation = useNavigation()
  const props = route.params
  return (
    <ScreenMask>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.commandName}>Команда 1</Text>
        <View style={styles.mainBox}>
          <View style={styles.trueAnswers}>
            <Text style={styles.title}>Отгадано {props?.true}</Text>
            <View style={styles.trueAnswersWrap}>
              {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((elm, i) => {
                return <Text style={styles.word} key={i}>{`${i + 1} Слово`}</Text>
              })}
            </View>
          </View>
          <View style={styles.falseAnswers}>
            <Text style={styles.title}>Пропущено {props.false}</Text>
            <View style={styles.trueAnswersWrap}>
              {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((elm, i) => {
                return <Text style={styles.word} key={i}>{`${i + 1} Слово`}</Text>
              })}
            </View>
          </View>
        </View>
        <View style={styles.btnBox}>
          <LightButton
            label={'Продолжить'}
            size={{ width: 281, height: 48 }}
            onPress={() => navigation.navigate('TeamsResults')}
          />
        </View>
      </ScrollView>
    </ScreenMask>
  )
}

export default ResultsOfAnswers

const styles = StyleSheet.create({
  commandName: {
    ...font('regular', 24, ICON),
    alignSelf: 'center',
    paddingTop: '15%',
  },
  falseAnswers: {
    marginTop: '5%',
    width: '100%',
    marginLeft: '6%',
    alignSelf: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },
  trueAnswers: {
    marginTop: '10%',
    width: '100%',
    marginLeft: '6%',
    alignSelf: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },
  trueAnswersWrap: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    height: RH(280),
    width: '80%',
  },
  title: {
    ...font('medium', 24, WHITE),
    paddingVertical: RH(25),
    textAlign: 'left',
    left: '3%',
  },
  word: {
    ...font('regular', 16, WHITE),
    paddingVertical: RH(5),
    marginLeft: RW(20),
  },
  mainBox: {
    width: '100%',
    // alignItems: 'flex-start',
  },
  btnBox: {
    alignSelf: 'center',
    paddingTop: '18%',
    paddingBottom: '6%',
  },
})
