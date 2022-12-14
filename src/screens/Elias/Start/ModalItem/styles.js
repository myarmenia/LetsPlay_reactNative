import { StyleSheet } from 'react-native'
import { font, RH, RW } from '@/theme/utils'
import { WHITE } from '@/theme/colors'

const styles = StyleSheet.create({
  com: {
    ...font('bold', 20, '#4D7CFE'),
  },
  title: {
    ...font('bold', 24, WHITE),
    marginBottom: RH(50),
  },
  body: {
    marginLeft: 'auto',
    marginRight: 'auto',
    alignItems: 'center',
  },
  qrBlock: {
    width: RW(281),
    height: RH(280),
    marginTop: RH(127),
    marginBottom: RH(90),
  },
  qr: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  btn: {
    width: 281,
    height: 48,
  },
})

export default styles
