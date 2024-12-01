'use client'
// pages/index.tsx

import { useState } from 'react';
import MovieList from './components/MovieList';
import SearchBar from './components/SearchBar';
const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-3xl text-center p-6 font-bold">Movie Listing Page</h1>
      {/* <SearchBar onSearch={handleSearch} /> */}
      <MovieList />
    </div>
  );
};

export default Home;
