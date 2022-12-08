import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"
import {RH, RW} from '@/theme/utils'
import User from "@/components/userIcon";

function SvgComponent({isMax, user}) {

    const width=RW(isMax?300:80);
    const height=RH(isMax?500:122);
    return (
        <Svg
            width={width}
            height={height}
            viewBox="0 0 271 414"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >

            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M213.569 78.344c0 .9-.015 1.798-.045 2.69 16.157 3.635 32.595 6.304 49.156 8.542 6.17.823 7.686 2.866 7.627 8.613-.197 19.547-.169 39.183-.14 58.836.011 7.018.021 14.039.021 21.058 0 6.859-.037 13.718-.073 20.577v.004c-.073 13.716-.145 27.432.073 41.148.922 50.309-19.862 90.991-56.062 124.927-21.135 19.687-45.6 35.555-72.282 46.884-3.078 1.323-7.612 2.043-10.407.794-44.11-19.43-81.767-46.664-107.5-88.066-14.868-23.648-22.78-50.92-22.851-78.763-.159-26.252-.148-52.511-.137-78.762.009-22.968.018-45.93-.086-68.872 0-5.88 1.858-7.672 7.805-8.466 16.499-2.201 32.876-4.852 48.979-8.463-.03-.89-.045-1.783-.045-2.68 0-43.255 34.914-78.32 77.983-78.32s77.984 35.065 77.984 78.32zm45.545 123.444c.033-6.401.066-12.802.066-19.203 0-6.55-.009-13.102-.018-19.652-.027-18.34-.053-36.665.128-54.907.054-5.363-1.338-7.27-7.003-8.038-39.356-5.404-77.947-13.51-113.303-32.918a8.063 8.063 0 00-6.634 0C96.98 86.41 58.389 94.57 19.047 99.906c-5.46.741-7.167 2.414-7.167 7.901.096 21.41.087 42.838.079 64.273-.01 24.497-.02 49.004.126 73.502a140.39 140.39 0 0020.981 73.503c23.63 38.638 58.208 64.054 98.71 82.186 2.566 1.166 6.73.494 9.556-.741a227.875 227.875 0 0066.371-43.753c33.24-31.67 52.324-69.636 51.477-116.585-.2-12.801-.133-25.603-.066-38.404z"
                fill="url(#paint0_linear_2837_24276)"
            />
            <Path
                d="M259.18 182.558c0 19.202-.3 38.404 0 57.606.847 46.95-18.237 84.915-51.477 116.585a227.875 227.875 0 01-66.371 43.753c-2.826 1.235-6.989 1.907-9.556.741-40.502-18.132-75.08-43.548-98.71-82.185a140.394 140.394 0 01-20.981-73.504c-.273-45.934 0-91.896-.205-137.775 0-5.487 1.706-7.16 7.167-7.9C58.389 94.543 96.98 86.382 132.35 67.041a8.06 8.06 0 016.634 0C174.34 86.45 212.931 94.556 252.287 99.96c5.665.769 7.057 2.675 7.003 8.038-.246 24.757-.11 49.665-.11 74.56z"
                fill="#fff"
            />
            <Path
                d="M259.18 182.558c0 19.202-.3 38.404 0 57.606.847 46.95-18.237 84.915-51.477 116.585a227.875 227.875 0 01-66.371 43.753c-2.826 1.235-6.989 1.907-9.556.741-40.502-18.132-75.08-43.548-98.71-82.185a140.394 140.394 0 01-20.981-73.504c-.273-45.934 0-91.896-.205-137.775 0-5.487 1.706-7.16 7.167-7.9C58.389 94.543 96.98 86.382 132.35 67.041a8.06 8.06 0 016.634 0C174.34 86.45 212.931 94.556 252.287 99.96c5.665.769 7.057 2.675 7.003 8.038-.246 24.757-.11 49.665-.11 74.56z"
                fill="url(#paint1_linear_2837_24276)"
            />
            <Path
                d="M259.18 182.558c0 19.202-.3 38.404 0 57.606.847 46.95-18.237 84.915-51.477 116.585a227.875 227.875 0 01-66.371 43.753c-2.826 1.235-6.989 1.907-9.556.741-40.502-18.132-75.08-43.548-98.71-82.185a140.394 140.394 0 01-20.981-73.504c-.273-45.934 0-91.896-.205-137.775 0-5.487 1.706-7.16 7.167-7.9C58.389 94.543 96.98 86.382 132.35 67.041a8.06 8.06 0 016.634 0C174.34 86.45 212.931 94.556 252.287 99.96c5.665.769 7.057 2.675 7.003 8.038-.246 24.757-.11 49.665-.11 74.56z"
                fill="url(#paint2_linear_2837_24276)"
            />
            <User user={user} isMax={isMax}/>
            <Defs>
                {user.status ==='BRONZE'?<LinearGradient
                    id="paint0_linear_2837_24276"
                    x1={-8.51229}
                    y1={69.5403}
                    x2={278.853}
                    y2={69.5403}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#873B23" />
                    <Stop offset={0.0582217} stopColor="#A66842" />
                    <Stop offset={0.276042} stopColor="#E5BA8C" />
                    <Stop offset={0.485208} stopColor="#E8D2AE" />
                    <Stop offset={0.708333} stopColor="#C09067" />
                    <Stop offset={1} stopColor="#A05E2E" />
                </LinearGradient>:user.status==='GOLD'?
                    <LinearGradient
                        id="paint0_linear_2837_24276"
                    x1={0.863037}
                    y1={69.5403}
                    x2={270.309}
                    y2={69.5403}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#A37A1E" />
                    <Stop offset={0.0001} stopColor="#D3A84C" />
                    <Stop offset={0.276042} stopColor="#FFEC95" />
                    <Stop offset={0.485208} stopColor="#E6BE69" />
                    <Stop offset={0.708333} stopColor="#FFD67A" />
                    <Stop offset={0.9999} stopColor="#B58F3E" />
                    <Stop offset={1} stopColor="#956E13" />
                </LinearGradient>:<LinearGradient
                        id="paint0_linear_2837_24276"
                        x1={0.863032}
                        y1={183.329}
                        x2={270.309}
                        y2={183.329}
                        gradientUnits="userSpaceOnUse"
                    >
                        <Stop stopColor="#9E9E9E" />
                        <Stop offset={0.0659772} stopColor="#D9D9D9" />
                        <Stop offset={0.238602} stopColor="#9C9C9C" />
                        <Stop offset={0.485208} stopColor="#D9D9D9" />
                        <Stop offset={0.620842} stopColor="#9C9C9C" />
                        <Stop offset={0.694824} stopColor="#D9D9D9" />
                        <Stop offset={0.882861} stopColor="#D9D9D9" />
                        <Stop offset={0.938473} stopColor="#9C9C9C" />
                        <Stop offset={1} stopColor="#D9D9D9" />
                    </LinearGradient>
                }

                <LinearGradient
                    id="paint1_linear_2837_24276"
                    x1={3.83796}
                    y1={242.593}
                    x2={259.291}
                    y2={245.202}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#024074" />
                    <Stop offset={0.219391} stopColor="#024074" stopOpacity={0.45} />
                    <Stop offset={0.517802} stopColor="#024074" stopOpacity={0.89} />
                    <Stop offset={0.819973} stopColor="#024074" stopOpacity={0.45} />
                    <Stop offset={1} stopColor="#024074" />
                </LinearGradient>
                <LinearGradient
                    id="paint2_linear_2837_24276"
                    x1={11.8801}
                    y1={262.048}
                    x2={259.293}
                    y2={262.119}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#7DCE8A" />
                    <Stop offset={1} stopColor="#4D7CFE" />
                </LinearGradient>
            </Defs>
        </Svg>
    )
}

export default SvgComponent
