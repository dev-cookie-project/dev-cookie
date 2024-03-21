import React from "react";
import { supabase } from "../lib/supabase";

import Link from "next/link";

export default function TopNav() {
  //   async function Signout(e: React.MouseEventHandler) {
  //     const { error } = await supabase.auth.signOut();

  //     const { data } = supabase.auth.onAuthStateChange((event, session) => {
  //       if (event === "SIGNED_OUT") {
  //         // clear local and session storage
  //         [window.localStorage, window.sessionStorage].forEach((storage) => {
  //           Object.entries(storage).forEach(([key]) => {
  //             storage.removeItem(key);
  //           });
  //         });
  //       }
  //     });
  //   }

  return (
    <>
      <div className="navbar bg-base-100">
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
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
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
