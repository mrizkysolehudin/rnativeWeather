import {View, Text, Image} from 'react-native';
import React from 'react';
import LocationText from './atoms/LocationText';

const WeatherCard = ({item}) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
      }}>
      <LocationText
        city={item?.location?.name}
        region={item?.location?.region}
        country={item?.location?.country}
      />

      <Image
        source={{uri: `https:${item?.current?.condition?.icon}`}}
        style={{width: 150, height: 150}}
      />

      <View
        style={{
          fontSize: 20,
          fontWeight: 900,
          color: 'black',
          marginTop: -10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 18, fontWeight: 500, color: 'black'}}>
          {item?.current?.temp_c}°C / {item?.current?.temp_f}°F
        </Text>

        <Text
          style={{
            fontSize: 16,
            fontWeight: 500,
            color: 'black',
          }}>
          {item?.current?.condition?.text}
        </Text>
      </View>
    </View>
  );
};

export default WeatherCard;
