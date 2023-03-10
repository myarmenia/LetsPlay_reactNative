import { StyleSheet } from 'react-native'

import { WHITE } from '@/theme/colors'
import { font, RH, RW } from '@/theme/utils'

export default StyleSheet.create({
  titleBigBloc: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    // justifyContent: 'space-between',
  },
  titleBloc: {
    alignItems: 'center',
    padding: RH(5),
    marginTop: RH(4),
    flexDirection: 'column',
    justifyContent: 'center',
  },
  title: {
    ...font('bold', RW(10), WHITE),
  },
  titleCount: { ...font('bold', RW(16), WHITE) },
  statusBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  bg: {
    width: '100%',
    height: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
    left: -0.7,
  },
  nameBlock: {
    alignItems: 'center',
    marginTop: RH(16),
  },
  soc: {
    backgroundColor: 'rgba(52, 52, 52, 0)',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
