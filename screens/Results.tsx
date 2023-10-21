import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, SectionList } from 'react-native';

function Results() {

  const [winnerdata, setWinnerData] = useState([]);

      useEffect(() => {
        const apiUrl = 'https://caf6-178-164-30-10.ngrok-free.app/wingames';
      
        fetch(apiUrl)
          .then((response) => response.json())
          .then((data) => setWinnerData(data))
          .catch((error) => console.error('Error fetching data:', error));
      }, []);
  


      const sections = winnerdata;
      const renderItem = ({ item, index }) => (
        <View>
            <Text style={styles.itemList}>{index + 1}. {item}</Text>
        </View>
      );
      const renderSectionHeader = ({ section: { title } }) => (
        <View>
          <Text style={styles.sectionHeader}>{title}</Text>
        </View>
      );

  
    return (
       <View style={styles.wrapper}>
            <Text style={styles.title}>Results</Text>
            <Text style={styles.sectionTitle}>Here you can see the results of the last 10 draws</Text>
            <View style={styles.results}>
            <SectionList
                sections={sections}
                keyExtractor={(item, index) => item + index}
                renderItem={renderItem}
                renderSectionHeader={renderSectionHeader}
            />
            </View>
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
        results: {
            marginTop: 24,
            width: '100%',
            backgroundColor: '#fff',
            borderRadius: 5,
        },
        item: {
            padding: 10,
            fontSize: 18,
            height: 44,
        },
        sectionHeader: {
            fontSize: 14,
            fontWeight: 'bold',
            backgroundColor: '#282856',
            color: '#fff',
            padding : 10,
          },

          itemList: {
            fontSize: 14,
            fontWeight: 'bold',
            backgroundColor: '#fff',
            color: '#000',
            padding : 10,
          },

   

});

export default Results;
