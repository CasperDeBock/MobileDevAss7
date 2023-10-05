import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, TextInput, Image, Pressable, Alert } from 'react-native';

function DiceSection() {
  const [amount, setAmount] = useState("0");
  const diceimage = require('../images/dice.png');

  const handleGame = () => {
    let random = Math.floor(Math.random() * 6) + 1;

    if(random % 2 === 0) {
      Alert.alert("You won! You won €" + amount + ", the dice rolled " + random);
    }
    else {
      Alert.alert("You lost! You lost €" + amount + " Better luck next time! You dice rolled " + random);
    }
  }


    return (
       <View style={styles.wrapper}>
            <Text style={styles.title}>Play Dice</Text>
            <Text style={styles.sectionTitle}>Roll the dice if its even you win!</Text>

            <Text style={styles.sectionTitle}>Choose your amount</Text>
            <TextInput style={styles.textinput} keyboardType='numeric'  onChangeText={(text) => setAmount(text)} value={amount} placeholder="Choose your amount to bet"/>
            <View style={styles.diceImageContainer}>
            <Image style={styles.diceImage} source={diceimage} />
            </View>
           
            <Pressable onPress={handleGame} style={styles.button}>
                <Text style={styles.buttonText}>Try!</Text>
            </Pressable>

       </View>
    )
}

const styles = StyleSheet.create({
  wrapper: {
    padding : 24,
      },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
      },
      
    sectionTitle: {
      fontSize: 16,
      fontWeight: '600',
    }, 

    textinput: {
    height: 50,
    backgroundColor: 'lightgrey',
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 10,
  },
  diceImageContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24,
  },
  diceImage: {
    
  },
  button: {
    backgroundColor: '#282856',
    borderRadius: 5,
    padding: 10,
    marginTop: 24,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  }
});

export default DiceSection;
