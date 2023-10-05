import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView, TextInput} from 'react-native';
import NewsComponent from '../NewsComponent';
import FilterButton from '../buttons/FilterButton';

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

  useEffect(() => {
    let datafile = require('../../data/data.json');
    setData(datafile.data);
  }, []);

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
    setSearchText('');
  };

  return (
    <View style={styles.newsWrapper}>
      <ScrollView horizontal={true} style={styles.tags}>
        {filterButtons.map(button => (
          <FilterButton
            key={button.id}
            tagtitle={button.title}
            active={active}
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
      {filteredData.length > 0 ? (
        filteredData.map(item => (
          <NewsComponent
            key={item.id}
            title={item.title}
            description={item.description}
            image={item.image}
            date={item.date}
            handleNavigate={() => navigatetoDetail(item)}
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
});

export default NewsSection;
