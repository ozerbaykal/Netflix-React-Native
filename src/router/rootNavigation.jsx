import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GetStarted from '../screens/getStarted';
import {NavigationContainer} from '@react-navigation/native';
import {GETSTARTED, SIGNIN, WATCHLIST} from '../utils/routes';
import SignIn from '../screens/signIn';
import WatchList from '../screens/watchList';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={GETSTARTED} component={GetStarted} />
        <Stack.Screen name={SIGNIN} component={SignIn} />
        <Stack.Screen name={WATCHLIST} component={WatchList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
