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
  modal: {
    width: RW(306),
    backgroundColor: LIGHT_LABEL,
    borderRadius: RW(20),
    padding: RW(50),
    marginHorizontal: RW(30.5),
  },
  successTeam: {
    ...font('inter', 16, WHITE, 20),
    textAlign: 'center',
  },
  team: {
    textAlign: 'center',
    ...font('bold', 22, WHITE, 27),
    marginTop: RH(39),
    marginBottom: RH(57),
  },
  textLined: {
    ...font('bold', 14, WHITE, 19),
    marginVertical: RH(10),
    textDecorationLine: 'underline',
  },
  imageBlock: {
    width: RW(240),
    height: RW(240),
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: RH(33),
    borderWidth: 1,
    borderRadius: RW(150),
    borderColor: WHITE,
  },
  image: {
    borderWidth: 1,
    borderRadius: RW(150),
    width: '100%',
    height: '100%',
  },
  text: {
    ...font('bold', 14, WHITE, 20),
    marginTop: RH(5),
  },

  line: {
    width: RW(130),
    height: RH(1),
    backgroundColor: 'white',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: RH(45),
  },
  btns: {
    marginTop: RH(150),
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  btn: {
    marginTop: 'auto',
    width: '100%',
    alignItems: 'center',
    marginBottom: RH(64),
  },
})
