import {React,useState} from 'react'
import {View,Text,} from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker'


export const RoomFilter = () => {
    const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: '1-комнатная', value: 'Almaty'},
    {label: '2-комнатная', value: 'Nur-Sultan'},
    {label: '3-комнатная', value: 'Shymkent'}
  ]);
  return (
    <View style={{zIndex:1,marginLeft:10,}}>
    <DropDownPicker
    style={{
      borderWidth:1,
      borderRadius:5,
      padding:5,
      width:130,
      display:'flex',
      flexDirection:'row',
    }}
    textStyle={{
      fontSize: 15
    }}
    dropDownContainerStyle={{
      backgroundColor: "#fff",
      borderBottomLeftRadius: 2,
      borderBottomRightRadius: 2
    }}
    showTickIcon={false}

    placeholder="No. Rooms"
    placeholderStyle={{
      color: "grey",
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
  )
}
