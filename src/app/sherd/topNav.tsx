import React from "react";
import { supabase } from "../lib/supabase";

import Link from "next/link";
import Image from "next/image";

export default function TopNav() {
  // const logOut = async () => {
  //   const { error } = await supabase.auth.signOut();
  //   alert("로그아웃 되었습니다");
  // };

  // const { data: { user } } = await supabase.auth.getUser();

  // const signOut = async () => {
  //   "use server";

  //   const cookieStore = cookies();
  //   const supabase = createClient(cookieStore);

  //   await supabase.auth.signOut();
  // };

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
                  src=""
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>LogOut</a>
              </li>
              <li>
                <Link href="/devCookieAuth/devCookieLogIn">LogIn</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
