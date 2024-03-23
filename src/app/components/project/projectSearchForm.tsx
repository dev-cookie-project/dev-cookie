"use client";
import React, { useState } from "react";

function ProjectSearchForm() {
  const [searchWord, setSearchWord] = useState("");

  return (
    <div className="w-128">
      <div className="h-48 w-128 flex flex-row items-center justify-center gap-8 text-black text-2xl bg-orange-300">
        <div>(아이콘) 멋진 프로젝트를 찾아보세요!</div>
        <form className="flex flex-row justify-center items-center gap-4">
          <input
            type="text"
            className="input input-bordered input-warning w-full max-w-xs bg-slate-100 border-amber-600 border-4 rounded-xl"
            placeholder="검색어를 입력해주세요"
            // value={searchWord}
            // onChange={searchWordHandler}
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
