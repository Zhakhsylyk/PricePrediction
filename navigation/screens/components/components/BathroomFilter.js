import { React, useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import DropDownPicker from 'react-native-dropdown-picker';


function BathroomFilter(props) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'совмещенный', value: '0'},
    {label: 'раздельный', value: '1'},
    {label: '2 с/y и более', value: '2'}
  ]);

  props.passBathroom(value)
  

  
  return (
    <View style={styles.screen}>
    <DropDownPicker
    containerStyle={{
      width:133,
    }}
    
    placeholder="Bathroom"
    placeholderStyle={{
      color: "#D2D2D2",
      fontWeight: "bold"
    }}
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      />
      </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    left:1,
  },
  text: {
    fontSize: 24,
  },
});
export default BathroomFilter;
