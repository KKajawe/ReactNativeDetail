import React, {useState, useRef, useEffect} from 'react';
import {
  Alert,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
import Card from '../components/Card';
import MainButton from '../components/MainButton';
import NumberContainer from '../components/NumberContainer';
import {Ionicons} from '@expo/vector-icons';
import CustomText from '../components/CustomText';
import colors from '../constants/colors';

const generateRamdomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRamdomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

const renderListItem = (listLength, itemData) => {
  return (
    <View style={styles.listItem}>
      <CustomText>#{listLength - itemData.index}</CustomText>
      <CustomText>{itemData.item}</CustomText>
    </View>
  );
};

const GameScreen = (props) => {
  const initialGuess = generateRamdomBetween(1, 100, props.userChoice);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  const [pastGuesses, setPastGuesses] = useState([initialGuess.toString()]);
  const [availableDeviceWidth, setAvailableDeviceWidth] = useState(Dimensions.get('window').width)
  const [availableDeviceheight, setAvailableDeviceheight] = useState(Dimensions.get('window').height)
  const currentLow = useRef(1);
  const currentHigh = useRef(100);
  
  const {userChoice, onGameOver} = props;

  useEffect(() => {
    const updateLayout=()=>{
         setAvailableDeviceWidth(Dimensions.get('window').width)
         setAvailableDeviceheight(Dimensions.get('window').height)
    }
    Dimensions.addEventListener('change', updateLayout)
    return () => {
      Dimensions.removeEventListener('change', updateLayout)
    }
  });
  useEffect(() => {
    if (currentGuess === props.userChoice) {
      props.onGameOver(pastGuesses.length);
    }
  }, [currentGuess, userChoice, onGameOver]);
  const nextGuessHandler = (direction) => {
    if (
      (direction === 'lower' && currentGuess < props.userChoice) ||
      (direction === 'greater' && currentGuess > props.userChoice)
    ) {
      Alert.alert("Don't lie!!", 'You know that this is wrong... ', [
        {
          text: 'Sorry',
          style: 'cancel',
        },
      ]);
      return;
    }
    if (direction === 'lower') {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess + 1;
    }
    const nextNumber = generateRamdomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess,
    );
    setCurrentGuess(nextNumber);
    // setrounds((currentRounds) => currentRounds + 1);
    setPastGuesses((curPastGuesses) => [
      nextNumber.toString(),
      ...curPastGuesses,
    ]);
  };

  if (availableDeviceheight < 500) {
    return (
      <View style={styles.screen}>
        <Text> Opponent's Guess</Text>
        <View style={styles.controls}>
          <MainButton onPress={nextGuessHandler.bind(this, 'lower')}>
            <Ionicons name="md-remove" size={24} color="white" />
          </MainButton>
          <NumberContainer>{currentGuess}</NumberContainer>
          <MainButton onPress={nextGuessHandler.bind(this, 'greater')}>
            <Ionicons name="md-add" size={24} color="white" />
          </MainButton>
        </View>
        <View style={styles.listContainer}>
          {/* <ScrollView contentContainerStyle={styles.list}>
          {pastGuesses.map((guess, index) =>
            renderListItem(guess, pastGuesses.length - index)
          )}
        </ScrollView> */}
          <FlatList
            contentContainerStyle={styles.list}
            keyExtractor={(item) => {
              item;
            }}
            data={pastGuesses}
            renderItem={renderListItem.bind(this, pastGuesses.length)}
          />
        </View>
      </View>
    );
  }
  return (
    <View style={styles.screen}>
      <Text> Opponent's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <MainButton onPress={nextGuessHandler.bind(this, 'lower')}>
          <Ionicons name="md-remove" size={24} color="white" />
        </MainButton>
        <MainButton onPress={nextGuessHandler.bind(this, 'greater')}>
          <Ionicons name="md-add" size={24} color="white" />
        </MainButton>
      </Card>
      <View style={styles.listContainer}>
        {/* <ScrollView contentContainerStyle={styles.list}>
          {pastGuesses.map((guess, index) =>
            renderListItem(guess, pastGuesses.length - index)
          )}
        </ScrollView> */}
        <FlatList
          contentContainerStyle={styles.list}
          keyExtractor={(item) => {
            item;
          }}
          data={pastGuesses}
          renderItem={renderListItem.bind(this, pastGuesses.length)}
        />
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: Dimensions.get('window').height > 600 ? 20 : 5,
    width: 400,
    maxWidth: '90%',
  },
  listItem: {
    borderColor: colors.grey,
    marginVertical: 10,
    backgroundColor: '#fff',
    padding: 15,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  listContainer: {
    flex: 1,
    width: Dimensions.get('window') > 350 ? '60%' : '80%',
  },
  list: {
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  controls:{
    flexDirection: 'row',
    justifyContent:'space-around',
    alignItems:'center',
    width:'80%'
  }
});
export default GameScreen;
