import React from 'react';
import { ScrollView, TouchableOpacity, View} from "react-native";
import {styles} from "@/screens/Team/SelectPlayers/style";
import User from "@/assets/imgs/user/user";


function Index({players, isSelected=false, activePlayers=[], setActivePlayers}) {

    const handlerActiveUser = (id) => {
        if(isSelected){
            if (activePlayers.includes(id)) {
                const temp = activePlayers.filter((item, i) => item !== id);
                setActivePlayers(temp)
            } else {
                setActivePlayers([...activePlayers, id])
            }
        }
    }
    return (
            <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
                <View style={styles.container}>
                    {players.map((item, i) =>
                        <TouchableOpacity onPress={() => handlerActiveUser(item.id)} key={i}
                                          style={activePlayers.includes(item.id) && isSelected ? styles.activeItem : styles.item}>
                            <User size={90} user={item}/>
                        </TouchableOpacity>
                    )}
                </View>
            </ScrollView>
    );
}

export default Index;
