import React, {useState} from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {NAV_HEADER_OPTION} from '@/constants'
import PlayNow from '@/screens/Mafia/screen/PlayNow/playNow'
import AboutGame from '@/screens/Mafia/screen/AboutGame/AboutGame'
import PlaceMan from '@/screens/Mafia/screen/placeMan/placeMan'
import PlayerOut from "@/screens/Mafia/screen/playerOut/playerOut";
import Vote from "@/screens/Mafia/screen/Vote/Vote";
import Ratings from "@/screens/Mafia/screen/Ratings/Ratings";
import RatingPlayer from "@/screens/Mafia/screen/RatingPlayer/RatingPlayer";
import GoBack from "@/helpers/goBack";
import QrCode from "@/screens/Mafia/screen/QrCode";
import Settings from "@/screens/Mafia/screen/Settings";

const MafiaGame = () => {
    const Stack = createNativeStackNavigator();

    const [route]=useState({
        QrCodeComponent: props => <GoBack item={<QrCode {...props} />} />,
        SettingsComponent: props => <GoBack item={<Settings {...props} />} />,
        PlayNowComponent:props => (<GoBack item={<PlayNow {...props}  />}/>),
        AboutGameComponent:props => (<GoBack item={<AboutGame />}/>),
        PlaceManComponent:props =>(<GoBack item={<PlaceMan  {...props} />}/>),
        VoteComponent:props=>(<GoBack item={<Vote  {...props} />}/>),
        PlayerOutComponent:props=>(<GoBack item={<PlayerOut  {...props} />}/>),
        RatingsComponent:props=>(<GoBack item={<Ratings  {...props} />}/>),
        RatingPlayerComponent:props=>(<GoBack item={<RatingPlayer   {...props} />}/>),
    })
    return (
        <>
            <Stack.Navigator screenOptions={NAV_HEADER_OPTION}>
                <Stack.Screen name="QrMafia" component={route.QrCodeComponent} />
                <Stack.Screen name="SettingsMafia" component={route.SettingsComponent} />
                <Stack.Screen name={'playNow'} component={route.PlayNowComponent}/>
                <Stack.Screen name={'aboutGame'} component={route.AboutGameComponent}/>
                <Stack.Screen name={'PlaceMan'} component={route.PlaceManComponent}/>
                <Stack.Screen name={"Vote"} component={route.VoteComponent}/>
                <Stack.Screen name={"PlayerOut"} component={route.PlayerOutComponent}/>
                <Stack.Screen name={"Ratings"} component={route.RatingsComponent}/>
                <Stack.Screen name={"RatingPlayer"} component={route.RatingPlayerComponent}/>
            </Stack.Navigator>
        </>
    )
}

export default MafiaGame
