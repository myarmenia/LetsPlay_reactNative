import { LIGHT_LABEL, WHITE, ICON, RADIO_TEXT } from '@/theme/colors'
import { FONT_INTER_REGULAR, FONT_INTER_MEDIUM, FONT_INTER_BOLD } from '@/theme/fonts'
import { font, RH, RW } from '@/theme/utils'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  gameItemContainer: {
    width: RW(395),
    height: RH(96),
    backgroundColor: 'rgba(101, 122, 197, 0.6)',
    borderRadius: RW(8),
    alignSelf: 'center',
    marginVertical: RW(6),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  midText: {
    ...font('medium', 18, WHITE),
    width: RW(230),
    flexWrap: 'wrap',
    textAlign: 'left',
  },
  priceText: {
    ...font('medium', 12, WHITE),
    width: RW(230),
    textAlign: 'left',
  },
  playersText: {
    textAlign: 'center',
    ...font('regular', 10, WHITE),
  },
  countCircle: {
    backgroundColor: ICON,
    width: RW(28),
    height: RH(28),
    borderRadius: RW(19),
    alignItems: 'center',
    justifyContent: 'center',
  },
  countOfPlayersText: {
    ...font('bold', 14, WHITE),
  },
  horizontalLine: {
    width: '57%',
    marginTop: RH(10),
    alignSelf: 'flex-start',
    borderWidth: RW(1),
    borderColor: RADIO_TEXT,
  },
  gameListContainer: {
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  gameBox: {
    width: '100%',
    marginTop: RH(15),
    backgroundColor: 'rgba(101, 122, 197, 0.6)',
    borderRadius: RW(10),
    alignItems: 'center',
    // alignSelf: 'center',
    // justifyContent: 'center',
    paddingLeft: RW(20),
    paddingRight: RW(9),
    paddingBottom: RH(10),
    paddingTop: RH(10),
  },
  gameItemTop: {
    flexDirection: 'row',
  },
  gameTitle: {
    ...font('bold', 20, LIGHT_LABEL, 20),
    color: WHITE,
    marginTop: RH(25),
    marginBottom: RH(25),
    textAlign: 'center',
  },
  gameMiddleContainer: {
    marginLeft: RW(25),
    marginRight: RW(15),
    marginTop: RH(10),
  },
  distanceBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gameItemTopText: {
    ...font('bold', 18, WHITE, 20),
  },
  gameItemPriceText: {
    ...font('bold', 12, WHITE, 20),
    marginTop: RH(7),
  },
  gameItemBottomText: {
    ...font('bold', 18, WHITE, 20),
    marginTop: RH(5),
  },
  gameItemBottom: {
    flexDirection: 'row',
    marginRight: RW(3),
  },
  line: {
    borderWidth: RW(1),
    height: RW(35),
    borderColor: RADIO_TEXT,
    marginTop: RH(10),
  },
  // horizontalLine: {
  //   borderWidth: RW(1),
  //   width: RW(154),
  //   borderColor: RADIO_TEXT,
  //   marginTop: RH(5),
  // },
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
    alignItems: 'center',
    marginTop: RH(42),
    marginBottom: RH(33),
  },
  eachInfo: {
    ...font('regular', 14, WHITE, 20),
    marginLeft: RW(11),
    marginBottom: RH(6),
  },
  eachInfoTwo: {
    ...font('bold', 16, ICON, 20),
    marginLeft: RW(11),
    marginBottom: RH(24),
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
  },
  priceTextBlock: {
    width: '100%',
    marginLeft: RW(130),
  },
})
