import { StyleSheet } from 'react-native'

import { WHITE } from '@/theme/colors'
import { font, RH, RW } from '@/theme/utils'

export default StyleSheet.create({
  title: {
    textAlign: 'center',
    ...font('bold', 20, WHITE),
    marginVertical: RH(15),
  },
  homeBlock: {
    width: RW(395),
    overflow: 'hidden',
    // height: RH(111),
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginVertical: RH(18),
    // padding: RW(11),
  },
  imageBlock: {
    width: RW(80),
    height: RW(80),
    borderWidth: 1,
    borderRadius: 50,
    borderColor: WHITE,
    margin: RW(15),
  },
  image: {
    borderWidth: 1,
    borderRadius: 50,
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  text: {
    marginVertical: RH(3),
    width: '100%',
    ...font('medium', 15, WHITE),
  },
  textBlock: {},
})
