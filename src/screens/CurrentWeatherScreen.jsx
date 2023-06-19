import {View, ActivityIndicator} from 'react-native';
import React from 'react';
import {useFetchWeatherApi} from '../hooks/useFetchApiWeather';
import WeatherCard from '../components/WeatherCard';
import NoResult from '../components/NoResult';

const CurrentWeatherScreen = () => {
  const {data, isLoading} = useFetchWeatherApi('current', 'bandung');

  return (
    <View style={{flex: 1, backgroundColor: 'lightblue'}}>
      {isLoading ? (
        <ActivityIndicator />
      ) : data ? (
        <WeatherCard item={data} />
      ) : (
        <NoResult />
      )}
    </View>
  );
};

export default CurrentWeatherScreen;
