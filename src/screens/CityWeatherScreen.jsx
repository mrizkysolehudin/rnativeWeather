import {
  View,
  Text,
  TextInput,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {useState} from 'react';
import {useFetchWeatherApi} from '../hooks/useFetchApiWeather';
import EntypoIcon from 'react-native-vector-icons/dist/Entypo';
import {SafeAreaView} from 'react-native-safe-area-context';

const CityWeatherScreen = () => {
  const [city, setCity] = useState('jakarta');
  const [searchTempCity, setSearchTempCity] = useState('');
  const {data, isLoading} = useFetchWeatherApi('current', city);

  const handleSearchCityClick = () => {
    setCity(searchTempCity);
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'lightblue'}}>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 50,
          justifyContent: 'center',
          columnGap: 6,
        }}>
        <TextInput
          value={searchTempCity}
          onChangeText={setSearchTempCity}
          onSubmitEditing={handleSearchCityClick}
          placeholder="masukkan nama kota yang dicari"
          style={{
            backgroundColor: 'white',
            shadowColor: 'gray',
            shadowOffset: 5,
            shadowRadius: 20,
            paddingHorizontal: 10,
            borderRadius: 6,
            fontSize: 20,
          }}
        />

        <TouchableOpacity
          onPress={handleSearchCityClick}
          activeOpacity={0.8}
          style={{
            backgroundColor: 'blue',
            justifyContent: 'center',
            paddingHorizontal: 8,
            borderRadius: 4,
          }}>
          <EntypoIcon name="magnifying-glass" size={36} color="white" />
        </TouchableOpacity>
      </View>

      {isLoading ? (
        <ActivityIndicator />
      ) : (
        data && (
          <View
            style={{
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 30,
                fontWeight: 900,
                color: 'black',
                marginTop: 80,
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
                marginTop: -10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 18, fontWeight: 500, color: 'black'}}>
                {data?.current?.temp_c}°C / {data?.current?.temp_f}°F
              </Text>

              <Text
                style={{
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
    </SafeAreaView>
  );
};

export default CityWeatherScreen;
