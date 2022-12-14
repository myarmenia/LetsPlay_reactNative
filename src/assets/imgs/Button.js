import React from 'react'
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Svg, Defs, Path, LinearGradient, Stop, Rect } from 'react-native-svg'

import { font, RH, RW } from '@/theme/utils'
import { LIGHT_LABEL } from '@/theme/colors'

const LightButton = ({ onPress, label, labelStyle, wrapper, size, selectAvailable }) => {
  const width = RW(size?.width) || RW(172)
  const height = RH(size?.height) || RH(36)
  return (
    <Pressable disabled={false} activeOpacity={0.6} onPress={onPress && onPress}>
      <Svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Rect
          x="0.911133"
          y="0.425781"
          width={width - RW(1)}
          height={height - RH(1)}
          rx="15"
          fill="url(#paint0_linear_3011_31801)"
        />
        <Rect
          x="9.98022"
          y="6.92578"
          width={width - RW(20)}
          height={height - RH(14)}
          rx="9.5"
          stroke="url(#paint1_linear_3011_31801)"
          strokeWidth="5"
        />
        <Rect
          x="7.98022"
          y="4.92578"
          width={width - RW(16)}
          height={height - RH(10)}
          rx="11.5"
          stroke="url(#paint2_linear_3011_31801)"
        />
        <View style={[styles.root, wrapper]}>
          <Text style={[styles.labelStyle, labelStyle]}>{label}</Text>
        </View>
        <Defs>
          <LinearGradient
            id="paint0_linear_3011_31801"
            x1="0.911134"
            y1="28.4258"
            x2="238.912"
            y2="28.8832"
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#7DCE8A" />
            <Stop offset="1" stopColor="#4D7CFE" />
          </LinearGradient>
          <LinearGradient
            id="paint1_linear_3011_31801"
            x1="118.105"
            y1="-6.48191"
            x2="119.271"
            y2="21.9453"
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="white" />
            <Stop offset="1" stopColor="white" stopOpacity="0" />
          </LinearGradient>
          <LinearGradient
            id="paint2_linear_3011_31801"
            x1="119.911"
            y1="44.4258"
            x2="119.852"
            y2="36.5571"
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="white" />
            <Stop offset="1" stopColor="white" stopOpacity="0" />
          </LinearGradient>
        </Defs>
      </Svg>
    </Pressable>
  )
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={onPress && onPress}>
      <Svg viewBox="0 0 172 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path
          d="M13.473 1.49492e-07L157.71 1.49492e-07C159.479 -0.000239717 161.231 0.288181 162.866 0.848787C164.501 1.40939 165.986 2.2312 167.237 3.26727C168.488 4.30334 169.481 5.53337 170.158 6.88711C170.835 8.24084 171.183 9.69176 171.183 11.157V24.8521C171.181 27.8097 169.76 30.6455 167.233 32.736C164.707 34.8264 161.281 36.0005 157.71 36H13.473C9.89977 36 6.47285 34.8245 3.94616 32.7322C1.41948 30.6399 4.51164e-06 27.802 4.51164e-06 24.843V11.1661C-0.00144412 9.70019 0.345976 8.2484 1.02241 6.89372C1.69885 5.53904 2.69103 4.30802 3.94226 3.27103C5.19349 2.23404 6.67924 1.41141 8.31459 0.850148C9.94993 0.288886 11.7028 -3.41347e-07 13.473 1.49492e-07Z"
          fill="url(#paint0_linear_1828_16026)"
        />
        <Path
          d="M152.856 2.9563H19.138C14.8771 2.96641 10.7941 4.37247 7.78087 6.86734C4.76769 9.36221 3.0692 12.7431 3.0564 16.2716V17.8694C3.05665 18.9082 3.20467 19.9434 3.49741 20.9536H8.91309V20.1538C8.92589 16.6253 10.6244 13.2443 13.6376 10.7495C16.6508 8.25459 20.7338 6.84854 24.9947 6.83842H158.719C161.074 6.84144 163.399 7.27804 165.526 8.11663C164.028 6.51393 162.108 5.21584 159.912 4.32149C157.716 3.42714 155.303 2.96019 152.856 2.9563Z"
          fill="url(#paint1_linear_1828_16026)"
        />
        <Path
          d="M165.033 23.6267C163.947 26.257 161.898 28.5415 159.171 30.162C156.444 31.7825 153.174 32.6583 149.818 32.6674H21.1068C18.089 32.6595 15.1346 31.9493 12.5807 30.6178C10.0269 29.2863 7.97653 27.387 6.66356 25.1369C6.45849 24.978 6.24239 24.8246 6.04614 24.6566C7.18893 27.2041 9.24299 29.4023 11.9341 30.9576C14.6251 32.513 17.8251 33.3515 21.1068 33.3613H149.822C153.179 33.3523 156.449 32.4764 159.176 30.8555C161.904 29.2346 163.953 26.9496 165.037 24.3188C165.037 24.3188 166.041 22.2225 165.999 17.3306C165.944 21.7295 165.033 23.6267 165.033 23.6267Z"
          fill="white"
        />
        <Defs>
          <LinearGradient
            id="paint0_linear_1828_16026"
            x1="8.04374e-07"
            y1="21"
            x2="171.183"
            y2="21.3155"
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#7DCE8A" />
            <Stop offset={1} stopColor="#4D7CFE" />
          </LinearGradient>
          <LinearGradient
            id="paint1_linear_1828_16026"
            x1="127.372"
            y1="-7.50497"
            x2="128.869"
            y2="11.275"
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="white" />
            <Stop offset={1} stopColor="white" stopOpacity={0.44} />
          </LinearGradient>
        </Defs>
      </Svg>
    </TouchableOpacity>
  )
}

export default LightButton;

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelStyle: {
    fontWeight: '700',
    ...font('bold', 18, LIGHT_LABEL, 24),
  },
})
