import React from 'react';
import GatheringForm from '../components/gathering/GatheringForm';

function WritePage() {
  return (
    <main>
      <section className="h-48 w-128 flex flex-row items-center justify-center gap-8 text-black text-2xl bg-orange-300">
        <h1>원하는 모임을 만들어 보세요!</h1>
      </section>
      <section className="h-screen w-full bg-orange-400 py-8 px-20">
        <GatheringForm />
      </section>
    </main>
  );
}

export default WritePage;
