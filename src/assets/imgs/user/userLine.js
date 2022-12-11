import * as React from "react"
import Svg, { Rect, Defs, LinearGradient, Stop } from "react-native-svg"
import {Text, View} from "react-native";
import {font, RH, RW} from "@/theme/utils";
import {BLACK} from "@/theme/colors";

function SvgComponent({status, isMax}) {
    const width=isMax?RW(185):RW(46);
    const height=isMax?RH(35):RH(8);
    return (
        <Svg
            width={width}
            height={height}
            viewBox="0 0 165 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {status==='GOLD'?<>
                <Rect
                    x={1.11194}
                    y={0.795227}
                    width={163.387}
                    height={19}
                    rx={4.5}
                    fill="url(#paint0_linear_863_4448)"
                    stroke="url(#paint1_linear_863_4448)"
                />
                <View style={{width:'100%', height:'100%',alignItems:'center', justifyContent:'center'}}>
                    <Text style={isMax?{ ...font('bold', RW(9), BLACK)}:{...font('bold', RW(2), BLACK)}}>ОРГАНИЗАТОР | УЧАСТНИК</Text>
                </View>
                <Defs>
                    <LinearGradient
                        id="paint0_linear_863_4448"
                        x1={0.611938}
                        y1={3.66128}
                        x2={164.999}
                        y2={3.66125}
                        gradientUnits="userSpaceOnUse"
                    >
                        <Stop stopColor="#A37A1E" />
                        <Stop offset={0.119792} stopColor="#D3A84C" />
                        <Stop offset={0.276042} stopColor="#FFEC95" />
                        <Stop offset={0.485208} stopColor="#E6BE69" />
                        <Stop offset={0.708333} stopColor="#FFD67A" />
                        <Stop offset={0.859375} stopColor="#B58F3E" />
                        <Stop offset={1} stopColor="#956E13" />
                    </LinearGradient>
                    <LinearGradient
                        id="paint1_linear_863_4448"
                        x1={0.611938}
                        y1={3.66128}
                        x2={164.999}
                        y2={3.66125}
                        gradientUnits="userSpaceOnUse"
                    >
                        <Stop stopColor="#A37A1E" />
                        <Stop offset={0.119792} stopColor="#D3A84C" />
                        <Stop offset={0.276042} stopColor="#FFEC95" />
                        <Stop offset={0.485208} stopColor="#E6BE69" />
                        <Stop offset={0.708333} stopColor="#FFD67A" />
                        <Stop offset={0.859375} stopColor="#B58F3E" />
                        <Stop offset={1} stopColor="#956E13" />
                    </LinearGradient>
                </Defs>
            </> :status==='SILVER'?<>
                <Rect
                x={1.15869}
                y={0.956055}
                width={163.387}
                height={19}
                rx={4.5}
                fill="url(#paint0_linear_724_5155)"
                stroke="url(#paint1_linear_724_5155)"
            />
                <View style={{width:'100%', height:'100%',alignItems:'center', justifyContent:'center'}}>
                    <Text style={isMax?{ ...font('bold', RW(9), BLACK)}:{...font('bold', RW(2), BLACK)}}>ОРГАНИЗАТОР | УЧАСТНИК</Text>
                </View>
                <Defs>
                    <LinearGradient
                        id="paint0_linear_724_5155"
                        x1={0.658692}
                        y1={12.1227}
                        x2={165.045}
                        y2={12.6464}
                        gradientUnits="userSpaceOnUse"
                    >
                        <Stop stopColor="#A0A0A0" />
                        <Stop offset={0.130208} stopColor="#E6E6E6" />
                        <Stop offset={0.276042} stopColor="#BABABA" />
                        <Stop offset={0.510417} stopColor="#AAA" />
                        <Stop offset={0.791667} stopColor="#CECECE" />
                        <Stop offset={1} stopColor="#797979" />
                    </LinearGradient>
                    <LinearGradient
                        id="paint1_linear_724_5155"
                        x1={0.658692}
                        y1={12.1227}
                        x2={165.045}
                        y2={12.6464}
                        gradientUnits="userSpaceOnUse"
                    >
                        <Stop stopColor="#A0A0A0" />
                        <Stop offset={0.130208} stopColor="#E6E6E6" />
                        <Stop offset={0.276042} stopColor="#BABABA" />
                        <Stop offset={0.510417} stopColor="#AAA" />
                        <Stop offset={0.791667} stopColor="#CECECE" />
                        <Stop offset={1} stopColor="#797979" />
                    </LinearGradient>
                </Defs>
            </>:<>
                <Rect
                x={0.815186}
                y={0.795166}
                width={163.387}
                height={19}
                rx={4.5}
                fill="url(#paint0_linear_864_4342)"
                stroke="url(#paint1_linear_864_4342)"
            />
                <View style={{width:'100%', height:'100%',alignItems:'center', justifyContent:'center'}}>
                    <Text style={isMax?{ ...font('bold', RW(9), BLACK)}:{...font('bold', RW(2), BLACK)}}>ОРГАНИЗАТОР | УЧАСТНИК</Text>
                </View>
                <Defs>
                    <LinearGradient
                        id="paint0_linear_864_4342"
                        x1={-5.40463}
                        y1={3.66122}
                        x2={169.915}
                        y2={3.66119}
                        gradientUnits="userSpaceOnUse"
                    >
                        <Stop stopColor="#873B23" />
                        <Stop offset={0.0582217} stopColor="#A66842" />
                        <Stop offset={0.276042} stopColor="#E5BA8C" />
                        <Stop offset={0.485208} stopColor="#E8D2AE" />
                        <Stop offset={0.708333} stopColor="#C09067" />
                        <Stop offset={1} stopColor="#A05E2E" />
                    </LinearGradient>
                    <LinearGradient
                        id="paint1_linear_864_4342"
                        x1={-5.40463}
                        y1={3.66122}
                        x2={169.915}
                        y2={3.66119}
                        gradientUnits="userSpaceOnUse"
                    >
                        <Stop stopColor="#873B23" />
                        <Stop offset={0.0582217} stopColor="#A66842" />
                        <Stop offset={0.276042} stopColor="#E5BA8C" />
                        <Stop offset={0.485208} stopColor="#E8D2AE" />
                        <Stop offset={0.708333} stopColor="#C09067" />
                        <Stop offset={1} stopColor="#A05E2E" />
                    </LinearGradient>
                </Defs>
            </>
            }
        </Svg>
    )
}

export default SvgComponent
