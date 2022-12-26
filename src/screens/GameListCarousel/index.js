import React, {useEffect} from 'react';
import {Dimensions, Text, BackHandler, View} from "react-native";
import Carousel from "react-native-reanimated-carousel";
import Game from "@/components/game";
import ScreenMask from "@/components/wrappers/screen";
import {RH} from '@/theme/utils'
import Modal from "@/components/modal";

function Index({navigation, route, setIsHome}) {
    const {list, game}=route.params;

    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;

<<<<<<< HEAD
=======



>>>>>>> a6bf9b1f955cf66f812a859938c3c3fcf62b5f1b
    return (
        <ScreenMask style={{paddingHorizontal:0}}>
            <Carousel
                loop
                width={width}
                height={height}
                data={[...list.keys()]}
                scrollAnimationDuration={1000}
                renderItem={({index}) => (
                    <View
                        key={index}
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                        }}
                    >
                            <Game data={list[index]} game={game}/>
                    </View>
                )}
            />
        </ScreenMask>
    );
}

export default Index;
