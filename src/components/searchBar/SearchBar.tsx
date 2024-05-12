import React from "react";
import css from "./SearchBar.module.css";

interface SearchBarProps {
  onSetSearchQuery: (query: string) => void;
  toast: (message: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSetSearchQuery, toast }) => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = (e.target as HTMLFormElement).search.value;
    if (value.trim() === "") {
      toast(
        "Please enter text to search for images!"
        // {
        //   icon: "👀",
        //   style: {
        //     borderRadius: "10px",
        //     background: "#333",
        //     color: "#fff",
        //   },
        // }
      );

      return;
    }
    onSetSearchQuery(value.trim());
    (e.target as HTMLFormElement).reset();
  };
  return (
    <header className={css.header}>
      <form className={css.searchForm} onSubmit={onSubmit}>
        <input
          className={css.searchField}
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.searchBtn} title="Pres for search" type="submit">
          🔎
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
