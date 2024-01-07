import { useState } from "react";

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChangeSearchTerm = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          onChange={handleChangeSearchTerm}
          className="shadow border rounded border-blue-600
            py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={searchTerm}
        />
      </form>
    </div>
  );
}

export default SearchBar;
