import { useEffect, useState } from 'react';
import { fetchMovies } from '../utils/api';
import SearchBar from './SearchBar';

type Movie = {
  id: number;
  title: string;
  poster: string;
  awards: string;
  releaseDate: string;
  rating: number;
  genre: string[];
};

const MovieList = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [genre, setGenre] = useState('');
  const [rating, setRating] = useState(0);

  useEffect(() => {
    const loadMovies = async () => {
      setError(null);
      try {
        const data = await fetchMovies(searchQuery);
        setMovies(data);
      } catch (err) {
        setError((err as Error).message);
      } 
    };

    loadMovies();
  }, [searchQuery]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleGenreChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setGenre(event.target.value);
  };

  const handleRatingChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setRating(parseInt(event.target.value, 10));
  };

  const filteredMovies = movies.filter((movie) => {
    const matchesGenre = genre ? movie.genre.includes(genre) : true;
    const matchesRating = rating ? movie.rating >= rating : true;
    return matchesGenre && matchesRating;
  });

  if (loading) return <div className="text-center p-4">Loading...</div>;
  if (error) return <div className="text-red-500 p-4">{error}</div>;

  return (
    <div>
      <div className="p-4">
        <SearchBar
          value={searchQuery}
          onChange={handleSearchChange}
          genre={genre}
          onGenreChange={handleGenreChange}
          rating={rating}
          onRatingChange={handleRatingChange}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {filteredMovies.map((movie) => (
          <div key={movie.id} className="border rounded p-4 bg-white shadow-lg">
            <img
              src={movie.poster}
              alt={movie.title}
              className="w-full h-[200px] mb-2"
            />
            <h3 className="text-lg font-semibold">{movie.title}</h3>
            <p>awards: {movie.awards}</p>
            <p>Rating: {movie.rating.toFixed(1)}</p>
            <p>Genre: {movie.genre.join(', ')}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
