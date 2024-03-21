import { playlist } from "@/types/playlistTypeIndex";
import { createClient } from "@supabase/supabase-js";
import { useState } from "react";

function useMyPlayList() {
  const [list, setList] = useState<playlist[]>();
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL as string,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
  );

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

  const deletePlaylist = async () => {
    const { error } = await supabase
      .from("musicList")
      .delete()
      .eq("userID", "22222")
      .eq("youtube", "입력 시도");
  };

  return { deletePlaylist, addPlaylist, getPlaylist };
}

export default useMyPlayList;
