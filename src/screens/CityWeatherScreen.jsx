import {
  View,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useState} from 'react';
import {useFetchWeatherApi} from '../hooks/useFetchApiWeather';
import EntypoIcon from 'react-native-vector-icons/dist/Entypo';
import {SafeAreaView} from 'react-native-safe-area-context';
import WeatherCard from '../components/WeatherCard';
import NoResult from '../components/NoResult';

const CityWeatherScreen = () => {
  const [city, setCity] = useState('jakarta');
  const [searchTempCity, setSearchTempCity] = useState('');
  const {data, isLoading} = useFetchWeatherApi('current', city);

  const handleSearchCityClick = () => {
    setCity(searchTempCity);
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'lightblue'}}>
      <ScrollView keyboardShouldPersistTaps="always">
        <View
          style={{
            flexDirection: 'row',
            marginTop: 50,
            justifyContent: 'center',
            columnGap: 6,
            marginBottom: 160,
          }}>
          <TextInput
            value={searchTempCity}
            onChangeText={setSearchTempCity}
            onSubmitEditing={handleSearchCityClick}
            placeholder="masukkan nama kota yang dicari"
            style={{
              backgroundColor: 'white',
              shadowColor: 'gray',
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
        ) : data ? (
          <WeatherCard item={data} />
        ) : (
          <NoResult />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default CityWeatherScreen;
