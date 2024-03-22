import React from "react";
import DevCookieProjectReviewComponents from "../components/devCookieProjectReviewComponents/DevCookieProjectReviewSearchForm";
import DevCookieProjectReviewList from "../components/devCookieProjectReviewComponents/DevCookieProjectReviewList";

function page() {
  return (
    <div>
      <DevCookieProjectReviewComponents />
      <DevCookieProjectReviewList />
    </div>
  );
}

export default page;
