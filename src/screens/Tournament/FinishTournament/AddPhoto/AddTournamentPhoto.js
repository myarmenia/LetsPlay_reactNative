import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import ScreenMask from '@/components/wrappers/screen'
import { RH, RW, font } from '@/theme/utils'
import { WHITE } from '@/theme/colors'
import PickImage from './components/PickImage'
import LightButton from '@/components/buttons/Button'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { setFinishPhoto } from '@/store/Slices/TournamentReducer/TournamentSlice'

const AddTournamentPhoto = () => {
  const { token } = useSelector(({ auth }) => auth)
  const { tournamentFinishPhoto, playersForRating } = useSelector(({ tournament }) => tournament)

  const navigation = useNavigation()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setFinishPhoto(null))
  }, [])

  const hundleSubmit = () => {
    if (!tournamentFinishPhoto) {
      navigation.navigate('RateTourneyPlayers')
    } else {
      let formdata = new FormData()
      formdata.append('file', {
        name: 'file',
        type: tournamentFinishPhoto?.type,
        uri: tournamentFinishPhoto?.uri,
      })
      formdata.append('tourneyId', playersForRating._id)

      let myHeaders = new Headers()
      myHeaders.append('Content-Type', 'multipart/form-data')
      myHeaders.append('Authorization', `Bearer ${token}`)
      myHeaders.append('Accept', 'application/json')
      let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow',
      }

      fetch(
        Platform.OS == 'ios'
          ? 'https://to-play.ru/api/tourney/impression-images'
          : 'http://to-play.ru/api/tourney/impression-images',
        requestOptions,
      )
        .then((result) => {
          if (result.ok) {
            navigation.navigate('RateTourneyPlayers')
            dispatch(setFinishPhoto(null))
          }
        })
        .catch((error) => console.log('error', error))
    }
  }
  return (
    <ScreenMask>
      <Text style={styles.title}>
        Поделитесь впечатлениями от турнира.{'\n'}
        Разместите фото/видео с игры
      </Text>
      <View style={styles.imagePickContainer}>
        <PickImage gameFinishPhoto={tournamentFinishPhoto} />
      </View>
      <LightButton
        onPress={hundleSubmit}
        style={{ alignSelf: 'center', marginBottom: RH(30) }}
        size={{ width: RW(280), height: RH(48) }}
        label={tournamentFinishPhoto ? 'Далее>>' : 'Пропустить'}
      />
    </ScreenMask>
  )
}

export default AddTournamentPhoto

const styles = StyleSheet.create({
  title: {
    ...font('bold', 20, WHITE, 30),
    textAlign: 'center',
    marginTop: RH(10),
  },
  imagePickContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
