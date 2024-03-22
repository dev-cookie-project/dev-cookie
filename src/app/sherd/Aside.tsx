import Image from "next/image";
import Link from "next/link";
import React from "react";

function Aside({ props }: { props: React.ReactNode }) {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">{props}</div>

      <div className="drawer-side ">
        {/* <Image
          src=""
          alt="이미지"
          className="w-40 h-40 block mr-10 ease-in-out border"
        /> */}
        <ul className="menu font-semibold pt-24 w-80 min-h-full bg-orange-200 text-3xl gap-4 text-amber-950">
          {/* Sidebar content here */}
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/devCookieProject"}>프로젝트/스터디 찾기</Link>
          </li>
          <li>
            <a>모임 만들기</a>
          </li>
          <li>
            <Link href={"/devCookiePlaylist/노동요"}>노동요 들으러 가기</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Aside;
