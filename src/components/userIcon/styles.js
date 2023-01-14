import { StyleSheet } from 'react-native'

import { ACTIVE, BACKGROUND, ICON, INACTIVE, WHITE } from '@/theme/colors'
import { font, RH, RW } from '@/theme/utils'

export default StyleSheet.create({
  titleBigBloc: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginLeft: 'auto',

    marginRight: 'auto',
  },
  titleBloc: {
    alignItems: 'center',
    justifyContent: 'center',
    // flexWrap: 'wrap',
    // backgroundColor:"red",
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  title: {
    ...font('bold', RW(10), WHITE),
  },
  titleCount: { ...font('bold', RW(16), WHITE) },
  statusBlock: {
    marginLeft: 'auto',
    marginRight: 'auto',
    // backgroundColor: 'rgba(52, 52, 52, 0)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  bg: {
    width: '100%',
    height: '100%',
  },
  image: {
    borderRadius: 100,
    width: '93%',
    height: '93%',
    resizeMode: 'contain',
  },
  nameBlock: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  soc: {
    backgroundColor: 'rgba(52, 52, 52, 0)',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
