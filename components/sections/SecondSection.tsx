import React, {useState} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import GameButton from '../buttons/GameButton';
import ResultsButton from '../buttons/ResultsButton';
import NewsSection from './NewsSection';


function SectionSection({navigation}) {


  const [active, setActive] = useState("News");
  const [page, setPage] = useState(active);

  const handleActive = (tagtitle: string) => {  
    setActive(tagtitle);
    if(tagtitle !== "News"){
      navigation.navigate(tagtitle);
    }
    
  }

    return (
        <View style={styles.sectionSection}>
            <Text style={styles.title}>News</Text>
           <NewsSection navigation={navigation}/>
           <ResultsButton navigation={navigation}/>
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
    
      
});

export default SectionSection;
