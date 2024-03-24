"use client";
import { hashAtom } from "@/app/store/myStore";
import { useAtom } from "jotai";

function TagSelection() {
  const [active] = useAtom<string[]>(hashAtom);

  return (
    <>
      {/* <form onSubmit={() => {postTagList(userID, title, active)}}> */}
      <div className="h-48 w-128 flex flex-col items-center justify-center gap-12 bg-transparent">
        <div className="h-36 w-130 bg-emerald-50 border-amber-800 rounded-xl p-4 text-black flex flex-col items-center justify-center gap-4">
          여기에는 유저 정보가 들어갑니다.
          <div className="flex flex-row items-center justify-center gap-4">
            {active.map((key) => {
              return (
                <>
                  <button
                    key={key}
                    className="btn text-black border-4 outline-none ring ring-violet-300 bg-violet-400 hover:bg-violet-500"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                    {key}
                  </button>
                </>
              );
            })}
          </div>
          <button type="submit">등록</button>
        </div>
      </div>
      {/* </form> */}
    </>
  );
}

export default TagSelection;
