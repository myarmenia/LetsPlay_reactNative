import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NAV_HEADER_OPTION } from '@/constants'
import CreatingTeams from "@/screens/CreataTeam/CreatingTeams/CreatingTems";
import CreateTeamTitle from "@/screens/CreataTeam/createTeamTitle/createTeamTitile";

const CreateTeam = () => {
    const Stack = createNativeStackNavigator()
    return (
        <>
            <Stack.Navigator screenOptions={NAV_HEADER_OPTION}>
                <Stack.Screen name={"CreatingTeams"} component={CreatingTeams}/>
                <Stack.Screen name={"CreateTeamTitle"} component={CreateTeamTitle}/>
            </Stack.Navigator>
        </>
    )
}

export default CreateTeam
