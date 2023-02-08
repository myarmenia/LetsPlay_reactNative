import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Provider } from 'react-redux'
import MyApp from '@/index'
import store from '@/store'

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <MyApp />
      </Provider>
    </NavigationContainer>
  )
}

export default App
