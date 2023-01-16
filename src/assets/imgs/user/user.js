import * as React from 'react'
import Svg, {Path, Defs, LinearGradient, Stop} from 'react-native-svg'
import {RH, RW} from '@/theme/utils'
import User from '@/components/userIcon'
import {Text, TouchableOpacity, View} from "react-native";
import Modal from "@/components/modal";
import {useState} from "react";

function SvgComponent({size = RW(100), user, onPressItem}) {
    const width = RW(size < 60 ? 60 : size);
    const [modalVisible, setModalVisible] = useState(false)

    const item = <Svg
        width={width}
        height={width + RH(size < 200 ? 15 : 25)}
        viewBox={'0 0 270 414'}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M212.706 78.32c0 .9-.015 1.797-.045 2.69 16.157 3.634 32.595 6.304 49.156 8.541 6.17.823 7.686 2.867 7.627 8.613-.197 19.548-.169 39.183-.14 58.836.011 7.019.021 14.039.021 21.059 0 6.858-.037 13.717-.073 20.576v.004c-.073 13.716-.145 27.432.073 41.148.922 50.309-19.862 90.991-56.062 124.927-21.136 19.687-45.6 35.556-72.282 46.885-3.078 1.322-7.612 2.043-10.407.793-44.11-19.43-81.767-46.664-107.5-88.066C8.205 300.679.293 273.406.222 245.563c-.159-26.251-.148-52.511-.137-78.761.009-22.969.018-45.931-.086-68.873 0-5.879 1.858-7.672 7.805-8.466 16.499-2.201 32.876-4.852 48.979-8.462-.03-.89-.045-1.784-.045-2.681C56.739 35.065 91.653 0 134.722 0s77.984 35.065 77.984 78.32zm45.545 123.443c.033-6.401.066-12.801.066-19.202 0-6.551-.009-13.103-.018-19.653-.027-18.34-.053-36.664.128-54.907.054-5.363-1.338-7.269-7.003-8.037-39.356-5.404-77.947-13.51-113.303-32.918a8.062 8.062 0 00-6.634 0c-35.37 19.339-73.961 27.5-113.303 32.836-5.46.74-7.167 2.414-7.167 7.9.096 21.41.087 42.838.079 64.273-.01 24.498-.02 49.004.126 73.503a140.394 140.394 0 0020.981 73.503c23.63 38.637 58.208 64.053 98.71 82.185 2.566 1.166 6.73.494 9.556-.74a227.898 227.898 0 0066.371-43.754c33.24-31.67 52.324-69.635 51.477-116.585-.2-12.801-.133-25.603-.066-38.404z"
            fill="url(#paint0_linear_2837_24276)"
        />
        <Path
            d="M258.3 182.481c0 19.202-.3 38.404 0 57.607.847 46.949-18.237 84.914-51.477 116.584a227.898 227.898 0 01-66.371 43.754c-2.826 1.234-6.99 1.906-9.556.74-40.502-18.132-75.08-43.548-98.71-82.185a140.394 140.394 0 01-20.981-73.503c-.273-45.935 0-91.896-.205-137.776 0-5.486 1.706-7.16 7.167-7.9C57.509 94.466 96.1 86.305 131.47 66.966a8.06 8.06 0 016.634 0c35.356 19.408 73.947 27.514 113.303 32.918 5.665.768 7.057 2.675 7.003 8.037-.246 24.758-.11 49.666-.11 74.56z"
            fill="url(#paint1_linear_3194_9885)"
        />
        <User user={user} size={width}/>
        <Defs>
            {user.status === 'BRONZE' ? (
                <LinearGradient
                    id="paint0_linear_2837_24276"
                    x1={-8.51229}
                    y1={69.5403}
                    x2={278.853}
                    y2={69.5403}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#873B23"/>
                    <Stop offset={0.0582217} stopColor="#A66842"/>
                    <Stop offset={0.276042} stopColor="#E5BA8C"/>
                    <Stop offset={0.485208} stopColor="#E8D2AE"/>
                    <Stop offset={0.708333} stopColor="#C09067"/>
                    <Stop offset={1} stopColor="#A05E2E"/>
                </LinearGradient>
            ) : user.status === 'GOLD' ? (
                <LinearGradient
                    id="paint0_linear_2837_24276"
                    x1={0.863037}
                    y1={69.5403}
                    x2={270.309}
                    y2={69.5403}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#A37A1E"/>
                    <Stop offset={0.0001} stopColor="#D3A84C"/>
                    <Stop offset={0.276042} stopColor="#FFEC95"/>
                    <Stop offset={0.485208} stopColor="#E6BE69"/>
                    <Stop offset={0.708333} stopColor="#FFD67A"/>
                    <Stop offset={0.9999} stopColor="#B58F3E"/>
                    <Stop offset={1} stopColor="#956E13"/>
                </LinearGradient>
            ) : (
                <LinearGradient
                    id="paint0_linear_2837_24276"
                    x1={0.863032}
                    y1={183.329}
                    x2={270.309}
                    y2={183.329}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#9E9E9E"/>
                    <Stop offset={0.0659772} stopColor="#D9D9D9"/>
                    <Stop offset={0.238602} stopColor="#9C9C9C"/>
                    <Stop offset={0.485208} stopColor="#D9D9D9"/>
                    <Stop offset={0.620842} stopColor="#9C9C9C"/>
                    <Stop offset={0.694824} stopColor="#D9D9D9"/>
                    <Stop offset={0.882861} stopColor="#D9D9D9"/>
                    <Stop offset={0.938473} stopColor="#9C9C9C"/>
                    <Stop offset={1} stopColor="#D9D9D9"/>
                </LinearGradient>
            )}
            <LinearGradient
                id="paint1_linear_3194_9885"
                x1={4}
                y1={190}
                x2={258}
                y2={187.5}
                gradientUnits="userSpaceOnUse"
            >
                <Stop stopColor="#157185"/>
                <Stop offset={0.249292} stopColor="#87C4CC"/>
                <Stop offset={0.517997} stopColor="#1568A7"/>
                <Stop offset={0.829809} stopColor="#7BADE6"/>
                <Stop offset={1} stopColor="#024ABA"/>
            </LinearGradient>
        </Defs>

    </Svg>

    return onPressItem ?
        <TouchableOpacity
            onPress={() => setModalVisible(true)}
            style={{
                marginLeft:'auto',
                marginRight:'auto',
                borderRadius: 100,
            }}>
            {item}
            <View style={{
                position: 'absolute'
            }}>
                <Modal modalVisible={modalVisible} modalClose={onPressItem.modalClose} item={onPressItem.item} setIsVisible={setModalVisible}/>
            </View>
        </TouchableOpacity>
        : <View>{item}</View>
}

export default SvgComponent
