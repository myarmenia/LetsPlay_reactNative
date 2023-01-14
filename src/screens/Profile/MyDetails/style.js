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
    paddingTop: RW(43),
    alignItems: 'center',
  },
  title: {
    ...font('bold', 24, WHITE, 24),
    marginBottom: RW(32),
  },
  imgBlock: {
    flexDirection: 'row',
    width: '100%',
    paddingLeft: RW(120),
    // marginBottom: RH(30)
  },
  imageBlock: {
    width: RW(168),
    height: RW(168),
    borderRadius: RW(84),
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: RW(84),
  },
  tickSvg: {
    marginLeft: RW(60),
  },
  // formBlock: {
  //   width: '100%',
  //   marginLeft: RW(22),
  // },
  inputTitle: {
    ...font('regular', 16, WHITE, 19),
    marginBottom: RH(14),
  },
  input: {
    width: RW(354),
    height: RH(48),
    backgroundColor: BACKGROUND,
    borderRadius: RW(10),
    paddingLeft: RW(20),
    color: ICON,
  },
  inputBlock: {
    marginBottom: RH(14),
  },
  logOut: {
    marginVertical: RH(46),
  },
  logOutText: {
    ...font('regular', 16, WHITE, 19),
    textDecorationLine: 'underline',
  },
  myDetailsModal: {
    width: RW(306),
    height: RH(191),
    paddingHorizontal: RW(46),
    paddingTop: RH(57),
    backgroundColor: LIGHT_LABEL,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: RW(20),
  },
  modalButtonsBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: RW(219),
  },
})
