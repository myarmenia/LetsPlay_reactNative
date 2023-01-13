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
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stagedCount: {
    fontSize: 18,
  },
  players: {
    // left: RW(10),
    marginRight:2,
    top: RH(-7),
    zIndex: 10,
  },
  playersComBlock:{
    left:RW(-15)
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

  },
})
