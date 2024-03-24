import type { NewRivewType } from "@/types/projectReviewTypeIndex";
import { supabase } from "./useSupabase";

const useTagSelection = () => {
  const getReviewlist = async (title: string) => {
    const { data: reviewlist, error } = await supabase
      .from("userTags")
      .select(`*`)
      .eq(`title`, title);
    if (!reviewlist) return;
    if (error) return alert("error 발생!");
    return reviewlist;
  };

  const addReview = async ({ userID, title, tags }: NewRivewType) => {
    const { data, error } = await supabase
      .from("userTags")
      .insert([{ userID: userID, title: title, tags: tags }])
      .select();
  };

  const addNewReview = async ({ userID, title, tags }: NewRivewType) => {
    const { data: findReviewData } = await supabase
      .from("userTags")
      .select(`tags`)
      .eq("userID", userID)
      .eq("title", title);

    if (findReviewData === null || findReviewData.length === 0) {
      alert("추가되었습니다.");
      await addReview({ userID, title, tags });
      return findReviewData;
    }
    if (!!findReviewData) {
      alert("이미 댓글을 작성하셨습니다.");
      return findReviewData;
    }
  };
  return { addNewReview, getReviewlist, addReview };
};

export default useTagSelection;
