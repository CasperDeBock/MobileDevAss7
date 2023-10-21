import React, { useState , useEffect} from 'react';
import ColorPicker from 'react-native-wheel-color-picker'
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import { View, Text, StyleSheet,Pressable } from 'react-native';

const SettingsScreen = ( {navigation, route} ) => {


    const [cardbgcolor, setCardbgcolor] = useState ('#282856');
    const [initialCategory, setInitialCategory] = useState ('News');

    const onColorChangeComplete = async (color) =>{
        try {
            await AsyncStorage.setItem('cardbgcolor', color)
        } catch (e) {
            console.log(e);

        }
    }

    const updateInitalCategory = async(category) => {
        try {
            await AsyncStorage.setItem('initialCategory', category)
            setInitialCategory(category);
        } catch (e) {
            console.log(e);

        }
    }

    const getInitialCategory = async () => {
        try {
          const value = await AsyncStorage.getItem('initialCategory')
          if(value !== null) {
            setInitialCategory(value);
          }
        } catch(e) {
            console.log(e);
        }
      }
      const getInitialColor = async () => {
        try {
          const value = await AsyncStorage.getItem('cardbgcolor')
          if(value !== null) {
            setCardbgcolor(value);
          }
        } catch(e) {
            console.log(e);
        }
      }

      useEffect (() => {
        getInitialCategory();
        getInitialColor();
      }, []);

    return (
        <View style={styles.wrapper}>
            <Text style={styles.title}>Settings</Text>
                    
            <View style={styles.setting}>
                <Text style={styles.settingPartTitle}>Initial News Category</Text>
                <View style={styles.categories}>
                    <Pressable onPress={() => updateInitalCategory("News")} ><Text style={initialCategory === "News" ? styles.activeCategory : styles.category}>News</Text></Pressable>
                    <Pressable onPress={() => updateInitalCategory("Results")}><Text style={initialCategory === "Results" ? styles.activeCategory : styles.category}>Results</Text></Pressable>
                    <Pressable onPress={() => updateInitalCategory("Lotto winners")}><Text style={initialCategory === "Lotto winners" ? styles.activeCategory : styles.category}>Lotto winners</Text></Pressable>
                    <Pressable onPress={() => updateInitalCategory("More")}><Text style={initialCategory === "More" ? styles.activeCategory : styles.category}>More</Text></Pressable>
                </View>

            </View>
            <View style={styles.setting}>
                <Text style={styles.settingPartTitle}>Card background color</Text>
                <ColorPicker
                    color={cardbgcolor}
                    onColorChangeComplete={onColorChangeComplete}
                   
                />
            </View>    
         </View>
    );

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
    setting: {
        marginTop: 24,
    },
    categories: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 24,
        alignItems: 'center',
    },
    category: {
        marginRight: 20,
        fontSize: 16,
        fontWeight: '600',
    },
    settingPartTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000',
    },
    activeCategory: {
        marginRight: 20,
        fontSize: 16,
        fontWeight: '600',
        color: 'white',
        backgroundColor: '#282856',
        borderRadius: 5,
        padding: 5,

    },

});

export default SettingsScreen;
