"use client";

import type { Video } from "@/types/playlistTypeIndex";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";

import Image from "next/image";
import cookies from "../../../public/cookies.png";
import useMyPlayList from "@/hooks/useMyPlayList";

import { supabase } from "../lib/supabase";

function Mypage() {
  const router = useRouter();
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
      if (user === null) {
        return alert("로그인 해주세요!");
        router.push("/logIn");
      }
      const logInUser = user.id;
      setUserID(logInUser);

      const playlist = data.items;
      setVideos(playlist);
    };
    getYoutubePlaylist();
  }, [id, setUserID, router]);
  return (
    <>
      <div className="h-full bg-orange-300">
        <div className="card card-side ml-24 mr-24 bg-orange-300">
          <div className="avatar ml-24 mt-8 mb-8">
            <div className="w-36 rounded-full">
              <Image alt="Tailwind CSS Navbar component" src={cookies} />
            </div>
          </div>
          <div className="card-body">
            <h2 className="card-title text-black ">UserName</h2>
          </div>
        </div>
        <div className="h-200 w-128 bg-orange-400 py-8 px-20">
          <div className="grid grid-rows-3 grid-cols-3 gap-4">
            {videos.map((video) => (
              <form
                key={video.id.videoId}
                onSubmit={() => {
                  addNewPlaylist({ userID, video });
                }}
              >
                <div className="card card-compact w-80 h-80 bg-base-100 shadow-xl text-base shadow-xl">
                  <figure>
                    <iframe
                      width={300}
                      height={200}
                      src={`https://www.youtube.com/embed/${video.id.videoId}`}
                    />
                  </figure>
                  <div className="card-body">
                    <div className="card-actions justify-end">
                      <button className="btn btn-primary">
                        {video.snippet.title}
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Mypage;
