"use client";

import { useParams, useRouter } from "next/navigation";

function ProjectContents() {
  const router = useRouter();
  const { id } = useParams();
  return (
    <>
      <div className="h-48 w-128 flex flex-col items-center justify-center bg-orange-300">
        <div className="h-36 w-129 bg-emerald-50 border-amber-800 rounded-xl p-4 text-black flex flex-col items-center justify-center gap-4">
          프로젝트 타이틀
        </div>
      </div>
      <div className="h-200 w-128 px-4 bg-orange-400 flex justify-center items-center">
        <div className="h-400 w-129 bg-emerald-50 border-amber-800 rounded-xl p-4 text-black flex flex-col items-center justify-center gap-4">
          프로젝트 내용
        </div>
      </div>
    </>
  );
}

export default ProjectContents;
