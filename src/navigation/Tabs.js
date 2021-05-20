import React, {useLayoutEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TV from '../screens/TV';
import Search from '../screens/Search';
import Favs from '../screens/Favs';
import Movie from '../screens/Movie';

const Tabs = createBottomTabNavigator();

export default ({navigation, route}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: route?.state?.routeNames[route.state.index] || 'Movies',
    });
  }, [route, navigation]);

  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Movies" component={Movie} />
      <Tabs.Screen name="TV" component={TV} />
      <Tabs.Screen name="Search" component={Search} />
      <Tabs.Screen name="Favs" component={Favs} />
    </Tabs.Navigator>
  );
};
