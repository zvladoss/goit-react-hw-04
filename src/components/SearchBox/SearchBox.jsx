import s from "./SearchBox.module.css";
const SearchBox = ({ searchData, onSearchInput }) => {
  return (
    <div className={s.searchWrapper}>
      <label htmlFor="search">
        <span>Find contacts by name</span>
        <input
          id="search"
          type="text"
          value={searchData}
          onChange={onSearchInput}
        />
      </label>
    </div>
  );
};

export default SearchBox;
