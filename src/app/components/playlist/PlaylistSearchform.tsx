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

  const searchVideoHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchWord) {
      return alert("검색어를 입력해주세요.");
    }
    router.push(`/playlist/${searchWord}`);
    setSearchWord("");
  };
  return (
    <div className="w-128">
      <div className="h-48 w-128 flex flex-row items-center justify-center gap-8 text-black text-2xl bg-orange-300">
        <div>(아이콘) 코딩할 때 들을 노래를 선택해 보세요!</div>
        <form
          className="flex flex-row justify-center items-center gap-4"
          onSubmit={searchVideoHandler}
        >
          <input
            type="text"
            className="input input-bordered input-warning w-full max-w-xs bg-slate-100 border-amber-600 border-4 rounded-xl"
            placeholder="검색어를 입력해주세요"
            value={searchWord}
            onChange={searchWordHandler}
          />
          <button
            type="submit"
            className="w-20 h-12 bg-amber-400 text-black border-4 rounded-xl border-amber-900"
          >
            검색
          </button>
        </form>
      </div>
    </div>
  );
}

export default PlaylistSearchform;
