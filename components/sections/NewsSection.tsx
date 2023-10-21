import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView, TextInput, Pressable} from 'react-native';
import NewsComponent from '../NewsComponent';
import FilterButton from '../buttons/FilterButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';


function NewsSection({navigation}) {
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

  const [data, setData] = useState([]);
  const [active, setActive] = useState('News');
  const [filteredData, setFilteredData] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [refreshing, setRefreshing] = useState(false);

  const getNews = async () => {
    const response = await fetch("https://caf6-178-164-30-10.ngrok-free.app/data");
    const news = await response.json();
    setData(news);
    console.log(news);
  };

  useEffect(() => {
    getNews();
    return function cleanup(){
      setRefreshing(false);
  }

  }, [refreshing]);


  useEffect(() => {
    let newData = data.filter(item => {
      return (
        (active === 'More' || item.categories.includes(active)) &&
        item.title.toLowerCase().includes(searchText.toLowerCase())
      );
    });
    setFilteredData(newData);
  }, [active, searchText, data]);

  const navigatetoDetail = item => {
    navigation.navigate('News Article',{article: item});
  }

  const handleFilter = tag => {
    setActive(tag);
    setpreferredActiveCategory(tag);
  };

  const addNews = async () => {

    // random number between 0 and 1000
    const randomNumber = Math.floor(Math.random() * 100000);

    // call api
    const response = await fetch("https://caf6-178-164-30-10.ngrok-free.app/data",
        {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify ({
                id: randomNumber,
                title: 'News ' + randomNumber + ' title',
                description: 'Person won ' + randomNumber,
                image: "https://www.masslive.com/resizer/MzND82hFGszBEcsdeVk6mi1_Aow=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/MHWEZATHFBCN5GX74OXB6I33VM.jpg",
                date: "2024-10-01",
                categories: "News",
                article: "Luc tried his luck playing Super Draw for the first time and struck gold, winning an astonishing $1,000,000! He's now a bona fide millionaire. His story is a testament to the thrilling possibilities of lottery games."
            })
        });
    const newsAdded = await response.json();
    console.log(newsAdded);
    setRefreshing(true);
};

const deleteNews = async (item) => {
  const response = await fetch("https://caf6-178-164-30-10.ngrok-free.app/data/" + item.id,
      {
          method: 'DELETE',
          headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
          },
      });
  const newsDeleted = await response.json();
  console.log(newsDeleted);
  setRefreshing(true);
}

const editNews = async (item) => {
  const response = await fetch("https://caf6-178-164-30-10.ngrok-free.app/data/" + item.id,
      {
          method: 'PUT',
          headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify ({
            id: item.id,
            title: 'News ' + item.id + ' title',
            description: 'Person won ' + item.id,
            image: "https://variety.com/wp-content/uploads/2023/09/Wolf-Blitzer-e1695868453715.jpg?w=660",
            date: "2024-10-01",
            categories: "News",
            article: "Luc tried his luck playing Super Draw for the first time and struck gold, winning an astonishing $1,000,000! He's now a bona fide millionaire. His story is a testament to the thrilling possibilities of lottery games."
        })
      });
  const newsEdited = await response.json();
  console.log(newsEdited);
  setRefreshing(true);
}



  const [preferredActiveCategory, setpreferredActiveCategory] = useState(active);

  // update
  useEffect( () => {
  updateActiveCategory();
  }, []);

  const updateActiveCategory = async() => {
    try {
      const value = await AsyncStorage.getItem('initialCategory')
      if(value !== null) {
        // value previously stored
        setpreferredActiveCategory(value);
        handleFilter(value);
      }
    } catch(e) {
        console.log(e);
    }
  }


  return (
    <View style={styles.newsWrapper}>
      <ScrollView horizontal={true} style={styles.tags}>
        {filterButtons.map(button => (
          <FilterButton
            key={button.id}
            tagtitle={button.title}
            active={preferredActiveCategory}
            onTouch={() => handleFilter(button.title)}
          />
        ))}
      </ScrollView>
      <TextInput
        placeholder="Type here to search!"
        onChangeText={newText => setSearchText(newText)}
        value={searchText}
        style={styles.textinput}
      />
      <Pressable onPress ={addNews} style={styles.addbtn}>
        <Ionicons style={styles.addicon}  name={"add-circle-outline"} size={34} color={"white"} />
      </Pressable>
      {filteredData.length > 0 ? (
        filteredData.map(item => (
          <NewsComponent
            id={item.id}
            title={item.title}
            description={item.description}
            image={item.image}
            date={item.date}
            handleNavigate={() => navigatetoDetail(item)}
            deleteNews={() => deleteNews(item)}
            editNews={() => editNews(item)}
          />
        ))
      ) : (
        <Text>No news found</Text>
      )}
      
    </View>
  );
}

const styles = StyleSheet.create({
   newsWrapper: {
  //   paddingRight: 24,
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
  tags: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 5,
    height: 100,
  },
  tagsActive: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#282856',
    borderRadius: 5,
    height: 100,
  },
  textinput: {
    height: 50,
    backgroundColor: 'lightgrey',
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 10,
  },
  addbtn: {
    marginTop: 24,
    borderRadius: 5,
    backgroundColor: '#282856',

  },
  addicon: {
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
    
  },
});

export default NewsSection;
