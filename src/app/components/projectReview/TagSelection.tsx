"use client";
import { hashAtom, userIDAtom } from "@/app/store/myStore";
import { supabase } from "@/hooks/useSupabase";
import useTagSelection from "@/hooks/useTagSelection";
import { useAtom } from "jotai";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import type { ReviewType } from "@/types/projectReviewTypeIndex";

function TagSelection() {
  const [tags, setTags] = useAtom<string[]>(hashAtom);
  const [userID, setUserID] = useAtom<string>(userIDAtom);
  const [reviewList, setReviewList] = useState<ReviewType[]>();
  const [getTags, setGetTags] = useState<string[]>();
  const { addReview } = useTagSelection();
  const { getReviewlist } = useTagSelection();

  const router = useRouter();
  const { id } = useParams();
  const title = id[0];

  useEffect(() => {
    const getUserInformation = async () => {
      const projectReviewList = (await getReviewlist(title)) as ReviewType[];
      if (!projectReviewList) return <div>리뷰를 남겨보세요!</div>;
      setReviewList(projectReviewList);
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user === null) {
        return;
      }
      setUserID(user.id);
    };
    getUserInformation();
  }, []);

  const postTagListHandler = async () => {
    await addReview({ userID, title, tags });
    setTags([]);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <form className="w-128" onSubmit={() => postTagListHandler()}>
        <div className="h-48 w-128 flex flex-col items-center justify-center gap-12 bg-transparent">
          <div className="h-36 w-130 bg-emerald-50 border-amber-800 rounded-xl p-4 text-black flex flex-col items-center justify-center gap-4">
            {userID}
            <div className="flex flex-row items-center justify-center gap-4">
              {tags.map((tag) => {
                return (
                  <>
                    <div></div>
                    <button
                      key={tag}
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
                      {tag}
                    </button>
                  </>
                );
              })}
            </div>
            <button>등록</button>
          </div>
        </div>
      </form>
      {reviewList?.map((tag) => {
        return (
          <form className="w-full" key={tag.id}>
            <div className="h-48 w-128 flex flex-col items-center justify-center gap-12 bg-transparent">
              <div className="h-36 w-130 bg-emerald-50 border-amber-800 rounded-xl p-4 text-black flex flex-col items-center justify-center gap-4">
                {tag.userID}
                <div className="flex flex-row items-center justify-center gap-4">
                  <>
                    {tag.tags}
                    {/* {tag.tags.map((singletag) => {
                      return (
                        <button
                          key={singletag}
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
                          {singletag}
                        </button>
                      );
                    })} */}
                  </>
                </div>
              </div>
            </div>
          </form>
        );
      })}
    </div>
  );
}

export default TagSelection;
