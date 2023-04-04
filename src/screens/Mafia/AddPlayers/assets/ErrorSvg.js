import * as React from 'react'
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg'

function ErrorSvg(props) {
  return (
    <Svg
      width={100}
      height={100}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_821_13691)">
        <Path
          d="M50.131 99.842c27.338 0 49.5-22.162 49.5-49.5S77.47.842 50.131.842s-49.5 22.162-49.5 49.5 22.162 49.5 49.5 49.5z"
          fill="#E24C4B"
        />
        <Path
          d="M99.631 50.342c0 27.225-22.275 49.5-49.5 49.5-15.778 0-29.7-7.116-38.672-18.563 8.353 6.807 19.181 10.829 30.937 10.829 27.225 0 49.5-22.276 49.5-49.5 0-11.757-4.021-22.585-10.828-30.938 11.447 8.972 18.563 22.893 18.563 38.672z"
          fill="#D1403F"
        />
        <Path
          d="M72.715 72.926c-1.856 1.856-4.95 1.856-6.806 0L50.13 57.148 34.353 72.926c-1.857 1.856-4.95 1.856-6.807 0-1.856-1.856-1.856-4.95 0-6.806l15.779-15.778-15.779-15.778c-1.856-1.856-1.856-4.95 0-6.807 1.857-1.856 4.95-1.856 6.807 0L50.13 43.535l15.778-15.778c1.856-1.856 4.95-1.856 6.806 0 1.856 1.856 1.856 4.95 0 6.807L56.937 50.342 72.715 66.12c1.856 1.856 1.856 4.95 0 6.806z"
          fill="#fff"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_821_13691">
          <Path fill="#fff" transform="translate(.63 .842)" d="M0 0H99V99H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default ErrorSvg