import {View, ActivityIndicator, FlatList} from 'react-native';
import React from 'react';
import {useFetchWeatherApi} from '../hooks/useFetchApiWeather';
import UpcomingWeatherCard from '../components/UpcomingWeatherCard';
import LocationText from '../components/atoms/LocationText';

const UpcomingWeatherScreen = () => {
  const {data, isLoading} = useFetchWeatherApi(
    'forecast',
    'bandung',
    '&days=6',
  );

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

            <View style={{flexBasis: 180, marginTop: 40}}>
              <FlatList
                data={data?.forecast?.forecastday}
                renderItem={({item}) => <UpcomingWeatherCard item={item} />}
                horizontal
                contentContainerStyle={{
                  columnGap: 5,
                  marginVertical: 10,
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
