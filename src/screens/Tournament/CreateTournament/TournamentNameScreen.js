import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ScreenMask from '@/components/wrappers/screen'
import { BACKGROUND, ICON, RED } from '@/theme/colors'
import { RH, RW, font } from '@/theme/utils'
import RadioBlock from '@/components/RadioBlock'
import LightButton from '@/components/buttons/Button'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { editTournametInfo, setTourneyInfo } from '@/store/Slices/TournamentReducer/TournamentSlice'

const TournamentName = () => {
  const { needToEdit, singleTournir } = useSelector(({ tournament }) => tournament)
  const [formatList, setFormatList] = useState([
    {
      id: 1,
      text: 'Индивидуальный',
      checked: true,
    },
    {
      id: 2,
      text: 'Командный',
      checked: false,
    },
  ])


  useEffect(() => {
    if (needToEdit) {
      setTourName(singleTournir?.name)
      setDescription(singleTournir?.description)
      if (singleTournir?.team_tourney) {
        setFormatList([
          {
            id: 1,
            text: 'Индивидуальный',
            checked: false,
          },
          {
            id: 2,
            text: 'Командный',
            checked: true,
          },
        ])
      } else {
        setFormatList([
          {
            id: 1,
            text: 'Индивидуальный',
            checked: true,
          },
          {
            id: 2,
            text: 'Командный',
            checked: false,
          },
        ])
      }
    }

  }, [needToEdit])



  const [tourName, setTourName] = useState(null)
  const [description, setDescription] = useState(null)

  const dispatch = useDispatch()
  const navigation = useNavigation()
  const [error, setError] = useState(false)

  const handleClick = () => {

    if (tourName) {
      setError(false)
      if (needToEdit) {
        const lastFormat = singleTournir.team_tourney ? 'team' : 'individual'
        const currentFormat = formatList[0].checked ? 'individual' : 'team'
        if (lastFormat !== currentFormat) {
          dispatch(editTournametInfo(false))
        }
      }
      dispatch(
        setTourneyInfo({
          name: tourName,
          description: description,
          team_tourney: formatList[0].checked ? false : true,
        }),
      )
      navigation.navigate('TournamentInfo')
    } else {
      setError(true)
    }
  }

  return (
    <ScreenMask>
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        <View style={styles.inputsContainer}>
          <TextInput
            style={styles.input}
            placeholderTextColor={ICON}
            value={tourName}
            onChangeText={setTourName}
            placeholder={'Название турнира'}
          />
          <TextInput
            style={styles.inputMulti}
            placeholderTextColor={ICON}
            multiline={true}
            numberOfLines={12}
            value={description}
            onChangeText={setDescription}
            placeholder={'Описание турнира (можно использовать ссылку на интернет страничку):'}
          />
        </View>
        {error && <Text style={styles.error}>Заполните поле</Text>}
        <View style={styles.radioBlockBox}>
          <RadioBlock
            title="Формат турнира"
            list={formatList}
            onChange={setFormatList}
            titleStyle={{ left: '4%' }}
          />
        </View>
      </ScrollView>
      <View style={styles.btn}>
        <LightButton label={'Далее'} onPress={handleClick} />
      </View>
    </ScreenMask>
  )
}

export default TournamentName

const styles = StyleSheet.create({
  input: {
    backgroundColor: BACKGROUND,
    borderRadius: RW(10),
    width: RW(363),
    height: RH(48),
    color: ICON,
    paddingLeft: RW(24),
    fontSize: RH(16)
  },
  inputMulti: {
    backgroundColor: BACKGROUND,
    borderRadius: RW(10),
    width: RW(363),
    fontSize: RH(16),
    color: ICON,
    paddingHorizontal: RW(24),
    marginTop: RH(15),
    textAlignVertical: 'top'
  },
  inputsContainer: {
    height: RH(350),
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',

    marginTop: RH(70)
  },
  radioBlockBox: { marginTop: RH(30) },
  btn: {
    position: 'absolute',
    bottom: RH(20),
    right: 0,
  },
  error: {
    ...font('regular', 16, RED),
    left: '8%',
  },
})
