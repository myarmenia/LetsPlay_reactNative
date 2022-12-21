import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NAV_HEADER_OPTION } from '@/constants'
import Rules from "@/screens/Crocodile/screen/rules/Rules";
import AddPlayer from "@/screens/Crocodile/screen/addPlayers/addPlayer";
import PersonInfo from "@/screens/Crocodile/screen/PersonInfo/PersonInfo";
import DifficultyLevel from "@/screens/Crocodile/screen/DifficultyLevel/DifficultLevel";
import AboutGameCrocodile from "@/screens/Crocodile/screen/aboutGame/aboutGame";
import Teams from "@/screens/Crocodile/screen/Teams/teams";
import Words from "@/screens/Crocodile/screen/Words/Words";
import RatingsCrocodile from "@/screens/Crocodile/screen/ratingCrocodile/ratingCrocodile";

const CrocodileGame = () => {
    const Stack = createNativeStackNavigator()
    return (
        <>
            <Stack.Navigator screenOptions={NAV_HEADER_OPTION}>
                <Stack.Screen name={"Rules"} component={Rules}/>
                <Stack.Screen name={"AddPlayer"} component={AddPlayer}/>
                <Stack.Screen name={"PersonInfo"} component={PersonInfo}/>
                <Stack.Screen name={"DifficultyLevel"} component={DifficultyLevel}/>
                <Stack.Screen name={"AboutGameCrocodile"} component={AboutGameCrocodile}/>
                <Stack.Screen name={"Teams"} component={Teams}/>
                <Stack.Screen name={"Words"} component={Words}/>
                <Stack.Screen name={"RatingsCrocodile"} component={RatingsCrocodile}/>
            </Stack.Navigator>

        </>
    )
}

export default CrocodileGame
