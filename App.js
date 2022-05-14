import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



// Screens
import MainScreen from './navigation/screens/MainScreen';
import HomeScreen from './navigation/screens/HomeScreen';
import FilterScreen from './navigation/screens/FilterScreen';
import { MapScreen } from './navigation/screens/MapScreen';
import { AreaFilter } from './navigation/screens/components/components/AreaFilter';
import { PriceFilter } from './navigation/screens/components/components/PriceFilter';
import { Header } from './navigation/screens/components/components/Header';
import { Example } from './navigation/screens/components/components/Example';
import Scroll from './navigation/screens/Scroll';
// import MapScreen from './screens/MapScreen';


const Stack = createNativeStackNavigator();

function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator 
        screenOptions={{
          headerShown: false
        }}
        initialRouteName={"Home"}>
        <Stack.Screen name="Map" component={MapScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Filter" component={FilterScreen} />
        <Stack.Screen name="Area" component={AreaFilter} />
        <Stack.Screen name="Price" component={PriceFilter} />
        <Stack.Screen name="Scroll" component={Scroll} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
export default App;