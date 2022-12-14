import { StyleSheet } from 'react-native'
import { font, RH, RW } from '@/theme/utils'
import { FONT_ROBOTO_THIN } from '@/theme/fonts'
import { WHITE } from '@/theme/colors'

export const styles = StyleSheet.create({
  title: {
    color: WHITE,
    fontSize: 22,
    marginTop: RH(20),
  },
  com: {
    color: WHITE,
    marginTop: RH(47),
    marginBottom: RH(12),
  },
  container: {
    flex: 1,
    padding: 12,
    // backgroundColor:"red",
    // borderWidth:5,

    // paddingTop: 40,
    // justifyContent: 'space-evenly',
  },
  containerT: {
    backgroundColor: 'red',
  },
  centeredContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  receivingZone: {
    height: 200,
    borderRadius: 10,
  },
  receiving: {
    // borderColor: 'red',
    // borderWidth: 2,
  },
  incomingPayload: {
    marginTop: 10,
    fontSize: 24,
  },
  received: {
    marginTop: 10,
    fontSize: 18,
  },
  palette: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  draggableBox: {
    position: 'absolute',
    // borderRadius: 10,
  },
  detail: {
    width: 50,
    height: 50,
  },
  scrollBlock: {
    height: 100,
    // display: 'flex',
    // alignItems:'center'
  },
  dragging: {
    opacity: 0.01,
  },
  hoverDragging: {
    borderColor: 'black',
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
  },
  stagedCount: {
    fontSize: 18,
  },
  players: {
    left: RW(-7),
    top: RH(-7),
    zIndex: 10,
  },
  comBg: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    zIndex: 50,
    height: 100,
  },
  scrollList: {
    marginTop: 'auto',
    marginBottom: 'auto',
    alignItems: 'center',
    flexDirection: 'row',
    height: 50,
    backgroundColor: 'black',
  },
})
