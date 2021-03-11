import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import colors from '../constants/colors';
import CustomBoldText from './CustomBoldText';

function HeaderComponent(props) {
  return (
    <View
      style={{
        ...styles.headerBase,
        ...Platform.select({
          ios: styles.headerIOS,
          android: styles.headerAndroid
        })
      }}>
      <CustomBoldText style={styles.headerTitle}>{props.title}</CustomBoldText>
    </View>
  );
}

const styles = StyleSheet.create({
  headerBase: {
    width: '100%',
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    color: Platform.OS == 'android' ? colors.primary : 'white',
    fontSize: 18,
  },
  headerAndroid: {
    backgroundColor: 'white',
    borderBottomColor: colors.accent,
    borderBottomWidth: 1,
  },
  headerIOS: {
    backgroundColor: colors.primary,
    borderBottomColor: 'transparent',
    borderBottomWidth: 0,
  },
});
export default HeaderComponent;
