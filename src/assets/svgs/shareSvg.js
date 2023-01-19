import * as React from "react"
import Svg, {Path, Defs, LinearGradient, Stop, ClipPath, RadialGradient, G} from "react-native-svg"
import {RW} from "@/theme/utils";

function ShareSvg(props) {
  return (
      <Svg
          width={64}
          height={64}
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
      >
        <G clipPath="url(#clip0_4139_25458)">
          <Path
              d="M0 31.513a31.513 31.513 0 1063.026 0 31.513 31.513 0 00-63.026 0z"
              fill="#3EC9F4"
          />
          <Path
              style={{
                mixBlendMode: "multiply"
              }}
              d="M0 31.513a31.513 31.513 0 1063.026 0 31.513 31.513 0 00-63.026 0z"
              fill="url(#paint0_radial_4139_25458)"
          />
          <Path
              style={{
                mixBlendMode: "multiply"
              }}
              d="M0 31.513a31.513 31.513 0 1063.026 0 31.513 31.513 0 00-63.026 0z"
              fill="url(#paint1_radial_4139_25458)"
          />
          <Path
              d="M0 31.513a31.513 31.513 0 1063.026 0 31.513 31.513 0 00-63.026 0z"
              fill="url(#paint2_linear_4139_25458)"
          />
          <Path
              style={{
                mixBlendMode: "screen"
              }}
              opacity={0.5}
              d="M51.108 16.548c0 7.779-8.77 14.084-19.595 14.084s-19.595-6.305-19.595-14.084c0-7.778 8.775-14.084 19.61-14.084 10.835 0 19.58 6.306 19.58 14.084z"
              fill="url(#paint3_linear_4139_25458)"
          />
          <G
              style={{
                mixBlendMode: "screen"
              }}
          >
            <G
                style={{
                  mixBlendMode: "overlay"
                }}
            >
              <Path
                  d="M52.151 31.457a46.909 46.909 0 00-.329-5.52 43.406 43.406 0 00-1.812-8.402 47.218 47.218 0 00-1.012-2.803C45.344 5.886 38.877 0 31.528 0c-7.348 0-13.83 5.886-17.484 14.732a33.584 33.584 0 00-1.012 2.803 43.399 43.399 0 00-1.812 8.401 46.887 46.887 0 00-.33 5.521v.056A46.049 46.049 0 0012.5 43.73a34.023 34.023 0 005.982 12.196c3.543 4.433 8.097 7.085 13.047 7.085 4.949 0 9.493-2.662 13.051-7.085a34.008 34.008 0 005.982-12.201 45.982 45.982 0 001.61-12.212l-.021-.056z"
                  fill="url(#paint4_linear_4139_25458)"
                  fillOpacity={0.2}
                  style={{
                    mixBlendMode: "screen"
                  }}
              />
            </G>
          </G>
          <Path
              opacity={0.95}
              d="M44.039 10.395c-.193 1.108-1.66 1.771-3.28 1.518-1.62-.253-2.778-1.402-2.586-2.53.192-1.129 1.66-1.772 3.28-1.488 1.619.283 2.773 1.397 2.586 2.5z"
              fill="#fff"
          />
          <Path
              d="M44.65 54.357a53.69 53.69 0 01-26.092 0c-4.869-1.26-9.08-3.203-12.242-5.617a31.512 31.512 0 0050.582 0c-3.163 2.414-7.374 4.357-12.247 5.617z"
              fill="#3B97D9"
              opacity={0.4}
          />
        </G>
        <G clipPath="url(#clip1_4139_25458)">
          <Path
              d="M32.827 24.639c-3.854.2-7.458 1.804-10.223 4.569-2.96 2.96-4.59 6.882-4.59 11.043V46l2.082-4.8c2.433-4.848 7.365-8.061 12.731-8.36v6.625l13.16-10.749L32.826 18v6.639z"
              fill="#1A2848"
          />
        </G>
        <Defs>
          <RadialGradient
              id="paint0_radial_4139_25458"
              cx={0}
              cy={0}
              r={1}
              gradientUnits="userSpaceOnUse"
              gradientTransform="matrix(-55.6427 0 0 -40.6192 31.2 19.373)"
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
              id="paint1_radial_4139_25458"
              cx={0}
              cy={0}
              r={1}
              gradientUnits="userSpaceOnUse"
              gradientTransform="rotate(180 15.683 -.099) scale(46.2297)"
          >
            <Stop offset={0.23} stopColor="#3B97D9" />
            <Stop offset={0.24} stopColor="#3D98D9" />
            <Stop offset={0.52} stopColor="#8FC4E9" />
            <Stop offset={0.74} stopColor="#CBE4F5" />
            <Stop offset={0.91} stopColor="#F1F7FC" />
            <Stop offset={1} stopColor="#fff" />
          </RadialGradient>
          <LinearGradient
              id="paint2_linear_4139_25458"
              x1={2.96155e-7}
              y1={36.7654}
              x2={63.0267}
              y2={36.7898}
              gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#7DCE8A" />
            <Stop offset={1} stopColor="#4D7CFE" />
          </LinearGradient>
          <LinearGradient
              id="paint3_linear_4139_25458"
              x1={23.6943}
              y1={36.8368}
              x2={39.5344}
              y2={-4.26135}
              gradientUnits="userSpaceOnUse"
          >
            <Stop offset={0.12} />
            <Stop offset={0.26} stopColor="#343434" />
            <Stop offset={0.57} stopColor="#A0A0A0" />
            <Stop offset={0.79} stopColor="#E4E4E4" />
            <Stop offset={0.88} stopColor="#fff" />
          </LinearGradient>
          <LinearGradient
              id="paint4_linear_4139_25458"
              x1={31.5133}
              y1={63.0212}
              x2={31.5133}
              y2={-20.2632}
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
          <ClipPath id="clip0_4139_25458">
            <Path fill="#fff" d="M0 0H63.0162V63.0162H0z" />
          </ClipPath>
          <ClipPath id="clip1_4139_25458">
            <Path fill="#fff" transform="translate(18 18)" d="M0 0H28V28H0z" />
          </ClipPath>
        </Defs>
      </Svg>
  )
}

export default ShareSvg
