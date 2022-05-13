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
  SafeAreaView,
  ScrollView,
} from "react-native";
import AntIcon from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import DropDownPicker from "react-native-dropdown-picker";
import CityFilter from "./components/components/CityFilter";
import { RoomFilter } from "./components/components/RoomFilter";
import { PriceFilter } from "./components/components/PriceFilter";
import { keyboardDismissHandlerManager } from "native-base";
import { AreaFilter } from "./components/components/AreaFilter";

const { height } = Dimensions.get("window");

export default function MainScreen({ navigation,route }) {
  const text = route.params.text;
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.searchSection}>
        <View>
          <TextInput
            style={styles.TextInput}
            placeholderTextColor="gray"
            placeholder="Astana, Kazakhstan"
            onChangeText={(text) => setText(text)}
          ></TextInput>
        </View>
        <View>
          <AntIcon
            style={styles.searchIcon}
            name="search1"
            size={24}
            color="#A89D9D"
          />
        </View>
        <View>
          <AntIcon
            style={styles.filterIcon}
            name="filter"
            size={24}
            color="#A89D9D"
            onPress={() => navigation.navigate("Filter")}
          />
        </View>
      </View>
      <View style={styles.newsContainer}>
        <View style={styles.filterBar}>
        <CityFilter />
        <RoomFilter />
          <AreaFilter />

        </View>
        <View style={{width:Dimensions.get('window').width}}>
          <Text
            style={{
              fontWeight: "700",
              fontSize: 20,
              marginLeft: 20,
              marginTop: 20,
            }}
          >
            Price Range
          </Text>
          <PriceFilter />
        </View>
        <Text
          style={{
            fontWeight: "700",
            fontSize: 24,
            position: "absolute",
            top: -50,
            left: 20,
          }}
        >
          Analytics
        </Text>
        <View style={styles.News}>
          <View style={styles.newsItem}>
            <Image
              style={styles.image}
              resizeMode="contain"
              source={require("../../assets/Nur-sultan.png")}
            />
            <Text style={styles.textTitle}>
              Real Estate Price Statistics,{"\n"}Nur-sultan
            </Text>
          </View>
        </View>
        <View style={styles.News}>
          <View style={styles.newsItem}>
            <Image
              style={styles.image}
              resizeMode="contain"
              source={require("../../assets/Almaty.png")}
            />
            <Text style={styles.textTitle}>
              Real Estate Price Statistics,{"\n"}Almaty
            </Text>
          </View>
        </View>
        <View style={styles.News}>
          <View style={styles.newsItem}>
            <Image
              style={styles.image}
              resizeMode="contain"
              source={require("../../assets/Almaty.png")}
            />
            <Text style={styles.textTitle}>
              Real Estate Price Statistics,{"\n"}Almaty
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Map")}
      >
        <Entypo style={styles.mapIcon} name="map" size={14} color="#fff" />

        <Text style={styles.buttonText}>Map</Text>
      </TouchableOpacity>
    </ScrollView>
  );

  function onChange() {
    return (val) => setSelectedTeam(val);
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    overflow: "scroll",
  },
  searchSection: {
    padding: 10,
    paddingTop: 50,
    backgroundColor: "#17191D",
    position: "absolute",
    top: 0,
    display: "flex",
    width: Dimensions.get("window").width,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  TextInput: {
    backgroundColor: "#FFF",
    height: 51,
    width: 310,
    fontSize: 24,
    borderRadius: 15,
    padding: 15,
  },
  filterIcon: {},
  searchIcon: {
    right: 40,
  },
  filterBar: {
    justifyContent: "center",
    zIndex: 1,
    // gap: 10,
    marginRight: 10,
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
    width: 340,
    height: 150,
    borderRadius: 20,
  },
  textTitle: {
    paddingLeft: 20,
    paddingTop: 10,
    fontSize: 18,
    fontWeight: "700",
  },
  newsContainer: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    top: 200,
  },
  News: {
    zIndex: 2,
    backgroundColor: "#F6F5F5",
    marginBottom: 30,
    position: "relative",
    width: 360,
    height: 246,
    borderRadius: 30,
  },
  newsItem: {
    position: "relative",
    top: 20,
  },
  button: {
    display: "flex",
    flexDirection: "row",
    height: 40,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 45,
    backgroundColor: "#4EB058",
    left: 0,
    right: 0,
    bottom: 0,
    position: "absolute",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
  },
  buttonText: {
    color: "#FFF",
  },
  mapIcon: {
    marginRight: 10,
  },
});
