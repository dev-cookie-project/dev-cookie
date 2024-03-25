import { Playlist } from "@/types/playlistTypeIndex";
import { useState } from "react";

import { supabase } from "./useSupabase";

function useMyPlayList() {
  const getPlaylist = async (userID: string) => {
    const { data: playList, error } = await supabase
      .from("musicList")
      .select("*")
      .eq("userID", userID);
    if (!playList) return;
    if (error) return alert("error 발생!");
    return playList;
  };

  const addPlaylist = async ({ userID, video }: Playlist) => {
    const { data, error } = await supabase
      .from("musicList")
      .insert([
        { userID: userID, created_at: new Date(), youtube: video.id.videoId },
      ])
      .select();
  };

  const addNewPlaylist = async ({ userID, video }: Playlist) => {
    const { data: findPlayListData } = await supabase
      .from("musicList")
      .select(`youtube`)
      .eq("userID", userID)
      .eq("youtube", video.id.videoId);

    if (findPlayListData === null || findPlayListData.length === 0) {
      alert("추가되었습니다.");
      await addPlaylist({ userID, video });
      return findPlayListData;
    }
    if (!!findPlayListData) {
      alert("이미 추가된 목록입니다.");
      return findPlayListData;
    }
  };

  const deletePlaylist = async ({ userID, video }: Playlist) => {
    const { error } = await supabase
      .from("musicList")
      .delete()
      .eq("userID", userID)
      .eq("youtube", video.id.videoId);
  };

  return { deletePlaylist, getPlaylist, addNewPlaylist };
}

export default useMyPlayList;
