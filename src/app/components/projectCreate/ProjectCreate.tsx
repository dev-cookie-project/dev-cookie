"use client";

import { supabase } from "@/hooks/useSupabase";
import { useRouter } from "next/navigation";
import { useState } from "react";

function ProjectCreate() {
  const router = useRouter();
  const [userID, setUserID] = useState("");

  const getYoutubePlaylist = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (user === null) {
      return alert("로그인 해주세요!");
      router.push("/logIn");
    }
    const logInUser = user.id;
    setUserID(logInUser);
  };
  return (
    <>
      <form>
        <div className="h-48 w-128 flex flex-col items-center justify-center bg-orange-300">
          <div className="h-36 w-130 bg-emerald-50 border-amber-800 rounded-xl p-4 text-black text-3xl flex flex-col items-center justify-center gap-4">
            <input placeholder="타이틀을 입력해주세요" />
          </div>
        </div>
        <div className="h-200 w-128 px-4 bg-orange-400 flex flex-col justify-center items-center">
          <div className="h-500 w-130 bg-emerald-50 border-amber-800 rounded-xl p-4 text-black text-3xl flex flex-col items-center justify-center gap-4">
            <textarea
              placeholder="프로젝트 내용을 입력해주세요"
              className="h-600 w-130"
            />
          </div>
          <div className="w-130 flex flex-row justify-end items-end m-4">
            <button
              type="submit"
              className="h-20 w-20 rounded-3xl font-semibold text-2xl	flex justify-center items-center text-black border-4 outline-none ring ring-yellow-600 bg-yellow-400 hover:bg-violet-500"
            >
              등록
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default ProjectCreate;
