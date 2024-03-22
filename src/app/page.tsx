import Link from "next/link";
import HomeBanner from "./components/home/HomeBanner";
import HomeProjectList from "./components/home/HomeProjectList";

export default function Home() {
  return (
    <>
      <div className="h-48 w-128 flex flex-col items-center justify-center bg-orange-300">
        <HomeBanner />
      </div>

      <div className="h-200 w-128 px-4 bg-orange-400 flex justify-center items-center">
        <HomeProjectList />
      </div>
    </>
  );
}
