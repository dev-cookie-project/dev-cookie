"use client";

import React, { useState, useId } from "react";

import { supabase } from "../../../hooks/useSupabase";

import EmailIcon from "@/app/components/svg/emailIcon";
import PasswordIcon from "@/app/components/svg/passwordIcon";

//회원가입
const Signup = () => {
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
        <label
          htmlFor={id + "email"}
          className="input input-bordered flex items-center gap-2"
        >
          <EmailIcon />

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
          <PasswordIcon />
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
