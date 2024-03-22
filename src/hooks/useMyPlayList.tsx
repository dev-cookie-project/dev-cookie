import { playlist } from "@/types/playlistTypeIndex";
import { createClient } from "@supabase/supabase-js";
import { useState } from "react";

import { supabase } from "./useSupabase";

function useMyPlayList() {
  const [list, setList] = useState<playlist[]>();

  const getPlaylist = async (userID: number) => {
    const { data: playList, error } = await supabase
      .from("musicList")
      .select(`*, youtube`)
      .eq(`userID`, userID);
    if (!playList) return;
    setList(playList);
    if (error) return alert("error 발생!");
  };

  const addPlaylist = async ({ userID, video }: playlist) => {
    const { data, error } = await supabase
      .from("musicList")
      .insert([
        { userID: userID, created_at: new Date(), youtube: video.id.videoId },
      ])
      .select();
  };

  const addNewPlaylist = async ({ userID, video }: playlist) => {
    const { data: findPlayListData } = await supabase
      .from("musicList")
      .select(`youtube`)
      .eq("userID", userID)
      .eq("youtube", video.id.videoId);
    console.log(findPlayListData);

    if (findPlayListData === null || findPlayListData.length === 0) {
      alert("추가되었습니다.");
      await addPlaylist({ userID, video });
      return findPlayListData;
    }
    if (!!findPlayListData) {
      console.log(findPlayListData);
      alert("이미 추가된 목록입니다.");
      return findPlayListData;
    }
  };

  const deletePlaylist = async ({ userID, video }: playlist) => {
    const { error } = await supabase
      .from("musicList")
      .delete()
      .eq("userID", userID)
      .eq("youtube", video.id.videoId);
  };

  return { deletePlaylist, getPlaylist, addNewPlaylist };
}

export default useMyPlayList;
