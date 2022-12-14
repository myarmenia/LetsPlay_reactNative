import {StyleSheet} from 'react-native'

import {BLACK} from '@/theme/colors'
import {font, RH} from '@/theme/utils'

export default StyleSheet.create({
    btnBlock:{
        alignItems:'center',
        marginTop:'auto',
        marginBottom:'auto',
    },
    btnActiveGames:{
        marginBottom:RH(24),
    },
    title:font('bold', 18, BLACK)
})
