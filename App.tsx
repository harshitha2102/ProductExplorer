import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">

            <Stack.Screen
    name="Home"
    component={HomeScreen}
    options={{ title: 'Products', headerTitleAlign: 'center' }}
  />

          <Stack.Screen
            name="Details"
            component={DetailsScreen}
            options={{ title: 'Product Details' }}
          />

        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;