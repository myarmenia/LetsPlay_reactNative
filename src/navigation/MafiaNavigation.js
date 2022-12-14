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

const MafiaGame = () => {
    const Stack = createNativeStackNavigator();

    const [route]=useState({
    })
    return (
        <>
            <Stack.Navigator screenOptions={NAV_HEADER_OPTION}>
                <Stack.Screen name={'playNow'} component={PlayNow}/>
                <Stack.Screen name={'aboutGame'} component={AboutGame}/>
                <Stack.Screen name={'PlaceMan'} component={PlaceMan}/>
                <Stack.Screen name={"Vote"} component={Vote}/>
                <Stack.Screen name={"PlayerOut"} component={PlayerOut}/>
                <Stack.Screen name={"Ratings"} component={Ratings}/>
                <Stack.Screen name={"RatingPlayer"} component={RatingPlayer}/>
            </Stack.Navigator>
        </>
    )
}

export default MafiaGame
