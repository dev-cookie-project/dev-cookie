import React from "react";
import DevCookieProjectReviewComponents from "../components/projectReview/reviewSearchForm";
import DevCookieProjectReviewList from "../components/projectReview/projectReviewList";

function page() {
  return (
    <div>
      <DevCookieProjectReviewComponents />
      <DevCookieProjectReviewList />
    </div>
  );
}

export default page;
