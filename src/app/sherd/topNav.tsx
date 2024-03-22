"use client";

import React, { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";

import Link from "next/link";
import Image from "next/image";
import { Session } from "@supabase/supabase-js";
import cookies from "../../../public/cookies.png";

export default function TopNav() {
  const [condition, setCondition] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      console.log(event, session);
      if (event === "SIGNED_IN") {
        setCondition(session);
      } else if (event === "SIGNED_OUT") {
        setCondition(null);
      }
    });
  }, []);

  async function signOut() {
    const { error } = await supabase.auth.signOut();
    alert("로그아웃 되었습니다.");
    if (error) console.error("Logout failed:", error);
  }

  return (
    <>
      <div className="navbar bg-orange-400">
        <div className="flex-1"></div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <Image
                  width="10"
                  height="10"
                  alt="Tailwind CSS Navbar component"
                  src={cookies}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li
                className={
                  condition
                    ? "justify-between"
                    : "opacity-0 pointer-events-none"
                }
              >
                <Link href="/devCookieMyPage">Mypage</Link>
              </li>
              <li>
                {condition ? (
                  <button onClick={signOut}>LogOut</button> // 세션이 있으면 로그아웃 버튼을 표시합니다.
                ) : (
                  <Link href="/devCookieAuth/devCookieLogIn">LogIn</Link> // 세션이 없으면 로그인 버튼을 표시합니다.
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
