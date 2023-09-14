import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NewsComponent from '../NewsComponent';


function NewsSection() {
    const data = [
        {
          id: 1,
          title: 'Luc, 56 years old, won 1.000.000$ in Super Draw!',
          description: 'Luc tried playing Super Draw for the first time and won 1.000.000$! He is now a millionaire!',
          image: 'https://www.masslive.com/resizer/MzND82hFGszBEcsdeVk6mi1_Aow=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/MHWEZATHFBCN5GX74OXB6I33VM.jpg',
          date: '10/01/2024',
        },
        {
          id: 2,
          title: 'Jonas, 23 years old, won 100.000$ in Spades!',
          description: 'Jonas tried playing Spades for the first time and won 100.000$! He is now a millionaire!',
          image: 'https://static01.nyt.com/images/2019/04/24/us/politics/24xp-lottery/merlin_153874845_c859b360-e965-481c-ba2a-3e39ed22b4ac-articleLarge.jpg?quality=75&auto=webp&disable=upscale',
          date: '24/12/2023',
        },
        {
          id: 3,
          title: 'Yoren, 34 years old, won 10.000$ in Dice Roll!',
            description: 'Yoren tried playing Dice Roll for the first time and won 10.000$! He is now a millionaire!',
          image: 'https://www.nj.com/resizer/c2LpGJbDwa3021ZHphxAxpW2p3U=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/2BVMKYPLM5C5DJJGOQBHENG77U.jpg',
          date: '08/09/2023',
        },
      ];
    return (
       <View style={styles.newsWrapper}>
             
              {data.map((item) => (
                <NewsComponent key={item.id} title={item.title} description={item.description} image={item.image} date={item.date}/>
                ))}
       </View>
    )
}

const styles = StyleSheet.create({
    newsWrapper: {
       paddingRight: 24,
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
});

export default NewsSection;
