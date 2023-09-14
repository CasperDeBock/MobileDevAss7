import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';


function NewsComponent(props : {title: string, description: string, date: string, image: string}) {
    return (
       <View style={styles.newsBlock}>
        <Image style={styles.newsImage} source={{uri: props.image}}/>
            <View style={styles.newsInfoWrapper}>
                <Text style={styles.newsTitle}>{props.title}</Text>
                <Text style={styles.newsDescription}>{props.description}</Text>
                <Text style={styles.newsDate}>{props.date}</Text>
            </View>
           
       </View>
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
    
});

export default NewsComponent;
