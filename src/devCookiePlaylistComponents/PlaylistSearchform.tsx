"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function PlaylistSearchform() {
  const [searchWord, setSearchWord] = useState("");
  const router = useRouter();

  const searchWordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchWord(e.target.value);
  };
  const searchVideoHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (!searchWord) {
      return alert("검색어를 입력해주세요.");
    }
    router.push(`/devCookiePlaylist/${searchWord}`);
    setSearchWord("");
  };
  return (
    <div>
      <form>
        <input
          placeholder="검색어를 입력해주세요"
          value={searchWord}
          onChange={searchWordHandler}
        />
        <button onClick={searchVideoHandler}>검색</button>
      </form>
    </div>
  );
}

export default PlaylistSearchform;
