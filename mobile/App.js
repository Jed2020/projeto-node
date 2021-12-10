import React from 'react';
import { View, SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from "./route";
import {AuthContextProvider} from './src/Auth/AuthContext'


function App() {    
  return (
   <AuthContextProvider> 
   <SafeAreaView style={{flex: 1}}>
     <NavigationContainer>
      <Routes/> 
     </NavigationContainer> 
   </SafeAreaView>
   </AuthContextProvider>
  );
}

export default App;