import {Image, View, Text} from 'react-native';
import getStartedStyles from '../../styles/getStarted/getStartedStyles';
import Button from '../../components/ui/button';
import {WATCHLIST} from '../../utils/routes';

const GetStarted = ({navigation}) => {
  return (
    <View style={getStartedStyles.container}>
      <View style={{flex: 5}}>
        <Image
          style={getStartedStyles.image}
          source={require('../../assets/image/image1.png')}
        />

        <View style={getStartedStyles.textContainer}>
          <Text style={getStartedStyles.text}>
            Unlimited entertainment, one low price.
          </Text>
          <Text style={getStartedStyles.subText}>
            All of Netflix, starting at just ₹149.
          </Text>
        </View>
      </View>

      <View style={getStartedStyles.bottomTab}>
        <Button
          onPress={() => navigation.navigate(WATCHLIST)}
          title="GET STARTED"
          status="primary"
        />
      </View>
    </View>
  );
};

export default GetStarted;
