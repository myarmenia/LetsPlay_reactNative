import React from 'react';
import { Svg, Path } from 'react-native-svg';

const ProfileIcon = ({ color = '#657AC5' }) => {
    return (
        <Svg width="21" height="27" viewBox="0 0 21 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path fillRule="evenodd" clipRule="evenodd" d="M10.1772 26.0219C5.02112 26.0219 0.61792 25.2196 0.61792 22.0062C0.61792 18.793 4.99319 15.8265 10.1772 15.8265C15.3334 15.8265 19.7365 18.7642 19.7365 21.9776C19.7365 25.1896 15.3613 26.0219 10.1772 26.0219Z" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
            <Path fillRule="evenodd" clipRule="evenodd" d="M10.1669 13.2755C13.5507 13.2755 16.2931 10.533 16.2931 7.14939C16.2931 3.76573 13.5507 1.02197 10.1669 1.02197C6.78333 1.02197 4.03959 3.76573 4.03959 7.14939C4.02816 10.5216 6.75159 13.2641 10.1238 13.2755C10.139 13.2755 10.153 13.2755 10.1669 13.2755Z" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
    )
};

export default ProfileIcon;