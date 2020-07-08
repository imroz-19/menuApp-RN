import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import * as Font from "expo-font";
import { AppLoading } from 'expo';
import MealsNavigation from './navigation/MealsNavigation';
import { enableScreens } from 'react-native-screens';

enableScreens();

const fetchFonts = () => {
   return Font.loadAsync({
     'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
     'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
   })
}
export default function App() {

  const [ isFontLoading, setFontLoading ]  = useState(false);

  if (!isFontLoading) {
    return (
    <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoading(true)}
    />);
  }
  return <MealsNavigation />;
}

const styles = StyleSheet.create({

});
