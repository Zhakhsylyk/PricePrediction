import React, {useState, useEffect} from 'react';
import { Text, View , StyleSheet, Alert} from 'react-native';
import { Switch} from 'react-native-paper' ;
  
const ResidentialComplexFilter = (props) =>{
    const [switchOn, setSwitchOn] = useState(0)
    props.passResidentialComplex(switchOn === true ? 1 : 0);

  
    return(
        <View style ={styles.container}>
            <Text style={styles.textParameter}>Residential Complex</Text>
            <Switch value={switchOn} onValueChange={() => {
                setSwitchOn(!switchOn)} }/>
        </View>
    )
}
  
export default ResidentialComplexFilter ;
  
const styles = StyleSheet.create({
     container:{
         paddingTop:20,
        paddingLeft:50,
        flexDirection:'row',
         justifyContent:'space-between'
     },
     textParameter: {
         fontSize:18,
     }

})
