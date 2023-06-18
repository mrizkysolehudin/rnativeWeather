import axios from 'axios';
import {useEffect, useState} from 'react';
import {WEATHER_API_KEY} from '../../env';

const baseUrl = 'http://api.weatherapi.com/v1';

export const useFetchWeatherApi = (type, city) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchApi = async () => {
    setIsLoading(true);

    try {
      const res = await axios.get(
        `${baseUrl}/${type}.json?key=${WEATHER_API_KEY}&q=${city}`,
      );
      setData(res.data);

      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return {data, isLoading};
};
