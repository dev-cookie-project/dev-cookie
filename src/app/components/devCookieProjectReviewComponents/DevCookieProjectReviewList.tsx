import React from "react";

function DevCookieProjectReviewList() {
  return (
    <>
      <div className="h-200 w-128 bg-orange-400 py-8 px-20">
        <div className="grid grid-rows-3 grid-cols-3 gap-4">
          {/* {videos.map((video) => (
            <div key={video.id.videoId}>
              <div className="card card-compact w-80 h-80 bg-base-100 shadow-xl text-base">
                <figure>
                  <iframe
                    width={300}
                    height={200}
                    src={`https://www.youtube.com/embed/${video.id.videoId}`}
                  />
                </figure>
                <div className="card-body text-base">
                  <h2 className="card-title text-sm">{video.snippet.title}</h2>
                </div>
                <div className="card-actions justify-end"></div>
              </div>
            </div>
          ))} */}
        </div>
      </div>
    </>
  );
}

export default DevCookieProjectReviewList;
