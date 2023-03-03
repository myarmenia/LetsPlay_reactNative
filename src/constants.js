import { Dimensions, Platform, StatusBar } from 'react-native'
import { RH, RW } from '@/theme/utils'

export const APP_NAME = 'GameOrganizing'
export const APP_DISPLAY_NAME = 'GameOrganizing'
export const APP_LANG_KEY = '@GameOrganizingLang'
export const APP_TOKEN_KEY = '@GameOrganizingToken'
export const CREDIT_PURCHASED_KEY = '@CreditPurchased'
export const ACCEPT_LOCATION_USAGE = '@LocationUsage'
export const LAST_LOCATION_PERMISSION = '@LastLocation'
export const ONBOARDING_CHECK_KEY = '@GameOrganizingOnboarding'

export const APP_LANGUAGES = {
  RU: 'ru',
}

export const SERVER_ENDPOINT = ''
export const DEEP_LINKING_SCHEMA = `gameOrganizing:/`

export const IS_IOS = Platform.OS === 'ios'

export const NAV_HEADER_OPTION = {
  headerShown: false,
  gestureEnabled: true,
  // gestureDirection: 'horizontal',
  headerStatusBarHeight: IS_IOS ? undefined : 0,
}

export const HORIZONTAL_DIM = RW(16)
export const TAB_BAR_HEIGHT = RH(65)
export const STATUS_BAR = IS_IOS ? RH(35) : StatusBar.currentHeight
export const NAV_HEADER = IS_IOS ? RH(60) : RH(65)
export const HEADER_HEIGHT = STATUS_BAR + NAV_HEADER + RH(5)

export const SCREEN_HEIGHT = Dimensions.get('window').height
export const SCREEN_WIDTH = Dimensions.get('window').width

export const REQUEST_TIMEOUT = 10000
export const _storageUrl = IS_IOS ? 'https://to-play.ru/storage/' : 'http://to-play.ru/storage/'
