// utils/api.ts
import axios from 'axios';

// Create an Axios instance for API requests
const apiClient = axios.create({
  baseURL: 'https://freetestapi.com/api/v1', // Base URL for the API
  timeout: 5000, // Optional timeout
});

// Fetch movies with optional query parameters
export const fetchMovies = async (query: string = '') => {
  try {
    const response = await axios.get(`https://cors-anywhere.herokuapp.com/https://freetestapi.com/api/v1/movies${query}`);;
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch movies.');
  }
};
