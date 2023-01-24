import * as React from "react"
import Svg, {
    Path,
    Defs,
    LinearGradient,
    Stop,
    RadialGradient
} from "react-native-svg"

function AddFollowerSvg(props) {
    return (
        <Svg
            width={32}
            height={33}
            viewBox="0 0 32 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M.056 16.282a15.975 15.975 0 009.85 14.752 15.95 15.95 0 0017.39-3.458 15.97 15.97 0 003.464-17.4A15.965 15.965 0 0016.022.315 15.95 15.95 0 004.732 4.99 15.969 15.969 0 00.057 16.282z"
                fill="url(#paint0_linear_4311_25166)"
            />
            <Path
                d="M.056 16.282a15.975 15.975 0 009.85 14.752 15.95 15.95 0 0017.39-3.458 15.97 15.97 0 003.464-17.4A15.965 15.965 0 0016.022.315 15.95 15.95 0 004.732 4.99 15.969 15.969 0 00.057 16.282z"
                fill="url(#paint1_radial_4311_25166)"
                fillOpacity={0.2}
                style={{
                    mixBlendMode: "multiply"
                }}
            />
            <Path
                d="M.056 16.282a15.975 15.975 0 009.85 14.752 15.95 15.95 0 0017.39-3.458 15.97 15.97 0 003.464-17.4A15.965 15.965 0 0016.022.315 15.95 15.95 0 004.732 4.99 15.969 15.969 0 00.057 16.282z"
                fill="url(#paint2_radial_4311_25166)"
                style={{
                    mixBlendMode: "multiply"
                }}
                opacity={0.8}
            />
            <Path
                opacity={0.95}
                d="M22.372 5.646c-.097.562-.84.898-1.66.77-.82-.129-1.407-.711-1.31-1.283.097-.572.84-.897 1.66-.754.82.144 1.405.708 1.31 1.267z"
                fill="#fff"
            />
            <Path
                opacity={0.6}
                d="M22.682 27.922a27.173 27.173 0 01-13.213 0c-2.466-.639-4.598-1.623-6.2-2.847a15.96 15.96 0 0012.808 6.442 15.95 15.95 0 0012.807-6.442c-1.602 1.224-3.734 2.208-6.202 2.847z"
                fill="#50DFFF"
            />
            <Path
                d="M26.147 16.326c0-.935-.056-1.869-.167-2.797a22.003 22.003 0 00-1.43-5.678C22.7 3.37 19.425.387 15.704.387S8.7 3.369 6.85 7.85c-.19.46-.36.934-.513 1.42a22.006 22.006 0 00-.917 4.258c-.11.928-.166 1.862-.167 2.797v.029c-.007 2.09.267 4.172.815 6.19a17.244 17.244 0 003.03 6.18c1.793 2.246 4.1 3.59 6.606 3.59 2.506 0 4.808-1.35 6.61-3.59a17.236 17.236 0 003.028-6.183c.548-2.017.822-4.098.815-6.188l-.01-.028z"
                fill="url(#paint3_linear_4311_25166)"
                fillOpacity={0.4}
                style={{
                    mixBlendMode: "screen"
                }}
            />
            <Path
                d="M25.952 8.764c0 3.941-4.441 7.136-9.923 7.136-5.481 0-9.923-3.195-9.923-7.136 0-3.941 4.444-7.136 9.931-7.136 5.487 0 9.915 3.195 9.915 7.136z"
                fill="url(#paint4_linear_4311_25166)"
                style={{
                    mixBlendMode: "screen"
                }}
                opacity={0.5}
            />
            <Path
                stroke="#fff"
                strokeWidth={3}
                strokeLinecap="round"
                d="M16.7202 26.0078L16.7202 6.62109"
            />
            <Path
                stroke="#fff"
                strokeWidth={3}
                strokeLinecap="round"
                d="M6.3208 15.7986L25.7075 15.7986"
            />
            <Defs>
                <LinearGradient
                    id="paint0_linear_4311_25166"
                    x1={0.0561525}
                    y1={18.9435}
                    x2={31.9726}
                    y2={18.9559}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#43D351" />
                    <Stop offset={1} stopColor="#0445F4" />
                </LinearGradient>
                <RadialGradient
                    id="paint1_radial_4311_25166"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(-23.4106 0 0 -23.4247 15.94 .214)"
                >
                    <Stop offset={0.23} stopColor="#3B97D9" />
                    <Stop offset={0.24} stopColor="#3D98D9" />
                    <Stop offset={0.52} stopColor="#0AC3EB" />
                    <Stop offset={0.74} stopColor="#E6FAFF" />
                    <Stop offset={0.91} stopColor="#30C5F2" />
                    <Stop offset={1} stopColor="#054FF0" />
                </RadialGradient>
                <RadialGradient
                    id="paint2_radial_4311_25166"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="rotate(-172.365 6.977 4.519) scale(42.1595 28.7867)"
                >
                    <Stop stopColor="#37F1FF" />
                    <Stop offset={0.198881} stopColor="#37DBFF" />
                    <Stop offset={0.333238} stopColor="#37D1FF" stopOpacity={0.724868} />
                    <Stop offset={0.5} stopColor="#37B7FF" stopOpacity={0} />
                </RadialGradient>
                <LinearGradient
                    id="paint3_linear_4311_25166"
                    x1={15.6962}
                    y1={32.3197}
                    x2={15.6962}
                    y2={-9.88065}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#fff" />
                    <Stop offset={0.401042} stopColor="#fff" stopOpacity={0} />
                    <Stop offset={1} stopColor="#fff" stopOpacity={0} />
                </LinearGradient>
                <LinearGradient
                    id="paint4_linear_4311_25166"
                    x1={12.5354}
                    y1={16.7371}
                    x2={20.0988}
                    y2={-1.77719}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#fff" stopOpacity={0} />
                    <Stop offset={0.759703} stopColor="#fff" />
                </LinearGradient>
            </Defs>
        </Svg>
    )
}

export default AddFollowerSvg
