// import React from 'react'
// import {
//   Svg,
//   Defs,
//   Path,
//   LinearGradient,
//   Stop,
//   Rect,
//   G,
//   RadialGradient,
//   ClipPath,
// } from 'react-native-svg'
//
// import { RW } from '@/theme/utils'
//
// const Main = ({ isAdd = false, size = 64 }) => {
//   return (
//     <Svg
//       width={RW(size)}
//       height={RW(size)}
//       viewBox="0 0 64 64"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <G clip-path="url(#clip0_1844_1616)">
//         <Path
//           d="M0.161865 31.6831C0.161866 37.9151 2.0097 44.0073 5.47174 49.1893C8.93378 54.3712 13.8546 58.4104 19.612 60.796C25.3693 63.1816 31.7048 63.8065 37.8173 62.5918C43.9299 61.3771 49.545 58.3773 53.9528 53.9716C58.3606 49.5659 61.3631 43.9522 62.5808 37.8403C63.7985 31.7283 63.1766 25.3926 60.7937 19.634C58.4109 13.8755 54.3741 8.95276 49.1938 5.48823C44.0135 2.02369 37.9223 0.172928 31.6902 0.169926C27.5505 0.167931 23.4511 0.981573 19.626 2.56436C15.8009 4.14715 12.3251 6.46808 9.39721 9.39455C6.46934 12.321 4.14675 15.7957 2.56211 19.62C0.977479 23.4444 0.161865 27.5434 0.161865 31.6831Z"
//           fill="#3EC9F4"
//         />
//         <Path
//           style="mix-blend-mode:multiply"
//           d="M0.161865 31.6831C0.161866 37.9151 2.0097 44.0073 5.47174 49.1893C8.93378 54.3712 13.8546 58.4104 19.612 60.796C25.3693 63.1816 31.7048 63.8065 37.8173 62.5918C43.9299 61.3771 49.545 58.3773 53.9528 53.9716C58.3606 49.5659 61.3631 43.9522 62.5808 37.8403C63.7985 31.7283 63.1766 25.3926 60.7937 19.634C58.4109 13.8755 54.3741 8.95276 49.1938 5.48823C44.0135 2.02369 37.9223 0.172928 31.6902 0.169926C27.5505 0.167931 23.4511 0.981573 19.626 2.56436C15.8009 4.14715 12.3251 6.46808 9.39721 9.39455C6.46934 12.321 4.14675 15.7957 2.56211 19.62C0.977479 23.4444 0.161865 27.5434 0.161865 31.6831Z"
//           fill="url(#paint0_radial_1844_1616)"
//         />
//         <Path
//           style="mix-blend-mode:multiply"
//           d="M0.161865 31.6831C0.161866 37.9151 2.0097 44.0073 5.47174 49.1893C8.93378 54.3712 13.8546 58.4104 19.612 60.796C25.3693 63.1816 31.7048 63.8065 37.8173 62.5918C43.9299 61.3771 49.545 58.3773 53.9528 53.9716C58.3606 49.5659 61.3631 43.9522 62.5808 37.8403C63.7985 31.7283 63.1766 25.3926 60.7937 19.634C58.4109 13.8755 54.3741 8.95276 49.1938 5.48823C44.0135 2.02369 37.9223 0.172928 31.6902 0.169926C27.5505 0.167931 23.4511 0.981573 19.626 2.56436C15.8009 4.14715 12.3251 6.46808 9.39721 9.39455C6.46934 12.321 4.14675 15.7957 2.56211 19.62C0.977479 23.4444 0.161865 27.5434 0.161865 31.6831Z"
//           fill="url(#paint1_radial_1844_1616)"
//         />
//         <G style="mix-blend-mode:hard-light">
//           <Path
//             d="M0.161865 31.6831C0.161866 37.9151 2.0097 44.0073 5.47174 49.1893C8.93378 54.3712 13.8546 58.4104 19.612 60.796C25.3693 63.1816 31.7048 63.8065 37.8173 62.5918C43.9299 61.3771 49.545 58.3773 53.9528 53.9716C58.3606 49.5659 61.3631 43.9522 62.5808 37.8403C63.7985 31.7283 63.1766 25.3926 60.7937 19.634C58.4109 13.8755 54.3741 8.95276 49.1938 5.48823C44.0135 2.02369 37.9223 0.172928 31.6902 0.169926C27.5505 0.167931 23.4511 0.981573 19.626 2.56436C15.8009 4.14715 12.3251 6.46808 9.39721 9.39455C6.46934 12.321 4.14675 15.7957 2.56211 19.62C0.977479 23.4444 0.161865 27.5434 0.161865 31.6831Z"
//             fill="url(#paint2_linear_1844_1616)"
//           />
//         </G>
//         <Path
//           style="mix-blend-mode:screen"
//           opacity={0.2}
//           d="M51.2701 16.7185C51.2701 24.4969 42.4999 30.8025 31.675 30.8025C20.8501 30.8025 12.0798 24.4969 12.0798 16.7185C12.0798 8.94019 20.8551 2.63452 31.6902 2.63452C42.5252 2.63452 51.2701 8.94019 51.2701 16.7185Z"
//           fill="url(#paint3_linear_1844_1616)"
//         />
//         <G style="mix-blend-mode:screen">
//           <G style="mix-blend-mode:overlay">
//             <Path
//               d="M52.3126 31.6274C52.3116 29.7821 52.2018 27.9385 51.9836 26.1061C51.6591 23.2528 51.0522 20.4388 50.1719 17.7053C49.8581 16.7438 49.5208 15.8093 49.1598 14.9017C45.5059 6.05555 39.0383 0.169922 31.6901 0.169922C24.342 0.169922 17.8592 6.05555 14.2053 14.9017C13.8308 15.8093 13.4934 16.7438 13.1932 17.7053C12.3129 20.4388 11.706 23.2528 11.3814 26.1061C11.1633 27.9385 11.0534 29.7821 11.0525 31.6274V31.6831C11.0392 35.809 11.5805 39.9179 12.6618 43.8997C13.8156 48.3259 15.8501 52.474 18.6436 56.096C22.1861 60.5292 26.7407 63.181 31.6901 63.181C36.6395 63.181 41.184 60.5191 44.7417 56.096C47.5362 52.4727 49.5707 48.3227 50.7235 43.8946C51.8052 39.9147 52.3465 35.8073 52.3328 31.6831L52.3126 31.6274Z"
//               fill="url(#paint4_linear_1844_1616)"
//               fillOpacity={0.2}
//               style="mix-blend-mode:screen"
//             />
//           </G>
//         </G>
//         <Path
//           opacity={0.95}
//           d="M44.2002 10.5646C44.0079 11.6729 42.5403 12.3359 40.9208 12.0829C39.3014 11.8298 38.1425 10.681 38.3348 9.55249C38.5271 8.42395 39.9947 7.78124 41.6142 8.06464C43.2336 8.34804 44.3874 9.4614 44.2002 10.5646Z"
//           fill="white"
//         />
//         <G style="mix-blend-mode:screen" opacity={0.4}>
//           <Path
//             d="M44.8125 54.5272C36.2472 56.6729 27.2848 56.6729 18.7194 54.5272C13.851 53.2671 9.64049 51.3238 6.47754 48.9098C9.40972 52.8543 13.2239 56.0583 17.6153 58.2657C22.0067 60.4732 26.8535 61.6228 31.7685 61.6228C36.6835 61.6228 41.5304 60.4732 45.9217 58.2657C50.3131 56.0583 54.1273 52.8543 57.0595 48.9098C53.8966 51.3238 49.686 53.2671 44.8125 54.5272Z"
//             fill="#3B97D9"
//           />
//         </G>
//         {isAdd ? (
//           <>
//             <Path
//               d="M31.7688 21.6831V41.6831"
//               stroke="#0A0D3A"
//               strokeWidth={5}
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//             <Path
//               d="M41.7686 31.6831L21.7686 31.6831"
//               stroke="#0A0D3A"
//               strokeWidth={5}
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </>
//         ) : (
//           <Path
//             d="M31.7979 21.8808L31.7984 21.8803C31.8542 21.8354 31.9212 21.8107 31.9895 21.8081C32.065 21.8059 32.1401 21.8307 32.2017 21.8804L32.2022 21.8808L40.0982 28.2272C40.0982 28.2272 40.0982 28.2273 40.0982 28.2273C40.9808 28.9369 41.5 30.0241 41.5 31.1763V41.9963C41.5 42.5025 41.0832 42.9132 40.6111 42.9132H35.0556C34.5836 42.9132 34.1667 42.5025 34.1667 41.9963V36.3284C34.1667 36.129 34.097 35.9276 33.9464 35.774C33.795 35.6195 33.5928 35.545 33.3889 35.545H30.6111C30.4073 35.545 30.2051 35.6195 30.0537 35.774C29.9031 35.9276 29.8334 36.129 29.8334 36.3284V41.9963C29.8334 42.5025 29.4165 42.9132 28.9445 42.9132H23.3889C22.9169 42.9132 22.5 42.5025 22.5 41.9963V31.1763C22.5 30.0241 23.0192 28.9369 23.9018 28.2273C23.9018 28.2273 23.9019 28.2272 23.9019 28.2272L31.7979 21.8808Z"
//             fill="#001034"
//             stroke="#001034"
//           />
//         )}
//       </G>
//       <Defs>
//         <RadialGradient
//           id="paint0_radial_1844_1616"
//           cx={0}
//           cy={0}
//           r={1}
//           gradientUnits="userSpaceOnUse"
//           gradientTransform="translate(31.3612 19.5428) rotate(180) scale(55.6427 40.6192)"
//         >
//           <Stop stopColor="white" />
//           <Stop offset={0.24} stopColor="#FDFEFE" />
//           <Stop offset={0.33} stopColor="#F6F8FA" />
//           <Stop offset={0.39} stopColor="#EAEFF2" />
//           <Stop offset={0.44} stopColor="#DAE2E8" />
//           <Stop offset={0.48} stopColor="#C4D1DA" />
//           <Stop offset={0.52} stopColor="#A8BCC9" />
//           <Stop offset={0.55} stopColor="#88A2B5" />
//           <Stop offset={0.59} stopColor="#62859E" />
//           <Stop offset={0.61} stopColor="#396584" />
//           <Stop offset={0.63} stopColor="#1D4F73" />
//           <Stop offset={0.81} stopColor="#205D7D" />
//           <Stop offset={0.91} stopColor="#44A5BA" />
//           <Stop offset={1} stopColor="#57D9E8" />
//         </RadialGradient>
//         <RadialGradient
//           id="paint1_radial_1844_1616"
//           cx={0}
//           cy={0}
//           r={1}
//           gradientUnits="userSpaceOnUse"
//           gradientTransform="translate(31.5283 -0.0274441) rotate(180) scale(46.2297)"
//         >
//           <Stop offset={0.23} stopColor="#3B97D9" />
//           <Stop offset={0.24} stopColor="#3D98D9" />
//           <Stop offset={0.52} stopColor="#8FC4E9" />
//           <Stop offset={0.74} stopColor="#CBE4F5" />
//           <Stop offset={0.91} stopColor="#F1F7FC" />
//           <Stop offset={1} stopColor="white" />
//         </RadialGradient>
//         <LinearGradient
//           id="paint2_linear_1844_1616"
//           x1={0.161866}
//           y1={36.9353}
//           x2={63.1885}
//           y2={36.9598}
//           gradientUnits="userSpaceOnUse"
//         >
//           <Stop stopColor="#7DCE8A" />
//           <Stop offset={1} stopColor="#4D7CFE" />
//         </LinearGradient>
//         <LinearGradient
//           id="paint3_linear_1844_1616"
//           x1={23.8561}
//           y1={37.007}
//           x2={39.6962}
//           y2={-4.09119}
//           gradientUnits="userSpaceOnUse"
//         >
//           <Stop offset={0.12} />
//           <Stop offset={0.26} stopColor="#343434" />
//           <Stop offset={0.57} stopColor="#A0A0A0" />
//           <Stop offset={0.79} stopColor="#E4E4E4" />
//           <Stop offset={0.88} stopColor="white" />
//         </LinearGradient>
//         <LinearGradient
//           id="paint4_linear_1844_1616"
//           x1={31.6749}
//           y1={63.1912}
//           x2={31.6749}
//           y2={-20.0932}
//           gradientUnits="userSpaceOnUse"
//         >
//           <Stop stopColor="#696969" />
//           <Stop offset={0.02} stopColor="#898989" />
//           <Stop offset={0.07} stopColor="#DADADA" />
//           <Stop offset={0.09} stopColor="white" />
//           <Stop offset={0.12} stopColor="#F3F3F3" />
//           <Stop offset={0.17} stopColor="#D4D4D4" />
//           <Stop offset={0.24} stopColor="#A2A2A2" />
//           <Stop offset={0.32} stopColor="#5B5B5B" />
//           <Stop offset={0.41} />
//           <Stop offset={0.48} stopColor="#040404" />
//           <Stop offset={0.56} stopColor="#101010" />
//           <Stop offset={0.63} stopColor="#252525" />
//           <Stop offset={0.71} stopColor="#414141" />
//           <Stop offset={0.78} stopColor="#666666" />
//           <Stop offset={0.86} stopColor="#939393" />
//           <Stop offset={0.93} stopColor="#C8C8C8" />
//           <Stop offset={1} stopColor="white" />
//         </LinearGradient>
//         <ClipPath id="clip0_1844_1616">
//           <Rect
//             width={63.0162}
//             height={63.0162}
//             fill="white"
//             transform="translate(0.161865 0.169922)"
//           />
//         </ClipPath>
//       </Defs>
//     </Svg>
//   )
// }
//
// export default Main

