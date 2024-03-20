"use client";

import React from "react";
import { supabase } from "@/app/lib/supabase/supabase";

let user: any;

// 페이지가 로드될 때 실행될 함수를 정의
function onPageLoad(callback: () => void) {
  // DOMContentLoaded 이벤트를 기다렸다가 콜백 함수를 실행
  document.addEventListener("DOMContentLoaded", callback);
}

// 페이지가 로드될 때의 동작을 설정합니다.
onPageLoad(async () => {
  user = await currentUser();
});

// 현재 로그인된 사용자 정보를 가져오는 함수입니다.
async function currentUser() {
  try {
    // Supabase에서 사용자 정보를 가져옵니다.
    const { data, error }: { data: any; error: any } =
      await supabase.auth.getUser();
    // 사용자 정보를 반환합니다.
    return data?.user;
  } catch (error) {
    console.error("Error fetching user:", error);
    return null;
  }
}

// GitHub로 로그인하는 함수입니다.
async function signInWithGithub() {
  try {
    // Supabase를 이용해 GitHub OAuth를 통해 로그인을 시도합니다.
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "github",
    });
    // 에러가 발생하면 콘솔에 로그를 출력합니다.
    if (error) {
      console.error("Error signing in with GitHub:", error.message);
    }
  } catch (error) {
    console.error("Error signing in with GitHub:", error);
  }
}

// 로그아웃하는 함수입니다.
async function signOut() {
  try {
    // Supabase를 이용해 로그아웃을 시도합니다.
    const { error } = await supabase.auth.signOut();
    // 에러가 발생하면 콘솔에 로그를 출력합니다.
    if (error) {
      console.error("Error signing out:", error.message);
    }
    // 사용자 정보를 초기화합니다.
    user = null;
  } catch (error) {
    console.error("Error signing out:", error);
  }
}

function page() {
  return (
    <div>
      <form>
        <label>닉네임</label>
        <label>아이디</label>
        <label>비밀번호</label>
        <button>회원가입</button>
      </form>
      <button>구글</button>
      <button onClick={signInWithGithub}>깃헙</button>
      <button onClick={signOut}>로그아웃</button>
    </div>
  );
}

export default page;
