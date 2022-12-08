import { StyleSheet } from 'react-native'
import { RH, RW } from '@/theme/utils'
import { WHITE } from '@/theme/colors'

export const styles = StyleSheet.create({
  bgFon: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto',
    width: RW(335),
    height: RH(707),
    borderWidth: RW(2),
    borderRadius: RW(20),
    borderColor: WHITE,
    zIndex: -1,
    backgroundColor: 'rgba(217, 217, 217, 0.15)',
    paddingBottom: RH(80),
  },
  border: {
    position: 'absolute',
    zIndex: 1,
  },
  leftBorder: {
    top: RH(13.5),
    left: RW(12.87),
  },
  rightBorder: {
    bottom: RH(13.5),
    right: RW(12.87),
    transform: [{ rotate: '180deg' }],
  },
  bgGamesLiner: {
    position: 'absolute',
  },
  title: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: RH(190),
  },
  btn: {
    marginTop: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
})
