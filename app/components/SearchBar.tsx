import React from 'react';
interface SearchBarProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  genre: string;
  onGenreChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  rating: number;
  onRatingChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChange,
  genre,
  onGenreChange,
  rating,
  onRatingChange,
}) => {
  return (
    <div className=" flex  items-center gap-5">
      {/* Search Input */}
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search for movies..."
        className="w-[300px] p-2 border rounded"
      />

      {/* Genre Filter */}
      <select

        value={genre}
        onChange={onGenreChange}
        className="w-[150px] p-2 border rounded"
      >
        <option value="">All Genres</option>
        <option value="Drama">Drama</option>
        <option value="Action">Action</option>
        <option value="Comedy">Comedy</option>
        <option value="Horror">Horror</option>
      </select>

      {/* Rating Filter */}
      <select
        value={rating.toString()}
        onChange={onRatingChange}
        className="w-[150px] p-2 border rounded"
      >
        <option value="0">All Ratings</option>
        <option value="9">9 and up</option>
        <option value="8">8 and up</option>
        <option value="7">7 and up</option>
        <option value="6">6 and up</option>
      </select>
    </div>
  );
};

export default SearchBar;
