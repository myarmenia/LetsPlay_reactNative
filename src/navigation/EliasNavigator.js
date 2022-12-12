import React, {useState} from 'react';
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

    const Qr = props => (<GoBack item={<QrCode modalRules={modalRules} setModalRules={setModalRules} setGoBack={setGoBack} {...props} />}/>);
    const P = props => (<GoBack item={<Players setGoBack={setGoBack} {...props} />}/>);
    const routes = [QrCode, Players]

    return (
        <Stack.Navigator screenOptions={NAV_HEADER_OPTION}  >
            <Stack.Screen name="Qr" component={Qr}/>
            <Stack.Screen name="EliasPlayers" component={P}/>
            <Stack.Screen name="EliasAllocatePlayers" component={AllocatePlayers}/>
            <Stack.Screen name="EliasAllocatePlayersInfo" component={EliasAllocatePlayersInfo}/>
            <Stack.Screen name="SettingsElias" component={Settings}/>
            <Stack.Screen name="DifficultyLevel" component={DifficultyLevel}/>
            <Stack.Screen name="EliasStart" component={Start}/>
            <Stack.Screen name="ResTeamElias" component={ResTeam}/>
            <Stack.Screen name="ResTeamsElias" component={ResTeams}/>
        </Stack.Navigator>
    );
}

export default Index;
