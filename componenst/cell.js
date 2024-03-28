import { View, Text,TouchableOpacity ,StyleSheet} from 'react-native'
import React from 'react'
import {Ionicons} from "@expo/vector-icons"
import { colors } from '../config/constant'



const Cell = ({title,icon,tintColor,onPress}) => {
  return (
    <TouchableOpacity   style={
        styles.cell
       } onPress={onPress} >
    
        <View style={[styles.iconContainer,{backgroundColor:tintColor}]}>  


            <Ionicons
            name={icon}
            size={24}
            color={"red"}/>

        </View>
            <Text style={styles.title} >
                {title}
            </Text>
            <Ionicons name={"chevron-forward-outline"} size={20}/>
       </TouchableOpacity>
  )
}

const styles =StyleSheet.create({
    cell:{
        paddingHorizontal:16,
        paddingVertical:12,
        backgroundColor:"white",
        flexDirection:"row",
        alignItems:"center",
        borderBottomWidth:StyleSheet.hairlineWidth,
        borderColor:colors.border
    },
    iconContainer:{
        width:22,
        height:22,
        backgroundColor:colors.red,
        borderRadius:6,
        alignItems:"center",
        justifyContent:"center"
    },
    title:{
        fontSize:16,
        marginStart:16,
        flex:1,
        
    }
})

export default Cell