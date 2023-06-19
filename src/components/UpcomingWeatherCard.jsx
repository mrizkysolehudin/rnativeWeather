import {View, Text, Image} from 'react-native';
import React from 'react';
import FormatDate from '../utils/FormatDate';

const UpcomingWeatherCard = item => {
  const hour = item.item.hour[14].time.split(' ')[1];
  const dateFormatted = FormatDate(item.item.date);

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
        width: 180,
        marginHorizontal: 10,
      }}>
      <Text style={{fontSize: 16, fontWeight: 900, color: '#71717a'}}>
        Date: {dateFormatted}
      </Text>

      <Image
        source={{uri: `https:${item.item.hour[14].condition?.icon}`}}
        style={{width: 50, height: 50, marginBottom: -3, marginTop: 10}}
      />

      <Text style={{fontSize: 14, fontWeight: 500, color: '#71717a'}}>
        {hour}
      </Text>

      <Text style={{fontSize: 14, fontWeight: 500, color: '#71717a'}}>
        {item.item.hour[14].temp_c}°C / {item.item.hour[14].temp_f}°F
      </Text>

      <Text
        style={{
          fontSize: 14,
          fontWeight: 500,
          color: '#71717a',
        }}>
        {item.item.hour[14].condition?.text}
      </Text>
    </View>
  );
};

export default UpcomingWeatherCard;
