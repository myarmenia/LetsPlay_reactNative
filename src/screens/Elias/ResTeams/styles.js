import { StyleSheet } from 'react-native'
import { font, RH, RW } from '@/theme/utils'
import { WHITE } from '@/theme/colors'

export const styles = StyleSheet.create({
  btn: {
    width: RW(281),
    height: RH(48),
  },
  itemBlockOne: {
    alignItems: 'center',
    marginTop: RH(180),
    marginBottom: RH(50),
  },
  itemBlockTwo: {
    alignItems: 'center',
    marginTop: RH(20),
    marginBottom: RH(150),
  },
  com: {
    ...font('bold', 48, '#4D7CFE'),
  },
  count: {
    ...font('bold', 48, WHITE),
  },
  line: {
    width: RW(350),
    marginLeft: 'auto',
    marginRight: 'auto',
    borderBottomWidth: 1,
    borderColor: WHITE,
  },
})

export default styles
