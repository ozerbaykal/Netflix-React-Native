import {Text, View} from 'react-native';
import React from 'react';
import movieItemStyle from '../../styles/componentsStyle/movieItemStyle';

const MovieItem = ({item}) => {
  return (
    <View style={movieItemStyle.container}>
      <Text>{item.title}</Text>
    </View>
  );
};

export default MovieItem;
