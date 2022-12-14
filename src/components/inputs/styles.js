import { StyleSheet } from 'react-native'

import { ACTIVE, BACKGROUND, ICON, INACTIVE, WHITE } from '@/theme/colors'
import { font, RH, RW } from '@/theme/utils'

export default StyleSheet.create({
  countInput: {
    height: RH(48),
    backgroundColor: BACKGROUND,
    borderRadius: RW(10),
    paddingLeft: RW(24),
    color: ICON,
  },
  priceInput: {
    height: RH(48),
    backgroundColor: BACKGROUND,
    borderRadius: RW(10),
    color: ICON,
  },
  priceText: {
    ...font('regular', 16, ICON, 19),
  },
  priceBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    height: RH(48),
    backgroundColor: BACKGROUND,
    borderRadius: RW(10),
    paddingLeft: RW(24),
    color: ICON,
  },
  mapInputBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    marginLeft: RW(11),
    paddingRight: RW(17),
    width: RW(375),
    height: RH(48),
    backgroundColor: BACKGROUND,
    borderRadius: RW(10),
  },
  mapInput: {
    paddingLeft: RW(24),
    color: ICON,
  },
})
