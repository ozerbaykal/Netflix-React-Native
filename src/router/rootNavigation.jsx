import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GetStarted from '../screens/getStarted';
import {NavigationContainer} from '@react-navigation/native';
import {GETSTARTED, SIGNIN, WATCHLIST} from '../utils/routes';
import SignIn from '../screens/signIn';
import WatchList from '../screens/watchList';
import {ThemeColors} from '../theme/themeColors';
import {Edit2} from 'iconsax-react-native';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({navigation}) => ({
          headerTintColor: ThemeColors.WHITE,
          headerStyle: {
            backgroundColor: ThemeColors.BLACK,
          },
        })}>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name={GETSTARTED}
          component={GetStarted}
        />
        <Stack.Screen name={SIGNIN} component={SignIn} />
        <Stack.Screen
          options={{
            headerRight: () => <Edit2 size={25} color={ThemeColors.WHITE} />,
          }}
          name={WATCHLIST}
          component={WatchList}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
