"use client";

import React, { useState, useId, useEffect } from "react";

import { supabase } from "../../../hooks/useSupabase";

import Link from "next/link";

import { useRouter } from "next/navigation";
import EmailIcon from "@/app/components/svg/emailIcon";
import PasswordIcon from "@/app/components/svg/passwordIcon";
import { useAtom } from "jotai";
import { userIDAtom } from "@/app/store/myStore";

//회원가입
const Login = () => {
  const router = useRouter();
  const id = useId();
  const [userID, setUserID] = useAtom<string>(userIDAtom);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //로그인 여부 확인 후 페이지 이동
  supabase.auth.onAuthStateChange(async (event) => {
    if (event !== "SIGNED_OUT") {
      router.push("/logIn");
    } else {
      router.push("/");
    }
  });

  //가입한 이메일로 로그인
  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) {
        console.error(error);
        alert("아이디와 비밀번호를 확인해주세요");
      } else {
        alert("로그인이 완료되었습니다.");
      }
    } catch (error) {
      console.error(error);
    }
    // setNickname("");
    router.push("/");
  }

  //Github으로 로그인
  async function signUpWithGithub() {
    try {
      // Supabase를 이용해 GitHub OAuth를 통해 로그인을 시도합니다.
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "github",
      });
      alert("로그인이 완료되었습니다.");
      if (error) {
        console.error("Error signing in with GitHub:", error.message);
      }
    } catch (error) {
      console.error("Error signing in with GitHub:", error);
    }
  }

  //Google로 로그인
  async function signUpWithGoogle() {
    supabase.auth.signInWithOAuth({
      provider: "google",
    });
    alert("로그인이 완료되었습니다.");
  }

  useEffect(() => {
    const userInformation = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user === null) {
        return;
      }
      const logInUser = user.id;
      setUserID(logInUser);
    };
    userInformation();
  });

  return (
    <div className="card w-100 flex flex-col justify-center item-center">
      <div className="card w-100 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">로그인</h2>
          <p>
            회원가입이 아직이신가요? <Link href="/signUp">회원가입</Link>
          </p>

          <div className="card w-96 bg-base-100 justify-center">
            <form onSubmit={handleLogin}>
              <label
                htmlFor={id + "Email"}
                className="input input-bordered flex items-center gap-2"
              >
                <EmailIcon />
                <input
                  id={id + "Email"}
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
              <button
                type="submit"
                className="btn btn-active btn-primary itmes-center"
              >
                로그인
              </button>
              <div className="card w-60 bg-base-100">
                <button className="btn btn-outline" onClick={signUpWithGoogle}>
                  구글
                </button>
                <button
                  className="btn btn-active btn-neutral"
                  onClick={signUpWithGithub}
                >
                  깃헙
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
