import * as React from "react"
import Svg, { Path } from "react-native-svg"
import {RH, RW} from '@/theme/utils'

function SvgComponent(props) {
    return (
        <Svg
            width={RW(26)}
            height={RH(26)}
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M13.41 3.252v20M23.41 13.252h-20"
                stroke="#0A0D3A"
                strokeWidth={5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export default SvgComponent
