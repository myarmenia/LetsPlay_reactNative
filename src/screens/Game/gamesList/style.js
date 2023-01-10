import { LIGHT_LABEL, WHITE, ICON, RADIO_TEXT } from '@/theme/colors'
import { FONT_INTER_REGULAR, FONT_INTER_MEDIUM, FONT_INTER_BOLD } from '@/theme/fonts'
import { font, RH, RW } from '@/theme/utils'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  gameListContainer: {
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  gameBox: {
    width: '100%',
    // height: RH(74),
    marginTop: RH(15),
    backgroundColor: ICON,
    borderRadius: RW(10),
    flexDirection: 'row',
    alignItems: 'center',
    // alignSelf: 'center',
    justifyContent: 'center',
    paddingBottom: RH(10),
    paddingTop: RH(10)
  },
  gameTitle: {
    ...font('bold', 20, LIGHT_LABEL, 20),
    color: WHITE,
    marginTop: RH(25),
    marginBottom: RH(25),
    textAlign: 'center',
  },
  iconComponent: {
    width: RW(45),
    height: RH(60),
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: 'red'
    // zIndex: 12,
  },
  gameMiddleContainer: {
    width: RW(274),
    justifyContent: 'space-around',
    alignItems: 'center',
    alignSelf: 'center',
  },
  distanceBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gameItemTopText: {
    fontFamily: FONT_INTER_REGULAR,
    color: WHITE,
    fontSize: RH(18),
  },
  gameItemBottom: {
    width: '115%',
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-around',
  },
  line: {
    borderWidth: RW(1),
    width: RW(35),
    top: RH(-24),
    height: RW(1),
    transform: [{ rotate: '90deg' }],
    alignSelf: 'flex-end',
    left: RW(10),
    borderColor: RADIO_TEXT,
  },
  gameItemRight: {
    flexDirection: 'column',
    // height: RH(66),
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: RW(47),
  },
  gameItemRightText: {
    fontFamily: FONT_INTER_REGULAR,
    color: WHITE,
    fontSize: RH(10),
  },
  gameItemCircle: {
    backgroundColor: '#596aaa',
    alignItems: 'center',
    justifyContent: 'center',
    width: RW(30),
    height: RH(30),
    borderRadius: RH(15),
  },
  circleText: {
    color: WHITE,
    fontSize: RH(14),
    fontFamily: FONT_INTER_MEDIUM,
  },
  playersIn: {
    color: WHITE,
    fontSize: RH(14),
    fontFamily: FONT_INTER_MEDIUM,
  },
  bigIcon: {
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  eachInfo: {
    color: WHITE,
    fontFamily: FONT_INTER_BOLD,
    fontSize: RH(14),
    lineHeight: RH(20),
    paddingVertical: RH(8),
  },
  eachInfoRegular: {
    fontFamily: FONT_INTER_BOLD,
    fontSize: RH(14),
    color: WHITE,
    paddingVertical: RH(10),
  },
  itemWrapper: {
    height: '85%',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
  },
})
