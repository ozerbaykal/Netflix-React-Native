import {Text, View, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import defaultScreenStyle from '../../styles/defaultScreenStyle';
import {useDispatch, useSelector} from 'react-redux';
import {
  getCategories,
  getTopRatedMovies,
} from '../../store/actions/movieActions';

const Home = () => {
  const {topRatedMovies, categories} = useSelector(state => state.movies);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <View style={defaultScreenStyle.container}>
      <FlatList
        data={categories}
        renderItem={({item}) => (
          <Text style={{color: 'white'}}>{item.name}</Text>
        )}
      />
    </View>
  );
};

export default Home;
