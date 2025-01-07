import {Text, View} from 'react-native';
import React from 'react';
import watchListItemStyle from '../../styles/watchList/watchListItemStyle';
import {Smileys} from 'iconsax-react-native';
import {ThemeColors} from '../../theme/themeColors';

const WatchListItem = ({item}) => {
  return (
    <View style={watchListItemStyle.container}>
      <View style={watchListItemStyle.iconContainer}>
        <Smileys size={50} color={ThemeColors.WHITE} />
      </View>
      <Text style={watchListItemStyle.title}>{item.title}</Text>
    </View>
  );
};

export default WatchListItem;
