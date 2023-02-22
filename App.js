import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import MyApp from '@/index'
import store from '@/store'
import Loader from '@/components/loader/Loader'

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Loader>
          <MyApp />
        </Loader>
      </Provider>
    </NavigationContainer>
  )
}

export default App
