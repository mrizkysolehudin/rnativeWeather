import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import UpcomingWeatherScreen from '../screens/UpcomingWeatherScreen';
import CurrentWeatherScreen from '../screens/CurrentWeatherScreen';
import Icon from 'react-native-vector-icons/dist/Entypo';
import CityWeatherScreen from '../screens/CityWeatherScreen';

const Tabs = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'black',
        tabBarStyle: {
          backgroundColor: 'white',
          height: 65,
          paddingBottom: 10,
        },
        headerStyle: {
          backgroundColor: 'white',
        },
        headerTitleStyle: {
          fontWeight: 600,
          color: 'blue',
          fontSize: 25,
        },
        headerTitleAlign: 'center',
      }}>
      <Tab.Screen
        name="Current"
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Icon
                name="hour-glass"
                size={24}
                color={focused ? 'blue' : 'black'}
              />
            </View>
          ),
        }}>
        {() => <CurrentWeatherScreen />}
      </Tab.Screen>
      <Tab.Screen
        name="Upcoming"
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Icon name="clock" size={24} color={focused ? 'blue' : 'black'} />
            </View>
          ),
        }}>
        {() => <UpcomingWeatherScreen />}
      </Tab.Screen>
      <Tab.Screen
        name="City"
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Icon name="home" size={24} color={focused ? 'blue' : 'black'} />
            </View>
          ),
        }}>
        {() => <CityWeatherScreen />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default Tabs;
