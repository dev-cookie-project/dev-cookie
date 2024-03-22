import TagList from "@/app/components/projectReview/TagList";
import TagSelection from "@/app/components/projectReview/TagSelection";

function page() {
  return (
    <>
      <TagList />
      <div className="h-200 w-128 px-4 bg-orange-400 flex justify-center items-start">
        <TagSelection />
      </div>
    </>
  );
}

export default page;
