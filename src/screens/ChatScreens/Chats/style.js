import { StyleSheet } from 'react-native'
import {
  ACTIVE,
  BACKGROUND,
  DARK_BLUE,
  ICON,
  LIGHT_GRAY,
  LIGHT_LABEL,
  LIGHT_RED,
  MESSAGE_CONTAINER,
  RED,
  WHITE,
} from '@/theme/colors'
import { font, RH, RW } from '@/theme/utils'
import { FONT_INTER_REGULAR } from '@/theme/fonts'

export default StyleSheet.create({
  container: {
    marginTop: RH(56),
    alignItems: 'center',
  },
  containerr: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    width: RW(369),
    height: '101%',
    right: RW(367 - 88),
    overflow: 'visible',
    // backgroundColor: '#fff',
    // left: RW(30),
    // padding: RH(9),
    // borderBottomWidth: StyleSheet.hairlineWidth,
    // borderBottomColor: '#ccc',
  },
  layer: {
    width: RW(368),
    alignSelf: 'center',
    marginBottom: RH(9),
    overflow: 'visible',
    backgroundColor: LIGHT_RED,
    borderRadius: RW(10),
    alignItems: 'center',
    flexDirection: 'row-reverse',
  },
  deleteBtn: {
    height: '100%',
    // zIndex: -2,
    // right: RW(-35),
    backgroundColor: 'red',
    // position: 'absolute',
    width: RW(60),
  },
  emptyText: {
    paddingTop: '10%',
    ...font('regular', 24, WHITE, 26),
  },
  deleteText: {
    color: 'red',
    marginLeft: 'auto',
  },
  modalBlock: {
    width: RW(260),
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: RW(10),
    backgroundColor: DARK_BLUE,
  },
  modalText: {
    padding: RH(20),
    textAlign: 'center',
    ...font('regular', 21, WHITE, 26),
  },
  title: {
    ...font('bold', 24, LIGHT_GRAY, 29),
    marginBottom: RW(27),
  },
  chatItemImg: {
    width: RW(42),
    height: RH(43),
    borderRadius: RH(22),
  },
  chatItemBlock: {
    backgroundColor: ICON,
    width: '100%',
    borderRadius: RW(10),
    paddingLeft: RW(13),
    paddingTop: RH(17),
    paddingBottom: RH(17),
    paddingRight: RW(6),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  regulationBlock: {
    backgroundColor: LIGHT_LABEL,
    marginRight: 'auto',
    borderRadius: RW(20),
    marginLeft: 'auto',
    width: RW(357),
    padding: RW(35),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemData: {
    ...font('bold', 18, WHITE, 20),
    width: RW(245),
  },
  time: {
    ...font('regular', 14, WHITE, 20),
    marginBottom: RH(20),
  },
  chatInput: {
    width: RW(399),
    height: RH(48),
    borderRadius: RW(30),
    backgroundColor: BACKGROUND,
    marginTop: 'auto',
    marginBottom: RH(18),
    paddingLeft: RW(17),
    paddingRight: RW(21),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // color: ICON
  },
  chatHeadBlock: {
    flexDirection: 'row',
    marginTop: RH(36),
  },
  countBlock: {
    width: RW(40),
    height: RH(40),
    backgroundColor: ACTIVE,
    borderRadius: RW(40),
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: RW(5),
  },
  countText: {
    ...font('bold', 16, LIGHT_LABEL, 20),
  },
  infoSvgButton: {
    marginLeft: 'auto',
    marginRight: RW(10),
  },
  infoModal: {
    backgroundColor: LIGHT_LABEL,
    paddingLeft: RW(25),
    paddingTop: RH(72),
    paddingBottom: RH(30),
    width: RW(370),
    height: RH(420),
    borderRadius: RW(20),
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  chatBlock: {
    flex: 1,
    // height: '100%',
    // width: RW(396),
    // marginTop: 'auto',
  },
  myItemBlock: {
    flexDirection: 'row',
    marginLeft: RW(116),
    marginBottom: RH(30),
  },
  userItemBlock: {
    flexDirection: 'row',
    marginRight: RW(125),
    marginBottom: RH(30),
  },
  myItem: {
    width: RW(230),
    height: RH(68),
    backgroundColor: ICON,
    borderRadius: RW(10),
    borderBottomRightRadius: 0,
    justifyContent: 'center',
    paddingHorizontal: RW(10),
  },
  userItem: {
    width: RW(230),
    height: RH(68),
    backgroundColor: MESSAGE_CONTAINER,
    borderRadius: RW(10),
    borderBottomLeftRadius: 0,
  },
  timeText: {
    color: ICON,
    marginTop: RW(40),
    marginRight: RW(9),
    marginLeft: RW(9),
  },
  rowBox: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  titleColumnBox: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    width: '100%',
    alignItems: 'flex-start',
  },
  titlee: {
    color: WHITE,
    fontSize: RW(14),
    fontFamily: FONT_INTER_REGULAR,
    paddingTop: '5%',
  },
  description: {},
})
