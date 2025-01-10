import {FlatList, Text, View} from 'react-native';
import React from 'react';
import sectionStyle from '../../styles/widget/sectionStyle';
import {useSelector} from 'react-redux';
import MovieItem from '../movies/movieItem';

const Section = ({item}) => {
  const {popularMovies, topRatedMovies, upComingMovies} = useSelector(
    state => state.movies,
  );

  const setData = () => {
    switch (item.id) {
      case 1:
        return topRatedMovies;
      case 2:
        return popularMovies;
      case 3:
        return upComingMovies;

      default:
        return topRatedMovies;
    }
  };

  return (
    <View style={sectionStyle.container}>
      <Text style={sectionStyle.title}>{item.title}</Text>
      <FlatList
        horizontal
        data={setData()}
        renderItem={({item}) => <MovieItem item={item} />}
      />
    </View>
  );
};

export default Section;
