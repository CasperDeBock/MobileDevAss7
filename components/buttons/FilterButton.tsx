import React, { useEffect } from 'react';
import { View, Text, StyleSheet,TouchableHighlight } from 'react-native';



function FilterButton(props: {tagtitle:string, active: string, onTouch: any }) {
    return(
        <TouchableHighlight onPress={() => props.onTouch(props.tagtitle, "all")} style={styles.tag}>
            <Text style={props.active === props.tagtitle ?  styles.activeTagText : styles.tagText}>{props.tagtitle}</Text>
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
        backgroundColor: "#282856",
        borderWidth: 2,
        borderColor: "#282856",
    },
    
});

export default FilterButton;
