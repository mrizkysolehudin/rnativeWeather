import {View, Text, ActivityIndicator, FlatList} from 'react-native';
import React from 'react';
import {useFetchWeatherApi} from '../hooks/useFetchApiWeather';
import UpcomingWeatherCard from '../components/UpcomingWeatherCard';
import LocationText from '../components/atoms/LocationText';

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
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 130,
            }}>
            <LocationText
              city={data?.location?.name}
              region={data?.location?.region}
              country={data?.location?.country}
            />

            <View style={{flexBasis: 180, marginTop: 20}}>
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
