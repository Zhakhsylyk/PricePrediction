import { React, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { city } from "../constants/city";
function MapCityFilter(props) {
  const [cityName, setcityName] = useState("");
  const cityList = city.map((city) => (
    <Picker.Item label={city.label} value={city.value} />
  ));

  props.passMapCity(cityName);
  
  return (
    <View style={styles.screen}>
      <Picker
        selectedValue={cityName}
        onValueChange={(value, index) => setcityName(value)}
        mode="dropdown"
        style={styles.picker}
      >
        {cityList}
      </Picker>
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    height: 100,
    left: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
  },
  picker: {
    width: 174,
    bottom:20,
  },
});
export default MapCityFilter;
