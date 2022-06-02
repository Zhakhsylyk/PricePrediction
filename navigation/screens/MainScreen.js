import * as React from "react";
import { useState,useRef,useEffect } from "react";
import axios from "axios";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  Dimensions,
  Image,
  ScrollView,
  Pressable
} from "react-native";
import AntIcon from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import Material from "react-native-vector-icons/MaterialCommunityIcons"
import DropDownPicker from "react-native-dropdown-picker";
import CityFilter from "./components/components/CityFilter";
import { RoomFilter } from "./components/components/RoomFilter";
import { PriceFilter } from "./components/components/PriceFilter";
import { AreaFilter } from "./components/components/AreaFilter";
import { Header } from "./components/components/Header";
import { useFonts } from "expo-font";
import { TypeFilter } from "./components/components/TypeFilter";
import BalconyFilter from "./components/components/BalconyFilter";
import ResidentialComplexFilter from "./components/components/ResidentialComplexFilter";
import BathroomFilter from "./components/components/BathroomFilter";
import BottomSheet from "react-native-gesture-bottom-sheet";
import AnimateNumber from 'react-native-animate-number'
import Geocoder from "react-native-geocoding";
import FlatRenovationFilter from "./components/components/FlatRenovationFilter";
import MapView, { Marker, Heatmap, PROVIDER_GOOGLE } from "react-native-maps";
import {
  collection,
  query,
  where,
  getDocs,
  QuerySnapshot,
} from "firebase/firestore";
import { firebase } from "./../../firebase";
import CityFilterHM from "./components/components/CityFilterHM";
import RoomFilterHM from "./components/components/RoomFilterHM";
import TypeFilterHM from "./components/components/TypeFilterHM";
import { PriceFilterHM } from "./components/components/PriceFilterHM";


const { height } = Dimensions.get("window");
const baseUrl = 'http://172.20.10.7:5000';
const ref = firebase.firestore().collection("data");


