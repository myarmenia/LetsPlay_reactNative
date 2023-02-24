import { StyleSheet } from 'react-native'

import {
  ACTIVE,
  BACKGROUND,
  DARK_BLUE,
  ICON,
  INACTIVE,
  LIGHT_GRAY,
  LIGHT_LABEL,
  RED,
  WHITE,
} from '@/theme/colors'
import { font, RH, RW } from '@/theme/utils'

export default StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: RW(43),
    paddingHorizontal: RW(8),
    alignItems: 'center',
  },
  gameNamesBlock: {
    width: '100%',
  },
  gameNamesTitle: {
    ...font('medium', 18, WHITE, 28),
    marginTop: RH(15),
  },
  gameBtn: {
    // backgroundColor: INACTIVE,
    alignSelf: 'center',
    marginHorizontal: RW(4),
    borderRadius: RW(10),
    marginTop: RW(23),
  },

  flatList: {
    justifyContent: 'space-around',
  },
  gamesBox: {
    // marginBottom: RH(30)
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '95%',
    alignSelf: 'center',
  },
  detail: {
    width: RW(60),
    height: RH(92),
  },
  buttonBlock: {
    marginLeft: 'auto',
    marginTop: RH(17),
  },
  followerModal: {
    width: RW(313),
    borderRadius: RW(20),
    backgroundColor: LIGHT_LABEL,
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingBottom: RH(30),
    paddingTop: RH(75),
    paddingLeft: RW(33),
    paddingRight: RW(21),
  },
  followerModalText: {
    ...font('regular', 16, WHITE, 25),
  },
  followerModalTextBLock: {
    marginTop: RH(40),
    flexDirection: 'row',
  },
  modalSvg: {
    marginLeft: 'auto',
  },
  submitBtn: {
    position: 'absolute',
    bottom: RH(25),
    right: RW(5),
  },
})
