import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet,TouchableHighlight } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';



function FilterButton(props: {tagtitle:string, active: string, onTouch: any }) {
    const [preferredCardColor, setPreferredCardColor] = useState('#282856');

      // update
    useEffect( () => {
      updateCardColor();
    }, []);

    const updateCardColor = async() => {
        try {
          const value = await AsyncStorage.getItem('cardbgcolor')
          if(value !== null) {
            // value previously stored
            setPreferredCardColor(value);
          }
        } catch(e) {
            console.log(e);
        }
      }
    
    

    return(
        <TouchableHighlight onPress={() => props.onTouch(props.tagtitle, "all")} style={styles.tag}>
            <Text 
            style={
                props.active === props.tagtitle
                  ? [styles.activeTagText, { backgroundColor: preferredCardColor, borderColor: preferredCardColor }]
                  : [styles.tagText,{borderColor: preferredCardColor, color: preferredCardColor}]
              }
            >{props.tagtitle}</Text>
        </TouchableHighlight>
    )
  
}

const styles = StyleSheet.create({
    tag: {
        marginRight: 5,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 0,
    },
    tagText: {
        
        color: "#282856",
        borderRadius: 50,
        fontSize: 20,
        textAlign: "center",
        fontWeight: "bold",
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 30,
        paddingRight: 30,
        backgroundColor: "#fff",
        borderWidth: 2,
        borderColor: "#282856",

    },
    activeTagText: {
        color: "#fff",
        borderRadius: 50,
        fontSize: 20,
        textAlign: "center",
        fontWeight: "bold",
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 30,
        paddingRight: 30,
        borderWidth: 2,
    },
    
});

export default FilterButton;
