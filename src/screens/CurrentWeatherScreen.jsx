import {View, Text, Image, ActivityIndicator} from 'react-native';
import React from 'react';
import {useFetchWeatherApi} from '../hooks/useFetchApiWeather';

const CurrentWeatherScreen = () => {
  const {data, isLoading} = useFetchWeatherApi('current', 'bandung');

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
              alignContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 30,
                fontWeight: 900,
                color: 'black',
                marginTop: -70,
              }}>
              {data?.location?.name},
            </Text>

            <Text style={{fontSize: 30, fontWeight: 900, color: 'black'}}>
              {data?.location?.region}, {data?.location?.country}
            </Text>

            <Image
              source={{uri: `https:${data?.current?.condition?.icon}`}}
              style={{width: 150, height: 150}}
            />

            <View
              style={{
                fontSize: 20,
                fontWeight: 900,
                color: 'black',
                marginTop: -19,
              }}>
              <Text style={{fontSize: 18, fontWeight: 500, color: 'black'}}>
                {data?.current?.temp_c}°C / {data?.current?.temp_f}°F
              </Text>

              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 16,
                  fontWeight: 500,
                  color: 'black',
                }}>
                {data?.current?.condition?.text}
              </Text>
            </View>
          </View>
        )
      )}
    </View>
  );
};

export default CurrentWeatherScreen;
