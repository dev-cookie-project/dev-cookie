"use client";
import type { video } from "@/types/playlistTypeIndex";
import dummydata from "../../../db.json";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

function PlaylistSearchList() {
  const { id } = useParams();
  const [videos, setVideos] = useState<video[]>([]);

  useEffect(() => {
    const getPlaylist = async () => {
      // const response = await fetch(
      //   `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=5&q=${id}&type=video&key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`
      // );
      // const data = await response.json();
      const data = dummydata;

      if (!data) {
        return alert("결과가 존재하지 않습니다.");
      }
      const playlist = dummydata.items;
      setVideos(playlist);
    };
    getPlaylist();
  }, [videos]);

  return (
    <>
      <div>
        {videos.map((video) => (
          <>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
              <div>{video.id.videoId}</div>
              <div className="card-body">
                <h2 className="card-title">{video.snippet.title}</h2>
                <p>{video.snippet.description}</p>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}

export default PlaylistSearchList;
