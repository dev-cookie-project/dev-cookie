import Image from "next/image";
import ProjectSearchForm from "../components/project/ProjectSearchForm";
import ProjectList from "../components/project/ProjectList";

function page() {
  return (
    <>
      <ProjectSearchForm />
      <ProjectList />
    </>
  );
}

export default page;
