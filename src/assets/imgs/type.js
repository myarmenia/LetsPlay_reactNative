import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {
  Svg,
  Defs,
  Path,
  LinearGradient,
  Stop,
  Rect,
  G,
  RadialGradient,
  ClipPath,
} from 'react-native-svg'

import { LIGHT_LABEL } from '@/theme/colors'
import { font, RW } from '@/theme/utils'

const Type = ({ title, size = 207, onPress, wrapper, labelStyle }) => {
  return (
    <TouchableOpacity
      onPress={onPress && onPress}
      activeOpacity={0.7}
      style={{ borderRadius: RW(size / 2) }}
    >
      <Svg
        width={RW(size)}
        height={RW(size)}
        viewBox="0 0 207 207"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <G clipPath="url(#clip0_1223_17418)">
          <Path
            d="M0.363281 103.794C0.363284 124.195 6.40877 144.138 17.7354 161.102C29.062 178.066 45.1611 191.289 63.9974 199.098C82.8336 206.908 103.561 208.954 123.559 204.977C143.557 201.001 161.928 191.181 176.349 176.758C190.77 162.335 200.593 143.958 204.577 123.95C208.561 103.942 206.526 83.2008 198.73 64.3494C190.934 45.4981 177.727 29.3829 160.779 18.0413C143.831 6.69967 123.903 0.640944 103.513 0.631115C89.9698 0.624587 76.5577 3.28815 64.0433 8.46962C51.5288 13.6511 40.1572 21.249 30.5782 30.8291C20.9992 40.4093 13.4005 51.784 8.21608 64.3035C3.03169 76.823 0.36328 90.2419 0.363281 103.794Z"
            fill="#3EC9F4"
          />
          <Path
            style="mix-blend-mode:multiply"
            d="M0.363281 103.794C0.363284 124.195 6.40877 144.138 17.7354 161.102C29.062 178.066 45.1611 191.289 63.9974 199.098C82.8336 206.908 103.561 208.954 123.559 204.977C143.557 201.001 161.928 191.181 176.349 176.758C190.77 162.335 200.593 143.958 204.577 123.95C208.561 103.942 206.526 83.2008 198.73 64.3494C190.934 45.4981 177.727 29.3829 160.779 18.0413C143.831 6.69967 123.903 0.640944 103.513 0.631115C89.9698 0.624587 76.5577 3.28815 64.0433 8.46962C51.5288 13.6511 40.1572 21.249 30.5782 30.8291C20.9992 40.4093 13.4005 51.784 8.21608 64.3035C3.03169 76.823 0.36328 90.2419 0.363281 103.794Z"
            fill="url(#paint0_radial_1223_17418)"
          />
          <Path
            style="mix-blend-mode:multiply"
            d="M0.363281 103.794C0.363284 124.195 6.40877 144.138 17.7354 161.102C29.062 178.066 45.1611 191.289 63.9974 199.098C82.8336 206.908 103.561 208.954 123.559 204.977C143.557 201.001 161.928 191.181 176.349 176.758C190.77 162.335 200.593 143.958 204.577 123.95C208.561 103.942 206.526 83.2008 198.73 64.3494C190.934 45.4981 177.727 29.3829 160.779 18.0413C143.831 6.69967 123.903 0.640944 103.513 0.631115C89.9698 0.624587 76.5577 3.28815 64.0433 8.46962C51.5288 13.6511 40.1572 21.249 30.5782 30.8291C20.9992 40.4093 13.4005 51.784 8.21608 64.3035C3.03169 76.823 0.36328 90.2419 0.363281 103.794Z"
            fill="url(#paint1_radial_1223_17418)"
          />
          <G style="mix-blend-mode:hard-light">
            <Path
              d="M0.363281 103.794C0.363284 124.195 6.40877 144.138 17.7354 161.102C29.062 178.066 45.1611 191.289 63.9974 199.098C82.8336 206.908 103.561 208.954 123.559 204.977C143.557 201.001 161.928 191.181 176.349 176.758C190.77 162.335 200.593 143.958 204.577 123.95C208.561 103.942 206.526 83.2008 198.73 64.3494C190.934 45.4981 177.727 29.3829 160.779 18.0413C143.831 6.69967 123.903 0.640944 103.513 0.631115C89.9698 0.624587 76.5577 3.28815 64.0433 8.46962C51.5288 13.6511 40.1572 21.249 30.5782 30.8291C20.9992 40.4093 13.4005 51.784 8.21608 64.3035C3.03169 76.823 0.36328 90.2419 0.363281 103.794Z"
              fill="url(#paint2_linear_1223_17418)"
            />
          </G>
          <Path
            style="mix-blend-mode:screen"
            opacity={0.1}
            d="M167.572 54.8051C167.572 80.2685 138.879 100.911 103.464 100.911C68.0482 100.911 39.355 80.2685 39.355 54.8051C39.355 29.3416 68.0648 8.69922 103.513 8.69922C138.962 8.69922 167.572 29.3416 167.572 54.8051Z"
            fill="url(#paint3_linear_1223_17418)"
          />
          <G style="mix-blend-mode:screen">
            <G style="mix-blend-mode:overlay">
              <Path
                d="M170.983 103.611C170.98 97.5705 170.621 91.5352 169.907 85.5368C168.845 76.1961 166.86 66.9839 163.979 58.0356C162.953 54.8879 161.849 51.8285 160.668 48.8575C148.714 19.8985 127.554 0.631104 103.513 0.631104C79.4726 0.631104 58.2631 19.8985 46.309 48.8575C45.0837 51.8285 43.9799 54.8879 42.9976 58.0356C40.1174 66.9839 38.1319 76.1961 37.0701 85.5368C36.3564 91.5352 35.997 97.5705 35.9939 103.611V103.794C35.9506 117.3 37.7215 130.751 41.259 143.786C45.0339 158.276 51.69 171.855 60.8294 183.713C72.4193 198.225 87.3206 206.906 103.513 206.906C119.706 206.906 134.574 198.192 146.214 183.713C155.356 171.851 162.013 158.266 165.784 143.77C169.323 130.741 171.094 117.295 171.049 103.794L170.983 103.611Z"
                fill="url(#paint4_linear_1223_17418)"
                fillOpacity={0.2}
                style="mix-blend-mode:screen"
              />
            </G>
          </G>
          <Path
            opacity={0.95}
            d="M144.442 34.6597C143.813 38.2878 139.011 40.4581 133.713 39.6298C128.415 38.8014 124.623 35.0407 125.253 31.3463C125.882 27.6519 130.683 25.5478 135.981 26.4756C141.28 27.4033 145.055 31.0481 144.442 34.6597Z"
            fill="white"
          />
          <G style="mix-blend-mode:screen" opacity={0.4}>
            <Path
              d="M146.446 178.577C118.423 185.601 89.1007 185.601 61.0777 178.577C45.1499 174.452 31.3745 168.09 21.0264 160.188C30.6195 173.1 43.0982 183.589 57.4654 190.815C71.8325 198.042 87.6898 201.805 103.77 201.805C119.85 201.805 135.707 198.042 150.074 190.815C164.442 183.589 176.92 173.1 186.513 160.188C176.165 168.09 162.39 174.452 146.446 178.577Z"
              fill="#3B97D9"
            />
          </G>
        </G>
        <View style={[styles.root, wrapper]}>
          <Text style={[styles.labelStyle, labelStyle]}>{title}</Text>
        </View>
        <Defs>
          <RadialGradient
            id="paint0_radial_1223_17418"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(102.437 64.0509) rotate(180) scale(182.044 132.972)"
          >
            <Stop stopColor="white" />
            <Stop offset={0.24} stopColor="#FDFEFE" />
            <Stop offset={0.33} stopColor="#F6F8FA" />
            <Stop offset={0.39} stopColor="#EAEFF2" />
            <Stop offset={0.44} stopColor="#DAE2E8" />
            <Stop offset={0.48} stopColor="#C4D1DA" />
            <Stop offset={0.52} stopColor="#A8BCC9" />
            <Stop offset={0.55} stopColor="#88A2B5" />
            <Stop offset={0.59} stopColor="#62859E" />
            <Stop offset={0.61} stopColor="#396584" />
            <Stop offset={0.63} stopColor="#1D4F73" />
            <Stop offset={0.81} stopColor="#205D7D" />
            <Stop offset={0.91} stopColor="#44A5BA" />
            <Stop offset={1} stopColor="#57D9E8" />
          </RadialGradient>
          <RadialGradient
            id="paint1_radial_1223_17418"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(102.983 -0.015) rotate(180) scale(151.248 151.339)"
          >
            <Stop offset={0.23} stopColor="#3B97D9" />
            <Stop offset={0.24} stopColor="#3D98D9" />
            <Stop offset={0.52} stopColor="#8FC4E9" />
            <Stop offset={0.74} stopColor="#CBE4F5" />
            <Stop offset={0.91} stopColor="#F1F7FC" />
            <Stop offset={1} stopColor="white" />
          </RadialGradient>
          <LinearGradient
            id="paint2_linear_1223_17418"
            x1="0.363282"
            y1="120.988"
            x2="206.565"
            y2="121.067"
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#7DCE8A" />
            <Stop offset={1} stopColor="#4D7CFE" />
          </LinearGradient>
          <LinearGradient
            id="paint3_linear_1223_17418"
            x1="77.8831"
            y1="121.222"
            x2="129.761"
            y2="-13.2973"
            gradientUnits="userSpaceOnUse"
          >
            <Stop offset={0.12} />
            <Stop offset={0.26} stopColor="#343434" />
            <Stop offset={0.57} stopColor="#A0A0A0" />
            <Stop offset={0.79} stopColor="#E4E4E4" />
            <Stop offset={0.88} stopColor="white" />
          </LinearGradient>
          <LinearGradient
            id="paint4_linear_1223_17418"
            x1="103.464"
            y1="206.939"
            x2="103.464"
            y2="-65.703"
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#696969" />
            <Stop offset={0.02} stopColor="#898989" />
            <Stop offset={0.07} stopColor="#DADADA" />
            <Stop offset={0.09} stopColor="white" />
            <Stop offset={0.12} stopColor="#F3F3F3" />
            <Stop offset={0.17} stopColor="#D4D4D4" />
            <Stop offset={0.24} stopColor="#A2A2A2" />
            <Stop offset={0.32} stopColor="#5B5B5B" />
            <Stop offset={0.41} />
            <Stop offset={0.48} stopColor="#040404" />
            <Stop offset={0.56} stopColor="#101010" />
            <Stop offset={0.63} stopColor="#252525" />
            <Stop offset={0.71} stopColor="#414141" />
            <Stop offset={0.78} stopColor="#666666" />
            <Stop offset={0.86} stopColor="#939393" />
            <Stop offset={0.93} stopColor="#C8C8C8" />
            <Stop offset={1} stopColor="white" />
          </LinearGradient>
          <ClipPath id="clip0_1223_17418">
            <Rect
              width="206.168"
              height="206.292"
              fill="white"
              transform="translate(0.363281 0.631104)"
            />
          </ClipPath>
        </Defs>
      </Svg>
    </TouchableOpacity>
  )
}

export default Type

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelStyle: {
    fontWeight: '700',
    ...font('bold', 24, LIGHT_LABEL, 24),
  },
})
