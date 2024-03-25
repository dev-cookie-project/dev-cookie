"use client";
import uesHomeProjectList from "@/hooks/uesHomeProjectList";
import Image from "next/image";
import cookieImage from "../../../../public/cookies.png";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import type { Reviews } from "@/types/projectReviewTypeIndex";

function HomeProjectList() {
  const [projectTotalList, setProjectTotalList] = useState<Reviews[]>();
  const router = useRouter();
  const { getTotalProjectList } = uesHomeProjectList();

  useEffect(() => {
    const getProjectTotalList = async () => {
      const projectTotalList = (await getTotalProjectList()) as Reviews[];
      setProjectTotalList(projectTotalList);
    };

    getProjectTotalList();
  }, []);

  if (!projectTotalList || projectTotalList === undefined)
    return <div>현재 프로젝트가 없습니다.</div>;

  const goDetailpage = (id: number) => {
    router.push(`/project/${id}`);
  };
  return (
    <div className="carousel rounded-box flex gap-12 px-8">
      <div className="carousel-item gap-12 ">
        {projectTotalList.map((project) => (
          <div
            key={project.id}
            className="card w-96 bg-yellow-400 text-black shadow-xl"
          >
            <button onClick={(e) => goDetailpage(project.id)}>
              <figure>
                {/* 이미지 부분은 나중에 대체될 예정입니다.(supabase store 사용) */}
                <Image
                  src={cookieImage}
                  alt="프로젝트 대표 이미지입니다."
                  width="200"
                  height="200"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{project.title}</h2>
                <p>{project.heshSelection}</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">{project.ongoing}</div>
                </div>
              </div>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeProjectList;
