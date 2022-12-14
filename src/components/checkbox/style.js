import { StyleSheet } from 'react-native'

import { LIGHT_LABEL, RADIO, RADIO_TEXT } from '@/theme/colors'
import { font, RH, RW } from '@/theme/utils'

export default StyleSheet.create({
  circle: {
    width: RW(10),
    height: RH(10),
    borderColor: LIGHT_LABEL,
    borderRadius: RW(8),
    borderWidth: RW(1),
  },
  radioBlock: {
    flexDirection: 'row',
    marginBottom: RH(20),
    alignItems: 'center',
  },
  radioText: {
    ...font('regular', 16, RADIO_TEXT, 24),
    marginLeft: RW(20),
  },
  radio: {
    width: RW(16),
    height: RH(16),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: LIGHT_LABEL,
    borderColor: RADIO,
    borderRadius: RW(8),
    borderWidth: RW(1),
  },
})
