import { supabase } from "./useSupabase";

function uesHomeProjectList() {
  const getTotalProjectList = async () => {
    let { data: totalProjectList, error } = await supabase
      .from("totalProjectList")
      .select(`*`);

    if (error) return alert("error 발생!");
    return totalProjectList;
  };
  return { getTotalProjectList };
}

export default uesHomeProjectList;
