import {Image, Text, View} from 'react-native';
import React from 'react';
import movieItemStyle from '../../styles/componentsStyle/movieItemStyle';
import {IMAGE_BASE_URL} from '../../service/url';

const MovieItem = ({item}) => {
  return (
    <View style={movieItemStyle.container}>
      <Image
        source={{uri: IMAGE_BASE_URL + item?.backdrop_path}}
        style={movieItemStyle.image}
      />
    </View>
  );
};

export default MovieItem;
