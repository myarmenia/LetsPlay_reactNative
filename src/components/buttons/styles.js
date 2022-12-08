import { StyleSheet } from 'react-native'

import { ACTIVE, BACKGROUND, INACTIVE, WHITE } from '@/theme/colors'
import { font, RH, RW } from '@/theme/utils'

export default StyleSheet.create({
  circleContainer: {
    width: RW(78),
    height: RW(78),
    bottom: RH(28),
    padding: RW(8),
    alignSelf: 'center',
    position: 'absolute',
    borderRadius: RW(39),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: BACKGROUND,
  },
  selectContainer: {
    paddingTop: RH(10),
    marginRight: RW(8),
    alignSelf: 'center',
    paddingBottom: RH(7),
    borderRadius: RW(10),
    marginBottom: RH(13),
    paddingHorizontal: RW(14),
    backgroundColor: INACTIVE,
  },
  containerActive: {
    backgroundColor: ACTIVE,
  },
  label: {
    ...font('regular', 16, WHITE, 19),
  },
})
