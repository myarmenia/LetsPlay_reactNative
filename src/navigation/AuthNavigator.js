import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Preferences from '@/screens/Auth/screens/SignUp/screens/Preferences'
import Onboard from '@/screens/Auth/screens/SignUp/screens/Onboard'
import SignInHome from '@/screens/Auth/screens/SignIn/screens/Home'
import SignIn from '@/screens/Auth/screens/SignIn'
import SignUp from '@/screens/Auth/screens/SignUp'
import { NAV_HEADER_OPTION } from '@/constants'
import AuthHome from '@/screens/Auth'
import Socket from '@/utils/Socket'

const Stack = createNativeStackNavigator()

const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={NAV_HEADER_OPTION} initialRouteName={'Home'}>
      <Stack.Screen name={'Home'} component={AuthHome} />
      <Stack.Screen name={'SignUp'} component={SignUpStack} />
      <Stack.Screen name={'SignInStack'} component={SignInStack} />
      <Stack.Screen name={'Socket'} component={Socket} />
    </Stack.Navigator>
  )
}

const SignInStack = () => {
  return (
    <Stack.Navigator screenOptions={NAV_HEADER_OPTION} initialRouteName={'SignIn'}>
      <Stack.Screen name={'Home'} component={SignInHome} />
      <Stack.Screen name={'SignIn'} component={SignIn} />
    </Stack.Navigator>
  )
}

const SignUpStack = () => {
  return (
    <Stack.Navigator screenOptions={NAV_HEADER_OPTION} initialRouteName={'Home'}>
      <Stack.Screen name={'Home'} component={SignUp} />
      <Stack.Screen name={'Onboard'} component={Onboard} options={{ gestureEnabled: true }} />
      <Stack.Screen
        name={'Preferences'}
        component={Preferences}
        options={{ gestureEnabled: true }}
      />
    </Stack.Navigator>
  )
}

export default AuthNavigator
