import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, TextInput, Image, Pressable, Alert } from 'react-native';


function DetailArticle({navigation, route}) {
    const {article} = route.params;
    console.log(article);

    return (
       <View style={styles.wrapper}>
            <Text style={styles.title}>{article.title}</Text>
            <Text style={styles.sectionTitle}>{article.date}</Text>
            <Image style={styles.image} source={{uri: article.image}} />
            <Text style={styles.categoryTitle}>Category: {article.categories}</Text>
            <Text style={styles.description}>{article.description}</Text>
            <Text style={styles.article}>{article.article}</Text>
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
    image:{
        width: '100%',
        height: 200,
        borderRadius: 5,
        marginTop: 24,
    },
    categoryTitle:{
        fontSize: 14,
        marginTop: 24,
    },
    article: {
        fontSize: 14,
        marginTop: 24,
        color: "black",
    },
    description: {
        fontSize: 16,
        marginTop: 24,
        color: "black",
    },

   
});

export default DetailArticle;
