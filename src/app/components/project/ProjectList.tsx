"use client";
import useOngoingProjectList from "@/hooks/useOngoingProjectList";
import { ReviewList } from "@/types/projectReviewTypeIndex";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function ProjectList() {
  const [projectOngoingList, setOngoingProjectList] = useState<ReviewList>();
  const router = useRouter();

  const { getOngoingProjectList } = useOngoingProjectList();

  useEffect(() => {
    const getProjectOngoingList = async () => {
      const projectListHandler = (await getOngoingProjectList()) as ReviewList;
      setOngoingProjectList(projectListHandler);
    };
    getProjectOngoingList();
  }, [setOngoingProjectList]);

  if (!projectOngoingList || projectOngoingList === undefined)
    return <div>현재 프로젝트가 없습니다.</div>;

  const goDetailpage = (id: number) => {
    router.push(`/project/${id}`);
  };

  return (
    <div className="h-200 w-128 bg-orange-400 py-8 px-20">
      <div className="grid grid-rows-2 grid-cols-3 gap-4">
        {projectOngoingList.map((project) => (
          <button onClick={(e) => goDetailpage(project.id)} key={project.id}>
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
          </button>
        ))}
      </div>
    </div>
  );
}

export default ProjectList;
