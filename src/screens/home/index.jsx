import {Text, View, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import defaultScreenStyle from '../../styles/defaultScreenStyle';
import {useDispatch, useSelector} from 'react-redux';
import {
  getCategories,
  getTopRatedMovies,
} from '../../store/actions/movieActions';
import CategoryItem from '../../components/widgets/categoryItem';
import Categories from '../../widgets/categories';
import Sections from '../../widgets/sections';

const Home = () => {
  const {topRatedMovies, categories} = useSelector(state => state.movies);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
    dispatch(getTopRatedMovies());
  }, []);

  return (
    <View style={defaultScreenStyle.container}>
      <Categories />
      <Sections />
    </View>
  );
};

export default Home;
