import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
// import {createStore,applyMiddleware} from "redux";
import { AuthProvider } from '@/context';
// import {Provider} from "react-redux";
import MyApp from '@/index';
// import createSagaMiddleware from "redux-saga";
// const saga = createSagaMiddleware();
// import {reducers} from './src/store/redusers';
// import sagas from './src/store/sagas';


// let store = createStore(reducers,applyMiddleware(saga));
// saga.run(sagas);

const App = () => {

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AuthProvider>
        <NavigationContainer>
            {/*<Provider store={store}>*/}
          <MyApp />
            {/*</Provider>*/}
        </NavigationContainer>
      </AuthProvider>
    </GestureHandlerRootView>
  )
};

export default App;
