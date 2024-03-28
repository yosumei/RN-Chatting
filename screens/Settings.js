import { View, Text ,StyleSheet,TouchableOpacity} from 'react-native'
import React from 'react'
import Contactrow from '../componenst/Contactrow'
import { colors } from '../config/constant'
import Seperator from '../componenst/Seperator'
import {Ionicons} from "@expo/vector-icons"
import Cell from '../componenst/cell'


const Settings = () => {
  return (
    <View>

      <Contactrow
      name="Yosumei"
      subtitle="nurish60@gmail.com"
      style={styles.contactRow}
       />


      <Seperator/>



<Cell

title="Logout"
icon="log-out-outline"

onPress={()=>{
    alert("don't touch me gain")
}} />

<Cell

title="Tell A Friend"
icon="heart-outline"


onPress={()=>{
    alert("don't touch me gain")
}} />


<Cell

title="Help"
icon="information-outline"


onPress={()=>{
    alert("don't touch me gain")
}} />




    </View>

    

  )
}

const styles =StyleSheet.create(
    {
        contactRow:{
            backgroundColor:"white",
            marginTop:16,
            borderTopWidth:StyleSheet.hairlineWidth,
            borderColor:colors.border
        },
        
        
    }
)

export default Settings