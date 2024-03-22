"use client";

import React, { useState, useId } from "react";

import { supabase } from "@/app/lib/supabase/supabase";

//회원가입
const Signup = () => {
  // const [nickname, setNickname] = useState<string>("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const id = useId();

  const handleSumbit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });
      if (error) {
        console.error(error);
        alert("아이디와 비밀번호를 확인해주세요");
      } else {
        alert("회원가입이 완료되었습니다.");
      }
    } catch (error) {
      console.error("error :>>", error);
    }
    // setNickname("");
    setEmail("");
    setPassword("");
  };

  async function signUpWithGithub() {
    try {
      // Supabase를 이용해 GitHub OAuth를 통해 로그인을 시도합니다.
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "github",
      });
      alert("로그인이 완료되었습니다.");
      // 에러가 발생하면 콘솔에 로그를 출력합니다.
      if (error) {
        console.error("Error signing in with GitHub:", error.message);
      }
    } catch (error) {
      console.error("Error signing in with GitHub:", error);
    }
  }

  //Google로 회원가입
  async function signUpWithGoogle() {
    supabase.auth.signInWithOAuth({
      provider: "google",
    });
  }

  return (
    <div>
      <form onSubmit={handleSumbit}>
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input
            type="text"
            className="grow"
            placeholder="닉네임을 입력해주세요."
            // value={nickname}
            // onChange={(e) => {
            //   setNickname(e.target.value);
            // }}
          />
        </label>
        <label
          htmlFor={id + "email"}
          className="input input-bordered flex items-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input
            id={id + "email"}
            type="text"
            className="grow"
            placeholder="이메일을 입력해주세요."
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
        </label>

        <label
          htmlFor={id + "password"}
          className="input input-bordered flex items-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            id={id + "password"}
            type="password"
            className="grow"
            placeholder="비밀번호를 입력해주세요."
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />
        </label>
        <button type="submit" className="btn btn-active btn-primary">
          회원가입
        </button>
      </form>
      <button onClick={signUpWithGoogle}>구글</button>
      <button onClick={signUpWithGithub}>깃헙</button>
    </div>
  );
};

export default Signup;
