import React from 'react';
import {
  View, 
  Pressable,
  Image
 } from 'react-native';
 import Ionicons from 'react-native-vector-icons/Ionicons';


 const SettingsIcon = (props) => {

    const onSettingsIconPress = () => {
        props.navigation.navigate('SettingsScreen');
       }

       
       return (
        <Pressable onPress={onSettingsIconPress}>
            <View>
                <Ionicons style={styles.settingsIcon}  name={"settings-outline"} size={20} color={"black"} />
            </View>
      </Pressable>
       );
 }

    const styles = {
        settingsIcon: {
            marginRight: 24,
        },
    };

 export default SettingsIcon;
