import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ActionSheet, { registerSheet, SheetManager } from 'react-native-actions-sheet'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import { font, RH, RW } from '@/theme/utils'
import { PERMISSIONS, request, RESULTS } from 'react-native-permissions'
import { IS_IOS } from '@/constants'

const SelectMediaSheet = (props) => {
  const _onChoose = () =>
    SheetManager.hide(props.sheetId).then(() => {
      request(
        IS_IOS ? PERMISSIONS.IOS.PHOTO_LIBRARY : PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
      ).then(
        async (result) => {
          try {
            if ([RESULTS.GRANTED, RESULTS.LIMITED].includes(result)) {
              await launchImageLibrary({
                mediaType: 'photo',
              }).then((e) => {
                console.log('launchImageLibrary', e?.assets?.[0]?.uri)
              })
            } else if ([RESULTS.BLOCKED, RESULTS.DENIED].includes(result)) {
              console.log('result', result)
              // alert(JSON.stringify(result))
            } else {
              console.log('else result', result)
            }
          } catch (error) {
            console.log('catch', error)
          }
        },
        (error) => {
          testingMode(error)
          onCatch(cb)
        },
      )
      console.log('chose')
    })

  const _onTake = () =>
    SheetManager.hide(props.sheetId).then(() => {
      request(IS_IOS ? PERMISSIONS.IOS.CAMERA : PERMISSIONS.ANDROID.CAMERA).then(
        async (result) => {
          try {
            if ([RESULTS.GRANTED, RESULTS.LIMITED].includes(result)) {
              await launchCamera({
                mediaType: 'photo',
              }).then((e) => {
                console.log('launchCamera', e?.assets?.[0]?.uri)
              })
            } else if ([RESULTS.BLOCKED, RESULTS.DENIED].includes(result)) {
              console.log('result', result)
              // alert(JSON.stringify(result))
            } else {
              console.log('else result', result)
            }
          } catch (error) {
            console.log('catch', error)
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
        <Text style={styles.title} onPress={_onTake}>
          Сделать снимок
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
