import { StyleSheet } from 'react-native'
import { font, RH, RW } from '@/theme/utils'
import { FONT_ROBOTO_THIN } from '@/theme/fonts'
import { BLACK, WHITE, BACKGROUND, ICON, RADIO_TEXT } from '@/theme/colors'

export const styles = StyleSheet.create({
  body: {
    backgroundColor: '#001034',
    borderRadius: 20,
    padding: RH(35),
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    color: WHITE,
  },
  btn: {
    width: RW(220),
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 20,
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
  gameTypesContainer:{
    marginLeft:RW(15)
  },
  dash:{
    width:RW(10),
    height:0,
    borderColor:ICON,
    borderWidth:RW(2),
    borderRadius:RW(2),
    marginHorizontal:RW(8)
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
    color: ICON,
    marginLeft: RW(10),
    marginVertical: RH(10),
  },
  datesContainer: {
    flexDirection: 'row',
    marginVertical: RH(10),
    width:RW(357),
    alignSelf:"center",
    alignItems:"center"
  },

  btnActiveGames: {
    marginBottom: 24,
  },
  bottomButton:{
    marginLeft: 'auto',
    marginRight: RW(10)
  } ,
  title: font('bold', 18, BLACK),

})
