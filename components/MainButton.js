import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text, TouchableNativeFeedback, Platform} from 'react-native';
import colors from '../constants/colors';

const MainButton = (props) => {
  let ButtonComponent = TouchableOpacity;
  if(Platform.OS === 'android' && Platform.Version >= 21){
    ButtonComponent = TouchableNativeFeedback;
  }
  return (
    <View style={styles.buttonContainer}>
    <ButtonComponent  activeOpacity={0.8} onPress={props.onPress}>
      <View style={{...styles.button, ...props.style}}>
        <Text style={styles.buttonText}> {props.children}</Text>
      </View>
    </ButtonComponent>
    </View>
  );
};

const styles = StyleSheet.create({
    button:{
        backgroundColor: colors.primary,
        paddingVertical: 12,
        paddingHorizontal:30,
        borderRadius: 25
    },
    buttonText:{
        color: 'white',
        fontFamily: 'OpenSans-Regular',
        fontSize: 18
    },
    buttonContainer:{
      borderRadius: 25,
      overflow: 'hidden'
    }
});

export default MainButton;
