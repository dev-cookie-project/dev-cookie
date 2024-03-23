import PlaylistSearchList from "@/app/components/playlist/PlaylistSearchList";
import ProjectSearchForm from "@/app/components/searchList/SearchForm";

function page() {
  return (
    <>
      <ProjectSearchForm titleText="(아이콘) 코딩할 때 들을 노래를 선택해 보세요!" />
      <PlaylistSearchList />
    </>
  );
}

export default page;
