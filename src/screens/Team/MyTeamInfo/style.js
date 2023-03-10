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
  team: {
    textAlign: 'center',
    ...font('bold', 22, WHITE),
    marginVertical: RH(15),
  },
  imageBlock: {
    width: RW(240),
    height: RW(240),
    // marginLeft: 'auto',
    // marginRight: 'auto',
    alignSelf: 'center',
    marginVertical: RH(25),
    borderWidth: 1,
    borderRadius: RW(150),
    borderColor: WHITE,
  },
  rowBox: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  image: {
    borderWidth: 1,
    width: '100%',
    height: '100%',
    borderRadius: RW(150),
  },

  editBtn: {
    left: '40%',
  },
  text: {
    textAlign: 'center',
    marginVertical: RH(5),
    ...font('italic', 18, WHITE),
  },
  textLined: {
    ...font('bold', 16, WHITE, 20),
    marginVertical: RH(10),
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
  btns: {
    marginTop: RH(150),
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  btn: {
    marginBottom: RH(15),
  },
})
