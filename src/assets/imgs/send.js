import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Svg, Path } from 'react-native-svg'

import { RW } from '@/theme/utils'

const SendIcon = ({ size = 18, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress && onPress} activeOpacity={0.7}>
      <Svg
        width={RW(size)}
        height={RW(size)}
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M10.3906 8.77612C10.1772 8.73584 9.96419 8.69374 9.7503 8.65529C8.75152 8.4774 7.75274 8.30012 6.75397 8.12345C5.74955 7.94525 4.74513 7.76737 3.74071 7.58978C3.32049 7.51518 2.90116 7.43233 2.4805 7.36093C2.37355 7.34308 2.33211 7.29731 2.30939 7.19296C1.85129 5.08238 1.39245 2.97211 0.932875 0.862145C0.899933 0.717989 0.898108 0.568176 0.927528 0.423219C0.999718 0.102833 1.35131 -0.03722 1.68285 0.120684C2.03934 0.291404 2.3887 0.48272 2.7394 0.669916L11.7721 5.42672C13.5519 6.36408 15.3318 7.30097 17.1119 8.23741C17.3133 8.3436 17.4786 8.47359 17.5031 8.72806C17.5321 9.02923 17.3993 9.2242 17.1435 9.3583C15.9104 10.0033 14.6788 10.6505 13.4489 11.2998C9.56759 13.3442 5.68568 15.3861 1.80317 17.4256C1.65437 17.4979 1.4914 17.5343 1.3268 17.5318C1.27075 17.5313 1.21538 17.5192 1.16398 17.4962C1.11259 17.4733 1.06623 17.4399 1.02767 17.3981C0.989111 17.3563 0.959148 17.307 0.939568 17.2531C0.919989 17.1991 0.911197 17.1417 0.913714 17.0842C0.926573 16.8346 0.960718 16.5866 1.01576 16.3432C1.44415 14.3653 1.87565 12.3882 2.31028 10.4119C2.33077 10.3181 2.3642 10.2677 2.46758 10.2499C3.34678 10.0975 4.22465 9.93683 5.1034 9.77984C6.09683 9.60287 7.09026 9.42635 8.08369 9.25029C8.82638 9.11847 9.56908 8.9862 10.3118 8.85347C10.3376 8.84707 10.363 8.83913 10.388 8.82967L10.3906 8.77612Z"
          fill="#657AC5"
        />
      </Svg>
    </TouchableOpacity>
  )
}

export default SendIcon
