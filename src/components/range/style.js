import { StyleSheet } from 'react-native'
import { font, RH, RW } from '@/theme/utils'

export const styles = StyleSheet.create({
  body: {
    position: 'absolute',
    zIndex: -10,
    // backgroundColor: '#6F6F70',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%',
    height: '100%',
    alignItems: 'center',
  },
  stepBody: {
    position: 'relative',
    alignSelf: 'center',
    left: '-15%',
  },
  stepFon: {
    backgroundColor: '#B3B7C2',
    width: '100%',

    borderWidth: 1,
    borderRadius: 3,
    borderColor: '#B3B7C2',
    height: '8%',
  },
  stepText: {
    color: 'white',
    top: RH(15),
    zIndex: 10,
    position: 'absolute',
  },
})
