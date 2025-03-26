
import React, { useState, ChangeEvent } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ 
  onSearch, 
  placeholder = "Search for jobs, companies, or keywords..." 
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    onSearch(value);
  };

  return (
    <div className={`relative w-full transition-all duration-300 ${isFocused ? 'scale-[1.01]' : ''}`}>
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <svg
          className="w-5 h-5 text-apple-lighttext"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
      </div>
      <input
        type="text"
        className="search-field pl-12"
        placeholder={placeholder}
        value={searchQuery}
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        aria-label="Search"
      />
      {searchQuery && (
        <button
          className="absolute inset-y-0 right-0 flex items-center pr-4 text-apple-lighttext hover:text-apple-text"
          onClick={() => {
            setSearchQuery("");
            onSearch("");
          }}
          aria-label="Clear search"
        >
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="m15 9-6 6" />
            <path d="m9 9 6 6" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default SearchBar;
