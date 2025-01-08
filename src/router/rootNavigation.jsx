import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GetStarted from '../screens/getStarted';
import {NavigationContainer} from '@react-navigation/native';
import {ADDNEWLIST, GETSTARTED, SIGNIN, TAB, WATCHLIST} from '../utils/routes';
import SignIn from '../screens/signIn';
import WatchList from '../screens/watchList';
import {ThemeColors} from '../theme/themeColors';
import {Edit2} from 'iconsax-react-native';
import AddNewList from '../screens/watchList/addNewList';
import TabNavigator from './tabNavigation';

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
          options={({navigation}) => ({
            headerRight: () => (
              <Edit2
                onPress={() => navigation.navigate(ADDNEWLIST)}
                size={24}
                color={ThemeColors.WHITE}
              />
            ),
          })}
          name={WATCHLIST}
          component={WatchList}
        />
        <Stack.Screen name={ADDNEWLIST} component={AddNewList} />
        <Stack.Screen name={TAB} component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
