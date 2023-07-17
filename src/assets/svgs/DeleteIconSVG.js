import { RW, RH } from '@/theme/utils'
import * as React from 'react'
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg'

const DeleteIconSVG = (props) => (
  <Svg
    viewBox="0 0 25 28"
    width={RW(35)}
    height={RH(38)}
    fill="none"
    style={{ right: RW(-23), zIndex: 99 }}
  >
    <G clipPath="url(#a)" fill="#fff">
      <Path d="M20.827 3.668h-3.516v-.674c0-1.115-.946-2.021-2.109-2.021H9.577c-1.163 0-2.11.906-2.11 2.021v.674H3.953c-1.163 0-2.11.907-2.11 2.021 0 .896.611 1.656 1.454 1.921L4.55 22.12c.09 1.04 1.014 1.854 2.102 1.854h11.475c1.088 0 2.012-.815 2.102-1.854L21.483 7.61c.843-.265 1.453-1.025 1.453-1.92 0-1.115-.946-2.022-2.109-2.022ZM8.874 2.994c0-.371.315-.674.703-.674h5.625c.388 0 .703.303.703.674v.674H8.874v-.674Zm9.954 19.013a.696.696 0 0 1-.701.618H6.652c-.362 0-.67-.271-.7-.617L4.716 7.71h15.347l-1.235 14.296Zm2-15.644H3.951c-.388 0-.703-.302-.703-.674 0-.371.315-.673.703-.673h16.875c.388 0 .703.302.703.673 0 .372-.315.674-.703.674Z" />
      <Path d="M9.576 20.562 8.873 9.69c-.024-.372-.36-.654-.746-.631-.387.023-.682.343-.658.714l.703 10.871a.691.691 0 0 0 .701.632c.408 0 .728-.328.703-.715ZM12.39 9.059c-.389 0-.704.301-.704.673v10.872c0 .372.315.673.704.673.388 0 .703-.301.703-.674V9.734c0-.373-.315-.674-.703-.674ZM16.652 9.06c-.387-.023-.721.26-.745.63l-.704 10.872c-.023.371.271.691.659.714.388.023.721-.26.745-.63l.703-10.872c.024-.371-.27-.691-.658-.714Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" transform="translate(.39 .973)" d="M0 0h24v23H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default DeleteIconSVG
