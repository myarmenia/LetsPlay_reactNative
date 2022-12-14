import { Dimensions, StyleSheet } from 'react-native'
import { font, RH, RW } from '@/theme/utils'
import { FONT_INTER_REGULAR, FONT_ROBOTO_THIN } from '@/theme/fonts'
import { ICON, LIGHT_LABEL, BACKGROUND, RADIO_TEXT } from '@/theme/colors'

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window')
export const styles = StyleSheet.create({
  btnBlock: {
    alignItems: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  btnActiveGames: {
    marginBottom: 24,
  },
  title: {
    fontSize: 18,
    // fontFamily:font('light')
  },
  errorText: {
    color: 'red',
    fontFamily: FONT_INTER_REGULAR,
    fontSize: RH(15),
    paddingLeft: RW(12),
  },
  someTitle: {
    fontFamily: FONT_INTER_REGULAR,
    color: ICON,
    paddingTop: RH(10),
    paddingLeft: RW(12),
  },
  dateMap: {
    width: RW(367),
    height: RH(128),
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignSelf: 'center',
  },
  datesContainer: {
    width: RW(367),
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  gameTypesContainer: {
    paddingTop: '4%',
    paddingLeft: RW(20),
  },

  line: {
    borderWidth: RW(1),
    width: RW(10),
    height: RW(1),
    borderColor: ICON,
  },
  bottomButton: {
    position: 'absolute',
    // bottom: '',
    width: '100%',
    alignItems: 'flex-end',
    // top: SCREEN_HEIGHT + RH(45),
  },
  gameTypeBtn: {
    backgroundColor: BACKGROUND,
    borderTopLeftRadius: RW(10),
    borderTopRightRadius: RW(10),
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    width: RW(366),
    height: RH(48),
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  openedGameBtn: {
    backgroundColor: BACKGROUND,
    borderRadius: RW(10),
    width: RW(366),
    height: RH(48),
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  gameTypeLastBtn: {
    backgroundColor: BACKGROUND,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: RW(0),
    borderBottomRightRadius: RW(0),
    width: RW(366),
    height: RH(48),
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dropedGameTypeBtn: {},
  gameTypeBtnText: {
    ...font('bold', 16, LIGHT_LABEL, 28),
    color: ICON,
    marginHorizontal: RW(20),
  },
  arrowDown: {
    marginHorizontal: RW(20),
  },
  gameTypeContainer: {
    paddingVertical: '4%',
  },
  typeContainer: {},
  checkboxBox: {
    paddingVertical: RH(20),
    paddingHorizontal: RW(12),
    flexDirection: 'row',
  },
  typeText: {
    ...font('bold', 16, RADIO_TEXT, 24),
    paddingLeft: RW(12),
  },
  circleAddBox: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: RW(12),
    paddingBottom: RH(30),
  },
  addGameText: {
    ...font('bold', 16, RADIO_TEXT, 24),
    paddingLeft: RW(12),
  },
})
