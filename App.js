import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {AuthProvider} from '@/context';
import {Provider} from "react-redux";
import MyApp from '@/index';
import store from "@/store/index";



const App = () => {

    return (
        <GestureHandlerRootView style={{flex: 1}}>
            <AuthProvider>
                <NavigationContainer>
                    <Provider store={store}>
                        <MyApp/>
                    </Provider>
                </NavigationContainer>
            </AuthProvider>
        </GestureHandlerRootView>
    )
};

export default App;
