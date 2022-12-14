import { StyleSheet } from 'react-native'

import {
  ACTIVE,
  BACKGROUND,
  DARK_BLUE,
  ICON,
  LIGHT_GRAY,
  LIGHT_LABEL,
  RED,
  WHITE,
} from '@/theme/colors'
import { font, RH, RW } from '@/theme/utils'

export default StyleSheet.create({
  container: {
    paddingTop: RW(27),
    alignItems: 'center',
  },
  title: {
    ...font('bold', 24, WHITE, 24),
    marginBottom: RW(15),
  },
  infoBlock: {
    flexDirection: 'row',
    width: '100%',
    paddingLeft: RW(26),
    marginBottom: RH(30),
  },
  image: {
    width: RW(87),
    height: RH(92),
    marginRight: RW(18),
  },
  userEdit: {
    marginLeft: RW(80),
  },
  name: {
    ...font('bold', 24, ICON, 28),
  },
  id: {
    ...font('regular', 16, ICON, 19),
    marginTop: RH(8),
  },
  linkText: {
    ...font('regular', 16, WHITE, 19),
  },
  linkBlock: {
    height: RH(56),
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: DARK_BLUE,
    paddingLeft: RW(28),
  },
})
