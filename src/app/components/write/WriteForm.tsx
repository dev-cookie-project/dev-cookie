"use client";
import { userIDAtom } from "@/app/store/myStore";
import useProjectList from "@/hooks/useProjectList";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";

import type { Review } from "@/types/projectReviewTypeIndex";
import { supabase } from "@/hooks/useSupabase";

function WriteForm() {
  const [userID, setUserID] = useAtom<string>(userIDAtom);
  const [gather, setGather] = useState("");
  const [skill, setSkill] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const nextreview: Review = {
    userID: userID,
    projectOrStudy: gather,
    title,
    contents,
    heshSelection: skill,
    ongoing: true,
  };

  const { addProjectList } = useProjectList();
  const addProjectHandler = async () => {
    if (!title || !contents || !skill || !gather) {
      return alert("모든 항목을 입력해야 합니다.");
    }
    await addProjectList(nextreview);
    alert("등록이 완료되었습니다.");
  };

  useEffect(() => {
    const userInformation = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user === null) {
        return;
      }
      const logInUser = user.id;
      setUserID(logInUser);
    };
    userInformation();
  });

  return (
    <div className="h-full bg-orange-300">
      <form onSubmit={() => addProjectHandler()}>
        <div className="flex gap-12 h-20 ml-72 flex-row card bg-orange-300 rounded-box place-items-center">
          <select
            value={gather}
            onChange={(e) => setGather(e.target.value)}
            className="select btn-outline w-70 bg-orange-300 text-black max-w-xs"
          >
            <option>프로젝트</option>
            <option>스터디</option>
          </select>
          <select
            value={skill}
            onChange={(e) => setSkill(e.target.value)}
            className="select w-full btn-outline bg-orange-300 max-w-xs text-black"
          >
            <option>JavaScript</option>
            <option>React</option>
            <option>TypeScript</option>
            <option>Node.js</option>
            <option>Next.js</option>
            <option>Next.js</option>
          </select>
        </div>
        <div className="divider divider-neutral "></div>
        <div className="flex flex-col items-center">
          <input
            type="text"
            placeholder="제목을 입력해주세요."
            className="input input-md w-70 bg-orange-300 text-black btn-outline focus:border-black hover:bg-inherit hover:border-black"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="w-70 h-100 textarea mt-5 bg-orange-300 text-black btn-outline focus:border-black hover:bg-inherit hover:border-black"
            placeholder="내용을 입력해주세요."
            value={contents}
            onChange={(e) => setContents(e.target.value)}
          ></textarea>
          {userID ? (
            <button
              type="submit"
              className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg mt-5 mb-5 bg-orange-400 text-black btn-outline"
            >
              모임 만들기
            </button>
          ) : (
            <div>로그인이 필요합니다.</div>
          )}
        </div>
      </form>
    </div>
  );
}

export default WriteForm;
