import { StyleSheet } from 'react-native'
import { font, RH, RW } from '@/theme/utils'
import { FONT_ROBOTO_THIN } from '@/theme/fonts'
import { WHITE } from '@/theme/colors'

export const styles = StyleSheet.create({
  body: {
    backgroundColor: '#001034',
    borderRadius: 20,
    padding: 25,
  },
  title: {
    color: WHITE,
    textAlign: 'center',
    fontSize: 20,
    marginBottom: RH(10),
  },
  text: {
    color: WHITE,
    textAlign: 'center',
    fontSize: 16,
    marginBottom: RH(6),
  },
})
