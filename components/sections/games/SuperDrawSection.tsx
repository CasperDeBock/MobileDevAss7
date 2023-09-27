import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Alert, Pressable, TextInput } from 'react-native';

function SuperDrawSection() {

    const [numbers, setNumbers] = useState([1,2,3,4,5,6]);
    const [activeNumbers , setActiveNumbers] = useState([false,false,false,false,false,false]);
    const [amount, setAmount] = useState("0");

    const handleGame = () => {
        
            let count = 0;
            let random = Math.floor(Math.random() * 100) + 1;
            for(let i = 0; i < activeNumbers.length; i++) {
                if(activeNumbers[i]) {
                    count++;
                }
            }
           
            let total = count * random;
            console.log(total);

            if(total % 2 === 0) {
                Alert.alert("You won! You won €" + amount + ", the total number was " + total);
            }
            else {
                Alert.alert("You lost! You lost €" + amount + " Better luck next time! The total number was " + total);
            }

    }

    const handlePress = (index: number) => {
        let newActiveNumbers = [...activeNumbers];
        newActiveNumbers[index] = !newActiveNumbers[index];
        setActiveNumbers(newActiveNumbers);
    }


    return (
       <View style={styles.wrapper}>
            <Text style={styles.title}>Play SuperDraw</Text>
            <View style={styles.game}>
            <TextInput style={styles.textinput} keyboardType='numeric'  onChangeText={(text) => setAmount(text)} value={amount} placeholder="Choose your amount to bet"/>
                <Text style={styles.sectionTitle}>Choose your numbers, we add a random number if its devidable with 2 you win!</Text>
                <View style={styles.numbers}>
                { numbers.map((index, number) => (
                    <Pressable onPress={() => handlePress(index)} style={activeNumbers[index] ? styles.activeNumber: styles.number} key={number}><Text style={activeNumbers[index] ? styles.activeNrText: styles.nrtext}>{number + 1}</Text></Pressable>
                ))
                }
                </View>
            </View>
            <Pressable onPress={handleGame} style={styles.button}>
                <Text style={styles.buttonText}>Try!</Text>
            </Pressable>
       </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        paddingRight: 24,
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
        game: {
            marginTop: 24,
            width: '100%',
            backgroundColor: '#fff',
            borderRadius: 5,
        },
        numbers: {
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            width: '100%',
            padding: 24,
        },
        number: {
            width: '30%',
            height: 50,
            backgroundColor: '#fff',
            borderRadius: 5,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 24,
            borderWidth: 2,
            borderColor: '#282856',

        },
        activeNumber: {
            width: '30%',
            height: 50,
            backgroundColor: '#282856',
            borderRadius: 5,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 24,
            borderWidth: 2,
            borderColor: '#282856',
        },
        nrtext: {
            color: '#282856',
            fontSize: 24,
            fontWeight: 'bold',
        },
        activeNrText: {
            color: '#fff',
            fontSize: 24,
            fontWeight: 'bold',
        },
        button: {
            width: '100%',
            height: 50,
            backgroundColor: '#282856',
            borderRadius: 5,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 24,
        },
        buttonText: {
            color: '#fff',
            fontSize: 24,
            fontWeight: 'bold',
        },
        textinput: {
            height: 50,
            backgroundColor: 'lightgrey',
            border: 0,
            borderRadius: 5,
            paddingLeft: 10,
            marginBottom: 10,
          }

});

export default SuperDrawSection;
