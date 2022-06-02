import { React, useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import DropDownPicker from 'react-native-dropdown-picker';


function FlatRenovationFilter(props) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'свободная планировка', value: '0'},
    {label: 'среднее', value: '1'},
    {label: 'требует ремонта', value: '2'},
    {label: 'хорошее', value: '3'},
    {label: 'черновая отделка', value: '4'},
  ]);

  props.passFlatRenovation(value)
  

  
  return (
    <View style={styles.screen}>
    <DropDownPicker
    containerStyle={{
      width:133,
    }}
    
    placeholder="Flat Renovation"
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
export default FlatRenovationFilter;
