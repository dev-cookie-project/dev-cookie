import React, { useState } from "react";

function Searchform() {
  const [searchWord, setSearchWord] = useState("노동요");

  const searchWordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchWord(e.target.value);
  };
  return (
    <div>
      <form>
        <input
          placeholder="검색어를 입력해주세요"
          value={searchWord}
          onChange={searchWordHandler}
        />
        <span>검색</span>
      </form>
    </div>
  );
}

export default Searchform;
