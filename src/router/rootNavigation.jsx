import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GetStarted from '../screens/getStarted';
import {NavigationContainer} from '@react-navigation/native';
import {GETSTARTED, SIGNIN, WATCHLIST} from '../utils/routes';
import SignIn from '../screens/signIn';
import WatchList from '../screens/watchList';
import Header from '../components/router/header';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({navigation}) => ({
          header: () => <Header />,
        })}>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name={GETSTARTED}
          component={GetStarted}
        />
        <Stack.Screen name={SIGNIN} component={SignIn} />
        <Stack.Screen name={WATCHLIST} component={WatchList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
