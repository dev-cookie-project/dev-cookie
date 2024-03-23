'use client';

import useGathering from '@/hooks/useGathering';
import React, { useState } from 'react';

function GatheringForm() {
  const [gathering, setGathering] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const { addGathering } = useGathering();

  const handleSubmitGathering = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addGathering({ gathering, title, content });

    setGathering('');
    setTitle('');
    setContent('');

    alert('등록이 완료됐습니다.');
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmitGathering}>
      <label htmlFor="gathering" className="text-xl mb-1">
        모임
      </label>
      <select
        name="gathering"
        id="gathering"
        value={gathering}
        onChange={(e) => setGathering(e.target.value)}
        className="p-3 rounded-md w-52"
      >
        <option value="">모임을 선택해주세요.</option>
        <option value="스터디">스터디</option>
        <option value="프로젝트">프로젝트</option>
      </select>

      {/* stack 다중 셀렉트 */}

      <label htmlFor="title" className="text-xl mt-6 mb-1">
        제목
      </label>
      <input
        type="text"
        name="title"
        id="title"
        placeholder="제목을 입력해주세요."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="p-3 rounded-md"
      />
      <label htmlFor="content" className="text-xl mt-6 mb-1">
        내용
      </label>
      <textarea
        name="content"
        id="content"
        placeholder="내용을 입력해주세요."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="p-3 rounded-md resize-none h-48"
      ></textarea>
      <div className="flex justify-end gap-6 mt-6">
        <button type="submit" className="btn w-32 text-2xl">
          등록
        </button>
        <button type="button" className="btn w-32 text-2xl">
          취소
        </button>
      </div>
    </form>
  );
}

export default GatheringForm;