export default function MainScreen({ navigation }) {
  const [type, setType] = useState("");
  const [price,setPrice] = useState("");
  const [city, setCity] = useState("");
  const [room, setRoom] = useState("");
  const [balcony,setBalcony] = useState('');
  const [residentialComplex,setResidentialComplex] = useState('');
  const [bathroom,setBathroom] = useState('');
  const [year,setYear] = useState('');
  const [area,setArea] = useState('');
  const [floor,setFloor] = useState('');
  const [flatRenovation, setFlatRenovation] = useState('');

  const [address,setAddress] = useState('');
  const [lat, setLat] = useState('');
  const [lon, setLon] = useState('');
  
  const [renderComponent,setRenderComponent] = useState(false);

  const [result, setResult] = useState('');




  const [cityHM, setCityHM] = useState('');
  const [roomHM, setRoomHM] = useState('');
  const [typeHM, setTypeHM] = useState('');
  const [FromPrice,setFromPrice] = useState('');
  const [ToPrice, setToPrice] = useState('');
  const [stats, setStats] = useState([]);
  const [myLatitudes, setMyLatitudes] = useState([]);
  const [myLongitudes, setMyLongitudes] = useState([]);
  const [myPrices, setMyPrices] = useState([]);

  const [region, setRegion] = useState({
    latitude: 43.238949,
    longitude: 76.889709,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  })
  
  const bottomSheet = useRef();

  const items = [];
  const priceList = [];
  const longitudes = [];
  const latitudes = [];
  
  

  const convert = () => {
    Geocoder.init("AIzaSyAgFToFZhcicUOVX-0viiYJNWgGMTcZC70");
    Geocoder.from(address)
      .then((json) => {
         const latitude = json.results[0].geometry.location.lat;
         const longitude = json.results[0].geometry.location.lng;
         setLat(latitude);
         setLon(longitude);
      },
      )
      .catch((error) => console.log("Не найдено местоположение данного адреса"));
  }

  const update = async ()  => {
    console.log(lat);
    console.log(lon);
      let inputs = [parseInt(city), parseInt(room), parseInt(type), balcony, residentialComplex,bathroom, parseInt(area),  parseInt(floor), parseInt(year),flatRenovation,lat,lon];
        let dataField = [parseInt(city), parseInt(room), parseInt(type), parseInt(balcony), residentialComplex,parseInt(bathroom), parseInt(area),  parseInt(floor), parseInt(year)];
        console.log(dataField);
        console.log(inputs);
        await axios({
          method: 'post',
        url:`${baseUrl}/predict`,
        data: dataField
      }).then(response=>{
        setResult(response.data);
        setRenderComponent(!renderComponent);
        console.log(response.data);
        
      })
  
    }
    useEffect(async () => {
      ref
        .where("houseType", "==", typeHM)
        .where("city", "==", cityHM)
        .where("title", "==", roomHM)
        .where("price", ">", FromPrice)
        .where("price", "<", ToPrice)
        .orderBy("price", "asc")
        .limit(100)
        .onSnapshot((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            items.push(doc.data());
            priceList.push(doc.data().price);
            latitudes.push(doc.data().Latitude);
            longitudes.push(doc.data().Longitude);
          });
          setStats(items);
  
          // console.log(priceList);
          // console.log(areasDistinct);
          // setRenderComponent(true)
          // setRenderComponent(true);
          setMyLatitudes(latitudes);
          setMyLongitudes(longitudes);
          setMyPrices(priceList);
          console.log(latitudes[0]);
          console.log(longitudes[0]);
        });
    }, [cityHM, typeHM, roomHM, FromPrice, ToPrice]);
  
  
    let points = new Array(100);
  for (let i = 0; i < points.length; i++) {
    
    points[i] = {
      latitude: myLatitudes[i],
      longitude: myLongitudes[i],
      weight: myPrices[i],
    };
  }
    
  const [loaded] = useFonts({
    Kodchasan: require("../../assets/fonts/Kodchasan-Regular.ttf"),
    Lato: require("../../assets/fonts/Lato-Bold.ttf"),
  });
  if (!loaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.Header}>
          <Header />
        </View>
        <Text
          style={{ fontFamily: "Lato", fontSize: 20, marginTop: 40, left: 20 }}
        >
          Select parameters:
        </Text>
        <View style={styles.filterBarUpper}>
          <CityFilter passCity={setCity}/>
          <RoomFilter passRoom={setRoom}/>
          <TypeFilter passType={setType}/>
        </View>
        <Text
          style={{ fontFamily: "Lato", fontSize: 20, marginTop: 40, left: 20 }}
        >
          Enter your data:
        </Text>

        <View style={{display:"flex", flexDirection:'row', left:40,paddingTop:20 }}>

        <TextInput 
                    style={styles.addressInput}
                    placeholder="Address"
                    placeholderTextColor="#D2D2D2" 
                    onChangeText={(text) => setAddress(text)}
                    value={address}
                />
                <View style={{left:5,top:2}}> 
        <TouchableOpacity
        style={styles.buttonConvert}
        onPress={convert}
        >        
        <Material name="repeat" size={24} color="#fff" />
        </TouchableOpacity>
        </View>
        </View>
        <View style={{alignItems:"center"}}>
        <TextInput 
                    style={styles.input}
                    placeholder="Area"
                    keyboardType='numeric'
                    placeholderTextColor="#D2D2D2" 
                    onChangeText={(text) => setArea(text)}
                    value={area}
                />
                 <TextInput 
                    style={styles.input}
                    placeholder="Floor"
                    keyboardType='numeric'
                    placeholderTextColor="#D2D2D2" 
                    onChangeText={(text) => setFloor(text)}
                    value={floor}
                />
                 <TextInput 
                    style={styles.input}
                    placeholder="Year"
                    keyboardType='numeric'
                    placeholderTextColor="#D2D2D2" 
                    onChangeText={(text) => setYear(text)}
                    value={year}
                />
        </View>
        <View style={styles.ToggleBar}>
        <ResidentialComplexFilter passResidentialComplex={setResidentialComplex}/>
        </View>
        <View style={styles.filterBarLower}>
        <BalconyFilter passBalcony={setBalcony} />
        <BathroomFilter passBathroom={setBathroom}/>
        <FlatRenovationFilter passFlatRenovation={setFlatRenovation}/>
         </View>
        <View style={{ width: Dimensions.get("window").width, marginTop: 20 }}>
          <Text
            style={{
              fontFamily: "Lato",
              fontWeight: "700",
              fontSize: 20,
              left: 20,
              marginTop: 20,
            }}
          >
            Select Price:
          </Text>
          <PriceFilter passPrice={setPrice}/>
        </View>
        <View style={{alignItems:'flex-end',right:20}}> 
        <TouchableOpacity
        style={styles.buttonPredict}
        onPress={update}
        >        
        <Text style={styles.buttonText}>Predict</Text>
        </TouchableOpacity>
        </View>
        {renderComponent &&
        <View style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',paddingTop:30}}>

        <Text style={{fontWeight:'bold',fontSize:20}}>Predicted price is </Text>

        <AnimateNumber value={result} style={{fontSize:20}} timing="linear"/>
        </View>
        }
             {/* <Text>{city}</Text>
             <Text>{room}</Text>
             <Text>{type}</Text>
             <Text>{price}</Text> */}
             {/* <Text>{balcony}</Text>
             <Text>{residentialComplex}</Text>
             <Text>{bathroom}</Text> */}
             <Text style={{paddingTop:40,fontSize:24, fontWeight:'bold'}}> Heatmap Visualization</Text>
             <View style={styles.filterBarUpper}>
          <CityFilterHM passCityHM={setCityHM} />
          <RoomFilterHM passRoomHM={setRoomHM} />
          <TypeFilterHM passTypeHM={setTypeHM} />
        </View>
        <View style={{ width: Dimensions.get("window").width, marginTop: 40 }}>
          <Text
            style={{
              fontFamily: "Lato",
              fontWeight: "700",
              fontSize: 20,
              left: 20,
              marginTop: 20,
            }}
          >
            Price Range
          </Text>
          <PriceFilterHM passFromPrice={setFromPrice} passToPrice={setToPrice} />
        </View>
             <View style={{ borderRadius: 26, overflow: "hidden", paddingTop:10,paddingBottom:30 }}>
          <MapView
            style={styles.map}
            provider={MapView.PROVIDER_GOOGLE}
            initialRegion={region}
            onRegionChangeComplete={(region) => setRegion(region)}
          >
            <Heatmap
              initialRegion={{
                latitude: 51.132148,
                longitude: 71.405953,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
              points={points}
              opacity={1}
              gradient={{
                colors: ["black", "purple", "red", "yellow", "white"],
                startPoints: [0.01, 0.04, 0.1, 0.45, 0.9],
                colorMapSize: 2000,
              }}
            ></Heatmap>
          </MapView>
        </View>
      </ScrollView>
      <View style={{flex:1, justifyContent:'center',alignItems:'center',bottom:50}}>
        <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Map")}
        >
        <Entypo style={styles.mapIcon} name="map" size={14} color="#fff" />
        
        <Text style={styles.buttonText}>Open Map</Text>
        </TouchableOpacity>
        </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  Header: {
    // position: "absolute",
    top: 0,
    width: Dimensions.get("window").width,
  },
  filterBarUpper: {
    top: 30,
    height:60,
    flexWrap:'wrap',
    zIndex:10,
    display: "flex",
    flexDirection: "row",
    width:380,

  },
  filterBarLower: {
    top: 30,
    height:60,
    flexWrap:'wrap',
    zIndex:10,
    display: "flex",
    flexDirection: "row",
    width:410,

  },
  map: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 5,
    width: 400,
    height: 400,
  },
  ToggleBar :{ 
  right:30,
  paddingTop:10,
  },
  input:{
    borderWidth:1,
    marginBottom:15,
    padding:10,
    width:'80%',
    borderRadius:5,
 },
 addressInput:{
  borderWidth:1,
  marginBottom:15,
  padding:10,
  width:'70%',
  borderRadius:5,
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
    width: 380,
    height: 240,
    borderRadius: 10,
  },
  textTitle: {
    right: 80,
    paddingTop: 10,
    fontSize: 18,
    fontFamily: "Lato",
  },
  newsContainer: {
    marginTop: 30,
    display: "flex",
    flexDirection: "column",
  },
  button: {
    
    display: "flex",
    flexDirection: "row",
    height: 50,
    width: 150,
    backgroundColor: "#4EB058",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    shadowColor: "#5ee083",
    shadowOpacity: 0.7,
    shadowOffset: {
      height: 4,
      width: 4,
    },
    shadowRadius: 5,
    elevation: 6,
  },
  buttonPredict:{
    display: "flex",
    flexDirection: "row",
    height: 40,
    width: 100,
    backgroundColor: "#4EB058",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,

  },
  buttonConvert:{
    display: "flex",
    flexDirection: "row",
    height: 35,
    width: 35,
    backgroundColor: "#4EB058",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,

  },
  buttonText: {
    color: "white",
    fontSize:18,
    fontFamily:'Lato',
    right:1,
  },
  mapIcon: {
    right:10,
  },
  newsItem: {
    marginBottom: 40,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

});
