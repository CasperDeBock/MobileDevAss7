import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


function NewsComponent(props : {id: Int16Array, title: string, description: string, date: string, image: string, handleNavigate: any, deleteNews: any, editNews: any}) {
  console.log(props.id);
  
    return (
       <Pressable onPress={props.handleNavigate} style={styles.newsBlock}>
        <Image style={styles.newsImage} source={{uri: props.image}}/>
            <View style={styles.newsInfoWrapper}>
                <Text style={styles.newsTitle}>{props.title}</Text>
                <Text style={styles.newsDescription}>{props.description}</Text>
                <Text style={styles.newsDate}>{props.date}</Text>
                
              <View style={styles.iconWrapper}>
              <Pressable onPress ={props.deleteNews} >
              <Ionicons style={styles.delete}  name={"trash-outline"} size={16} color={"red"} />
              </Pressable>
              <Pressable onPress ={props.editNews} >
              <Ionicons style={styles.edit}  name={"pencil-outline"} size={16} color={"orange"} />
              </Pressable>
              
                </View>
             
           
            </View>
            
       </Pressable>
    )
}

const styles = StyleSheet.create({
    newsBlock: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 24,
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 5,
      },
      newsImage: {
        width: 128,
        height:128,
        borderRadius: 5,
      },
      newsTitle: {
     
        fontSize: 14,
        fontWeight: 'bold', 
        color: '#000',
      },
    newsInfoWrapper: {
        width: '55%',
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 24,
        marginRight: 24,
    },
      newsDescription: {
        fontSize: 12,
        color: '#000',
        marginTop: 5,
      },
      newsDate: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#000',
        marginTop: 5,
      },
      
      delete: {
        color: 'red',
        marginTop: 5,
      },

      edit: {
        color: 'orange',
        marginTop: 5,
        marginLeft: 10,
      },

      iconWrapper: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 5,
      }
    
});

export default NewsComponent;
