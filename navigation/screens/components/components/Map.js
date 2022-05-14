import React from 'react'
import {View,Text,Dimensions,StyleSheet} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import MapView from 'react-native-maps';


export const Map = () => {
  return (
    <View style={styles.container}>
    <MapView style={styles.map} 
    initialRegion={{
      latitude: 43.238949,
      longitude: 76.889709,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  }
})