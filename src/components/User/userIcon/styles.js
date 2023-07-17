import { StyleSheet } from 'react-native'

import { LIGHT_LABEL, WHITE } from '@/theme/colors'
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    width: RW(306),
    backgroundColor: LIGHT_LABEL,
    borderRadius: RW(20),
    padding: RW(20),
    marginHorizontal: RW(30.5),
  },
  successTeam: {
    ...font('inter', 16, WHITE, 20),
    textAlign: 'center',
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
