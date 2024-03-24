"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import cookies from "../../../public/cookies.png";
import { supabase } from "../lib/supabase";

function Mypage() {
  return (
    <>
      <div className="h-full bg-orange-300">
        <div className="card card-side ml-24 mr-24 mt-24 bg-base-100 shadow-xl">
          <div className="avatar ml-24 mt-8 mb-8">
            <div className="w-36 rounded-full">
              <Image alt="Tailwind CSS Navbar component" src={cookies} />
            </div>
          </div>
          <div className="card-body">
            <h2 className="card-title">User Name</h2>
            <p>Click the button to watch on Jetflix app.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Mypage;
