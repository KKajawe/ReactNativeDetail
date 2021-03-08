import React from 'react'
import { StyleSheet, TextInput } from 'react-native'
import colors from '../constants/colors'

const InputField = (props) => {
    return (
        <TextInput {...props}
        style={{...styles.inputField,...props.style}}/>
    )    
}

const styles = StyleSheet.create({
    inputField:{
        height:30,
        borderColor: colors.grey,
        borderBottomWidth:1,
        marginVertical:10
    }
})
export default InputField
