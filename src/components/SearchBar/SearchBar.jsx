const SearchBar = ({ handleSearch }) => {
  return (
    <header>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
