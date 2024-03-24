"use client";

import { userIDAtom } from "@/app/store/myStore";
import useProjectList from "@/hooks/useProjectList";
import { useAtom } from "jotai";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

import type { Reviews } from "@/types/projectReviewTypeIndex";
import CommentForm from "../comment/CommentForm";
import CommentList from "../comment/CommentList";

function ProjectContents() {
  const [userID, setUserID] = useAtom<string>(userIDAtom);

  const router = useRouter();
  const { id } = useParams();
  const { getSingleProject } = useProjectList();
  const [singleProject, setSingleProject] = useState<Reviews>();

  // const getProjectSingleContents = async () => {
  //   const singleProjectHandler = (await getSingleProject(id[0])) as Reviews[];
  //   console.log(singleProjectHandler);
  //   setSingleProject(singleProjectHandler[0]);
  // };
  // getProjectSingleContents();

  // if (!singleProject || singleProject === undefined)
  //   return <div>현재 프로젝트가 없습니다.</div>;
  // console.log(singleProject);

  //에러가 발생해서 침묵해놓습니다.

  return (
    <>
      <div className="h-48 w-128 flex flex-col items-center justify-center bg-orange-300">
        <div className="h-36 w-130 bg-emerald-50 border-amber-800 rounded-xl p-4 text-black flex flex-col items-center justify-center gap-4">
          프로젝트 타이틀
        </div>
      </div>
      <div className="h-200 w-128 px-4 bg-orange-400 flex justify-center items-center">
        <div className="h-600 w-130 bg-emerald-50 border-amber-800 rounded-xl p-4 text-black flex flex-col items-center justify-center gap-4">
          프로젝트 내용
        </div>
      </div>
      <CommentList />
    </>
  );
}

export default ProjectContents;
