import {Text, View} from 'react-native';
import React, {useMemo} from 'react';
import watchListItemStyle from '../../styles/watchList/watchListItemStyle';
import {Smileys} from 'iconsax-react-native';
import {ThemeColors} from '../../theme/themeColors';
import {getRandomColor} from '../../utils/functions';
import {Pressable} from 'react-native';

const WatchListItem = ({item}) => {
  const backgroundColor = useMemo(() => getRandomColor(), []);

  return (
    <Pressable style={watchListItemStyle.container}>
      <View
        style={[
          watchListItemStyle.iconContainer,
          {backgroundColor: backgroundColor},
        ]}>
        <Smileys size={100} color={ThemeColors.WHITE} />
      </View>
      <Text style={watchListItemStyle.title}>{item.title}</Text>
    </Pressable>
  );
};

export default WatchListItem;
