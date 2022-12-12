import {StyleSheet} from 'react-native'

import {BACKGROUND, ICON, RED, WHITE} from '@/theme/colors'
import {font, RH, RW} from '@/theme/utils'

export default StyleSheet.create({
    secondTicketModalBlock:{
        width: RW(306),
        height: RH(191),
        alignItems: "center",
        justifyContent: "center"
    },
    firstTicketModalBlock:{
        width: RW(306),
        height: RH(300),
        alignItems: "center",
    },
    gameTicketButtonsBlock: {
        flexDirection: 'row',
        marginTop: 'auto',
        marginBottom: 'auto',
        justifyContent: "space-between"
    },
    detailImg: {
        width: RW(20),
        height: RH(31),
        marginLeft: RW(20)
    },
    ticketTextBlock: {
        marginBottom: RH(14)
    },
    firstTextBlock: {
        flexDirection: 'row',
        justifyContent: "space-between",
        marginRight: RW(18),
    },
    ticketText: {
        ...font('bold', 14, WHITE, 20),
        marginLeft: RW(11),
    },
    ticketImg: {
        width: RW(206),
        height: RH(218),
    },
    ticketBlock: {
        marginTop: RH(87),
    },
    ticketImgBlock: {
        alignItems: "center",
        marginBottom: RW(46)
    },
    errorText: {
        ...font('regular', 16, RED, 24),
        marginLeft: RW(20)
    },
    text: {
        ...font('regular', 16, WHITE, 25),
        width: RW(200),
        textAlign: "center",
        marginTop: RH(49),
        marginBottom: RH(31)
    },
    topBlock: {
        padding:RW(15),
        alignItems: "center",
        backgroundColor:BACKGROUND,
        borderWidth:1,
        marginLeft:'auto',
        marginRight:'auto',
        borderRadius:20,
    },
    titles: {
        ...font('regular', 16, ICON, 24),
        marginTop: RH(24),
        marginLeft: RW(20)
    },

    dateBlock: {
        marginRight: RW(9),
        marginTop: RH(9),
        marginLeft: RW(13),
        marginBottom: RH(2),
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    dash: {
        width: RW(10),
        height: 0,
        borderColor: ICON,
        borderWidth: RW(2),
        borderRadius: RW(2),
        marginHorizontal: RW(8)
    },
    countBlock: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: RW(11),
        marginTop: RH(9)
    },
    price: {
        marginLeft: RW(18),

    },
    submitBlock: {
        marginLeft: 'auto',
        marginRight: RW(9),
        marginBottom: RW(23),
        marginTop: RH(70)
    },
    regulationBlock: {
        backgroundColor :BACKGROUND,
        marginRight:'auto',
        borderRadius:RW(20),
        marginLeft:'auto',
        width: RW(357),
        height: RH(633),
        paddingTop: RH(41),
        paddingBottom: RH(80),
        alignItems: "center",
        justifyContent: "space-between"

    },
    title: {
        ...font('bold', 24, WHITE, 24),
    },
    textTwo: {
        ...font('regular', 16, WHITE, 19),
        textAlign: "center",
        width: RW(265)
    }
})
