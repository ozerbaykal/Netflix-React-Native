import {Image, Pressable} from 'react-native';
import React from 'react';
import movieItemStyle from '../../styles/componentsStyle/movieItemStyle';
import {IMAGE_BASE_URL} from '../../service/url';
import {useNavigation} from '@react-navigation/native';
import MovieDetail from '../../screens/movies/movieDetail';
import {MOVIEDETAILS} from '../../utils/routes';

const MovieItem = ({item}) => {
  const navigaton = useNavigation();
  return (
    <Pressable
      onPress={() => navigaton.navigate(MOVIEDETAILS, {id: item.id})}
      style={movieItemStyle.container}>
      <Image
        source={{uri: IMAGE_BASE_URL + item?.backdrop_path}}
        style={movieItemStyle.image}
      />
    </Pressable>
  );
};

export default MovieItem;
