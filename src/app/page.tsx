import Link from "next/link";
import TopNav from "./components/topNav";
import HomeBanner from "./devCookieHomeComponents/HomeBanner";
import HomeProjectList from "./devCookieHomeComponents/HomeProjectList";

export default function Home() {
  return (
    <>
      <TopNav></TopNav>
      <Link href="/devCookieAuth/devCookieJoinUs">회원가입 페이지</Link>
      <Link href="/devCookieAuth/devCookieLogIn">로그인 페이지</Link>
      <div className="h-48 w-128 flex flex-col items-center justify-center bg-orange-300">
        <HomeBanner />
      </div>

      <div className="h-100 w-128 px-4 bg-orange-400 flex justify-center items-center">
        <HomeProjectList />
      </div>
    </>
  );
}
