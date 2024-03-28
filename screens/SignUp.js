import { View, Text, SafeAreaView ,StyleSheet,TextInput, TouchableOpacity} from 'react-native'
import React from 'react'
import { colors } from '../config/constant'
import Button from '../componenst/Button'

const SignUp = () => {
  return (
    <View style={styles.container}>

        <SafeAreaView >

            <View style={styles.contentContainer} >



        <Text style={styles.title}>Create a New Account</Text>
        <TextInput style={styles.input} placeholder='Enter Your Name'/>
        <TextInput style={styles.input}  placeholder='Enter Your email'/>
        <TextInput style={styles.input}  placeholder='Enter Your password'/>


        

<View style={styles.buttonsContainer}>


      <Button title={"Sign In"}/>

        <Button title={"Sign Up"}/>


        </View>
        </View>

        </SafeAreaView>






    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        flex:1,

        backgroundColor:colors.primary,
    },
    title:{
        fontSize:36,
        color:"white",
        fontWeight:"800"
    },
    contentContainer:{
        padding:32,
    },
    input:{backgroundColor:"white",
    fontSize:15,
    marginTop:16,
    paddingHorizontal:16,
    paddingVertical:14,
    borderRadius:6

    },
    buttonsContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:32
    },
    buttonContainer:{
        backgroundColor:"black",
        paddingHorizontal:16,
        paddingVertical:12,
        borderRadius:6
    },
    buttonLabel:{
        color:"white",
        fontSize:18
    }
})

export default SignUp