import React from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native'
import ActionSheet, { registerSheet, SheetManager } from 'react-native-actions-sheet'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import { font, RH, RW } from '@/theme/utils'
import { PERMISSIONS, request, RESULTS } from 'react-native-permissions'
import { IS_IOS } from '@/constants'
import { useDispatch, useSelector } from 'react-redux'
import { setGameFinishPhoto } from '@/store/Slices/GamesSlice'
import { setFinishPhoto } from '@/store/Slices/TournamentReducer/TournamentSlice'


const SelectMediaSheet = (props) => {
  const { mediaForTournament } = useSelector(({ tournament }) => tournament)



  const dispatch = useDispatch()
  const _onChoose = () =>
    SheetManager.hide(props.sheetId).then(() => {
      request(
        IS_IOS ? PERMISSIONS.IOS.PHOTO_LIBRARY : PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
      ).then(
        async (result) => {
          try {
            if ([RESULTS.GRANTED, RESULTS.LIMITED].includes(result)) {
              await launchImageLibrary({
                mediaType: 'mixed',
                durationLimit: 10,
                chooseFromLibraryButtonTitle: 'aaa',
                cancelButtonTitle: 'aaa',
              }).then((e) => {
                if (e?.assets?.[0]?.uri) {
                  if (mediaForTournament) {
                    dispatch(setFinishPhoto(e?.assets?.[0]))

                  } else {
                    dispatch(setGameFinishPhoto(e?.assets?.[0]))

                  }
                }
              })
            } else if ([RESULTS.BLOCKED, RESULTS.DENIED].includes(result)) {
            } else {
            }
          } catch (error) {
          }
        },
        (error) => {
          testingMode(error)
          onCatch(cb)
        },
      )
    })

  const _onTake = (mediaType) =>
    SheetManager.hide(props.sheetId).then(() => {
      request(Platform.OS == 'ios' ? PERMISSIONS.IOS.CAMERA : PERMISSIONS.ANDROID.CAMERA).then(
        async (result) => {
          try {
            // if ([RESULTS.GRANTED, RESULTS.LIMITED].includes(result)) {
            await launchCamera({
              mediaType: mediaType,
              presentationStyle: 'fullScreen',
            }).then((e) => {
              if (e?.assets?.[0]?.uri) {
                if (mediaForTournament) {
                  dispatch(setFinishPhoto(e?.assets?.[0]))
                } else {
                  dispatch(setGameFinishPhoto(e?.assets?.[0]))
                }
              }
            })
            // } else if ([RESULTS.BLOCKED, RESULTS.DENIED].includes(result)) {
            //   // alert(JSON.stringify(result))
            // } else {
            // }
          } catch (error) {
          }
        },
        (error) => {
          testingMode(error)
          onCatch(cb)
        },
      )
    })

  return (
    <ActionSheet id={props.sheetId}>
      <View style={styles.wrapper}>
        <Text style={styles.title} onPress={_onChoose}>
          Загрузить из библиотеки
        </Text>
        <Text style={styles.title} onPress={() => _onTake('photo')}>
          Сделать снимок
        </Text>
        <Text style={styles.title} onPress={() => _onTake('video')}>
          Сделать видео
        </Text>
      </View>
    </ActionSheet>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    padding: RW(20),
    paddingBottom: 0,
  },
  title: {
    marginBottom: RH(23),
    ...font('regular', 16, '#000', 22),
  },
})

registerSheet('selectMedia', SelectMediaSheet)

export default SelectMediaSheet
