import { StyleSheet } from 'react-native'
import { font, RH, RW } from '@/theme/utils'

export const styles = StyleSheet.create({
  body: {
    position: 'absolute',
    zIndex: -10,
    // backgroundColor: '#6F6F70',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    height: 1,
    marginLeft: 'auto',
    marginRight: 'auto',
    height: '100%',
    alignItems: 'center',
  },
  stepBody: {
    position: 'relative',
  },
  stepFon: {
    backgroundColor: '#B3B7C2',
    width: '100%',
    borderWidth: 1,
    borderRadius: 3,
    borderColor: '#B3B7C2',
    height: '10%',
  },
  stepText: {
    color: 'white',
    marginTop: RH(5),
    zIndex: 10,
    // left:'50%',
    position: 'absolute',
  },
})
