import Link from "next/link";
import TopNav from "./components/topNav";

export default function Home() {
  return (
    <>
      <TopNav></TopNav>
      <Link href="/devCookieAuth/devCookieJoinUs">회원가입 페이지</Link>
      <Link href="/devCookieAuth/devCookieLogIn">로그인 페이지</Link>
    </>
  );
}
