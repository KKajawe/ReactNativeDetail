import React from 'react';
import {Button, StyleSheet, Image, View, Text} from 'react-native';
import CustomBoldText from '../components/CustomBoldText';
import CustomText from '../components/CustomText';
import MainButton from '../components/MainButton';
import colors from '../constants/colors';

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <CustomBoldText style={styles.titleText}>
        The Game is Over!!
      </CustomBoldText>
      <View style={styles.imageContainer}>
        <Image
        fadeDuration= {1000}
          style={styles.image}
          // source={require('../assets/images/success.png')}
          source={{uri: 'https://cdn.pixabay.com/photo/2016/05/05/23/52/mountain-summit-1375015_960_720.jpg'}}
          resizeMode="cover"
        />
      </View>
      <View style={styles.resultContainer}>
      <CustomText style={styles.bodyText}>
        Your phone needed <Text style={styles.highlightText}>{props.numOfRounds}</Text> rounds to guess the number <Text style={styles.highlightText}>{props.guessingNumber}</Text>
      </CustomText>
      </View>
      <View>
        <MainButton onPress={props.onRestart}>New Game</MainButton>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  titleText: {
    fontSize: 20,
  },
  bodyText: {
    fontSize: 18,
    textAlign: 'center'
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imageContainer: {
    borderRadius: 150,
    borderWidth:3 ,
    borderColor:'black',
    width: 300,
    height: 300,
    overflow: 'hidden',
    marginVertical:30


  },
  resultContainer:{
    marginHorizontal: 30,
    marginVertical: 15
  },
  highlightText:{
      color: colors.primary,
      fontFamily: 'OpenSans-Bold'
  }
});
export default GameOverScreen;
