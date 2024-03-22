import PlaylistSearchList from "@/app/components/devCookiePlaylistComponents/PlaylistSearchList";
import PlaylistSearchform from "@/app/components/devCookiePlaylistComponents/PlaylistSearchform";
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
