import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


function ResultsButton() {
    return (
        <View style={styles.resultsGameContainer}>
              <View style={styles.resultTextContainer}>
                <Text style={styles.resultsTitle}>Results</Text>
                <Text style={styles.resultsText}>Check all the results from last game</Text>
              </View>
              <View>
                <Text style={styles.arrow}>&#8594;</Text>	
              </View>
        </View>
    )
}

const styles = StyleSheet.create({
  resultsGameContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
    backgroundColor: '#282856',
    padding : 24,
    borderRadius: 5,
  },
  resultTextContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  resultsTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  resultsText: {
    fontSize: 16,
    color: '#fff',
  },
  arrow: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default ResultsButton;
