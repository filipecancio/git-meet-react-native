
import React from 'react';
import HomeStack from './src/routes/HomeStack';
import AppLoading from 'expo-app-loading';
import { useFonts,Dosis_400Regular,Dosis_700Bold } from '@expo-google-fonts/dosis';

export default function App() {
  let [fontsLoaded] = useFonts({
    Dosis_400Regular,
    Dosis_700Bold
  });

  if(!fontsLoaded){
    return <AppLoading />;
  }else{
    return <HomeStack />;
  }
}

