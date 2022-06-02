import { View, Text, TextInput } from 'react-native'
import React,{useState} from 'react'
import ModalSelector from 'react-native-modal-selector'


const FloorFilter = () => {
    const [textInputValue,setTextInputValue] = useState('');

    let index = 0;
        const data = [
            { key: index++, section: true, label: `Select apartment's state`, value:'0' },
            { key: index++, label: 'хорошее' },
            { key: index++, label: 'среднее' },
            { key: index++, label: 'черновая' },
        ];
  return (
    <View style={{paddingTop:60,width:200, left:100}}>
     <ModalSelector
                    overlayStyle={{justifyContent:"flex-end"}}
                    data={data}
                    initValue="FlatRenovation"
                    initValueTextStyle={{color:'gray'}}
                    onChange={(option)=>{(`${option.label} (${option.key})`)}} />
                    
    </View>
  )
}

export default FloorFilter