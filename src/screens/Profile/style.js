import { StyleSheet } from 'react-native'

import { DARK_BLUE, ICON, LIGHT_LABEL, WHITE } from '@/theme/colors'
import { font, RH, RW } from '@/theme/utils'

export default StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: RW(27),
    alignItems: 'center',
  },
  title: {
    ...font('bold', 24, WHITE, 24),
    marginBottom: RW(15),
  },
  imageBlock: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 87,
    height: 87,
    borderRadius: 43.5,
    resizeMode: 'cover',
    marginRight: RW(18),
    alignSelf: 'center',
  },

  infoBlock: {
    flexDirection: 'row',
    width: '100%',
    paddingLeft: RW(31),
    marginBottom: RH(30),
    marginTop: RH(15),
  },

  userEdit: {
    marginLeft: RW(80),
  },
  name: {
    ...font('bold', 24, ICON, 28),
    width: '88%',
  },
  id: {
    ...font('regular', 16, ICON, 19),
    marginTop: RH(8),
    width: '87%',
  },
  linkText: {
    ...font('regular', 16, WHITE, 19),
    paddingHorizontal: RW(12),
    paddingVertical: RH(10),
  },
  linkBlock: {
    // height: RH(56),
    width: '100%',
    paddingVertical: RH(17),
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: DARK_BLUE,
    paddingLeft: RW(44),
  },
  galleryText: {
    ...font('regular', 20, WHITE, 25),
    textAlign: 'center',
    marginTop: RH(40),
  },
  GalleryTitle: {
    ...font('regular', 24, WHITE, 26),
  },
  galleryTextBlock: {
    marginTop: RH(208),
    paddingTop: RH(23),
    paddingBottom: RH(40),
    borderRadius: RW(20),
    backgroundColor: LIGHT_LABEL,
    width: RW(325),
    alignItems: 'center',
    justifyContent: 'center',
  },
})
