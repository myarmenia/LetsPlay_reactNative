import * as React from "react"
import Svg, { Path } from "react-native-svg"

function LeftArrow(props) {
    return (
        <Svg
            width={17}
            height={33}
            viewBox="0 0 17 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M14.874 2.357L2.269 18.8l12.605 12.605"
                stroke="#657AC5"
                strokeWidth={3}
                strokeLinecap="round"
            />
        </Svg>
    )
}

export default LeftArrow
