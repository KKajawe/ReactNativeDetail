import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Game is Over!!</Text>
      <Text>Number of Rounds : {props.numOfRounds} </Text>
      <Text>Number was : {props.guessingNumber} </Text>
      <View><Button title="New Game" onPress={props.onRestart}/></View>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
});
export default GameOverScreen;
