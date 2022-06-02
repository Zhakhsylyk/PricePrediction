import {React , useState} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import RangeSlider, { Slider } from 'react-native-range-slider-expo';
import { Dimensions } from 'react-native-web';


export const PriceFilter = (props) => {
    const [value, setValue] = useState(0);
    
    const million = 1000000
    props.passPrice(value*million)
    return (
         <View style={styles.container}>
         <Text style={{fontSize:13,fontWeight:'bold',marginTop:100,left:15}}>  {value} MM KZT</Text>

         <View style={{bottom:15}}>
                    <Slider min={10} max={70} step={4}
                         valueOnChange={value => setValue(value)}
                         initialValue={10}
                         knobColor='#4EB058'
                         valueLabelsBackgroundColor='#4EB058'
                         inRangeBarColor='gray'
                         outOfRangeBarColor='#4EB058'
                         styleSize='small'
                    />
               </View>
              </View>
    );
}
const styles = StyleSheet.create({
    container : {
        flex:1,
        marginTop:-75,
        
    }
})

