import {FlatList, Text, View} from 'react-native';
import React from 'react';
import sectionStyle from '../../styles/widget/sectionStyle';
import {useSelector} from 'react-redux';
import MovieItem from '../movies/movieItem';

const Section = ({item}) => {
  const {topRatedMovies} = useSelector(store => store.movies);
  return (
    <View style={sectionStyle.container}>
      <Text style={sectionStyle.title}>{item.title}</Text>
      <FlatList
        horizontal
        data={topRatedMovies}
        renderItem={({item}) => <MovieItem item={item} />}
      />
    </View>
  );
};

export default Section;
