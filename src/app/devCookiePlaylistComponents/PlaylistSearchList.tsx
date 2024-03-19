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
      <div className="grid grid-rows-3 grid-cols-4">
        {videos.map((video) => (
          <>
            <div className="card card-compact w-80 bg-base-100 shadow-xl text-base">
              <figure>
                <iframe
                  width={100}
                  height={80}
                  src={`https://www.youtube.com/embed/${video.id.videoId}`}
                />
              </figure>
              <div className="card-body text-base">
                <h2 className="card-title text-sm">{video.snippet.title}</h2>
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
