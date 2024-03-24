import Link from "next/link";
import React, { Children, ReactNode } from "react";
// { props }: { props: React.ReactNode }
function Aside({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

      <div className="drawer-side ">
        {/* <Image
          src=""
          alt="이미지"
          className="w-40 h-40 block mr-10 ease-in-out border"
        /> //로고 만들어서 넣을 예정입니다.*/}
        <ul className="menu font-semibold pt-24 w-128 min-h-full bg-orange-200 text-3xl gap-4 text-amber-950">
          {/* Sidebar content here */}
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/project"}>프로젝트/스터디 찾기</Link>
          </li>
          <li>
            <Link href={"/write"}>모임 만들기</Link>
          </li>
          <li>
            <Link href={"/projectReview"}>프로젝트 리뷰</Link>
          </li>
          <li>
            <Link href={"/playlist/노동요"}>노동요 들으러 가기</Link>
          </li>
        </ul>
      </div>
      <div className="drawer-content">{children}</div>
    </div>
  );
}

export default Aside;
