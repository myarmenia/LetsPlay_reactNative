import { Linking, Platform, Dimensions } from "react-native";
import { isTablet } from 'react-native-device-info';




export const openMap = async (address) => {
    const destination = encodeURIComponent(`${address}`);
    const provider = Platform.OS === 'ios' ? 'apple' : 'google'
    const link = `http://maps.${provider}.com/?daddr=${destination}`;

    try {
        const supported = await Linking.canOpenURL(link);
        if (supported) Linking.openURL(link);
    } catch (error) {
    }
}


export const isTabletDevice = isTablet();
export const deviceWidth = Dimensions.get('screen').width
export const deviceHeight = Dimensions.get('screen').height

