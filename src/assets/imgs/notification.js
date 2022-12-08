import React from 'react'
import { Svg, Path } from 'react-native-svg'

import { RW } from '@/theme/utils'

const NotificationIcon = ({ color = '#657AC5', size = 30 }) => {
  return (
    <Svg
      width={RW(size)}
      height={RW(size)}
      viewBox="0 0 27 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M11.6608 28.2952C10.6775 27.7942 10.0203 27.0153 9.64399 26.0013H17.8617C17.7568 26.2911 17.6161 26.5678 17.4424 26.825L17.4403 26.8281C16.7022 27.9387 15.6894 28.5975 14.3601 28.8004L14.336 28.804L14.3123 28.81C14.2727 28.8201 14.2336 28.8322 14.1953 28.8463H13.2811C13.1114 28.7917 12.9318 28.7396 12.7614 28.6902C12.6508 28.6581 12.544 28.6272 12.4464 28.5974C12.1559 28.5088 11.896 28.417 11.6637 28.2967L11.6637 28.2967L11.6608 28.2952Z"
        stroke={color}
      />
      <Path
        d="M1.29849 24.2481L1.299 24.2504C1.47705 25.0905 2.15959 25.6304 3.17212 25.6304H3.19278H3.21344H3.2341H3.25476H3.27542H3.29608H3.31674H3.3374H3.35806H3.37872H3.39938H3.42004H3.4407H3.46136H3.48202H3.50268H3.52334H3.544H3.56466H3.58532H3.60598H3.62664H3.6473H3.66796H3.68862H3.70928H3.72994H3.7506H3.77126H3.79192H3.81258H3.83324H3.8539H3.87456H3.89522H3.91588H3.93654H3.9572H3.97786H3.99852H4.01918H4.03984H4.0605H4.08116H4.10182H4.12248H4.14314H4.1638H4.18446H4.20512H4.22579H4.24645H4.26711H4.28777H4.30843H4.32909H4.34975H4.37041H4.39107H4.41173H4.43239H4.45305H4.47371H4.49437H4.51503H4.53569H4.55635H4.57701H4.59767H4.61833H4.63899H4.65965H4.68031H4.70097H4.72163H4.74229H4.76295H4.78361H4.80427H4.82493H4.84559H4.86625H4.88691H4.90757H4.92823H4.94889H4.96955H4.99021H5.01087H5.03153H5.05219H5.07285H5.09351H5.11417H5.13483H5.15549H5.17615H5.19681H5.21747H5.23813H5.25879H5.27945H5.30011H5.32078H5.34143H5.3621H5.38276H5.40342H5.42408H5.44474H5.4654H5.48606H5.50672H5.52738H5.54804H5.5687H5.58936H5.61002H5.63068H5.65134H5.672H5.69266H5.71332H5.73398H5.75464H5.7753H5.79596H5.81662H5.83728H5.85794H5.8786H5.89926H5.91992H5.94058H5.96124H5.9819H6.00256H6.02322H6.04388H6.06454H6.0852H6.10586H6.12652H6.14718H6.16784H6.1885H6.20916H6.22982H6.25048H6.27114H6.2918H6.31246H6.33312H6.35378H6.37444H6.3951H6.41576H6.43642H6.45709H6.47775H6.49841H6.51907H6.53973H6.56039H6.58105H6.60171H6.62237H6.64303H6.66369H6.68435H6.70501H6.72567H6.74633H6.76699H6.78765H6.80831H6.82897H6.84963H6.87029H6.89095H6.91161H6.93227H6.95293H6.97359H6.99425H7.01491H7.03557H7.05623H7.07689H7.09755H7.11821H7.13887H7.15953H7.18019H7.20085H7.22151H7.24217H7.26283H7.28349H7.30415H7.32481H7.34547H7.36613H7.38679H7.40745H7.42811H7.44877H7.46943H7.49009H7.51075H7.53141H7.55207H7.57273H7.5934H7.61406H7.63472H7.65538H7.67604H7.6967H7.71736H7.73802H7.75868H7.77934H7.8H7.82066H7.84132H7.86198H7.88264H7.9033H7.92396H7.94462H7.96528H7.98594H8.0066H8.02726H8.04792H8.06858H8.08924H8.1099H8.13056H8.15122H8.17188H8.19254H8.2132H8.23386H8.25452H8.27518H8.29584H8.3165H8.33716H8.35782H8.37848H8.39914H8.4198H8.44046H8.46112H8.48178H8.50244H8.5231H8.54376H8.56442H8.58508H8.60574H8.6264H8.64706H8.66772H8.68839H8.70904H8.72971H8.75037H8.77103H8.79169H8.81235H8.83301H8.85367H8.87433H8.89499H8.91565H8.93631H8.95697H8.97763H8.99829H9.01895H9.03961H9.06027H9.08093H9.10159H9.12225H9.14291H9.16357H9.18423H9.20489H9.22555H9.24621H9.26687H9.28753H9.30819H9.32885H9.34951H9.37017H9.39083H9.41149H9.43215H9.45281H9.47347H9.49413H9.51479H9.53545H9.55611H9.57677H9.59743H9.61809H9.63875H9.65941H9.68007H9.70073H9.72139H9.74205H9.76271H9.78337H9.80404H9.82469H9.84536H9.86602H9.88668H9.90734H9.928H9.94866H9.96932H9.98998H10.0106H10.0313H10.052H10.0726H10.0933H10.1139H10.1346H10.1553H10.1759H10.1966H10.2172H10.2379H10.2586H10.2792H10.2999H10.3205H10.3412H10.3619H10.3825H10.4032H10.4238H10.4445H10.4652H10.4858H10.5065H10.5271H10.5478H10.5685H10.5891H10.6098H10.6304H10.6511H10.6718H10.6924H10.7131H10.7337H10.7544H10.7751H10.7957H10.8164H10.837H10.8577H10.8784H10.899H10.9197H10.9403H10.961H10.9817H11.0023H11.023H11.0436H11.0643H11.085H11.1056H11.1263H11.1469H11.1676H11.1883H11.2089H11.2296H11.2502H11.2709H11.2916H11.3122H11.3329H11.3535H11.3742H11.3949H11.4155H11.4362H11.4568H11.4775H11.4982H11.5188H11.5395H11.5602H11.5808H11.6015H11.6221H11.6428H11.6635H11.6841H11.7048H11.7254H11.7461H11.7668H11.7874H11.8081H11.8287H11.8494H11.8701H11.8907H11.9114H11.932H11.9527H11.9734H11.994H12.0147H12.0353H12.056H12.0767H12.0973H12.118H12.1386H12.1593H12.18H12.2006H12.2213H12.2419H12.2626H12.2833H12.3039H12.3246H12.3452H12.3659H12.3866H12.4072H12.4279H12.4485H12.4692H12.4899H12.5105H12.5312H12.5518H12.5725H12.5932H12.6138H12.6345H12.6551H12.6758H12.6965H12.7171H12.7378H12.7584H12.7791H12.7998H12.8204H12.8411H12.8617H12.8824H12.9031H12.9237H12.9444H12.965H12.9857H13.0064H13.027H13.0477H13.0683H13.089H13.1097H13.1303H13.151H13.1716H13.1923H13.213H13.2336H13.2543H13.2749H13.2956H13.3163H13.3369H13.3576H13.3782H13.3989H13.4196H13.4402H13.4609H13.4815H13.5022H13.5229H13.5435H13.5642H13.5848H13.6055H13.6262H13.6468H13.6675H13.6881H13.7088H13.7295H13.7499H13.7501L20.2755 25.628H20.2757C20.7352 25.628 21.1936 25.629 21.6514 25.63C22.5645 25.632 23.4752 25.634 24.3876 25.628M1.29849 24.2481L24.3909 26.128M1.29849 24.2481C1.14464 23.5391 1.36133 22.9635 1.94404 22.4664L1.94417 22.4663M1.29849 24.2481L1.94417 22.4663M24.3876 25.628L24.3909 26.128M24.3876 25.628C24.3876 25.628 24.3876 25.628 24.3875 25.628L24.3909 26.128M24.3876 25.628C25.5658 25.6202 26.3328 24.7811 26.2434 23.6775M24.3909 26.128C25.8457 26.1183 26.8558 25.0445 26.7417 23.6371M26.2434 23.6775C26.2434 23.6776 26.2434 23.6777 26.2434 23.6779L26.7417 23.6371M26.2434 23.6775C26.2018 23.1705 25.9203 22.7785 25.4467 22.3557M26.2434 23.6775L26.7417 23.6371M26.7417 23.6371L25.4467 22.3557M25.4467 22.3557C25.4467 22.3557 25.4467 22.3557 25.4467 22.3557L25.7797 21.9827L25.4467 22.3557ZM25.4467 22.3557C23.6267 20.7309 22.5608 18.6847 22.4061 16.2387M25.4467 22.3557L22.9051 16.2072M22.4061 16.2387C22.4061 16.2388 22.4061 16.2389 22.4061 16.239L22.9051 16.2072M22.4061 16.2387L22.9051 16.2072M22.4061 16.2387C22.3493 15.3481 22.352 14.4364 22.3547 13.5447C22.3561 13.0683 22.3575 12.5976 22.3498 12.1389L22.3496 12.1275L22.3497 12.1275C22.3526 11.6487 22.3232 11.1702 22.2618 10.6953M22.9051 16.2072C22.8493 15.3311 22.852 14.4516 22.8548 13.5721C22.8563 13.0914 22.8578 12.6107 22.8497 12.1305C22.8527 11.627 22.8217 11.124 22.7568 10.6246M22.2618 10.6953C22.2622 10.6974 22.2625 10.6995 22.2628 10.7016L22.7568 10.6246M22.2618 10.6953C22.2616 10.6932 22.2613 10.6911 22.261 10.689L22.7568 10.6246M22.2618 10.6953C21.6863 7.01832 18.9077 4.20969 15.1946 3.55383L15.2815 3.06145M22.7568 10.6246C22.15 6.7296 19.2037 3.75423 15.2815 3.06145M15.2815 3.06145L15.2048 3.55553M15.2815 3.06145L15.2048 3.55553M1.94417 22.4663C2.71914 21.8048 3.37734 21.0194 3.89147 20.1425C4.75457 18.6793 5.15035 17.0956 5.15464 15.422V15.4207M1.94417 22.4663L5.15464 15.4207M5.15464 15.4207C5.15464 15.0765 5.15354 14.7337 5.15244 14.3919C5.14954 13.4854 5.14666 12.5856 5.16431 11.6833L5.16432 11.6831M5.15464 15.4207L5.16432 11.6831M5.16432 11.6831C5.24104 7.71166 8.28042 4.22198 12.2494 3.56289C12.3835 3.54101 12.6133 3.49165 12.7818 3.30147C12.9608 3.09937 12.9707 2.85572 12.9643 2.70654L12.9642 2.70561M5.16432 11.6831L12.9642 2.70561M12.9642 2.70561C12.9479 2.34111 12.9509 1.97177 12.9644 1.59875L12.9644 1.59855M12.9642 2.70561L12.9644 1.59855M12.9644 1.59855C12.9716 1.39804 13.057 1.20719 13.2041 1.06652C13.3513 0.92572 13.5487 0.846313 13.755 0.846313C13.9613 0.846313 14.1588 0.925719 14.306 1.06652C14.453 1.20719 14.5384 1.39804 14.5456 1.59855L14.5456 1.59878M12.9644 1.59855L14.5456 1.59878M14.5456 1.59878C14.5598 1.98859 14.5575 2.3808 14.5455 2.77665L14.5453 2.78421M14.5456 1.59878L14.5453 2.78421M14.5453 2.78421V2.79178M14.5453 2.78421V2.79178M14.5453 2.79178C14.5453 2.91946 14.563 3.13307 14.7222 3.31346M14.5453 2.79178L14.7222 3.31346M14.7222 3.31346C14.8782 3.49016 15.0842 3.53681 15.2048 3.55553M14.7222 3.31346L15.2048 3.55553"
        stroke={color}
      />
    </Svg>
  )
}

export default NotificationIcon
