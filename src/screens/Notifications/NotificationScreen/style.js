import { StyleSheet } from 'react-native'

import {
  ACTIVE,
  BACKGROUND,
  DARK_BLUE,
  ICON,
  LIGHT_GRAY,
  LIGHT_LABEL,
  RADIO_TEXT,
  RED,
  WHITE,
} from '@/theme/colors'
import { font, RH, RW } from '@/theme/utils'

export default StyleSheet.create({
  container: {
    paddingTop: RW(56),
    alignItems: 'center',
  },
  title: {
    ...font('bold', 24, WHITE, 29),
    marginBottom: RH(32),
  },
  row: {
    justifyContent: 'space-between',
    width: '100%',
    marginHorizontal: RW(13),
    marginBottom: RH(16),
  },
  settings: {
    backgroundColor: '#142A5C',
    borderRadius: 30,
    borderWidth: RW(1),
    borderColor: '#657AC5',
    paddingVertical: RW(5),
    paddingHorizontal: RW(7),

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  settingsText: {
    ...font('bold', 14, ICON, 17),
    marginRight: RW(5),
  },
  deleteAll: {},
  deleteAllText: {
    ...font('bold', 14, ICON, 17),
    textDecorationLine: 'underline',
  },
  noteBlock: {
    borderTopWidth: 1,
    borderTopColor: DARK_BLUE,
    borderStyle: 'solid',
    width: '100%',
    paddingTop: RH(23),
    paddingBottom: RH(17),
    paddingLeft: RW(13),
    paddingRight: RW(10),
  },
  firstLine: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: RH(10),
  },
  noteText: {
    ...font('bold', 14, WHITE, 20),
    marginLeft: RW(11),
  },
  deleteButton: {
    marginLeft: 'auto',
  },
  finishButton: {
    marginLeft: RW(45),
    flexDirection: 'row',
  },
  time: {
    marginLeft: 'auto',
    ...font('regular', 12, RADIO_TEXT, 15),
  },
  circle: {
    width: RW(25),
    height: RH(25),
    borderRadius: RW(25),
    backgroundColor: ACTIVE,
  },
})
