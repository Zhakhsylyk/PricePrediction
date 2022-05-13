import {React , useState} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import RangeSlider, { Slider } from 'react-native-range-slider-expo';
import { Dimensions } from 'react-native-web';


export const PriceFilter = () => {

    const [fromValue, setFromValue] = useState(0);
    const [toValue, setToValue] = useState(0);
    const [value, setValue] = useState(0);
    return (
         <View style={styles.container}>
         <Text style={{fontSize:13,fontWeight:'bold',marginTop:100}}> {fromValue} MM KZT - {toValue} MM KZT</Text>

              <View  style={{width:300,marginTop:-20}}>
                   <RangeSlider 
                   styleSize='small'
                   min={5} max={40}
                        fromValueOnChange={value => setFromValue(value)}
                        toValueOnChange={value => setToValue(value)}
                        initialFromValue={5}
                        initialToValue={40}
                   />
              </View>
                        
              </View>
    );
}
const styles = StyleSheet.create({
    container : {
        flex:1,
        alignItems:'center',
        marginTop:-20,
        
    }
})

