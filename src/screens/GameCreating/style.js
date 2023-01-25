import {StyleSheet} from 'react-native'

import {BACKGROUND, ICON, LIGHT_LABEL, RED, WHITE} from '@/theme/colors'
import {font, RH, RW} from '@/theme/utils'

export default StyleSheet.create({
    secondTicketModalBlock: {
        width: RW(306),
        height: RH(191),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: LIGHT_LABEL,
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: RW(20),
    },
    firstTicketModalBlock: {
        width: RW(306),
        height: RH(300),
        backgroundColor: LIGHT_LABEL,
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: RW(20),
        alignItems: 'center',
    },
    gameTicketButtonsBlock: {
        width: '100%',
        height: RH(65),
        paddingHorizontal: RW(84),
        flexDirection: 'row',
        marginTop: 'auto',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: LIGHT_LABEL
    },
    detailImg: {
        width: RW(20),
        height: RH(31),
        marginLeft: RW(20),
    },
    ticketTextBlock: {
        marginBottom: RH(16),
    },
    firstTextBlock: {
        justifyContent: 'space-between',
        marginRight: RW(18),
        marginBottom: RH(24),
    },
    ticketText: {
        ...font('regular', 14, WHITE, 20),
        marginLeft: RW(31),
        marginBottom: RH(6)
    },
    ticketTextTwo: {
        ...font('bold', 16, ICON, 20),
        marginLeft: RW(31),
    },
    ticketImg: {
        width: RW(206),
        height: RH(218),
        resizeMode: 'contain',
    },
    ticketBlock: {
        paddingTop: RH(42),
        paddingBottom: 100
    },
    ticketImgBlock: {
        alignItems: 'center',
        marginBottom: RW(30),
    },
    errorText: {
        ...font('regular', 16, RED, 24),
        marginLeft: RW(20),
    },
    text: {
        ...font('regular', 16, WHITE, 25),
        width: RW(200),
        textAlign: 'center',
        marginTop: RH(49),
        marginBottom: RH(31),
    },
    topBlock: {
        width: RW(306),
        paddingBottom: RH(25),
        alignItems: 'center',
        backgroundColor: LIGHT_LABEL,
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 20,
    },
    titles: {
        ...font('regular', 16, ICON, 24),
        marginTop: RH(24),
        marginLeft: RW(20),
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
        backgroundColor: LIGHT_LABEL,
        marginRight: 'auto',
        borderRadius: RW(20),
        marginLeft: 'auto',
        width: RW(357),
        padding: RW(35),
        alignItems: "center",
        justifyContent: "space-between"

    },
    title: {
        ...font('bold', 24, WHITE, 24),
        marginBottom: RH(15),
    },
    textTwo: {
        ...font('regular', 16, WHITE, 19),
        textAlign: "center",
    },
    shareButton:{
        position: "absolute",
        bottom: '50%',
        left: '68%'
    }
})
