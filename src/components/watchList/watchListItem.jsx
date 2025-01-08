import {Text, View, Image} from 'react-native';
import React, {useMemo} from 'react';
import watchListItemStyle from '../../styles/watchList/watchListItemStyle';
import {ThemeColors} from '../../theme/themeColors';
import {getRandomColor} from '../../utils/functions';
import {Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TAB} from '../../utils/routes';

const WatchListItem = ({item}) => {
  const backgroundColor = useMemo(() => getRandomColor(), []);
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.replace(TAB)}
      style={watchListItemStyle.container}>
      <View
        style={[
          watchListItemStyle.iconContainer,
          {backgroundColor: backgroundColor},
        ]}>
        <Image source={require('../../assets/image/smile.png')} />
      </View>
      <Text style={watchListItemStyle.title}>{item.title}</Text>
    </Pressable>
  );
};

export default WatchListItem;
