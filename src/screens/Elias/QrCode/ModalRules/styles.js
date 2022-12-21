import { StyleSheet } from 'react-native'
import { font, RH, RW } from '@/theme/utils'
import { WHITE } from '@/theme/colors'

export const styles = StyleSheet.create({
  body: {
    backgroundColor: '#001034',
    borderRadius: 20,
    padding: 25,
  },
  title: {
    color: WHITE,
    textAlign: 'center',
    fontSize: 20,
    marginBottom: RH(10),
  },
  text: {
    color: WHITE,
    textAlign: 'center',
    fontSize: 13,
    marginBottom: RH(6),
  },
  rulesText: {
    ...font("inter", 24, WHITE, 24),
    fontWeight: "700",
    textAlign: "center",
    marginTop: RH(42),
    marginBottom: RH(40)
  },
  wordGame: {
    ...font("inter", 16, WHITE, 19),
    fontWeight: "400",
    textAlign: "center",
    marginBottom: RH(20)
  }
})
