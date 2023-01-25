import React, {useState} from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NAV_HEADER_OPTION } from '@/constants'
import Rules from "@/screens/Crocodile/screen/rules/Rules";
import AddPlayer from "@/screens/Crocodile/screen/addPlayers/addPlayer";
import PersonInfo from "@/screens/Crocodile/screen/PersonInfo/PersonInfo";
import DifficultyLevel from "@/screens/Crocodile/screen/DifficultyLevel/DifficultLevel";
import Teams from "@/screens/Crocodile/screen/Teams/teams";
import Words from "@/screens/Crocodile/screen/Words/Words";
import RatingsCrocodile from "@/screens/Crocodile/screen/ratingCrocodile/ratingCrocodile";
import GoBack from "@/helpers/goBack";
import QrCode from "@/screens/Elias/QrCode";
import AllocatePlayers from "@/screens/Elias/AllocatePlayers";
import Settings from "@/screens/Elias/Settings";
import Start from "@/screens/Elias/Start";
import ResTeam from "@/screens/Elias/ResTeam";
import ResTeams from "@/screens/Elias/ResTeams";

const CrocodileGame = () => {
    const Stack = createNativeStackNavigator()
    const [goBack, setGoBack] = useState(true)

    const [route, setRoute] = useState({
        RulesComponent: props => <GoBack item={<Rules {...props} />} />,
        AddPlayerComponent: props => <GoBack item={<AddPlayer {...props} />} />,
        PersonInfoComponent: props => <GoBack item={<PersonInfo {...props} />} />,
        DifficultyLevelComponent: props => <GoBack item={<DifficultyLevel {...props} />} />,
        TeamsComponent: props => <GoBack item={<Teams {...props} />} />,
        WordsComponent: props => <GoBack item={<Words {...props} />} />,
        RatingsCrocodileComponent: props => <GoBack item={<RatingsCrocodile {...props} />} />,
    })

    return (
        <>
            <Stack.Navigator screenOptions={NAV_HEADER_OPTION}>
                <Stack.Screen name={"Rules"} component={route.RulesComponent}/>
                <Stack.Screen name={"AddPlayer"} component={route.AddPlayerComponent}/>
                <Stack.Screen name={"PersonInfo"} component={route.PersonInfoComponent}/>
                <Stack.Screen name={"DifficultyLevel"} component={route.DifficultyLevelComponent}/>
                <Stack.Screen name={"Teams"} component={route.TeamsComponent}/>
                <Stack.Screen name={"Words"} component={route.WordsComponent}/>
                <Stack.Screen name={"RatingsCrocodile"} component={route.RatingsCrocodileComponent}/>
            </Stack.Navigator>

        </>
    )
}

export default CrocodileGame
