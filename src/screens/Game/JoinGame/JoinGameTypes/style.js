import { StyleSheet } from 'react-native'
import { font, RH, RW } from '@/theme/utils'
import { BLACK, WHITE, BACKGROUND, ICON, RADIO_TEXT } from '@/theme/colors'

export const styles = StyleSheet.create({
  body: {
    backgroundColor: '#001034',
    borderRadius: RW(20),
    padding: RH(35),
  },
  addGameText: {
    ...font('regular', RW(17), WHITE),
  },
  circleAddBox: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '45%',
    paddingVertical: RH(10),
    justifyContent: 'space-around',
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    color: WHITE,
  },
  btn: {
    width: RW(220),
    marginTop: RH(20),
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  btnBlock: {
    alignItems: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  gameTypeContainer: {
    alignSelf: 'center',
  },
  checkCheckbox: {
    padding: RW(10),
    flexDirection: 'row',
  },
  openedGameBtn: {
    borderRadius: RW(10),
    backgroundColor: BACKGROUND,
    width: RW(380),
    alignSelf: 'center',
    height: RH(48),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: RW(16),
  },

  typeText: {
    color: RADIO_TEXT,
    fontSize: RW(16),
    paddingHorizontal: RW(10),
  },
  gameTypeBtn: {
    backgroundColor: BACKGROUND,
    width: RW(380),
    alignSelf: 'center',
    height: RH(48),
    borderTopLeftRadius: RW(10),
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    borderTopRightRadius: RW(10),
    borderBottomWidth: RH(2),
    borderBottomColor: ICON,
  },
  gameTypeLastBtn: {
    borderRadius: RW(0),
    backgroundColor: BACKGROUND,
    width: RW(380),
    // margin: RH(2),
    height: RH(48),
    justifyContent: 'center',
  },
  gameTypeBtnText: {
    color: ICON,
    fontSize: RH(16),
    paddingHorizontal: RW(15),
  },
  arrowDown: {
    paddingHorizontal: RW(15),
  },
  someTitle: {
    color: ICON,
    marginLeft: RW(10),
    alignSelf: 'flex-start',
    top: '26%',
    // marginVertical: RH(10),
  },
  radioTitle: {
    color: ICON,
  },
  datesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: RH(20),
    width: RW(380),
    alignSelf: 'center',
    // marginBottom: RH(30),
  },

  btnActiveGames: {
    marginBottom: 24,
  },

  title: font('bold', 18, BLACK),
})
