import { Review } from "@/types/projectReviewTypeIndex";
import { supabase } from "./useSupabase";

function useProjectList() {
  const getDoneProjectList = async () => {
    let { data: doneProjectList, error } = await supabase
      .from("totalProjectList")
      .select(`*`)
      .eq("ongoing", "FALSE");

    if (error) return alert("error 발생!");
    return doneProjectList;
  };

  const getSearchDoneProjectList = async (searchWord: string) => {
    let { data: searchDoneProjectList, error } = await supabase
      .from("totalProjectList")
      .select(`*`)
      .eq("ongoing", "FALSE")
      .contains("title", [`${searchWord}`]);

    if (error) return alert("error 발생!");
    return searchDoneProjectList;
  };

  const addProjectList = async (nextreview: Review) => {
    const { data, error } = await supabase
      .from("totalProjectList")
      .insert([
        {
          userID: nextreview.userID,
          created_at: new Date(),
          projectOrStudy: nextreview.projectOrStudy,
          title: nextreview.title,
          contents: nextreview.contents,
          heshSelection: nextreview.heshSelection,
          ongoing: true,
        },
      ])
      .select();
  };

  return { getDoneProjectList, addProjectList, getSearchDoneProjectList };
}

export default useProjectList;
