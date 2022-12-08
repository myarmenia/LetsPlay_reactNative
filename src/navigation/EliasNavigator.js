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

    const QrCodeComponent = props => (<GoBack item={<QrCode modalRules={modalRules} setModalRules={setModalRules} setGoBack={setGoBack} {...props} />}/>);
    const PlayersComponent = props => (<GoBack item={<Players setGoBack={setGoBack} {...props} />}/>);
    const AllocatePlayersComponent=props =>(<GoBack item={<AllocatePlayers  {...props} />}/>);
    const EliasAllocatePlayersInfoComponent=props=>(<GoBack item={<EliasAllocatePlayersInfo  {...props} />}/>);
    const SettingsComponent=props=>(<GoBack item={<Settings  {...props} />}/>);
    const DifficultyLevelComponent=props=>(<GoBack item={<DifficultyLevel  {...props} />}/>);
    const StartComponent=props=>(<GoBack item={<Start  {...props} />}/>);
    const ResTeamComponent=props=>(<GoBack item={<EliasAllocatePlayersInfo  {...props} />}/>);
    const ResTeamsComponent=props=>(<GoBack item={<ResTeams  {...props} />}/>);

    return (
        <Stack.Navigator screenOptions={NAV_HEADER_OPTION}  >
            <Stack.Screen name="Qr" component={QrCodeComponent}/>
            <Stack.Screen name="EliasPlayers" component={PlayersComponent}/>
            <Stack.Screen name="EliasAllocatePlayers" component={AllocatePlayersComponent}/>
            <Stack.Screen name="EliasAllocatePlayersInfo" component={EliasAllocatePlayersInfoComponent}/>
            <Stack.Screen name="SettingsElias" component={SettingsComponent}/>
            <Stack.Screen name="DifficultyLevel" component={DifficultyLevelComponent}/>
            <Stack.Screen name="EliasStart" component={StartComponent}/>
            <Stack.Screen name="ResTeamElias" component={ResTeamComponent}/>
            <Stack.Screen name="ResTeamsElias" component={ResTeamsComponent}/>
        </Stack.Navigator>
    );
}

export default Index;
