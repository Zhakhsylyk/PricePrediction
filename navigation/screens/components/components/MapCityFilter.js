import { React, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { city } from "./city";
function MapCityFilter() {
  const [cityName, setcityName] = useState("");
  const cityList = city.map((city) => (
    <Picker.Item label={city.label} value={city.value} />
  ));
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
    bottom: 80,
    left: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
  },
  picker: {
    width: 174,
  },
});
export default MapCityFilter;
