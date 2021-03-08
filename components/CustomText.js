import React from 'react'
import { StyleSheet, Text} from 'react-native'

const CustomText = (props) => {
    return (
        <Text style={{...styles.textStyle,...props.style}}>{props.children}</Text>
    )
}

const styles = StyleSheet.create({
    textStyle:{
        fontFamily: 'OpenSans-Regular'
    }
})

export default CustomText
