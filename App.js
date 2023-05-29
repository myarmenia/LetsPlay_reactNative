import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import MyApp from '@/index'
import store from '@/store'
import Loader from '@/components/loader/Loader'
import { LogBox } from 'react-native'
import LinkingConfig from '@/navigation/LinkingConfig'

LogBox.ignoreLogs([
  'Sending `rn-recordback` with no listeners registered.',
  'Possible Unhandled Promise Rejection (id: 1): Error: Player is already running.',
  'Animated.event now requires a second argument for options',
])

const App = () => {
  return (
    <NavigationContainer linking={LinkingConfig}>
      <Provider store={store}>
        <Loader>
          <MyApp />
        </Loader>
      </Provider>
    </NavigationContainer>
  )
}

export default App
