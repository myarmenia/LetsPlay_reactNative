import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { font, RH, RW } from '@/theme/utils'
import { sendAliasSettings, setCommandsInGame } from '@/store/Slices/AliasSlice'
import { useNavigation } from '@react-navigation/native'
import { BACKGROUND, ICON, RED, WHITE } from '@/theme/colors'
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import DeleteIconSVG from '@/assets/svgs/DeleteIconSVG'
import CircleAdd from '@/components/buttons/circleAdd'
import ScreenMask from '@/components/wrappers/screen'
import LightButton from '@/assets/imgs/Button'

const Commands = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const { countOfWords, stoping, complexity, time, commandsInGame } = useSelector(
    ({ alias }) => alias,
  )
  const [error, setError] = useState(false)
  const [commandsCount, setCommandsCount] = useState([
    { command: 1, value: '', members: [], points: 0 },
    { command: 2, value: '', members: [], points: 0 },
  ])

  const handleSubmit = async () => {
    for (let elem of commandsCount) {
      if (!elem.value) {
        setError(true)
      } else {
        setError(false)
      }
    }
    if (!error) {
      setError(false)
      console.log('commandsCount', commandsCount)
      dispatch(setCommandsInGame(commandsCount))
      dispatch(
        sendAliasSettings({
          number_of_words: countOfWords,
          round_time: time,
          pass_fine: true,
          type: complexity,
          teams: commandsCount.map((elm) => elm.value),
        }),
      )
      navigation.navigate('QrCode', commandsCount)
    }
  }
  return (
    <ScreenMask>
      <View
        style={{
          justifyContent: 'center',
          flex: 0.8,
        }}
      >
        <View style={styles.mainContainer}>
          <Text style={styles.myCommands}>Мои команды</Text>
          <View>
            {commandsCount.map((elm, i) => {
              return (
                <View style={{ flexDirection: 'row', alignItems: 'center' }} key={i}>
                  <View style={styles.inputBlock}>
                    <TextInput
                      style={styles.priceInputText}
                      placeholder={`Название команды ${elm.command}`}
                      onChangeText={(e) => {
                        setCommandsCount([
                          ...commandsCount.map((elm, ind) => {
                            return i == ind ? { ...elm, value: e } : { ...elm }
                          }),
                        ])
                      }}
                      placeholderTextColor={ICON}
                      // keyboardType="number-pad"
                    />
                  </View>
                  {commandsCount.length !== 2 ? (
                    <Pressable
                      onPress={() =>
                        commandsCount.length !== 1
                          ? commandsCount.length == 3
                            ? setCommandsCount([
                                { command: 1, value: '', members: [], points: 0 },
                                { command: 2, value: '', members: [], points: 0 },
                              ])
                            : setCommandsCount([...commandsCount.filter((elem) => elm !== elem)])
                          : null
                      }
                    >
                      <DeleteIconSVG />
                    </Pressable>
                  ) : null}
                </View>
              )
            })}
          </View>
          {commandsCount.length !== 5 ? (
            <Pressable
              style={styles.addCommandBox}
              onPress={() =>
                setCommandsCount([
                  ...commandsCount,
                  {
                    command: commandsCount[commandsCount.length - 1].command + 1,
                    value: '',
                    members: [],
                    points: 0,
                  },
                ])
              }
            >
              <CircleAdd />
              <Text style={styles.addCommandText}>Добавить еще</Text>
            </Pressable>
          ) : null}
          {error && <Text style={styles.errorText}>Заполните все поля</Text>}
          <View style={{ paddingTop: RH(30) }}>
            <LightButton
              label={'Продолжить'}
              size={{ width: 310, height: 45 }}
              onPress={handleSubmit}
            />
          </View>
        </View>
      </View>
    </ScreenMask>
  )
}

export default Commands

const styles = StyleSheet.create({
  myCommands: {
    ...font('regular', 24, WHITE),
    textAlign: 'center',
    paddingVertical: RH(30),
  },
  mainContainer: {
    width: RW(310),
    alignSelf: 'center',
    justifyContent: 'space-evenly',
  },
  inputBlock: {
    backgroundColor: BACKGROUND,
    width: '100%',
    flexDirection: 'column',
    borderRadius: RW(8),
    marginVertical: RH(10),
    alignItems: 'center',
  },
  priceInputText: {
    color: ICON,
    width: '80%',
    height: RH(48),
    marginLeft: RW(15),
    fontSize: RW(16),
  },

  addCommandBox: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '47%',
    paddingVertical: RH(15),
    justifyContent: 'space-between',
  },
  addCommandText: {
    ...font('regular', 12, WHITE),
  },
  errorText: {
    ...font('regular', 17, RED, 24),
  },
})
