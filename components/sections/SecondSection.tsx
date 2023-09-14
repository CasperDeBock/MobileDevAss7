import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import GameButton from '../buttons/GameButton';
import ResultsButton from '../buttons/ResultsButton';
import NewsSection from './NewsSection';
import FilterButton from '../buttons/FilterButton';



function SectionSection() {
    return (
        <View style={styles.sectionSection}>
            <Text style={styles.title}>Games</Text>
            <Text style={styles.sectionTitle}>Choose your game</Text>
            <ScrollView horizontal={true} style={styles.gameButtonContainer}>
                <GameButton text={"ROCKETS"} icon={"rocket"} active={"ROCKETS"}   />
                <GameButton text={"SUPER DRAW"} icon={"ruby"} active={"NEWS"}   />
                <GameButton text={"DICE ROLL"} icon={"law"} active={"NEWS"}   />
            </ScrollView>
            <Text style={styles.title}>Check out</Text>
            <Text style={styles.sectionTitle}>Latest news</Text>
            <ScrollView horizontal={true} style={styles.tags}>
                <FilterButton tagtitle={"News"} active={"News"}   />
                <FilterButton tagtitle={"Results"} active={"News"}   />
                <FilterButton tagtitle={"Lotto winners"} active={"News"}   />
                <FilterButton tagtitle={"More"} active={"News"}   />
            </ScrollView>
            <NewsSection/>
            <ResultsButton/>
      </View>
    )
}

const styles = StyleSheet.create({
    sectionSection: {
        backgroundColor: '#fff',
        width: '100%',
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
      gameButtonContainer: {
        display: 'flex',
        marginTop: 24,
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 5,
        height: 150,

      },
      tags:{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 5,
        height: 100,

      }
      
});

export default SectionSection;
