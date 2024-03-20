"use client";
import { playlist } from "@/types/playlistTypeIndex";
import { createClient } from "@supabase/supabase-js";
import { atom, useAtom } from "jotai";
import React, { useEffect, useState } from "react";

function PlaylistDatabase() {
  // const arrAtom = atom<string[]>([]);
  // const [list, setList] = useAtom(arrAtom);
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

  const addPlaylist = async () => {
    const { data, error } = await supabase
      .from("musicList")
      .insert([
        { userID: 22222, created_at: new Date(), youtube: "입력 시도2" },
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

  return (
    <div>
      <div>
        <button
          onClick={() => {
            getPlaylist(22222);
          }}
        >
          test
        </button>
        <button onClick={addPlaylist}>add test button</button>
      </div>
      <div>
        <button onClick={deletePlaylist}>리스트를 삭제합니다.</button>
      </div>
      {!list ? (
        <p>리스트가 존재하지 않습니다.</p>
      ) : (
        <div>
          {list.map((music) => (
            <>{music.youtube} </>
          ))}
        </div>
      )}
    </div>
  );
}

export default PlaylistDatabase;
