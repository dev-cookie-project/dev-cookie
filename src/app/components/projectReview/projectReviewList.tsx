"use client";
import type { ReviewList } from "@/types/projectReviewTypeIndex";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import useProjectReviewList from "../../../hooks/useProjectList";
import { useAtom } from "jotai";
import { searchWordAtom } from "@/app/store/myStore";

function ProjectReviewList() {
  const [projectReviewList, setProjectReviewList] = useState<ReviewList>();
  const [searchWord] = useAtom<string>(searchWordAtom);
  const { getDoneProjectList, getSearchDoneProjectList } =
    useProjectReviewList();
  const router = useRouter();

  useEffect(() => {
    const getProjectDoneList = async () => {
      if (searchWord.length !== 0) {
        const projectDoneList = (await getSearchDoneProjectList(
          searchWord
        )) as ReviewList;
        setProjectReviewList(projectDoneList);
      }
      if (searchWord.length === 0) {
        const projectDoneList = (await getDoneProjectList()) as ReviewList;
        setProjectReviewList(projectDoneList);
      }
    };

    getProjectDoneList();
  }, [getDoneProjectList, getSearchDoneProjectList, searchWord]);

  if (!projectReviewList || projectReviewList === undefined)
    return <div>현재 프로젝트가 없습니다.</div>;

  const goDetailpage = (id: number) => {
    router.push(`/projectReview/${id}`);
  };
  return (
    <>
      <div className="h-200 w-128 bg-orange-400 py-8 px-20">
        <div className="grid grid-rows-2 grid-cols-3 gap-4">
          {projectReviewList.map((project) => (
            <form onClick={(e) => goDetailpage(project.id)} key={project.id}>
              <div className="card card-compact w-80 h-80 bg-base-100 shadow-xl text-base">
                <figure>
                  <Image
                    width={300}
                    height={200}
                    src=""
                    alt="프로젝트의 대표 이미지가 들어갑니다."
                  />
                </figure>
                <div className="card-body text-base">
                  <h2 className="card-title text-sm">{project.title}</h2>
                </div>
                <div className="card-actions justify-end"></div>
              </div>
            </form>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProjectReviewList;
