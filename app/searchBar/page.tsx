"use client"

import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const searchBar = () => {
  const [query, setQuery] = useState('');

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Search query:', query);
    // Here you can implement the search functionality
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center space-x-2">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        className="border border-gray-300 px-4 py-2 rounded-full focus:outline-none"
      />
      <button type="submit" className="text-lg cursor-pointer hover:text-gray-600">
        <FaSearch />
      </button>
    </form>
  );
};

export default searchBar;
