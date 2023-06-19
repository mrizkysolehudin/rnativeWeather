import {View, Text} from 'react-native';
import React from 'react';

const NoResult = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 22, color: 'red', fontWeight: 500}}>
        There is no weather
      </Text>
      <Text style={{fontSize: 22, color: 'red', fontWeight: 500}}>
        information available at the moment.
      </Text>
    </View>
  );
};

export default NoResult;
