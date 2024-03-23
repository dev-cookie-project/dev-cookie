import { supabase } from "./useSupabase";

function useOngoingProjectList() {
  const getOngoingProjectList = async () => {
    let { data: ongoingProjectList, error } = await supabase
      .from("totalProjectList")
      .select(`*`)
      .eq("ongoing", "TRUE");

    if (error) return alert("error 발생!");
    return ongoingProjectList;
  };

  return { getOngoingProjectList };
}

export default useOngoingProjectList;
