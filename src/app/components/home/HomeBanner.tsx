import Image from "next/image";
import cookieImage from "../../../../public/cookies.png";

function HomeBanner() {
  return (
    <div className="h-36 w-128 bg-white">
      <div className="carousel w-full">
        <div className="carousel-item relative w-full">
          <Image src={cookieImage} alt="배너이미지" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"></div>
        </div>
      </div>
    </div>
  );
}

export default HomeBanner;
