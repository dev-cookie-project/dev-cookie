import PlaylistSearchList from "@/app/components/playlist/PlaylistSearchList";
import PlaylistSearchform from "@/app/components/playlist/PlaylistSearchform";
import React from "react";

function page() {
  return (
    <>
      <PlaylistSearchform />
      <PlaylistSearchList />
    </>
  );
}

export default page;
