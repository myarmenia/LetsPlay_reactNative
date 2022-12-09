import React, {useEffect, useMemo, useState} from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import QrCode from "@/screens/Elias/QrCode";
import Players from "@/screens/Elias/Players";
import AllocatePlayers from "@/screens/Elias/AllocatePlayers";
import {NAV_HEADER_OPTION} from "@/constants";
import GoBack from "@/helpers/goBack";
import EliasAllocatePlayersInfo from '@/screens/Elias/AllocatePlayersInfo';
import Settings from "@/screens/Elias/Settings";
import DifficultyLevel from "@/screens/Elias/DifficultyLevel";
import Start from "@/screens/Elias/Start";
import ResTeam from "@/screens/Elias/ResTeam";
import ResTeams from "@/screens/Elias/ResTeams";

const Stack = createNativeStackNavigator();

function Index(props) {
    const [goBack, setGoBack] = useState(true);

    const [modalRules, setModalRules] = useState(true);

    const [route, setRoute]=useState({
        QrCodeComponent:props => (<GoBack item={<QrCode modalRules={modalRules} setModalRules={setModalRules} setGoBack={setGoBack} {...props} />}/>),
        PlayersComponent:props => (<GoBack item={<Players setGoBack={setGoBack} {...props} />}/>),
        AllocatePlayersComponent:props =>(<GoBack item={<AllocatePlayers  {...props} />}/>),
        EliasAllocatePlayersInfoComponent:props=>(<GoBack item={<EliasAllocatePlayersInfo  {...props} />}/>),
        SettingsComponent:props=>(<GoBack item={<Settings  {...props} />}/>),
        DifficultyLevelComponent:props=>(<GoBack item={<DifficultyLevel  {...props} />}/>),
        StartComponent:props=>(<GoBack item={<Start   {...props} />}/>),
        ResTeamComponent:props=>(<GoBack item={<ResTeam  {...props} />}/>),
        ResTeamsComponent:props=>(<GoBack item={<ResTeams  {...props} />}/>)
    })

    return (
        <Stack.Navigator screenOptions={NAV_HEADER_OPTION}  >
            <Stack.Screen name="Qr" component={route.QrCodeComponent}/>
            <Stack.Screen name="EliasPlayers" component={route.PlayersComponent}/>
            <Stack.Screen name="EliasAllocatePlayers" component={route.AllocatePlayersComponent}/>
            <Stack.Screen name="EliasAllocatePlayersInfo" component={route.EliasAllocatePlayersInfoComponent}/>
            <Stack.Screen name="SettingsElias" component={route.SettingsComponent}/>
            <Stack.Screen name="DifficultyLevel" component={route.DifficultyLevelComponent}/>
            <Stack.Screen name="EliasStart" component={route.StartComponent}/>
            <Stack.Screen name="ResTeamElias" component={route.ResTeamComponent}/>
            <Stack.Screen name="ResTeamsElias" component={route.ResTeamsComponent}/>
        </Stack.Navigator>
    );
}

export default Index;
