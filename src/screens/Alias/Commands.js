import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ScreenMask from '@/components/wrappers/screen'
import { font, RH, RW } from '@/theme/utils'
import { BACKGROUND, ICON, WHITE } from '@/theme/colors'
import CircleAdd from '@/components/buttons/circleAdd'
import DeleteIconSVG from '@/assets/svgs/DeleteIconSVG'
import LightButton from '@/assets/imgs/Button'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { saveTeamDataForCreating } from '@/store/Slices/TeamSlice'
import { setCommands } from '@/store/Slices/AliasSlice'

const Commands = () => {
  const [commandsCount, setCommandsCount] = useState([
    { command: 1, value: '' },
    { command: 2, value: '' },
  ])
  const navigation = useNavigation()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(saveTeamDataForCreating({}))
  }, [])
  let i = 0
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
                      onChangeText={e =>
                        setCommandsCount([
                          ...commandsCount.map((elm, ind) => {
                            return i == ind ? { command: elm.command, value: e } : { ...elm }
                          }),
                        ])
                      }
                      placeholderTextColor={ICON}
                      keyboardType="number-pad"
                    />
                  </View>
                  {commandsCount.length !== 2 ? (
                    <Pressable
                      onPress={() =>
                        commandsCount.length !== 1
                          ? commandsCount.length == 3
                            ? setCommandsCount([
                                { command: 1, value: '' },
                                { command: 2, value: '' },
                              ])
                            : setCommandsCount([...commandsCount.filter(elem => elm !== elem)])
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
                  { command: commandsCount[commandsCount.length - 1].command + 1, value: '' },
                ])
              }
            >
              <CircleAdd />
              <Text style={styles.addCommandText}>Добавить еще</Text>
            </Pressable>
          ) : null}
          <View style={{ paddingTop: RH(30) }}>
            <LightButton
              label={'Продолжить'}
              size={{ width: 310, height: 45 }}
              onPress={() => {
                console.log(commandsCount)
                dispatch(setCommands(commandsCount)), navigation.navigate('QrCode', commandsCount)
              }}
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
})
