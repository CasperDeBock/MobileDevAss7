import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Alert } from 'react-native';


function FirstSection() {
    return(
        <View style={styles.firstSection}>
            <View style={styles.smallCircle1}></View>
            <View style={styles.smallCircle2}></View>
            <Text style={styles.logo}>LXX.</Text>
            <View style={styles.upperRightCircle}>
                <View style={styles.dateRightCircle}>
                    <Text style={styles.dateTextMonth}>JAN</Text>
                    <Text style={styles.dateTextDay}>24</Text>
                    <Text style={styles.dateTextYear}>2023</Text>
                </View>
            </View>
            <View style={styles.middleCircle}>
                <Text style={styles.titleMiddleCircle}>20</Text>
                <Text style={styles.numberMiddleCircle}>MILLION</Text>
            </View>
            <TouchableHighlight onPress={() => Alert.alert("You joined!")} style={styles.btnEnroll}><Text style={styles.btnText}>ENROLL</Text></TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    firstSection: {
        backgroundColor: '#282856',
        height: 400,
        width: '100%',
      },
      logo: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginTop: 24,
        marginLeft: 24,
      },
      btnEnroll:{
        width: "100%",
        height: 80,
        borderRadius: 0,
        position: 'absolute',
        bottom: 0,
        display: 'flex',
      },
      btnText: {
        backgroundColor: '#fff',
        marginRight: 50,
        marginLeft: 50,
        paddingTop: 20,
        height: "100%",
        textAlign: 'center',
        color: '#282856',
        fontSize: 24,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        fontWeight: 'bold',
      },

      // circles
  middleCircle: {
    backgroundColor: '#454491',
    width: 200,
    height: 200,
    borderRadius: 100,
    position: 'absolute',
    top: 100,
    left: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleMiddleCircle: {
    fontSize: 82,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: -20,
  },
  numberMiddleCircle: {
    marginTop: -20,
    fontSize: 20,
    color: '#fff',
  },
  upperRightCircle:{
    backgroundColor: 'rgba(127, 124, 255,0.56)',
    zIndex: 1,
    width: 300,
    height: 300,
    borderRadius: 150,
    position: 'absolute',
    top: -100,
    right: -100,
  },
  dateRightCircle: {
    position: 'absolute',
    top: 100,
    right: 100,

  },
  dateTextMonth: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 10,
    right: 35,
    position: 'absolute',
  },
  dateTextDay: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: -10,
    right: 35,
    top : 35,
    position: 'absolute',
  },
  dateTextYear: {
    fontSize: 20,
    color: '#fff',
    transform: [{ rotate: '90deg' }],
    position: 'absolute',
    right: 0,
    top: 30,

  },
  smallCircle1: {
    backgroundColor: 'rgba(69, 68, 145, 0.29)',
    width: 100,
    height: 100,
    borderRadius: 50,
    position: 'absolute',
    top: -20,
    left: -20,
  },
  smallCircle2: {
    backgroundColor: 'rgba(69, 68, 145, 0.29)',
    width: 100,
    height: 100,
    borderRadius: 100,
    position: 'absolute',
    right: 75,
    top: 150,
  }
  
});

export default FirstSection;
