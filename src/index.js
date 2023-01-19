import React, {useEffect, useState} from 'react'
import { StatusBar, Text, View } from 'react-native'
import AuthNavigator from '@/navigation/AuthNavigator'
import AppNavigator from '@/navigation/AppNavigator'
import { DARK_BLUE } from '@/theme/colors'
import { AppProvider } from '@/context'
import { useAuth } from '@/hooks'
import {useDispatch, useSelector} from "react-redux";
import {signUpFirstStep} from "@/store/action/SignUpAction";




const MyApp = () => {
  const { authenticated } = useAuth()
  const dispatch=useDispatch();


  // const store=useSelector((state)=>console.log(state));



    useEffect(()=>{
        dispatch(signUpFirstStep({
            "email": "noyarmenia@mail.ru",
            "name": "Kamo",
            "surname": "Hovhannisyan"
        }))
    })

  return (
    <AppProvider>
      <StatusBar barStyle={'light-content'} backgroundColor={DARK_BLUE} />
      {/*<AppNavigator />*/}
      {authenticated ? <AppNavigator /> : <AuthNavigator />}
    </AppProvider>
  )
}

export default MyApp
