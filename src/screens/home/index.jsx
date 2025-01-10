import {Text, View, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import defaultScreenStyle from '../../styles/defaultScreenStyle';
import {useDispatch, useSelector} from 'react-redux';
import {
  getCategories,
  getPopularMovies,
  getTopRatedMovies,
} from '../../store/actions/movieActions';
import Categories from '../../widgets/categories';
import Sections from '../../widgets/sections';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
    dispatch(getTopRatedMovies());
    dispatch(getPopularMovies());
  }, []);

  return (
    <View style={defaultScreenStyle.container}>
      <Categories />
      <Sections />
    </View>
  );
};

export default Home;
