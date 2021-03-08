import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../constants/colors'
import CustomText from './CustomText'

const NumberContainer = (props) => {
    return (
       <View style= {style.container}>
           <CustomText style= {style.number}>{props.children}</CustomText>
       </View>
    )
}
const style= StyleSheet.create({
    container:{
        borderWidth: 2,
        borderColor: colors.primary,
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
        alignItems:'center',
        justifyContent:'center'
    },
    number:{
        color: colors.accent,
        fontSize: 22
    }
})

export default NumberContainer
