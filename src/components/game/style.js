import { StyleSheet } from 'react-native'
import { font, RH, RW } from '@/theme/utils'
import { BLACK, WHITE } from '@/theme/colors'

export const styles = StyleSheet.create({
  bgFon: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: RH(45),
    marginBottom: 'auto',
    width: RW(335),
    height: RH(707),
    borderWidth: RW(2),
    borderRadius: RW(20),
    borderColor: WHITE,
    overflow: 'hidden',
    zIndex: -1,
    backgroundColor: 'rgba(217, 217, 217, 0.2)',
    paddingBottom: RH(80),
  },
  btnText: {
    ...font('bold', 20, BLACK),
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
    zIndex: 1,
    marginTop: RH(190),
  },
  btn: {
    marginTop: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
    zIndex: 10,
  },

  image: {
    width: RW(300),
    height: RH(300),
    resizeMode: 'contain',
  },
})
