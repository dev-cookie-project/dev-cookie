"use client";
import type { video } from "@/types/playlistTypeIndex";
import { youtube, youtube_v3 } from "@googleapis/youtube";

import { useParams } from "next/navigation";
import { useState } from "react";

function PlaylistSearchList() {
  const { id } = useParams();
  const [videos, setVideos] = useState<video[]>([]);

  const getPlaylist = async () => {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=5&q=${id}&type=video&key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`
    );
    const data = await response.json();
    console.log(data);
    if (!data) {
      return alert("결과가 존재하지 않습니다.");
    }
    const playlist = data.items;
    setVideos(playlist);
  };

  getPlaylist();

  return (
    <>
      <div>{videos.map((video) => video.id.videoId)}</div>
      <div>비디오의 리스트를 나타내는 곳입니다.</div>
    </>
  );
}

export default PlaylistSearchList;
