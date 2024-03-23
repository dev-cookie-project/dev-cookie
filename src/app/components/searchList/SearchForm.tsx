"use client";
import { useParams, useRouter } from "next/navigation";
import React, { useState } from "react";

type SearchForm = {
  titleText: string;
};

function ProjectSearchForm({ titleText }: SearchForm) {
  const router = useRouter();
  const { id } = useParams();

  const [searchWord, setSearchWord] = useState("");
  const searchWordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchWord(e.target.value);
  };

  const searchHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchWord.trim()) {
      return alert("검색어를 입력해주세요.");
    }
    if (titleText.indexOf("노래") !== -1) {
      setSearchWord("");
      router.push(`/playlist/${searchWord}`);
    }
    if (titleText.indexOf("리뷰") !== -1) {
      setSearchWord("");
      router.push(`/projectReview/${searchWord}`);
    }
    if (titleText.indexOf("참여") !== -1) {
      setSearchWord("");
      router.push(`/project/${searchWord}`);
    }
  };

  return (
    <div className="w-128">
      <div className="h-48 w-128 flex flex-row items-center justify-center gap-8 text-black text-2xl bg-orange-300">
        <div>{titleText}</div>
        <form
          onSubmit={searchHandler}
          className="flex flex-row justify-center items-center gap-4"
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

export default ProjectSearchForm;