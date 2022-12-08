import * as React from 'react'
import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg'
import { RH, RW } from '@/theme/utils'

function DateSvg(props) {
  return (
    <Svg
      width={RW(18)}
      height={RH(17)}
      viewBox="0 0 18 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_127_975)" fill="#657AC5">
        <Path d="M.642 5.142h17v9.56c0 .91-.605 1.62-1.504 1.757-.133.02-.267.03-.402.03H2.178c-.911 0-1.49-.56-1.532-1.483-.003-.07-.003-.142-.003-.213v-9.45l-.001-.2zM13.177 7.11c-.217 0-.434-.002-.65 0-.265.005-.436.155-.442.422-.012.447-.012.894 0 1.342.006.245.155.405.396.412.462.014.923.014 1.385 0 .255-.008.381-.156.384-.412a55.14 55.14 0 000-1.324c-.003-.273-.169-.434-.443-.439-.208-.003-.419 0-.63 0zm-4.235 6.98h.65c.266-.01.414-.13.421-.393.014-.46.014-.918 0-1.377-.006-.252-.166-.406-.417-.412-.444-.01-.889-.01-1.333 0-.257.007-.41.176-.413.433-.005.436-.005.871 0 1.306.003.275.166.435.44.44.217.005.434.002.652.002zm5.313-1.078c0-.218.003-.436 0-.654-.004-.27-.151-.443-.414-.45-.445-.01-.891-.01-1.334 0-.25.006-.412.16-.418.41-.013.454-.013.908 0 1.36.007.257.179.407.436.41.439.004.878.005 1.316 0 .266-.004.407-.15.413-.421.003-.22 0-.437 0-.655h.001zM8.947 7.11c-.222 0-.445-.003-.666 0-.264.006-.428.166-.43.432-.006.436-.005.871 0 1.307.002.26.147.43.406.438.455.013.912.012 1.367 0 .253-.007.381-.136.388-.389.013-.458.013-.917 0-1.377-.007-.26-.176-.405-.434-.41-.21-.004-.42 0-.63 0zm-5.283 5.894v.619c.004.298.161.462.453.465.41.003.82.003 1.229 0 .287-.003.48-.18.487-.47.01-.43.01-.86 0-1.29-.007-.26-.169-.415-.427-.42a32.472 32.472 0 00-1.317 0c-.267.006-.418.174-.422.442-.006.218-.003.436-.003.654zM4.752 7.11h-.65c-.272.008-.434.168-.437.445-.003.43-.003.86 0 1.29 0 .261.146.434.403.442.438.014.878.013 1.316 0 .264-.008.44-.186.448-.452.012-.442.01-.883-.003-1.325-.009-.249-.18-.393-.428-.398-.216-.005-.433-.002-.65-.002zM17.589 4.006H.67c0-.748-.031-1.486.01-2.22A1.372 1.372 0 012.149.494c.422.015.844 0 1.266 0h.192v1.5c0 .388.209.63.536.628.327-.002.524-.236.525-.618V.506h8.462c.003.064.01.127.01.19 0 .46-.004.92.002 1.38a.532.532 0 00.387.53c.21.06.459-.016.57-.21a.84.84 0 00.099-.384c.012-.437.005-.873.005-1.31V.494c.524 0 1.027-.014 1.529.007.25.006.499.054.735.142.575.229.984.626 1.11 1.267a.47.47 0 01.011.087v2.009z" />
      </G>
      <Defs>
        <ClipPath id="clip0_127_975">
          <Path fill="#fff" transform="translate(.643 .491)" d="M0 0H17V16H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default DateSvg
