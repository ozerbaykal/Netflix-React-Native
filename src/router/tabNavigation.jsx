import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/home';
import NewHot from '../screens/newHot';
import Search from '../screens/search';
import Downloads from '../screens/downloads';
import {DOWNLOADS, HOME, NEWHOT, SEARCH} from '../utils/routes';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={HOME} component={Home} />
      <Tab.Screen name={NEWHOT} component={NewHot} />
      <Tab.Screen name={SEARCH} component={Search} />
      <Tab.Screen name={DOWNLOADS} component={Downloads} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
