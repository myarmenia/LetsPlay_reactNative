

import { Dimensions, Platform, PixelRatio } from 'react-native'

import {
    FONT_ROBOTO_THIN,
    FONT_ROBOTO_BOLD,
    FONT_ROBOTO_BLACK,
    FONT_ROBOTO_LIGHT,
    FONT_ROBOTO_MEDIUM,
    FONT_ROBOTO_REGULAR,
} from './fonts'

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window')

export const RatioH = SCREEN_HEIGHT / 926
export const RatioW = SCREEN_WIDTH / 428

export const normalizePixel = (size) => {
    const newSize = size * RatioW

    if (Platform.OS === 'ios') {
        return Math.round(PixelRatio.roundToNearestPixel(newSize))
    }

    if (size > 12) return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2

    return Math.round(PixelRatio.roundToNearestPixel(newSize))
}

const getFontFamily = (fontFamily) => {
    switch (fontFamily) {
        // Roboto fonts
        case 'black':
            return FONT_ROBOTO_BLACK
        case 'bold':
            return FONT_ROBOTO_BOLD
        case 'light':
            return FONT_ROBOTO_LIGHT
        case 'medium':
            return FONT_ROBOTO_MEDIUM
        case 'regular':
            return FONT_ROBOTO_REGULAR
        case 'thin':
            return FONT_ROBOTO_THIN
    }
}
/**
 * Get font style object
 * @param {*} fontWeight: black | bold | heavy | light | medium | regular | semiBold | thin | ultraLight
 * @param {*} fontSize: number
 * @param {*} color: color constant
 * @param {*} lineHeight: number | string | undefined
 * @returns font style object
 */
export const font = (
    fontFamily,
    fontSize = undefined,
    color = undefined,
    lineHeight = undefined,
) => {
    const fontStyle = {
        fontFamily: getFontFamily(fontFamily),
    }
    if (fontSize !== undefined) {
        fontStyle.fontSize = normalizePixel(fontSize)
    }
    if (color !== undefined) {
        fontStyle.color = color
    }
    if (lineHeight !== undefined) {
        fontStyle.lineHeight = normalizePixel(lineHeight)
    }

    return fontStyle
}

export const RW = (value) => RatioW * value
export const RH = (value) => RatioH * value