import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"
import {RW} from "@/theme/utils";

function SvgComponent({size}) {
    return (
        <Svg
            width={RW(191)}
            height={RW(144)}
            viewBox="0 0 191 144"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Path
                d="M188.264 81.339c-.155-.372-.682-1.278-2.119-1.278a2.874 2.874 0 00-2.458 1.278h-2.85l-.801 15.028-1.087-35.414v-.014l-2.253 21-.147-.594h-.885l-1.196-3.473-1.462 3.473h-3.399a2.803 2.803 0 00-2.326-1.198 2.908 2.908 0 00-2.365 1.198h-2.675l-.614 20.916-1.265-60.11-1.757 39.765-.154-.577h-1.094l-1.29-3.804-1.171 3.804h-4.116L146.347 0l-4.454 112.167-3.807-49.53h-.035l-.86-10.572-.895 10.537h-.043l-2.457 21.024-.842-2.308-1.804.035h-4.396v-5.099l-1.282.545c-.938.41-2.089.769-4.139.769-1.564 0-4.114-.52-4.578-3.81h11.221l.111-.798c.07-.5.107-1.005.11-1.51 0-4.284-2.361-8.604-7.636-8.604-5.029 0-8.541 3.995-8.541 9.717 0 4.56 2.359 7.793 6.201 8.807h-7.591l-.103-.718a26.782 26.782 0 01-.258-4.11V70.44c0-5.138-2.588-8.095-7.099-8.095-2.253 0-4.462.571-5.939 1.529l-.58.38 1.31 4.334 1.023-.63a7.175 7.175 0 013.748-1.073c1.716 0 2.58.703 2.742 2.26-3.674.11-6.367.995-8.011 2.64-1.149 1.144-1.73 2.603-1.73 4.336a5.493 5.493 0 00.963 3.183 5.462 5.462 0 002.622 2.037h-10.04c3.127-1.007 5.852-4.004 5.852-9.296 0-5.331-3.276-9.2-7.804-9.2-1.99 0-3.686.603-5.03 1.769l-.069-1.402h-4.49l.04.966c.058 1.33.121 9.832.134 13.17v3.954H66.992V65.066h3.13l-1.746 1.251 1.072 1.507 6.423-4.608H65.15v18.086h-2.922l.105-32.353-15.699 36.667-1.023-59.003-.578-14.085-1.265 14.253-3.334 54.558h-2.474c-.155-.372-.684-1.278-2.12-1.278a2.9 2.9 0 00-1.433.351c-.406.223-.753.54-1.011.927h-2.867l-.131 19.602-1.81-58.193-2.226 39.008-.103-.411h-.884l-1.198-3.473-1.462 3.473h-3.408a2.87 2.87 0 00-.966-.863 2.812 2.812 0 00-1.36-.335c-.479 0-.95.116-1.374.339-.39.208-.73.501-.991.859H11.93v13.252L9.993 60.719 8.341 82.038l-.185-.7H7.052l-1.29-3.803-1.17 3.804H0v.41h4.892l.889-2.876.979 2.877h1.07l.74 2.789 1.347-19.714 2.218 37.793v-.01l.205-20.852h2.49l.061-.09c.23-.345.541-.627.905-.822a2.64 2.64 0 011.186-.292 2.389 2.389 0 012.048 1.103l.061.095h3.89l1.154-2.738.942 2.738h.858l.688 2.758 1.828-35.232 2.07 63.602.41-31.13h2.685l.06-.099c.225-.368.543-.671.92-.88a2.506 2.506 0 011.242-.3c1.472 0 1.769 1.077 1.78 1.123l.038.156h3.162l3.04-49.736 1.076 62.242 15.524-36.252-.08 23.705h17.527L77.784 144l6.186-56.724-1.843-.18-2.38 24.438V78.258c0-1.73-.05-10.085-.11-13.194h.82l.134 2.797h1.462l.27-.444c1.098-1.807 2.775-2.721 4.987-2.721 3.51 0 5.961 3.023 5.961 7.351 0 5.412-3.248 7.835-6.465 7.835h-.921v1.872h16.646v-1.873h-.922c-2.78 0-4.046-1.948-4.046-3.758 0-1.233.387-2.228 1.186-3.026 1.405-1.401 4.052-2.123 7.656-2.112h.926v-1.268c0-2.98-1.681-4.688-4.616-4.688a9.013 9.013 0 00-3.66.801l-.222-.74c1.157-.56 2.748-.896 4.331-.896 4.345 0 5.256 3.395 5.256 6.246v6.086c-.02 1.467.072 2.934.277 4.387l.129.868h13.028v-1.922h-.922c-4.364 0-7.075-2.795-7.075-7.296 0-4.706 2.693-7.867 6.698-7.867 5.515 0 5.793 5.627 5.793 6.745 0 .154 0 .31-.014.466h-11.51l.018.942c.076 4.053 2.564 6.576 6.493 6.576 1.208.021 2.413-.131 3.578-.452v2.8h6.36l3.34 10.656 2.365-20.17 5.675 66.823 3.833-106.774 2.457 49.442h6.248l.889-2.877.978 2.877h1.071l.772 2.91 1.336-32.678 1.298 60.218 1.097-30.444h2.497l.061-.09c.23-.345.541-.627.905-.822a2.45 2.45 0 011.186-.292 2.389 2.389 0 012.048 1.103l.061.095h3.891l1.153-2.738.942 2.738h.858l.636 2.581 1.843-18.788 1.2 36.788 1.303-20.583h2.693l.059-.099a2.45 2.45 0 012.162-1.18c1.475 0 1.77 1.077 1.782 1.123l.039.156H191v-.411l-2.736.002z"
                fill="url(#paint0_linear_3945_24980)"
            />
            <Defs>
                <LinearGradient
                    id="paint0_linear_3945_24980"
                    x1={8.97492e-7}
                    y1={84.0001}
                    x2={191.001}
                    y2={84.0983}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#7DCE8A" />
                    <Stop offset={1} stopColor="#4D7CFE" />
                </LinearGradient>
            </Defs>
        </Svg>
    )
}

export default SvgComponent