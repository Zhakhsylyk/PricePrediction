import {React,useState} from 'react'
import {View,Text,} from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker'


function CityFilter () {
    const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Almaty', value: 'Almaty'},
    {label: 'Nur-Sultan', value: 'Nur-Sultan'},
    {label: 'Shymkent', value: 'Shymkent'}
  ]);
  return (
    <View style={{zIndex:1,marginLeft:10}}>
    <DropDownPicker
    
    style={{
      borderWidth:1,
      borderRadius:5,
      padding:1,
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
    containerStyle ={{}}
    placeholder="City"
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
export default CityFilter;
