import { RH } from '@/theme/utils'
import * as React from 'react'
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg'

function PrizeCup(props) {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox={props.viewBox}
      fill="none"
      style={{ top: RH(7) }}
    >
      {/* <Svg width={42} height={40} viewBox="0 0 33 49" fill="none" style={{top:RH(7)}}> */}
      <G clipPath="url(#clip0_890_5082)">
        <Path
          d="M11.25 20.748c-.105-.03-2.642-.781-6.805-4.325C.14 12.76.004 6.714 0 6.459a.781.781 0 01.772-.796l7.383-.087.019 1.563-6.55.077c.186 1.652.925 5.538 3.833 8.014 3.865 3.289 6.204 4.007 6.227 4.014l-.434 1.505zM30.095 20.748l-.43-1.503c.02-.006 2.359-.724 6.224-4.013 2.908-2.476 3.648-6.362 3.832-8.014l-6.55-.077.02-1.563 7.382.087a.782.782 0 01.773.796c-.004.255-.141 6.3-4.444 9.964-4.164 3.543-6.701 4.295-6.807 4.323z"
          fill="#FCAB28"
        />
        <Path
          d="M7.818 5.667S6.86 5.32 6.86 4.365c0-.954-.173-1.393.695-2.258C8.424 1.24 14.998.05 20.296.05s12.536 1.448 13.406 2.23c.87.782.521 2.865.347 3.213-.173.348-.869.26-.869.26L7.818 5.668z"
          fill="#FFCF3F"
        />
        <Path
          d="M20.239 2.973c-3.27 0-10.163.434-12.682 2.258 0 0 0 9.38 2.606 14.158 2.606 4.777 7.21 8.688 7.21 8.688h6.253s4.604-3.908 7.21-8.688c2.605-4.78 2.606-14.158 2.606-14.158-2.78-1.822-9.932-2.258-13.203-2.258z"
          fill="#FFD733"
        />
        <Path
          d="M20.239 2.973c-3.27 0-10.163.434-12.682 2.258 0 0 0 9.38 2.606 14.158 1.234 2.263 2.918 4.33 4.346 5.88 1.1.46 2.279.705 3.471.72 7.992.175 10.076-6.6 10.945-9.033 1.369-3.831 2.148-9.847 2.454-12.64-3.359-1.059-8.507-1.343-11.14-1.343z"
          fill="#FFE266"
        />
        <Path
          d="M29.446 39.802c-.782-2.345-2.432-1.998-2.432-1.998s0-.754-1.158-.862c-.716-.22-2.56-.928-3.184-2.525-.783-1.996-.435-4.516-.435-4.516l-1.737-.227-1.738.227s.347 2.52-.434 4.516c-.625 1.597-2.47 2.305-3.184 2.525-1.155.108-1.158.862-1.158.862s-1.65-.347-2.432 1.998h17.892z"
          fill="#FFCE45"
        />
        <Path
          d="M13.985 37.805a79.68 79.68 0 013.257-.144c1.086-.028 2.172-.036 3.258-.04 1.085-.003 2.171.011 3.256.04 1.085.028 2.172.07 3.258.142-1.086.07-2.172.117-3.258.14-1.085.03-2.17.037-3.256.04-1.086.004-2.172-.01-3.258-.04a87.573 87.573 0 01-3.257-.138zM23.626 29.293h-6.168a.697.697 0 010-1.393h6.168a.696.696 0 010 1.393z"
          fill="#FCAB28"
        />
        <Path
          d="M23.279 30.17h-5.474a.617.617 0 110-1.235h5.473a.617.617 0 010 1.234z"
          fill="#FCAB28"
        />
        <Path
          d="M30.281 39.715H11.326c-.643 0-1.163.52-1.163 1.162v8.011c0 .642.52 1.163 1.163 1.163H30.28c.642 0 1.163-.52 1.163-1.163v-8.01c0-.643-.52-1.163-1.163-1.163z"
          fill="#6C554F"
        />
        <Path
          d="M27.083 41.504h-12.56a.539.539 0 00-.538.538v4.378c0 .297.24.538.538.538h12.56a.539.539 0 00.539-.538v-4.378a.539.539 0 00-.539-.538z"
          fill="#FCAB28"
        />
        <Path
          d="M16.255 41.508h4.32c.102 0 .185.24.185.538v4.377c0 .297-.083.539-.185.539h-4.32c-.103 0-.185-.242-.185-.539v-4.377c0-.3.082-.538.185-.538z"
          fill="#FFD733"
        />
        <Path
          d="M17.372 28.076a30.868 30.868 0 011.564-.066c.52-.011 1.042-.02 1.564-.021.521-.002 1.042.004 1.563.02l.781.026c.261.015.522.024.782.044-.26.021-.521.03-.782.045l-.781.025c-.521.017-1.043.019-1.563.02-.521.003-1.043-.004-1.564-.02a39.884 39.884 0 01-1.564-.073zM17.401 29.118c.531-.037 1.062-.055 1.592-.07a67.06 67.06 0 011.592-.02 45.43 45.43 0 011.592.02l.796.026c.265.015.53.023.796.044-.265.02-.53.03-.796.044l-.796.026a58.274 58.274 0 01-3.184 0c-.53-.017-1.061-.032-1.592-.07zM18.823 30.276a13.796 13.796 0 011.677-.09c.56-.005 1.12.026 1.676.09a15.506 15.506 0 01-3.353 0z"
          fill="#FFE266"
        />
        <Path
          d="M11.93 38.963c1.428-.072 2.856-.12 4.283-.142 1.43-.028 2.857-.036 4.286-.04 1.429-.003 2.857.011 4.285.04 1.428.03 2.857.072 4.285.142-1.428.07-2.857.117-4.285.141-1.428.03-2.857.037-4.285.04-1.428.003-2.857-.011-4.286-.04-1.428-.03-2.856-.07-4.284-.141z"
          fill="#FCAB28"
        />
        <Path
          d="M15.85.283c-1.46.142-2.875.34-4.113.563-.144 4.29-.19 11.457.862 15.419 1.558 5.906 4.339 8.86 4.339 8.86S15.2 16.438 15.374 8.798c.084-3.662.286-6.523.475-8.514z"
          fill="#FFFFFD"
          opacity={0.48}
        />
        <Path
          d="M33.442 5.233c-.962-.55-2.03-.866-3.1-1.11a31.939 31.939 0 00-3.257-.554 57.605 57.605 0 00-3.294-.294 60.358 60.358 0 00-3.303-.118 55.798 55.798 0 00-6.597.37 30.838 30.838 0 00-3.256.547c-1.07.248-2.138.569-3.078 1.157a6.605 6.605 0 011.46-.796c.128-.051.255-.108.385-.155l.398-.133c.262-.094.53-.17.796-.244a27.095 27.095 0 013.263-.656 46.753 46.753 0 016.637-.452c2.22.02 4.435.186 6.633.496 1.099.155 2.188.375 3.262.66.269.066.53.155.796.24.265.085.525.182.784.282.258.1.511.213.758.34.126.058.247.125.363.202l.35.218z"
          fill="#FCAB28"
        />
        <Path
          d="M14.832 7.132l.812-1.421.758 1.45 1.423.81-1.45.76-.812 1.422-.759-1.45-1.421-.811 1.45-.76z"
          fill="#fff"
        />
        <Path
          d="M12.226 50.05h3.22l8.04-10.335h-3.7l-7.56 10.336zM20.174 50.05l7.973-10.335h-1.511L18.579 50.05h1.595z"
          fill="#fff"
          opacity={0.35}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_890_5082">
          <Path fill="#fff" transform="translate(0 .05)" d="M0 0H41.3462V50H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default PrizeCup
