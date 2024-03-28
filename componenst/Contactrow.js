import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { Ionicons } from "@expo/vector-icons"
import { colors } from '../config/constant'

const Contactrow = ({ name, subtitle,onPress }) => {
    return (
        <TouchableOpacity style={styles.row}  onPress={onPress}>
            <View style={styles.avatar}>
                <Text style={styles.avatarLabel}>{name.split("").reduce((prev,current)=>`${prev}${current[0]}`,"")} </Text>
            </View>
            <View style={styles.textContainer}>

                <Text style={styles.name}>{name} </Text>
                <Text style={styles.subtitle}>{subtitle} </Text>
            </View>

            <Ionicons name='chevron-forward-outline' size={20} />
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    row: {
        paddingHorizontal: 16,
        paddingVertical: 20,
        flexDirection: "row",
        alignItems: "center"
    },
    textContainer: {
        flex: 1,
        marginStart: 16
    },
    name: {
        fontSize: 16,

    },
    avatar: {
        width: 56,
        height: 56,
        backgroundColor: "#2196f3",
        borderRadius: 28,
        alignItems: "center",
        justifyContent: "center"

    },
    avatarLabel: {
        fontSize: 20,
        color: "white"

    },
    subtitle: {
        marginTop: 2,
        color: "#565656"

    },

})


export default Contactrow