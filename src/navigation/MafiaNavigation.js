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
import QrCode from "@/screens/Elias/QrCode";
import AllocatePlayers from "@/screens/Elias/AllocatePlayers";
import EliasAllocatePlayersInfo from "@/screens/Elias/AllocatePlayersInfo";
import Settings from "@/screens/Elias/Settings";
import DifficultyLevel from "@/screens/Elias/DifficultyLevel";
import Start from "@/screens/Elias/Start";
import ResTeam from "@/screens/Elias/ResTeam";
import ResTeams from "@/screens/Elias/ResTeams";

const MafiaGame = () => {
    const Stack = createNativeStackNavigator();

    const [route]=useState({
        PlayNowComponent:props => (<GoBack item={<PlayNow   />}/>),
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
