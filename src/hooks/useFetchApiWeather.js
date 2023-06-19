import axios from 'axios';
import {useEffect, useState} from 'react';
import {WEATHER_API_KEY} from '../../env';

const baseUrl = 'http://api.weatherapi.com/v1';

export const useFetchWeatherApi = (type, city, days) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchApi = async () => {
    setIsLoading(true);

    try {
      const res = await axios.get(
        `${baseUrl}/${type}.json?key=${WEATHER_API_KEY}&q=${city} ${days}`,
      );
      setData(res.data);

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchApi();
  }, [type, city]);

  return {data, isLoading, fetchApi};
};
