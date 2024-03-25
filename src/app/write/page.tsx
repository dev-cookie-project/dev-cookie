"use client";

import WriteForm from "../components/write/WriteForm";
import React, { useEffect } from "react";
import { supabase } from "@/hooks/useSupabase";
import { useRouter } from "next/navigation";

function WritePage() {
  const router = useRouter();

  useEffect(() => {
    const getUserCondition = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user === null) {
        return alert("로그인 해주세요!");
        router.push("/logIn");
      }
    };
    getUserCondition();
  }, []);

  return (
    <>
      <WriteForm />
    </>
  );
}

export default WritePage;
