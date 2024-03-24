import { supabase } from "./useSupabase";

export type postTagListType = {
  userID: string;
  title: string;
  tags: string[];
};

function useReviewTags() {
  const postTagList = async ({ userID, title, tags }: postTagListType) => {
    const { data, error } = await supabase
      .from("totalProjectList")
      .insert([{ userID: userID, project: title, tags: tags }])
      .select();
    return { postTagList };
  };
}

export default useReviewTags;
