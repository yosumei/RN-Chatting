import { View, Text } from 'react-native'
import React from 'react'
import Chats from './screens/Chats'
import { NavigationContainer } from '@react-navigation/native'
import {createStackNavigator} from "@react-navigation/stack"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import Settings from './screens/Settings'

import { Ionicons } from "@expo/vector-icons"

import { colors } from './config/constant'
import SignUp from './screens/SignUp'
import Kemal from './screens/Kemal'





const ChatsStack=createStackNavigator()

const ChatsScreen=()=>{
  return(

    <ChatsStack.Navigator>
      <ChatsStack.Screen name='Chats' component={Chats}/>

    </ChatsStack.Navigator>
  )
}

const SettingsStack=createStackNavigator()
const SettingScreen=()=>{
  return(
    <SettingsStack.Navigator>
      <SettingsStack.Screen name='Settings' component={Settings}/>
    </SettingsStack.Navigator>
  )
}


const Tabs=createBottomTabNavigator()


const TabsScreen=()=>(

  <Tabs.Navigator
  screenOptions={({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;

      if (route.name === 'Chats') {
        iconName = focused
          ? 'chatbubbles'
          : 'chatbubbles-outline';
      } else if (route.name === 'Settings') {
        iconName = focused ? 'settings' : 'settings-outline';
      }

     
      return <Ionicons name={iconName} size={size} color={color} />;
    },
    tabBarActiveTintColor: colors.primary,
  })}
>

    <Tabs.Screen name='Chats' component={Chats}/>
    <Tabs.Screen name='Settings' component={Settings}/>


  </Tabs.Navigator>
)

const MainStack=createStackNavigator()



const App = () => {
  return (
    <NavigationContainer>

      <MainStack.Navigator headerMode="false"  >

        <MainStack.Screen  name='Tabs' component={TabsScreen}/>
        <MainStack.Screen  headerMode="false" mode="modal" name='SignUp' component={SignUp}/>
        <MainStack.Screen  name='Kemal' component={Kemal}/>




      </MainStack.Navigator>
    </NavigationContainer>
  )
}

export default App