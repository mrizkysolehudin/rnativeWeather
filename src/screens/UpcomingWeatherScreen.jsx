import {View, Text, ActivityIndicator, FlatList} from 'react-native';
import React from 'react';
import {useFetchWeatherApi} from '../hooks/useFetchApiWeather';
import UpcomingWeatherCard from '../components/UpcomingWeatherCard';

const UpcomingWeatherScreen = () => {
  const {data, isLoading} = useFetchWeatherApi('forecast', 'bandung');

  return (
    <View style={{flex: 1, backgroundColor: 'lightblue'}}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        data && (
          <View
            style={{
              flex: 1,
              justifyContent: 'space-evenly',
              marginVertical: 160,
            }}>
            <View
              style={{
                alignContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 30,
                  fontWeight: 900,
                  color: 'black',
                }}>
                {data?.location?.name},
              </Text>

              <Text style={{fontSize: 30, fontWeight: 900, color: 'black'}}>
                {data?.location?.region}, {data?.location?.country}
              </Text>
            </View>

            <View style={{flexBasis: 180}}>
              <FlatList
                data={data?.forecast?.forecastday[0].hour}
                renderItem={({item}) => <UpcomingWeatherCard item={item} />}
                horizontal
                contentContainerStyle={{
                  columnGap: 10,
                  marginVertical: 20,
                }}
              />
            </View>
          </View>
        )
      )}
    </View>
  );
};

export default UpcomingWeatherScreen;
