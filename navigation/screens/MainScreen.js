import * as React from "react";
import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  Dimensions,
  Image,
  ScrollView,
} from "react-native";
import AntIcon from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import DropDownPicker from "react-native-dropdown-picker";
import CityFilter from "./components/components/CityFilter";
import { RoomFilter } from "./components/components/RoomFilter";
import { PriceFilter } from "./components/components/PriceFilter";
import { AreaFilter } from "./components/components/AreaFilter";
import { Header } from "./components/components/Header";
import { useFonts } from "expo-font";

const { height } = Dimensions.get("window");

export default function MainScreen({ navigation }) {
  const [loaded] = useFonts({
    Kodchasan: require("../../assets/fonts/Kodchasan-Regular.ttf"),
    Lato: require("../../assets/fonts/Lato-Bold.ttf"),
  });
  if (!loaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.Header}>
          <Header />
        </View>
        <Text
          style={{ fontFamily: "Lato", fontSize: 20, marginTop: 40, left: 20 }}
        >
          Select parameters:{" "}
        </Text>
        <View style={styles.filterBar}>
          <CityFilter />
          <RoomFilter />
          <AreaFilter />
        </View>
        <View style={{ width: Dimensions.get("window").width, marginTop: 40 }}>
          <Text
            style={{
              fontFamily: "Lato",
              fontWeight: "700",
              fontSize: 20,
              left: 20,
              marginTop: 20,
            }}
          >
            Price Range
          </Text>
          <PriceFilter />
        </View>
        <View style={styles.newsContainer}>
          <Text
            style={{
              fontSize: 24,
              left: 20,
              fontFamily: "Lato",
              marginBottom: 15,
            }}
          >
            Dashboard
          </Text>
          <View style={styles.newsItem}>
            <Image
              style={styles.image}
              source={require("../../assets/Nur-sultan.png")}
            />
            <Text style={styles.textTitle}>
              Real Estate Price Statistics,{"\n"}Nur-sultan
            </Text>
          </View>
          <View style={styles.newsItem}>
            <Image
              style={styles.image}
              source={require("../../assets/Almaty.png")}
            />
            <Text style={styles.textTitle}>
              Real Estate Price Statistics,{"\n"}Almaty
            </Text>
          </View>
          <View style={styles.newsItem}>
            <Image
              style={styles.image}
              source={require("../../assets/Almaty.png")}
            />
            <Text style={styles.textTitle}>
              Real Estate Price Statistics,{"\n"}Almaty
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={{flex:1, justifyContent:'center',alignItems:'center',bottom:50}}>
        <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Map")}
        >
        <Entypo style={styles.mapIcon} name="map" size={14} color="#fff" />
        
        <Text style={styles.buttonText}>Open Map</Text>
        </TouchableOpacity>
        </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  Header: {
    // position: "absolute",
    top: 0,
    width: Dimensions.get("window").width,
  },
  filterBar: {
    top: 30,
    justifyContent: "center",
    zIndex: 1,
    // gap: 10,
    display: "flex",
    flexDirection: "row",
  },
  txtinput: {
    textAlign: "center",
    width: 30,
    height: 33,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
  },

  containerStyle: {
    backgroundColor: "red",
  },

  image: {
    width: 380,
    height: 240,
    borderRadius: 10,
  },
  textTitle: {
    right: 80,
    paddingTop: 10,
    fontSize: 18,
    fontFamily: "Lato",
  },
  newsContainer: {
    marginTop: 30,
    display: "flex",
    flexDirection: "column",
  },
  button: {
    
    display: "flex",
    flexDirection: "row",
    height: 50,
    width: 150,
    backgroundColor: "#4EB058",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    shadowColor: "#5ee083",
    shadowOpacity: 0.7,
    shadowOffset: {
      height: 4,
      width: 4,
    },
    shadowRadius: 5,
    elevation: 6,
  },
  buttonText: {
    color: "white",
    fontSize:18,
    fontFamily:'Lato',
    right:1,
  },
  mapIcon: {
    right:10,
  },
  newsItem: {
    marginBottom: 40,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

});
