import { StyleSheet } from 'react-native'

import { ACTIVE, BACKGROUND, ICON, INACTIVE, WHITE } from '@/theme/colors'
import { font, RH, RW } from '@/theme/utils'

export default StyleSheet.create({
  dateButton: {
    width: RW(201),
    height: RH(48),
    backgroundColor: BACKGROUND,
    borderRadius: RW(10),
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  dateText: {
    ...font('regular', 18, ICON, 19),
    letterSpacing: 1.5,
    color: '#657AC5',
  },
  dateButtonText: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '85%',
    alignSelf: 'center',
    alignItems: 'flex-start',
  },
  dateSvg: {
    marginLeft: RW(24),
  },
  timeButton: {
    width: RW(146),
    height: RH(48),
    backgroundColor: BACKGROUND,
    borderRadius: RW(10),
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
  },
})
