import Image from "next/image";
import ProjectSearchForm from "../components/project/ProjectSearchForm";
import ProjectList from "../components/project/projectList";

function page() {
  return (
    <>
      <ProjectSearchForm />
      <ProjectList />
    </>
  );
}

export default page;
