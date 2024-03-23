import ProjectReviewList from "../components/projectReview/projectReviewList";
import ProjectSearchForm from "../components/searchList/SearchForm";

function page() {
  return (
    <div>
      <ProjectSearchForm titleText="(아이콘) 참여한 프로젝트의 리뷰를 남겨보세요!" />
      <ProjectReviewList />
    </div>
  );
}

export default page;
