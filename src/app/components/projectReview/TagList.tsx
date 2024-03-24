"use client";
import { useAtom } from "jotai";
import { hashAtom } from "@/app/store/myStore";

function TagList() {
  const [active, setActive] = useAtom<string[]>(hashAtom);

  const commentTagList = [
    "보통이에요",
    "쉬웠어요",
    "재밌었어요",
    "하드코딩",
    "좋은코드",
    "인원 추가 모집!",
    "디자이너 구해요",
  ];

  return (
    <>
      <div className="h-48 w-128 flex flex-col items-center justify-center bg-orange-300">
        <div className="h-36 w-129 bg-emerald-50 border-amber-800 rounded-xl p-4 text-black flex flex-col items-center justify-center gap-4">
          프로젝트는 어떠셨나요? 댓글과 태그로 알려주세요!
          <div className="flex flex-row items-center justify-center gap-4">
            {commentTagList.map((key) => {
              const isActive = active.includes(key);
              return (
                <button
                  key={key}
                  onClick={() => {
                    setActive(
                      isActive
                        ? active.filter((hash) => hash !== key)
                        : [...active, key]
                    );
                  }}
                  className="btn bg-teal-200 border-teal-400 text-black border-4 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 focus:bg-violet-400"
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
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default TagList;
