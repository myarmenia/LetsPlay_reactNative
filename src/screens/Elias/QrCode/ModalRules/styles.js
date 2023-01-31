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
    textAlign: 'center',
    ...font('bold', 24, WHITE, 24),
    marginBottom: RH(10),
  },
  text: {
    textAlign: 'center',
    marginBottom: RH(6),
    ...font('regular', 16, WHITE, 19),
  },
})
