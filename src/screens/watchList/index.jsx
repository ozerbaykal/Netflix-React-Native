import {Text, View, SafeAreaView} from 'react-native';
import {useSelector} from 'react-redux';
import watchListStyle from '../../styles/watchList/watchListStyle';
import defaultScreenStyle from '../../styles/defaultScreenStyle';

const WatchList = () => {
  const {watchList} = useSelector(state => state.watchList);
  console.log(watchList);
  return (
    <View style={defaultScreenStyle.container}>
      <Text>WatchList</Text>
    </View>
  );
};

export default WatchList;
