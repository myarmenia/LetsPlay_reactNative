import { StyleSheet } from 'react-native'
import { font, RH, RW } from '@/theme/utils'
import { FONT_ROBOTO_THIN } from '@/theme/fonts'
import { WHITE } from '@/theme/colors'

export const styles = StyleSheet.create({
  title: {
    color: WHITE,
    fontSize: 20,
    textAlign: 'center',
    marginTop: RH(100),
    marginBottom: RH(40),
  },
  scroll: {
    marginRight: 'auto',
    marginLeft: 'auto',
    width: RW(310),
    height: RH(500),
    flexGrow: 0,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    // marginLeft: 'auto',
    // marginRight: 'auto'
  },
  containerT: {
    backgroundColor: 'red',
  },
  centeredContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    marginTop: RH(15),
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
    backgroundColor: 'red',
    marginLeft: 10,
    width: 50,
    height: 50,
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  comBg: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
