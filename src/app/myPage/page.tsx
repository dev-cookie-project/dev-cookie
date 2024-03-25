"use client";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import useMyPlayList from "@/hooks/useMyPlayList";
import cookies from "../../../public/cookies.png";
import { supabase } from "../../hooks/useSupabase";
import Image from "next/image";

import type { Reviews } from "@/types/projectReviewTypeIndex";
import { useAtom } from "jotai";
import { userIDAtom } from "../store/myStore";
import { GetPlayListType } from "@/types/playlistTypeIndex";

function Mypage() {
  const router = useRouter();
  const [userID, setUserID] = useAtom<string>(userIDAtom);
  const [youTubeAddressList, setYouTubeAddressList] = useState<
    GetPlayListType[]
  >([]);
  const { getPlaylist } = useMyPlayList();

  useEffect(() => {
    const getUserInformation = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user === null) {
        return alert(`로그인 해주세요!`), router.push(`/logIn`);
      }
      const logInUser = user.id;
      setUserID(logInUser);

      const youTubeAddressList = (await getPlaylist(
        userID
      )) as GetPlayListType[];
      setYouTubeAddressList(youTubeAddressList);
    };
    getUserInformation();
  }, []);
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
            {youTubeAddressList.map((list) => (
              <form key={list.id}>
                <div className="card card-compact w-80 h-80 bg-base-100 text-base shadow-xl">
                  <figure>
                    <iframe
                      width={300}
                      height={200}
                      src={`https://www.youtube.com/embed/${list.youtube}`}
                    />
                  </figure>
                  <div className="card-body">
                    <div className="card-actions justify-end">
                      <button className="btn btn-primary">삭제</button>
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
