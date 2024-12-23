import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider as PaperProvider } from 'react-native-paper';
import AppNavigator from './src/navigations/AppNavigator';



const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <PaperProvider >
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </PaperProvider>
    </GestureHandlerRootView>
  );
};

export default App;
