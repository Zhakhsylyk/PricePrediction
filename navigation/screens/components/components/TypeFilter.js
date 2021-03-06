import { React, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';


export const TypeFilter = (props) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
      {label: 'кирпичный', value: '0'},
      {label: 'панельный', value: '1'},
      {label: 'монолитный', value: '2'},
      {label: 'иное', value: '3'},
    ]);
  props.passType(value);
    return (
      <View style={styles.screen}>
      <DropDownPicker
      containerStyle={{
        width:137,
        
      }}
      placeholder="House type"
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
          { /*<Text>Your type: {value}</Text> */ }

        </View>
    );
  }
  const styles = StyleSheet.create({
    screen: {
        flex: 1,
        width:140,
        left:22,
    },
    text: {
      fontSize: 24,
    },
    picker: {
      width: 174,
    },
  });
