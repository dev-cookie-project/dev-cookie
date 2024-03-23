import { Gathering } from '@/types/gathering-types';
import { supabase } from '@/utils/supabaseGathering';
import { useState } from 'react';

const useGathering = () => {
  const [gatherings, setGatherings] = useState<Gathering[]>();

  // supabase 조회
  const getGatherings = async () => {
    const { data, error } = await supabase.from('gatherings').select('*');

    if (data) {
      setGatherings(data);
    }

    if (error) {
      return alert('error 발생!');
    }
  };

  // supabase 저장
  const addGathering = async ({
    gathering,
    // stack,
    title,
    content,
  }: // userId,
  Gathering) => {
    const { data, error } = await supabase
      .from('gatherings')
      .insert([{ gathering, title, content }])
      .select();
  };

  // supabase 삭제

  // supabase 수정

  return { gatherings, getGatherings, addGathering };
};

export default useGathering;
