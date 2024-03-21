import PlaylistSearchList from "@/app/devCookiePlaylistComponents/PlaylistSearchList";
import PlaylistSearchform from "@/app/devCookiePlaylistComponents/PlaylistSearchform";
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
