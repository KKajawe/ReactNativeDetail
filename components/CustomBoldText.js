import React from 'react'
import { StyleSheet, Text} from 'react-native'

const CustomBoldText = (props) => {
    return (
    <Text style={{...styles.textStyle,...props.style}}>{props.children}</Text>
    )
}

const styles = StyleSheet.create({
    textStyle:{
        fontFamily: 'OpenSans-Bold'
    }
})

export default CustomBoldText
