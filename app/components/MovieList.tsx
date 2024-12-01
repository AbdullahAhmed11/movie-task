'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

type Movie = {
  id: number;
  title: string;
  poster: string;
  releaseDate: string;
  rating: number;
  genre: string; // assuming genre is a string, adjust based on your API response
};

const MovieList = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>(''); // State for search query

  const fetchMovies = async (query: string) => {
    // setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://freetestapi.com/api/v1/movies?search=${query}&rating=1`
      );
      setMovies(response.data);
    } catch (err: any) {
      setError(err.message);
    } 
    finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies(searchQuery); // Fetch movies based on the search query
  }, [searchQuery]); // Re-fetch movies when the search query changes

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value); // Update the search query state
  };

  if (loading) return <div className="text-center p-4">Loading...</div>;
  if (error) return <div className="text-red-500 p-4">{error}</div>;

  return (
    <div>
      {/* Search Bar */}
      <div className="p-4">
        <SearchBar onChange={handleSearchChange} value={searchQuery} />
      </div>

      {/* Movie Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
        {movies.map((movie) => (
          <div key={movie.id} className="border rounded p-4 bg-white shadow-lg">
            <img src={movie.poster} alt={movie.title} className="w-full h-[200px] mb-2" />
            <h3 className="text-lg font-semibold">{movie.title}</h3>
            <p>Release Date: {movie.releaseDate}</p>
            <p>Rating: {movie.rating}</p>
            <p>Genre: {movie.genre}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;


