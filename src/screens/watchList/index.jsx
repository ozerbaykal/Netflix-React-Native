import {Text, View, FlatList, TextInput} from 'react-native';
import {useSelector} from 'react-redux';
import defaultScreenStyle from '../../styles/defaultScreenStyle';
import WatchListItem from '../../components/watchList/watchListItem';
import watchListStyle from '../../styles/watchList/watchListStyle';

const WatchList = () => {
  const {watchList} = useSelector(state => state.watchList);

  return (
    <View style={defaultScreenStyle.container}>
      <FlatList
        ListHeaderComponent={
          <Text style={watchListStyle.title}>Who's Watching ?</Text>
        }
        numColumns={2}
        data={watchList}
        renderItem={({item}) => <WatchListItem item={item} />}
      />
    </View>
  );
};

export default WatchList;
