import React, {useState,useEffect} from 'react'
import {View,Text,Dimensions,StyleSheet,Linking} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import MapView , {PROVIDER_GOOGLE,Marker} from 'react-native-maps';
import { data } from './../constants/coordinates';
import { firebase } from '../../../../firebase';
import {
  collection,
  query,
  where,
  getDocs,
  QuerySnapshot,
} from "firebase/firestore";
import * as geofire from "geofire-common";


export const Map = () => {
  const [location,setLocation] = useState({ latitude: 43.238949,
    longitude: 76.889709});
  const [data,setData] = useState([]);
  const ref = firebase.firestore().collection("data");


    const datas = [];
    const hash = geofire.geohashForLocation([location.latitude, location.longitude]);
    
    const hashConst = hash.slice(0, 5);
    console.log(hashConst);

    useEffect(async () => {
      ref
        .where("geohash", "==", hashConst)
        .limit(15)
        .onSnapshot((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            datas.push(doc.data());
          });
          setData(datas);
        });
  
    }, [location]);


  return (
    <View style={styles.container}>
    <MapView style={styles.map} 
    provider = { MapView.PROVIDER_GOOGLE }
    initialRegion={{
      latitude: 43.238949,
      longitude: 76.889709,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}>
    <Marker 
      coordinate={location}
     pinColor="blue"
     draggable={true}
     onDragStart={(e) => {
     }}
     onDragEnd={(e) => {
       setLocation({
         latitude: e.nativeEvent.coordinate.latitude,
         longitude:e.nativeEvent.coordinate.longitude
       })
      //  console.log("Drag end", location)
     }}
    />
      { data.map((data) => (
                <Marker
                  coordinate={{
                    latitude: data.Latitude,
                    longitude: data.Longitude,
                  }}
                  onPress={() => Linking.openURL(data.link)}
                />
              ))}
    </MapView>
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