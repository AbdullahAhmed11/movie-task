'use client'
// pages/index.tsx
import MovieList from './components/MovieList';
const Home = () => {
 

  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-3xl text-center p-6 font-bold">Movie Listing Page</h1>
      {/* <SearchBar onSearch={handleSearch} /> */}
      <MovieList />
    </div>
  );
};

export default Home;
