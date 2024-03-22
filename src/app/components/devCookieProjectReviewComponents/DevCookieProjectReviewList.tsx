"use client";
import useProjectReviewList from "@/hooks/useProjectReviewList";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function DevCookieProjectReviewList() {
  const [projectReviewList, setProjectReviewList] = useState("");
  const { getProjectList, addProjectList } = useProjectReviewList();

  const getProjectDoneList = async () => {
    const projectDoneList = await getProjectList();
    if (!projectDoneList) return <div>현재 프로젝트가 없습니다.</div>;
    setProjectReviewList(projectDoneList);
  };
  getProjectDoneList();

  const nextproject = {
    userID: 12345,
    created_at: "2024-03-10",
    projectOrStudy: 1,
    title: "추가 타이틀",
    contents: "추가 내용",
    heshSelection: ["javascript", "CSS"],
    ongoing: true,
  };

  return (
    <>
      <div className="h-200 w-128 bg-orange-400 py-8 px-20">
        <div className="grid grid-rows-3 grid-cols-3 gap-4">
          <button
            onClick={() => {
              addProjectList(nextproject);
            }}
          >
            추가
          </button>
          {projectReviewList.map((project) => (
            <div key={project.id}>
              <div className="card card-compact w-80 h-80 bg-base-100 shadow-xl text-base">
                <figure>
                  <Image
                    width={300}
                    height={200}
                    src=""
                    alt="이미지가 없습니다."
                  />
                </figure>
                <div className="card-body text-base">
                  <h2 className="card-title text-sm">{project.title}</h2>
                </div>
                <div className="card-actions justify-end"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default DevCookieProjectReviewList;
