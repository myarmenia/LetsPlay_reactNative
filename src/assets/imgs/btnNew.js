import React from "react";
import { View, StyleSheet } from "react-native";
import { Rect, Svg, Defs, Stop, LinearGradient, Text } from "react-native-svg";

const Button = ({ width, height }) => {
    return (
        <View style={{ backgroundColor: "red" }}>
            <Svg
                width={width}
                height={height}
                viewBox={`0 0 ${width} ${height}`}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <Rect
                    x="0.911133"
                    y="0.425781"
                    width={width-1}
                    height={height-1}
                    rx="15"
                    fill="url(#paint0_linear_3011_31801)"
                />
                <Rect
                    x="9.98022"
                    y="6.92578"
                    width={width-20}
                    height={height-14}
                    rx="9.5"
                    stroke="url(#paint1_linear_3011_31801)"
                    strokeWidth="5"
                />
                <Rect
                    x="7.98022"
                    y="4.92578"
                    width={width-16}
                    height={height-10}
                    rx="11.5"
                    stroke="url(#paint2_linear_3011_31801)"
                />
                <Defs>
                    <LinearGradient
                        id="paint0_linear_3011_31801"
                        x1="0.911134"
                        y1="28.4258"
                        x2="238.912"
                        y2="28.8832"
                        gradientUnits="userSpaceOnUse"
                    >
                        <Stop stopColor="#7DCE8A" />
                        <Stop offset="1" stopColor="#4D7CFE" />
                    </LinearGradient>
                    <LinearGradient
                        id="paint1_linear_3011_31801"
                        x1="118.105"
                        y1="-6.48191"
                        x2="119.271"
                        y2="21.9453"
                        gradientUnits="userSpaceOnUse"
                    >
                        <Stop stopColor="white" />
                        <Stop offset="1" stopColor="white" stopOpacity="0" />
                    </LinearGradient>
                    <LinearGradient
                        id="paint2_linear_3011_31801"
                        x1="119.911"
                        y1="44.4258"
                        x2="119.852"
                        y2="36.5571"
                        gradientUnits="userSpaceOnUse"
                    >
                        <Stop stopColor="white" />
                        <Stop offset="1" stopColor="white" stopOpacity="0" />
                    </LinearGradient>
                </Defs>
            </Svg>
        </View>
    );
};

const styles = StyleSheet.create({});

export default Button;
