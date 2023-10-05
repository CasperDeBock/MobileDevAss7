import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  View,
  StyleSheet,
} from 'react-native';
import FirstSection from '../components/sections/FirstSection';
import SecondSection from '../components/sections/SecondSection';



const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">  
        <View style={styles.container}>
          <FirstSection/>
          <SecondSection navigation={navigation} />    
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    position: 'relative',
  },

});

export default HomeScreen;
