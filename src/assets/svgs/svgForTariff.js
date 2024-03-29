import { RH } from "@/theme/utils"
import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgForTariff(props) {
    return (
        <Svg
            width={RH(14)}
            height={RH(16)}
            viewBox="0 0 14 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M3.2 15.75c-.85 0-1.65-.35-2.2-.9a3.2 3.2 0 010-4.45l6.6-6.65c.4-.4.9-.6 1.4-.6.55 0 1.05.2 1.4.6.4.4.6.9.6 1.4 0 .5-.2 1.05-.6 1.4l-4.5 4.5-.55-.55L9.85 6c.25-.25.35-.55.35-.9s-.15-.65-.35-.9c-.25-.25-.55-.35-.9-.35s-.65.15-.9.35L1.5 10.9c-.95.95-.95 2.45 0 3.4.45.45 1.05.7 1.7.7.65 0 1.25-.25 1.7-.7L12.2 7a3.47 3.47 0 000-4.9c-.65-.65-1.55-1-2.45-1-.95 0-1.8.35-2.45 1L2.4 7l-.55-.55 4.9-4.95C7.55.7 8.6.25 9.75.25s2.2.45 3 1.25a4.255 4.255 0 010 6L5.4 14.8c-.6.6-1.4.95-2.2.95z"
                fill="#657AC5"
            />
        </Svg>
    )
}

export default SvgForTariff
