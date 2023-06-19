import {Text} from 'react-native';
import React from 'react';

const LocationText = ({city, region, country}) => {
  return (
    <>
      <Text
        style={{
          fontSize: 30,
          fontWeight: 900,
          color: 'black',
          marginTop: -70,
        }}>
        {city}
      </Text>

      <Text style={{fontSize: 30, fontWeight: 900, color: 'black'}}>
        {region}, {country}
      </Text>
    </>
  );
};

export default LocationText;
