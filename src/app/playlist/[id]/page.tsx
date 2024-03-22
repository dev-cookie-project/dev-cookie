import PlaylistSearchList from "@/app/components/playlist/PlaylistSearchList";
import PlaylistSearchForm from "@/app/components/playlist/PlaylistSearchForm";
import React from "react";

function page() {
  return (
    <>
      <PlaylistSearchForm />
      <PlaylistSearchList />
    </>
  );
}

export default page;
