"use client";

import React, { useEffect, useState } from "react";

import { supabase } from "@/app/lib/supabase/supabase";

import Link from "next/link";

function page() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const onPageLoad = async () => {
      try {
        const { data, error }: { data: any; error: any } =
          await supabase.auth.getUser();
        setUser(data?.user);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
    onPageLoad();
  }, []);

  // GitHub로 회원가입하는 함수입니다.
  async function signUpWithGithub() {
    try {
      // Supabase를 이용해 GitHub OAuth를 통해 로그인을 시도합니다.
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "github",
      });

      console.log(data);
      alert("로그인이 완료되었습니다.");
      // 에러가 발생하면 콘솔에 로그를 출력합니다.
      if (error) {
        console.error("Error signing in with GitHub:", error.message);
      }
    } catch (error) {
      console.error("Error signing in with GitHub:", error);
    }
  }

  async function signUpWithGoogle() {
    supabase.auth.signInWithOAuth({
      provider: "google",
    });
  }

  // 로그아웃하는 함수입니다.
  async function signOut() {
    try {
      // Supabase를 이용해 로그아웃을 시도합니다.
      const { error } = await supabase.auth.signOut();
      alert("로그아웃이 완료되었습니다.");
      // 에러가 발생하면 콘솔에 로그를 출력합니다.
      if (error) {
        console.error("Error signing out:", error.message);
      }
      // 사용자 정보를 초기화합니다.
      setUser(null);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  }

  return (
    <div>
      <form>
        <Link href="http://localhost:3000/">홈</Link>
        <label>닉네임</label>
        <label>아이디</label>
        <label>비밀번호</label>
        <button>회원가입</button>
      </form>
      <button onClick={signUpWithGoogle}>구글</button>
      {/* <img src={user.raw_user_meta_data.avatar_url} alt="Avatar"></img> */}
      <button onClick={signUpWithGithub}>깃헙</button>
      <button onClick={signOut}>로그아웃</button>
    </div>
  );
}

export default page;
