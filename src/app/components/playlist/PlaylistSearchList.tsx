"use client";
import type { Video } from "@/types/playlistTypeIndex";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import useMyPlayList from "../../../hooks/useMyPlayList";
import { supabase } from "@/hooks/useSupabase";

function PlaylistSearchList() {
  const { id } = useParams();
  const [videos, setVideos] = useState<Video[]>([]);
  const [userID, setUserID] = useState("");
  const { addNewPlaylist } = useMyPlayList();

  useEffect(() => {
    const getYoutubePlaylist = async () => {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&q={${id}}&order=relevance&key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`
      );
      const data = await response.json();

      if (!data) {
        return alert("결과가 존재하지 않습니다.");
      }

      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user === null) return alert("로그인 해주세요!");
      const logInUser = user.id;
      console.log(logInUser);
      setUserID(logInUser);

      const playlist = data.items;
      setVideos(playlist);
    };
    getYoutubePlaylist();
  }, [id, setUserID]);

  return (
    <>
      <div className="h-200 w-128 bg-orange-400 py-8 px-20">
        <div className="grid grid-rows-3 grid-cols-3 gap-4">
          {videos.map((video) => (
            <div key={video.id.videoId}>
              <div className="card card-compact w-80 h-80 bg-base-100 shadow-xl text-base">
                <figure>
                  <iframe
                    width={300}
                    height={200}
                    src={`https://www.youtube.com/embed/${video.id.videoId}`}
                  />
                </figure>
                <div className="card-body text-base">
                  <h2 className="card-title text-sm">{video.snippet.title}</h2>
                </div>
                <div className="card-actions justify-end">
                  <button
                    onClick={() => {
                      addNewPlaylist({ userID, video });
                    }}
                    className="btn btn-outline btn-success"
                  >
                    Add List
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default PlaylistSearchList;
