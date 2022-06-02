import { React, useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import DropDownPicker from 'react-native-dropdown-picker';


function BalconyFilter(props) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'балкон', value: '0'},
    {label: 'лоджия', value: '1'},
    {label: 'балкон и лоджия', value: '2'}
  ]);

  props.passBalcony(value)
  

  
  return (
    <View style={styles.screen}>
    <DropDownPicker
    containerStyle={{
      width:133,
    }}
    
    placeholder="Balcony"
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
export default BalconyFilter;
