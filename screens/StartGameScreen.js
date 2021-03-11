import React, {useState} from 'react';
import {
  Alert,
  Button,
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  Dimensions
} from 'react-native';
import Card from '../components/Card';
import CustomBoldText from '../components/CustomBoldText';
import InputField from '../components/InputField';
import MainButton from '../components/MainButton';
import NumberContainer from '../components/NumberContainer';
import colors from '../constants/colors';

const StartGameScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setselectedNumber] = useState();
  const numberInputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ''));
  };
  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Invalid Number',
        'Number has to be a number between 1 to 99',
        [
          {
            text: 'OK',
            style: 'destructive',
            onPress: () => {
              setConfirmed(false);
              setEnteredValue('');
            },
          },
        ],
      );
      return;
    }
    setConfirmed(true);
    setselectedNumber(chosenNumber);
    setEnteredValue('');
    Keyboard.dismiss();
  };

  let confirmedOutput;
  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <Text>You Selected</Text>
        <NumberContainer>
            {selectedNumber}
        </NumberContainer>
        <MainButton onPress ={()=>props.onStartGame(selectedNumber)}>Start Game</MainButton>
      </Card>
    );
  }
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.screen}>
        <CustomBoldText style={styles.title}>Start a New Game!</CustomBoldText>
        <Card style={styles.inputContainer}>
          <Text>Select a Number</Text>
          <InputField
            keyboardType="number-pad"
            maxLength={2}
            style={styles.input}
            value={enteredValue}
            onChangeText={numberInputHandler}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="RESET"
                onPress={() => {
                  setEnteredValue('');
                  setConfirmed(false);
                }}
                color={colors.accent}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="CONFIRM"
                onPress={confirmInputHandler}
                color={colors.primary}
              />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginVertical: 10,    
  },
  input: {
    width: 80,
    padding: 0,
    textAlign: 'center',
  },
  inputContainer: {
    width: '80%',
    maxWidth: '95%',
    minWidth: 300,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  button: {
    width: Dimensions.get('window').width/4
  },
  summaryContainer:{
      margin:20,
      alignItems: 'center'
  }
});

export default StartGameScreen;
