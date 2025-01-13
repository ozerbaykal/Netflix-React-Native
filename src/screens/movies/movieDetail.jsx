import {ActivityIndicator, ScrollView, Text, View, Image} from 'react-native';
import React from 'react';
import defaultScreenStyle from '../../styles/defaultScreenStyle';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getMovieDetail} from '../../store/actions/movieActions';
import movieDetailStyle from '../../styles/componentsStyle/movieDetailStyle';
import {IMAGE_BASE_URL} from '../../service/url';
import LinearGradient from 'react-native-linear-gradient';

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
  return (
    <View style={movieDetailStyle.container}>
      {pendingDetailMovie ? (
        <View style={movieDetailStyle.indicatorContainer}>
          <ActivityIndicator
            style={movieDetailStyle.indicator}
            size={'large'}
          />
        </View>
      ) : (
        <ScrollView>
          <Image
            style={movieDetailStyle.image}
            source={{uri: IMAGE_BASE_URL + movieDetail?.poster_path}}
          />
          <View style={movieDetailStyle.averageContainer}>
            <Text style={movieDetailStyle.average}>
              {Math.round(movieDetail.vote_average * 10) / 10}
            </Text>
          </View>
          <View style={movieDetailStyle.infoContainer}>
            <Text style={movieDetailStyle.title}>
              {movieDetail?.original_title}
            </Text>
            <Text style={movieDetailStyle.overview}>
              {movieDetail?.overview}
            </Text>
            <Text style={movieDetailStyle.section}>Language</Text>
            {movieDetail?.spoken_languages?.map((i, key) => (
              <Text key={key} style={movieDetailStyle.language}>
                {' '}
                {i.name}
              </Text>
            ))}
            <Text style={movieDetailStyle.section}>Production Countries</Text>
            {movieDetail?.production_countries?.map((i, key) => (
              <Text key={key} style={movieDetailStyle.language}>
                {' '}
                {i.name}
              </Text>
            ))}
            <Text style={movieDetailStyle.section}>Genres</Text>
            {movieDetail?.genres?.map((i, key) => (
              <Text key={key} style={movieDetailStyle.language}>
                {i.name}
              </Text>
            ))}
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default MovieDetail;
