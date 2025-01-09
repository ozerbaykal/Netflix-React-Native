import {Text, View} from 'react-native';
import React, {useEffect} from 'react';
import defaultScreenStyle from '../../styles/defaultScreenStyle';
import {useDispatch} from 'react-redux';
import {getTopRatedMovies} from '../../store/actions/movieActions';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTopRatedMovies());
  }, []);
  return (
    <View style={defaultScreenStyle.container}>
      <Text>Home</Text>
    </View>
  );
};

export default Home;
