import React from "react";
import { TbPhotoSearch } from "react-icons/tb";
import toast from "react-hot-toast";
import css from "./SearchBar.module.css";

interface Props {
  onSubmit: (query: string) => void;
}

const SearchBar: React.FC<Props> = ({ onSubmit }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      query: { value: string };
    };

    const query = target.query.value.trim();

    if (query === "") {
      toast.error("Please enter a request");
      return;
    }

    onSubmit(query);
    e.currentTarget.reset();
  };

  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.searchBar}
          type="text"
          name="query"
          placeholder="Search images and photos"
        />
        <button className={css.button} type="submit">
          <TbPhotoSearch size="25" />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
