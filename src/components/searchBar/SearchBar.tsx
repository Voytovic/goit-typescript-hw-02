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
      toast("Please enter text to search for images!");
      return;
    }
    onSetSearchQuery(value.trim());
    (e.target as HTMLFormElement).reset();
  };
  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={onSubmit}>
        <input
          className={css.searchBar}
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.button} title="Pres for search" type="submit">
          🔎
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
