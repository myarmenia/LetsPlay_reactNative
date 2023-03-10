import * as React from 'react'
import {Svg, Path} from 'react-native-svg'
import {RH, RW} from '@/theme/utils'

function BackgroundGradientIcon({size}) {
    const width = RW(size?.width) || RW(379)
    const height = RH(size?.height) || RH(155)
    return (
        <Svg width={width} height={height} viewBox="0 0 379 155" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path
                d="M282.584 0.669922H314.898L340.991 13.2853L306.037 18.2252L282.584 0.669922Z"
                fill="#819A54"
            />
            <Path
                d="M363.435 61.1861L378.005 57.0254V72.0908L363.435 61.1861Z"
                fill="#79934B"
            />
            <Path
                d="M306.037 18.2251L340.991 13.2852L378.005 31.1805V57.0258L363.435 61.1865L306.037 18.2251Z"
                fill="#6F8B3D"
            />
            <Path
                d="M31.7532 0.669922H102.08L83.6034 14.8539L31.7532 0.669922Z"
                fill="#E1887F"
            />
            <Path
                d="M225.497 0.669922H282.584L306.037 18.2252L244.592 26.9099L225.497 0.669922Z"
                fill="#A6B77F"
            />
            <Path
                d="M378.005 95.3863L309.4 76.6197L363.435 61.1875L378.005 72.0922V95.3863Z"
                fill="#98AB6F"
            />
            <Path
                d="M273.648 66.8386L244.592 26.9092L306.037 18.2246L363.435 61.186L309.4 76.6181L273.648 66.8386Z"
                fill="#AABB85"
            />
            <Path
                d="M152.772 33.7739L154.327 0.669922H225.497L244.592 26.9099L167.506 37.8051L152.772 33.7739Z"
                fill="#F8F5E1"
            />
            <Path
                d="M244.592 26.9102L273.648 66.8395L167.506 37.8053L244.592 26.9102Z"
                fill="#F2F2DA"
            />
            <Path
                d="M83.6034 14.8539L102.08 0.669922H154.327L152.772 33.7739L83.6034 14.8539Z"
                fill="#F9E3D2"
            />
            <Path
                d="M316.481 154.669H147.088L147.559 144.68L316.481 154.669Z"
                fill="#FFF8E6"
            />
            <Path
                d="M0.397957 154.67V135.979L84.2043 140.935L36.1095 154.67H0.397957Z"
                fill="#C82623"
            />
            <Path
                d="M84.2044 140.934L147.559 144.68L147.088 154.669H36.1096L84.2044 140.934Z"
                fill="#DF7F76"
            />
            <Path
                d="M273.648 66.8398L309.4 76.6193L285.691 83.39L273.648 66.8398Z"
                fill="#DBE1BF"
            />
            <Path
                d="M309.4 76.6191L378.005 95.3858V114.97L307.899 113.906L285.692 83.3898L309.4 76.6191Z"
                fill="#B1BF8C"
            />
            <Path
                d="M149.118 111.495L152.483 39.9278L167.506 37.8047L273.649 66.8389L285.692 83.3891L185.355 112.045L149.118 111.495Z"
                fill="#FDFBE7"
            />
            <Path
                d="M185.355 112.045L285.692 83.3887L307.899 113.905L185.355 112.045Z"
                fill="#E9EBD1"
            />
            <Path
                d="M152.772 33.7734L167.506 37.8046L152.482 39.9278L152.772 33.7734Z"
                fill="#FFF8E6"
            />
            <Path
                d="M28.0279 57.5183L83.6034 14.8535L152.772 33.7736L152.483 39.9279L28.0279 57.5183Z"
                fill="#EFBFB2"
            />
            <Path
                d="M0.397888 109.237V78.7295L28.0278 57.5181L152.482 39.9277L149.118 111.495L0.397888 109.237Z"
                fill="#EAA99D"
            />
            <Path
                d="M0.397911 61.4237V0.669922H31.753L83.6033 14.8539L28.0278 57.5186L0.397911 61.4237Z"
                fill="#D14843"
            />
            <Path
                d="M0.397934 61.4247L28.0278 57.5195L0.397934 78.7309V61.4247Z"
                fill="#D14B46"
            />
            <Path
                d="M378.005 154.67H337.563L307.899 113.906L378.005 114.97V154.67Z"
                fill="#849D58"
            />
            <Path
                d="M149.118 111.496L185.355 112.046L148.599 122.544L149.118 111.496Z"
                fill="#FDF0DF"
            />
            <Path
                d="M185.355 112.045L307.899 113.905L337.562 154.669H316.481L147.559 144.68L148.598 122.542L185.355 112.045Z"
                fill="#F5F5DD"
            />
            <Path
                d="M84.2045 140.934L148.599 122.543L147.559 144.68L84.2045 140.934Z"
                fill="#EDBBAC"
            />
            <Path
                d="M0.397842 135.979V109.238L149.118 111.496L148.598 122.544L84.2042 140.935L0.397842 135.979Z"
                fill="#DC766C"
            />
            <Path
                d="M340.991 13.2846L378.005 8.05273V31.1799L340.991 13.2846Z"
                fill="#557720"
            />
            <Path
                d="M314.898 0.669922H378.005V8.05344L340.991 13.2853L314.898 0.669922Z"
                fill="#567821"
            />
            <Path
                opacity="0.68" d="M0.791077 0.669922H378.398V154.67H0.791077V0.669922Z"
                fill="white"
            />
        </Svg>

    )
}

export default BackgroundGradientIcon
