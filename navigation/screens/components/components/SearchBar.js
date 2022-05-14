import {React,useState,useRef} from 'react'
import {View,Text,TextInput,StyleSheet,Dimensions} from 'react-native'
import AntIcon from "react-native-vector-icons/AntDesign";
import { useNavigation } from '@react-navigation/native';
import BottomSheet from "react-native-gesture-bottom-sheet";


export const SearchBar = () => {
    const navigation = useNavigation(); 
    const [text, setText] = useState('');
    const bottomSheet = useRef();
  return (
    <View style={styles.searchSection}>
    <BottomSheet hasDraggableIcon ref={bottomSheet} height={600} />
    <View>
      <TextInput
        style={styles.TextInput}
        placeholderTextColor="gray"
        placeholder="Astana, Kazakhstan"
        returnKeyType="search"
        onSubmitEditing={() => navigation.navigate('Main',{text:text})}
        onChangeText={text => setText(text)}
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
        onPress={() => bottomSheet.current.show()}
      />
    </View>
  </View>
  )
}
const styles = StyleSheet.create({
    searchSection: {
        padding: 10,
        paddingTop: 50,
        // backgroundColor: "#17191D",
        position: "absolute",
        top: 0,
        display: "flex",
        width: Dimensions.get("window").width,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      },
      TextInput: {
        backgroundColor: "#F0EAEA",
        height: 51,
        width: 310,
        fontSize: 20,
        borderRadius: 15,
        padding: 15,
      },
      filterIcon: {},
      searchIcon: {
        right: 40,
      },
})
