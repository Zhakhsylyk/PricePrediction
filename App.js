import * as React from 'react';
import {useEffect,useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import axios from 'axios';
// const baseUrl = 'http://localhost:5000';



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
import CityFilter from './navigation/screens/components/components/CityFilter';
import { RoomFilter } from './navigation/screens/components/components/RoomFilter';
import { TypeFilter } from './navigation/screens/components/components/TypeFilter';
import BalconyFilter from './navigation/screens/components/components/BalconyFilter';
import FloorFilter from './navigation/screens/components/components/FloorFilter';
// import MapScreen from './screens/MapScreen';


const Stack = createNativeStackNavigator();

function App() {
  // const [data,setData] = useState([{}])

  // useEffect(() => {
  //   fetch("/house/1").then(
  //     data => {
  //       setData(data)
  //       console.log(data)
  //     }
  //   )
  // },[])
  // axios({
  //   method: 'get',
  //   url: `${baseUrl}/house/3`,
  // }).then((response) => {
  //   console.log(response.data);
  // });

    return ( 
      <NavigationContainer>
        <Stack.Navigator 
        screenOptions={{
          headerShown: false
        }}
        initialRouteName={"Main"}>
        <Stack.Screen name="Map" component={MapScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Filter" component={FilterScreen} />
        <Stack.Screen name="Balcony" component={BalconyFilter} />
        <Stack.Screen name="CityFilter" component={TypeFilter} />
        <Stack.Screen name="Floor" component={FloorFilter} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
export default App;