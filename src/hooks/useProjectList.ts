import { Review } from "@/types/projectReviewTypeIndex";
import { supabase } from "./useSupabase";

function useProjectList() {
  const getDoneProjectList = async () => {
    let { data: totalProjectList, error } = await supabase
      .from("totalProjectList")
      .select(`*`)
      .eq("ongoing", "FALSE");

    if (error) return alert("error 발생!");
    return totalProjectList;
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

  return { getDoneProjectList, addProjectList };
}

export default useProjectList;
