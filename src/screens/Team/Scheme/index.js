import React, {useRef} from 'react';
import {
    View,
    Animated,
    StyleSheet,
    PanResponder,
    Text,
    Image,
    SafeAreaView,
    ImageBackground,
    ScrollView
} from 'react-native';
import User from "@/assets/imgs/user/user";
import {Players} from "@/assets/TestData";
import ScreenMask from "@/components/wrappers/screen";
import style from "@/screens/Team/Scheme/style";
import FootballField from '@/assets/imgs/FootballField.png'
import Draggable from 'react-native-draggable';
import {RW} from "@/theme/utils";
import { DraxProvider, DraxView } from 'react-native-drax';

const Scheme = (props) => {
    const {team , data} = props.route.params
    const  matchPLayers = Players.filter((player) => {
        return player.id <= 6
    })
    console.log(matchPLayers)
    return (
        <ScreenMask>
            <DraxProvider>
            <View style={style.teamBlock}>
                <Image style={style.image} source={{uri: team.image}}/>
                <Text style={style.title}>
                    {team.name}
                </Text>
            </View>
            <ImageBackground
                source={data.playField}
                imageStyle={style.img}
                style={style.container}
            >
            </ImageBackground>
            <View>
                <Text style={style.text}>Запасные игроки:</Text>
            </View>

            {matchPLayers.map((ev) =>
                <Draggable key={ev.id} minX={20} minY={120} maxX={343} maxY={560} x={ev.x} y={ev.y}>
                    <User  size={50} user={Players[ev.id - 1]} onPressItem={{
                        item: <User user={Players[ev.id - 1]} size={390}/>,
                        modalClose: false,
                    }}/>
                </Draggable>
              )}
            </DraxProvider>
        </ScreenMask>

    );
};

const styles = StyleSheet.create({
    container: {
        height: 600,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleText: {
        fontSize: 14,
        lineHeight: 24,
        fontWeight: 'bold',
    },
    box: {
        height: 150,
        width: 150,
        backgroundColor: 'blue',
        borderRadius: 5,
    },
});

export default Scheme;
