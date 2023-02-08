import { StyleSheet } from 'react-native'

import { WHITE } from '@/theme/colors'
import { font, RW } from '@/theme/utils'

export default StyleSheet.create({
  titleBigBloc: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  titleBloc: {
    alignItems: 'center',
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
    width: '93%',
    height: '93%',
    resizeMode: 'contain',
  },
  nameBlock: {
    alignItems: 'center',
  },
  soc: {
    backgroundColor: 'rgba(52, 52, 52, 0)',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
