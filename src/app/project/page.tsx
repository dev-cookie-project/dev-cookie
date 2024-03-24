import Image from "next/image";
import ProjectList from "../components/project/ProjectList";
import ProjectSearchForm from "../components/searchForm/SearchForm";

function page() {
  return (
    <>
      <ProjectSearchForm titleText="(아이콘) 멋진 프로젝트를 찾아보세요!" />
      <ProjectList />
    </>
  );
}

export default page;
