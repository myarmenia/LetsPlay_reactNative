import * as React from 'react'
import Svg, {
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
  RadialGradient,
  ClipPath,
} from 'react-native-svg'
import { memo } from 'react'
const ConfirmSvg = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={56} height={56} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path fill="#3EC9F4" d="M.564 27.877a27.68 27.68 0 1 0 55.36 0 27.68 27.68 0 0 0-55.36 0Z" />
      <Path
        fill="url(#b)"
        d="M.564 27.877a27.68 27.68 0 1 0 55.36 0 27.68 27.68 0 0 0-55.36 0Z"
        style={{
          mixBlendMode: 'multiply',
        }}
      />
      <Path
        fill="url(#c)"
        d="M.564 27.877a27.68 27.68 0 1 0 55.36 0 27.68 27.68 0 0 0-55.36 0Z"
        style={{
          mixBlendMode: 'multiply',
        }}
      />
      <Path
        fill="url(#d)"
        d="M.564 27.877a27.68 27.68 0 1 0 55.36 0 27.68 27.68 0 0 0-55.36 0Z"
        style={{
          mixBlendMode: 'hard-light',
        }}
      />
      <Path
        fill="url(#e)"
        d="M45.457 14.733c0 6.832-7.704 12.371-17.212 12.371s-17.212-5.538-17.212-12.37c0-6.833 7.708-12.372 17.225-12.372 9.517 0 17.199 5.539 17.199 12.371Z"
        opacity={0.7}
        style={{
          mixBlendMode: 'screen',
        }}
      />
      <G
        style={{
          mixBlendMode: 'screen',
        }}
      >
        <G
          style={{
            mixBlendMode: 'overlay',
          }}
        >
          <Path
            fill="url(#f)"
            fillOpacity={0.2}
            d="M46.373 27.828c-.001-1.62-.098-3.24-.29-4.85a38.127 38.127 0 0 0-1.59-7.378 41.454 41.454 0 0 0-.89-2.463c-3.21-7.77-8.89-12.94-15.345-12.94-6.454 0-12.148 5.17-15.358 12.94a29.526 29.526 0 0 0-.889 2.463 38.127 38.127 0 0 0-1.591 7.379 41.199 41.199 0 0 0-.289 4.85v.048a40.45 40.45 0 0 0 1.414 10.731 29.886 29.886 0 0 0 5.254 10.713c3.111 3.894 7.112 6.223 11.46 6.223 4.347 0 8.339-2.338 11.464-6.223a29.873 29.873 0 0 0 5.254-10.717 40.388 40.388 0 0 0 1.413-10.727l-.017-.049Z"
            style={{
              mixBlendMode: 'screen',
            }}
          />
        </G>
      </G>
      <Path
        fill="#fff"
        d="M39.246 9.328c-.169.973-1.458 1.556-2.88 1.333-1.422-.222-2.44-1.231-2.272-2.222.17-.992 1.459-1.556 2.881-1.307 1.422.249 2.436 1.227 2.271 2.196Z"
        opacity={0.95}
      />
      <Path
        fill="#3B97D9"
        d="M39.784 47.943a47.157 47.157 0 0 1-22.92 0c-4.276-1.107-7.974-2.814-10.753-4.934a27.681 27.681 0 0 0 44.43 0c-2.778 2.12-6.477 3.827-10.757 4.934Z"
        opacity={0.4}
        style={{
          mixBlendMode: 'screen',
        }}
      />
    </G>
    <Path
      stroke="#142A5C"
      strokeLinecap="round"
      strokeWidth={3}
      d="m15.018 26.706 10.68 10.68 17.926-17.927"
    />
    <Defs>
      <LinearGradient
        id="d"
        x1={0.564}
        x2={55.925}
        y1={32.491}
        y2={32.512}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#7DCE8A" />
        <Stop offset={1} stopColor="#4D7CFE" />
      </LinearGradient>
      <LinearGradient
        id="e"
        x1={21.377}
        x2={35.291}
        y1={32.554}
        y2={-3.545}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.12} />
        <Stop offset={0.26} stopColor="#343434" />
        <Stop offset={0.57} stopColor="#A0A0A0" />
        <Stop offset={0.79} stopColor="#E4E4E4" />
        <Stop offset={0.88} stopColor="#fff" />
      </LinearGradient>
      <LinearGradient
        id="f"
        x1={28.245}
        x2={28.245}
        y1={55.553}
        y2={-17.601}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#696969" />
        <Stop offset={0.02} stopColor="#898989" />
        <Stop offset={0.07} stopColor="#DADADA" />
        <Stop offset={0.09} stopColor="#fff" />
        <Stop offset={0.12} stopColor="#F3F3F3" />
        <Stop offset={0.17} stopColor="#D4D4D4" />
        <Stop offset={0.24} stopColor="#A2A2A2" />
        <Stop offset={0.32} stopColor="#5B5B5B" />
        <Stop offset={0.41} />
        <Stop offset={0.48} stopColor="#040404" />
        <Stop offset={0.56} stopColor="#101010" />
        <Stop offset={0.63} stopColor="#252525" />
        <Stop offset={0.71} stopColor="#414141" />
        <Stop offset={0.78} stopColor="#666" />
        <Stop offset={0.86} stopColor="#939393" />
        <Stop offset={0.93} stopColor="#C8C8C8" />
        <Stop offset={1} stopColor="#fff" />
      </LinearGradient>
      <RadialGradient
        id="b"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(-48.8748 0 0 -35.6786 27.969 17.214)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
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
        id="c"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="rotate(180 14.058 .012) scale(40.6068)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.23} stopColor="#3B97D9" />
        <Stop offset={0.24} stopColor="#3D98D9" />
        <Stop offset={0.52} stopColor="#8FC4E9" />
        <Stop offset={0.74} stopColor="#CBE4F5" />
        <Stop offset={0.91} stopColor="#F1F7FC" />
        <Stop offset={1} stopColor="#fff" />
      </RadialGradient>
      <ClipPath id="a">
        <Path fill="#fff" d="M.564.197h55.351v55.351H.565z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default memo(ConfirmSvg)
