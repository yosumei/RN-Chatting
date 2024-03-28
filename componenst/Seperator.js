import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'
import { colors } from '../config/constant'

const Seperator = () => {
  return (
    <View style={styles.seperator}>
    </View>
  )
}
const styles=
    StyleSheet.create({
        seperator:{
            height:StyleSheet.hairlineWidth,
            backgroundColor:colors.border,
            marginStart:88

        }

    })


export default Seperator