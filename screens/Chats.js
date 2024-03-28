import { View, Text, SafeAreaView, TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'
import { useEffect } from 'react'


import { Ionicons} from "@expo/vector-icons"

import Contactrow from '../componenst/Contactrow'
import Seperator from '../componenst/Seperator'




const Chats = ({navigation}) => {
    useEffect(()=>{
        const isLoggedIn=false;
        if(!isLoggedIn){
            navigation.navigate("SignUp");
        }
 
    },[]);
    
  return (
<SafeAreaView>


    <Contactrow

    name="Yosumei"
    subtitle="The King Of Tokat"
    onPress={ ()=> { navigation.navigate("Kemal");
}}
    />
    

<Seperator/>


<Contactrow

name="Aydın"
subtitle="Çicekcilik"
onPress={ ()=> { navigation.navigate("Kemal");
}}
/>

<Seperator/>


<Contactrow

name="Naz"
subtitle="Apaydın"
onPress={ ()=> { navigation.navigate("Kemal");
}}
/>

<Seperator/>


<Contactrow

name="Arif"
subtitle="Findukcu"
onPress={ ()=> { navigation.navigate("Kemal");
}}
/>



    </SafeAreaView>

  )
}

const styles=StyleSheet.create({

    seperator:{
        height:StyleSheet.hairlineWidth,
        backgroundColor:"#E2E2E2",
        marginStart:88
    }
})

export default Chats