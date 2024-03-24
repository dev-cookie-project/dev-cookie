import React from "react";

function WritePage() {
  return (
    <>
      <div className="h-full bg-orange-300">
        <div className="flex gap-12 h-20 ml-72 flex-row card bg-orange-300 rounded-box place-items-center">
          <select className="select btn-outline w-70 bg-orange-300 text-black max-w-xs">
            <option disabled selected>
              모임 선택
            </option>
            <option>프로젝트</option>
            <option>스터디</option>
          </select>
          <select className="select w-full btn-outline bg-orange-300 max-w-xs text-black">
            <option disabled selected>
              기술스택
            </option>
            <option>JavaScript</option>
            <option>React</option>
            <option>TypeScript</option>
            <option>Node.js</option>
            <option>Next.js</option>
            <option>Next.js</option>
          </select>
        </div>
        <div className="divider divider-neutral "></div>
        <div className="flex flex-col items-center">
          <input
            type="text"
            placeholder="제목을 입력해주세요."
            className="input input-md w-70 bg-orange-300 text-black btn-outline focus:border-black hover:bg-inherit hover:border-black"
          />
          <textarea
            className="w-70 h-100 textarea mt-5 bg-orange-300 text-black btn-outline focus:border-black hover:bg-inherit hover:border-black"
            placeholder="내용을 입력해주세요."
          ></textarea>
          <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg mt-5 mb-5 bg-orange-400 text-black btn-outline">
            모임 만들기
          </button>
        </div>
      </div>
    </>
  );
}

export default WritePage;
