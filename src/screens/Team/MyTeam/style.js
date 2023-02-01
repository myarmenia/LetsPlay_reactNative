import { Platform, StyleSheet } from 'react-native'

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
  title: {
    textAlign: 'center',
    ...font('bold', 20, WHITE),
    marginVertical: RH(15),
  },
  homeBlock: {
    width: RW(395),
    height: RH(111),
    marginVertical: RH(18),
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  imageBlock: {
    width: RW(80),
    height: RW(80),
    borderWidth: 1,
    borderRadius: 50,
    borderColor: WHITE,
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  image: {
    borderWidth: 1,
    borderRadius: RW(50),
    width: '100%',
    height: '100%',

    ...Platform.select({
      ios: {
        resizeMode: 'cover',
      },
      android: {
        resizeMode: 'contain',
      },
    }),
  },
  text: {
    marginVertical: RH(3),
    ...font('bold', 14, WHITE),
  },
  textBlock: {
    marginLeft: RW(15),
  },
})
