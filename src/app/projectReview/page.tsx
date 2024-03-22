import ProjectReviewList from "../components/projectReview/projectReviewList";
import ProjectReviewComponents from "../components/projectReview/reviewSearchForm";

function page() {
  return (
    <div>
      <ProjectReviewComponents />
      <ProjectReviewList />
    </div>
  );
}

export default page;
