import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ShareSvg(props) {
    return (
        <Svg
            width={29}
            height={29}
            viewBox="0 0 29 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M14.898 7.56c-3.854.2-7.458 1.804-10.223 4.57-2.96 2.96-4.59 6.881-4.59 11.043v5.749l2.082-4.801c2.432-4.847 7.365-8.06 12.731-8.36v6.626l13.16-10.75L14.897.923V7.56z"
                fill="#657AC5"
            />
        </Svg>
    )
}

export default ShareSvg
