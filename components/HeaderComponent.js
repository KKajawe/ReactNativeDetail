import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import colors from '../constants/colors';
import CustomBoldText from './CustomBoldText';

function HeaderComponent(props) {
    return (
        <View style={styles.header}>
            <CustomBoldText style={styles.headerTitle}>{props.title}</CustomBoldText>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        width: '100%',
        height:90,        
        backgroundColor:colors.primary,
        alignItems:'center',
        justifyContent:'center'

    },
    headerTitle:{
        color:'black',
        fontSize: 18
    }
});
export default  HeaderComponent