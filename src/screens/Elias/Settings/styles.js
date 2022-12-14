import { StyleSheet } from 'react-native'
import { font, RH, RW } from '@/theme/utils'
import { WHITE } from '@/theme/colors'

const styles = StyleSheet.create({
  time: {
    marginVertical: RH(23),
    ...font('bold', 16, WHITE),
  },
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'stretch',
    justifyContent: 'center',
  },

  title: {
    ...font('bold', 20, WHITE),
    textAlign: 'center',
  },
  body: {
    marginTop: RW(125),
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
    marginRight: 'auto',
    marginLeft: 'auto',
  },
})

export default styles
