import React, { useEffect } from 'react';
import { View, Text, StyleSheet,TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import { useState } from 'react';


function GameButton(props: { text: string, icon: string, active: string, onTouch: any }) {
    const [color, setColor] = useState("#282856");
    useEffect(() => {
        if(props.active === props.text){
            setColor("#fff");
        }
        else{
            setColor("#282856");
        }
    }, [props.active])

    console.log(props.active);

    return (
        <TouchableHighlight onPress={() => props.onTouch(props.text)} style={props.active === props.text ? styles.activeBtn :styles.gameButton}>
        <View style={styles.contentBtn}>
            <Icon name={props.icon} size={32} color={color} />
            <Text style={props.active === props.text ? styles.activeBtnText : styles.gameButtonText}>{props.text}</Text>
        </View>
    </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    gameButton: {
        backgroundColor: "white",
        borderColor: "#282856",
        borderWidth: 2,
        width: 200,
        marginRight: 10,
        height: 130,
        borderRadius: 5,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "4%",
    },
    gameButtonText: {
        color: "#282856",
        fontSize: 20,
        textAlign: "center",
        fontWeight: "bold",
        marginTop:10,
    },
    contentBtn: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 20,
        paddingBottom: 20,
    },
    activeBtn: {
        backgroundColor: "#282856",
        borderColor: "#282856",
        borderWidth: 2,
        width: 200,
        marginRight: 10,
        height: 130,
        borderRadius: 5,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "4%",
    },
    activeBtnText: {
        color: "#fff",
        fontSize: 20,
        marginTop:10,
        textAlign: "center",
        fontWeight: "bold",
    },
});

export default GameButton;
