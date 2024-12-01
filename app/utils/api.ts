import axios from 'axios';

const API_BASE_URL = 'https://freetestapi.com/api/v1/movies';

export const fetchMovies = async (query: string) => {
  try {
    const response = await axios.get(`https://cors-anywhere.herokuapp.com/${API_BASE_URL}?search=${query}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch movies. Please try again.');
  }
};
