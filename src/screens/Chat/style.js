import { StyleSheet } from 'react-native'
import {
  ACTIVE,
  BACKGROUND,
  ICON,
  LIGHT_GRAY,
  LIGHT_LABEL,
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
  title: {
    ...font('bold', 24, LIGHT_GRAY, 29),
    marginBottom: RW(27),
  },
  chatItemImg: {
    width: RW(42),
    height: RH(42),
    marginRight: RW(18),
  },
  chatItemBlock: {
    backgroundColor: 'rgba(101,122,197,0.6)',
    marginVertical: RH(10),
    width: '100%',
    borderRadius: RW(10),
    padding: RH(18),
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
    position: 'absolute',
    height: '100%',
    width: RW(396),
    // marginTop: 'auto',
    // zIndex: 999
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
    borderBottomRightRadius: 0,
    justifyContent: 'center',
    paddingHorizontal: RW(10),
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
