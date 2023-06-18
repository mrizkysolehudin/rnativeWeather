import {View, Text, Image} from 'react-native';
import React from 'react';

const UpcomingWeatherCard = item => {
  const hour = item.item.time.split(' ')[1];

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
        width: 170,
        marginHorizontal: 10,
      }}>
      <Image
        source={{uri: `https:${item.item.condition?.icon}`}}
        style={{width: 50, height: 50}}
      />

      <Text style={{fontSize: 14, fontWeight: 500, color: '#71717a'}}>
        Time: {hour}
      </Text>

      <Text style={{fontSize: 14, fontWeight: 500, color: '#71717a'}}>
        {item.item.temp_c}°C / {item.item.temp_f}°F
      </Text>

      <Text
        style={{
          fontSize: 14,
          fontWeight: 500,
          color: '#71717a',
        }}>
        {item.item.condition?.text}
      </Text>
    </View>
  );
};

export default UpcomingWeatherCard;
