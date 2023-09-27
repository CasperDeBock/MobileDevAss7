import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native';
import NewsComponent from '../NewsComponent';
import FilterButton from '../buttons/FilterButton';




function NewsSection() {
    const data = [
        {
          id: 1,
          title: 'Luc, 56 years old, won 1.000.000$ in Super Draw!',
          description: 'Luc tried playing Super Draw for the first time and won 1.000.000$! He is now a millionaire!',
          image: 'https://www.masslive.com/resizer/MzND82hFGszBEcsdeVk6mi1_Aow=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/MHWEZATHFBCN5GX74OXB6I33VM.jpg',
          date: '10/01/2024',
          categories: "Lotto winners",
        },
        {
          id: 2,
          title: 'Jonas, 23 years old, won 100.000$ in Spades!',
          description: 'Jonas tried playing Spades for the first time and won 100.000$! He is now a millionaire!',
          image: 'https://static01.nyt.com/images/2019/04/24/us/politics/24xp-lottery/merlin_153874845_c859b360-e965-481c-ba2a-3e39ed22b4ac-articleLarge.jpg?quality=75&auto=webp&disable=upscale',
          date: '24/12/2023',
          categories: "Lotto winners",
        },
        {
          id: 3,
          title: 'Yoren, 34 years old, won 10.000$ in Dice Roll!',
            description: 'Yoren tried playing Dice Roll for the first time and won 10.000$! He is now a millionaire!',
          image: 'https://www.nj.com/resizer/c2LpGJbDwa3021ZHphxAxpW2p3U=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/2BVMKYPLM5C5DJJGOQBHENG77U.jpg',
          date: '08/09/2023',
          categories: "Lotto winners",
        },
        {
          id: 4,
          title : 'Spades has new features!',
          description: 'Try playing Spades for the first time and win 100.000$! You could be the next millionaire!',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/ACE_CAR_-A.JPG/1200px-ACE_CAR_-A.JPG',
          date: '19/12/2024',
          categories: "News",
        },
        {
          id: 5,
          title : 'Super Draw has new features!',
          description: 'Try playing Super Draw for the first time and win 1.000.000$! You could be the next millionaire!',
          image: 'https://www.orlajames.co.uk/blog/app/uploads/2014/09/Diamond-Large-diamonds2cash-co-uk.jpg',
          date: '19/12/2024',
          categories: "News",
        },
        {
          id: 6,
          title: 'Results september 2024',
          description: 'The results of the september 2024 are now available!',
          image: 'https://static.vecteezy.com/system/resources/previews/010/886/383/original/hello-september-month-lettering-with-flowers-and-clipart-free-vector.jpg',
          date: '30/09/2024',
          categories: "Results",
        },
        {
          id: 7,
          title: 'Results august 2024',
          description: 'The results of the august 2024 are now available!',
          image: 'https://cdn.pixabay.com/photo/2021/07/05/18/14/month-6389734_1280.png',
          date: '30/08/2024',
          categories: "Results",
        },
        {
          id: 8,
          title: 'Results july 2024',
          description: 'The results of the july 2024 are now available!',
          image: 'https://media.istockphoto.com/id/1396734769/vector/hello-july-watercolor-textured-simple-vector-sun-icon-vector-illustration-greeting-card-for.jpg?s=612x612&w=0&k=20&c=oKhKtV9KhNHyVhLiTWbHY-Px2iB9kKTcCnRdPG2RkY8=',
          date: '30/07/2024',
          categories: "Results",
        },


      ];

      const filterButtons = [
        {
          id: 1,
          title: 'News',
        },
        {
          id: 2,
          title: 'Results',
        },
        {
          id: 3,
          title: 'Lotto winners',
        },
        {
          id: 4,
          title: 'More',
        },
      ];

      const [active, setActive] = useState("News");
      const [filterdData, setFilterdData] = useState(data);

      const handleFilter = (tag: string, search: string) => {       
        let newData = [];
        if(search === 'all') {
          newData = data.filter((item) => item.categories.includes(tag));
        }
        else {
          newData = data.filter((item) => item.categories.includes(tag) && item.title.toLowerCase().includes(search.toLowerCase()));
        }
        setActive(tag);
        setFilterdData(newData);
      }

      useEffect(() => {
        handleFilter(active, 'all');
      }, [])

      
    return (
       <View style={styles.newsWrapper}>
        <ScrollView horizontal={true} style={styles.tags}>
                {filterButtons.map((button) => (
                    <FilterButton key={button.id} tagtitle={button.title} active={active} onTouch={handleFilter} /> 
                ))}
        </ScrollView>
        <TextInput
          placeholder="Type here to search!"
          onChangeText={(newtext) => handleFilter(active, newtext)}
          style={styles.textinput}
        />
        {filterdData.length > 0  ?
          filterdData.map((item) => (
            <NewsComponent key={item.id} title={item.title} description={item.description} image={item.image} date={item.date}/> 
        ))
        :
            <Text>No news found</Text>
        }

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
    tags:{
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      backgroundColor: '#fff',
      borderRadius: 5,
      height: 100,

    },
    tagsActive:{
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      backgroundColor: '#282856',
      borderRadius: 5,
      height: 100,
    }
    ,
    textinput: {
      height: 50,
      backgroundColor: 'lightgrey',
      border: 0,
      borderRadius: 5,
      paddingLeft: 10,
      marginBottom: 10,
    }


});

export default NewsSection;
