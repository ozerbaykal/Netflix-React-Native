import {ActivityIndicator, ScrollView, Text, View} from 'react-native';
import React from 'react';
import defaultScreenStyle from '../../styles/defaultScreenStyle';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getMovieDetail} from '../../store/actions/movieActions';
import movieDetailStyle from '../../styles/componentsStyle/movieDetailStyle';

const MovieDetail = ({route}) => {
  const {movieDetail, pendingDetailMovie} = useSelector(state => state.movies);
  const {id} = route?.params;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getMovieDetail({
        movieId: id,
      }),
    );
  }, []);
  console.log(movieDetail);
  return (
    <View style={defaultScreenStyle.container}>
      {pendingDetailMovie ? (
        <View style={movieDetailStyle.container2}>
          <ActivityIndicator
            style={movieDetailStyle.indicator}
            size={'large'}
          />
        </View>
      ) : (
        <ScrollView></ScrollView>
      )}
    </View>
  );
};

export default MovieDetail;