import React from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
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

import {LIGHT_LABEL} from '@/theme/colors'
import {font, RW} from '@/theme/utils'
import AddSvg from "@/assets/svgs/addSvg";
import HomeSvg from "@/assets/svgs/homeSvg";

const Main = ({size = 207, onPress, label, isAdd = false,}) => {
    return (

        <Svg
            width={RW(size)}
            height={RW(size)}
            viewBox="0 0 207 207"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <G clipPath="url(#clip0_3172_10177)">
                <Path
                    d="M0 103.162c0 20.402 6.045 40.345 17.372 57.309a103.11 103.11 0 0046.262 37.996 103.035 103.035 0 0059.562 5.879 103.083 103.083 0 0052.79-28.219 103.185 103.185 0 0028.228-52.808 103.226 103.226 0 00-5.847-59.6 103.152 103.152 0 00-37.951-46.309A103.056 103.056 0 0063.68 7.84a103.098 103.098 0 00-33.465 22.359A103.167 103.167 0 007.853 63.672 103.216 103.216 0 000 103.162z"
                    fill="url(#paint0_linear_3172_10177)"
                />
                <Path
                    style={{
                        mixBlendMode: "multiply"
                    }}
                    d="M0 103.162c0 20.402 6.045 40.345 17.372 57.309a103.11 103.11 0 0046.262 37.996 103.035 103.035 0 0059.562 5.879 103.083 103.083 0 0052.79-28.219 103.185 103.185 0 0028.228-52.808 103.226 103.226 0 00-5.847-59.6 103.152 103.152 0 00-37.951-46.309A103.056 103.056 0 0063.68 7.84a103.098 103.098 0 00-33.465 22.359A103.167 103.167 0 007.853 63.672 103.216 103.216 0 000 103.162z"
                    fill="url(#paint1_radial_3172_10177)"
                    fillOpacity={0.2}
                />
                <G opacity={0.8}>
                    <Path
                        d="M0 103.162c0 20.402 6.045 40.345 17.372 57.309a103.11 103.11 0 0046.262 37.996 103.035 103.035 0 0059.562 5.879 103.083 103.083 0 0052.79-28.219 103.185 103.185 0 0028.228-52.808 103.226 103.226 0 00-5.847-59.6 103.152 103.152 0 00-37.951-46.309A103.056 103.056 0 0063.68 7.84a103.098 103.098 0 00-33.465 22.359A103.167 103.167 0 007.853 63.672 103.216 103.216 0 000 103.162z"
                        fill="url(#paint2_radial_3172_10177)"
                    />
                    <Path
                        d="M0 103.162c0 20.402 6.045 40.345 17.372 57.309a103.11 103.11 0 0046.262 37.996 103.035 103.035 0 0059.562 5.879 103.083 103.083 0 0052.79-28.219 103.185 103.185 0 0028.228-52.808 103.226 103.226 0 00-5.847-59.6 103.152 103.152 0 00-37.951-46.309A103.056 103.056 0 0063.68 7.84a103.098 103.098 0 00-33.465 22.359A103.167 103.167 0 007.853 63.672 103.216 103.216 0 000 103.162z"
                        fill="url(#paint3_radial_3172_10177)"
                    />
                </G>
                <Path
                    opacity={0.6}
                    d="M146.179 178.362a175.557 175.557 0 01-85.368 0c-15.928-4.125-29.703-10.487-40.051-18.389a103.122 103.122 0 0036.439 30.628 103.052 103.052 0 0092.609 0 103.123 103.123 0 0036.439-30.628c-10.348 7.902-24.124 14.264-40.068 18.389z"
                    fill="#50DFFF"
                />
                <Path
                    style={{
                        mixBlendMode: "screen"
                    }}
                    d="M169.99 103.205a153.778 153.778 0 00-1.076-18.075 142.197 142.197 0 00-5.928-27.5 154.249 154.249 0 00-3.311-9.179C147.721 19.492 126.561.225 102.52.225c-24.04 0-45.25 19.267-57.204 48.226a110.101 110.101 0 00-3.312 9.178 142.166 142.166 0 00-5.927 27.501 153.628 153.628 0 00-1.076 18.075v.182a150.845 150.845 0 005.265 39.993 111.41 111.41 0 0019.57 39.926c11.59 14.513 26.491 23.194 42.684 23.194 16.193 0 31.061-8.714 42.701-23.194a111.371 111.371 0 0019.57-39.943 150.592 150.592 0 005.265-39.976l-.066-.182z"
                    fill="url(#paint4_linear_3172_10177)"
                    fillOpacity={0.4}
                />
                <Path
                    style={{
                        mixBlendMode: "screen"
                    }}
                    d="M168.732 50.123c0 25.464-28.693 46.106-64.108 46.106-35.416 0-64.109-20.642-64.109-46.106 0-25.463 28.71-46.105 64.158-46.105 35.449 0 64.059 20.642 64.059 46.105z"
                    fill="url(#paint5_linear_3172_10177)"
                    opacity={0.5}
                />
                <Path
                    opacity={0.95}
                    d="M145.738 30.148c-.651 4.017-5.621 6.42-11.105 5.503-5.484-.917-9.408-5.08-8.757-9.171.651-4.09 5.621-6.42 11.105-5.393 5.484 1.028 9.391 5.063 8.757 9.061z"
                    fill="#fff"
                />
            </G>

            <View style={{
                backgroundColor: 'rgba(255, 0, 0, 0)',
                width: '100%',
                height: '100%',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                {label}
            </View>
            <Defs>
                <LinearGradient
                    id="paint0_linear_3172_10177"
                    x1={9.6764e-7}
                    y1={120.356}
                    x2={206.202}
                    y2={120.436}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#43D351"/>
                    <Stop offset={1} stopColor="#0445F4"/>
                </LinearGradient>
                <RadialGradient
                    id="paint1_radial_3172_10177"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(-151.248 0 0 -151.339 102.62 -.646)"
                >
                    <Stop offset={0.23} stopColor="#3B97D9"/>
                    <Stop offset={0.24} stopColor="#3D98D9"/>
                    <Stop offset={0.52} stopColor="#0AC3EB"/>
                    <Stop offset={0.74} stopColor="#E6FAFF"/>
                    <Stop offset={0.91} stopColor="#30C5F2"/>
                    <Stop offset={1} stopColor="#054FF0"/>
                </RadialGradient>
                <RadialGradient
                    id="paint2_radial_3172_10177"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(-269.96424 -36.18878 24.70978 -184.3322 85.514 62.086)"
                >
                    <Stop stopColor="#37F1FF"/>
                    <Stop offset={0.198881} stopColor="#37DBFF"/>
                    <Stop offset={0.333238} stopColor="#37D1FF" stopOpacity={0.724868}/>
                    <Stop offset={0.5} stopColor="#37B7FF" stopOpacity={0}/>
                </RadialGradient>
                <RadialGradient
                    id="paint3_radial_3172_10177"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(-269.96424 -36.18878 24.70978 -184.3322 85.514 62.086)"
                >
                    <Stop stopColor="#37F1FF"/>
                    <Stop offset={0.198881} stopColor="#37DBFF"/>
                    <Stop offset={0.333238} stopColor="#37D1FF" stopOpacity={0.724868}/>
                    <Stop offset={0.5} stopColor="#37B7FF" stopOpacity={0}/>
                </RadialGradient>
                <LinearGradient
                    id="paint4_linear_3172_10177"
                    x1={102.47}
                    y1={202.309}
                    x2={102.47}
                    y2={-70.3331}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#fff"/>
                    <Stop offset={0.401042} stopColor="#fff" stopOpacity={0}/>
                    <Stop offset={1} stopColor="#fff" stopOpacity={0}/>
                </LinearGradient>
                <LinearGradient
                    id="paint5_linear_3172_10177"
                    x1={82.0502}
                    y1={101.635}
                    x2={130.915}
                    y2={-17.9802}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#fff" stopOpacity={0}/>
                    <Stop offset={0.759703} stopColor="#fff"/>
                </LinearGradient>
                <ClipPath id="clip0_3172_10177">
                    <Path fill="#fff" d="M0 0H207V207H0z"/>
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default Main

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
