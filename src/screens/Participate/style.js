import { StyleSheet } from 'react-native'
import { font, RH, RW } from '@/theme/utils'
import { FONT_ROBOTO_THIN } from '@/theme/fonts'
import { BLACK, WHITE, BACKGROUND, ICON, RADIO_TEXT } from '@/theme/colors'

export const styles = StyleSheet.create({
  btnBlock: {
    alignItems: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  gameTypeContainer: {
    alignSelf: 'center',
  },
  openedGameBtn: {
    borderRadius: RW(10),
    backgroundColor: BACKGROUND,
    width: RW(366),
    height: RH(48),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  checkboxBox:{
    flexDirection:"row",
    padding:RH(10),
    alignItems:"center"
  },
  errorText:{
    color:"red",
    fontSize:RW(16)
  },
  dash:{
    width:RW(10),
    height:0,
    borderColor:ICON,
    borderWidth:RW(2),
    borderRadius:RW(2),
    marginHorizontal:RW(12)
  },
  typeText:{
    color:RADIO_TEXT,
    fontSize:RW(16),
    paddingHorizontal:RW(10)
  },
  gameTypeBtn: {
    backgroundColor: BACKGROUND,
    width: RW(366),
    height: RH(48),
    borderTopLeftRadius: RW(10),
    justifyContent: 'center',
    borderTopRightRadius: RW(10),
  },
  gameTypeLastBtn: {
    borderRadius: RW(0),
    backgroundColor: BACKGROUND,
    width: RW(366),
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
    ...font('regular', 16 , ICON , 24),
    // marginVertical: RH(20),
    marginLeft: RW(15)
  },
  datesContainer: {
    flexDirection: 'row',
    marginVertical: RH(10),
    width:RW(357),
    marginBottom: RH(27),
    alignItems:"center"
  },
  bottomButton:{
    marginLeft: 'auto',
    marginRight: RW(10),
    marginBottom: RH(25)
  } ,
  dateMap: {
    marginBottom: RH(33)
  },
  btnActiveGames: {
    marginBottom: 24,
  },
  title: font('bold', 18, BLACK),
})
