import { useState } from "react";
import { LuSearch } from "react-icons/lu";
import { Category } from "../../../types";
import { cssContainer } from "../../../styles";
import { cssDarkBackground, cssHeader, cssTitleSearch } from "./styles";

export default function Header({
  keyword,
  category,
  onChangeKeyword,
}: {
  keyword: string;
  category: Category;
  onChangeKeyword: (value: string) => void;
}) {
  const [searchValue, setSearchValue] = useState("");

  return (
    <header css={cssHeader}>
      <div css={cssDarkBackground}></div>

      <div css={cssContainer}>
        <div css={cssTitleSearch}>
          <h1 className="title">
            Let's find your favorite{" "}
            {category === "movie" ? "movies" : "tv shows"}
            ...
          </h1>

          <div className="search">
            <input
              type="text"
              placeholder={`Search ${
                category === "movie" ? "movie" : "tv show"
              } title...`}
              data-active={!!keyword}
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onKeyUp={(e) => {
                if (e.code === "Enter") {
                  onChangeKeyword(searchValue);
                }
              }}
            />

            <button onClick={() => onChangeKeyword(searchValue)}>
              <LuSearch />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
