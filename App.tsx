
import React from 'react';
import Login from './src/pages/Login';
import { AppLoading } from 'expo';
import { useFonts,Dosis_400Regular,Dosis_700Bold } from '@expo-google-fonts/dosis';

export default function App() {
  let [fontsLoaded] = useFonts({
    Dosis_400Regular,
    Dosis_700Bold
  });

  if(!fontsLoaded){
    return <AppLoading />;
  }else{
    return <Login />;
  }
}

