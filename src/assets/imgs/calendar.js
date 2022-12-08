import React from 'react'
import { Svg, Path } from 'react-native-svg'

import { RW } from '@/theme/utils'

const CalendarIcon = ({ color = '#657AC5', size = 27 }) => {
  return (
    <Svg
      width={RW(size)}
      height={RW(size)}
      viewBox="0 0 27 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M6.23718 0.196198C5.82682 0.196198 5.41646 0.533122 5.41646 1.03851V1.88082H2.95433C1.64119 1.88082 0.492188 2.97582 0.492188 4.40775V7.77699V24.6232C0.492188 26.0551 1.55911 27.1501 2.95433 27.1501H24.2929C25.6881 27.1501 26.755 26.0551 26.755 24.6232V7.77699V4.40775C26.755 2.97582 25.6881 1.88082 24.2929 1.88082H21.8307V1.03851C21.8307 0.533122 21.5024 0.196198 21.01 0.196198C20.5176 0.196198 20.1893 0.533122 20.1893 1.03851V1.88082H7.05789V1.03851C7.05789 0.533122 6.7296 0.196198 6.23718 0.196198ZM25.1136 24.6232C25.1136 25.1286 24.7853 25.4655 24.2929 25.4655H2.95433C2.4619 25.4655 2.13361 25.1286 2.13361 24.6232V8.6193H25.1136V24.6232ZM20.1893 3.56544V4.40775C20.1893 4.91314 20.5176 5.25006 21.01 5.25006C21.5024 5.25006 21.8307 4.91314 21.8307 4.40775V3.56544H24.2929C24.7853 3.56544 25.1136 3.90236 25.1136 4.40775V6.93468H2.13361V4.40775C2.13361 3.90236 2.4619 3.56544 2.95433 3.56544H5.41646V4.40775C5.41646 4.91314 5.74475 5.25006 6.23718 5.25006C6.7296 5.25006 7.05789 4.91314 7.05789 4.40775V3.56544H20.1893Z"
        fill={color}
      />
      <Path
        d="M5.49845 15.7789H8.7813C9.27373 15.7789 9.60201 15.4419 9.60201 14.9366V11.5673C9.60201 11.0619 9.27373 10.725 8.7813 10.725H5.49845C5.00602 10.725 4.67773 11.0619 4.67773 11.5673V14.9366C4.67773 15.4419 5.00602 15.7789 5.49845 15.7789ZM6.31916 12.4096H7.96059V14.0942H6.31916V12.4096Z"
        fill={color}
      />
      <Path
        d="M12.0641 15.7789H15.347C15.8394 15.7789 16.1677 15.4419 16.1677 14.9366V11.5673C16.1677 11.0619 15.8394 10.725 15.347 10.725H12.0641C11.5717 10.725 11.2434 11.0619 11.2434 11.5673V14.9366C11.2434 15.4419 11.5717 15.7789 12.0641 15.7789ZM12.8848 12.4096H14.5263V14.0942H12.8848V12.4096Z"
        fill={color}
      />
      <Path
        d="M18.63 15.7789H21.9129C22.4053 15.7789 22.7336 15.4419 22.7336 14.9366V11.5673C22.7336 11.0619 22.4053 10.725 21.9129 10.725H18.63C18.1376 10.725 17.8093 11.0619 17.8093 11.5673V14.9366C17.8093 15.4419 18.1376 15.7789 18.63 15.7789ZM19.4508 12.4096H21.0922V14.0942H19.4508V12.4096Z"
        fill={color}
      />
      <Path
        d="M5.49845 23.3598H8.7813C9.27373 23.3598 9.60201 23.0229 9.60201 22.5175V19.1482C9.60201 18.6429 9.27373 18.3059 8.7813 18.3059H5.49845C5.00602 18.3059 4.67773 18.6429 4.67773 19.1482V22.5175C4.67773 23.0229 5.00602 23.3598 5.49845 23.3598ZM6.31916 19.9906H7.96059V21.6752H6.31916V19.9906Z"
        fill={color}
      />
      <Path
        d="M12.0641 23.3598H15.347C15.8394 23.3598 16.1677 23.0229 16.1677 22.5175V19.1482C16.1677 18.6429 15.8394 18.3059 15.347 18.3059H12.0641C11.5717 18.3059 11.2434 18.6429 11.2434 19.1482V22.5175C11.2434 23.0229 11.5717 23.3598 12.0641 23.3598ZM12.8848 19.9906H14.5263V21.6752H12.8848V19.9906Z"
        fill={color}
      />
      <Path
        d="M18.63 23.3598H21.9129C22.4053 23.3598 22.7336 23.0229 22.7336 22.5175V19.1482C22.7336 18.6429 22.4053 18.3059 21.9129 18.3059H18.63C18.1376 18.3059 17.8093 18.6429 17.8093 19.1482V22.5175C17.8093 23.0229 18.1376 23.3598 18.63 23.3598ZM19.4508 19.9906H21.0922V21.6752H19.4508V19.9906Z"
        fill={color}
      />
    </Svg>
  )
}

export default CalendarIcon
