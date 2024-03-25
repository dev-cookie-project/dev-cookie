import Image from "next/image";
import cookieImage from "../../../../public/cookies.png";

function HomeBanner() {
  return (
    <div className="h-36 w-128 pl-8 pt-8 bg-white text-3xl text-black text-amber-950 font-bold">
      프로젝트 / 팀원 모집, 더 이상 고민하지 마세요!{" "}
      <p>DevCookie에서 스터디부터 프로젝트까지 한 번에 해결해드립니다.</p>
      <div className="carousel w-full ">
        <div className="carousel-item relative w-full">
          {/* <Image
            src={cookieImage}
            alt="배너이미지"
            className="w-full"
            // 이미지는 추가될 예정입니다.
          /> */}
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"></div>
        </div>
      </div>
    </div>
  );
}

export default HomeBanner;
