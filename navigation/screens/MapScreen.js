import React from 'react'
import {View,Text,Dimensions,StyleSheet} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Map, Marker } from './components/components/Map'
import { SearchBar } from './components/components/SearchBar'

export const MapScreen = () => {
  return (
    <View style={styles.container}>
    <Map />
    <View style={{position: 'absolute', top: 0, width: '100%'}}>
    <SearchBar />
    </View>
    </View>
  )
}

const styles = StyleSheet.create({

})