import React from "react";
import { abbreviateNumber } from "js-abbreviation-number";
import { Link } from "react-router-dom";
import { BsFillCheckCircleFill } from "react-icons/bs";

import VideoLength from "../shared/VideoLength";

const VideoCard = ({ video }) => {
  return (
    <Link to={`/video/${video?.videoId}`}>
      <div className="flex flex-col mb-8">
        <div className="relative h-42 md:h-52 2xl:w-[380px] xl:h-[58] 2xl:h-[58] md:rounded-xl hover:rounded-none overflow-hidden ">
          <img
            className="h-full w-full object-cover"
            src={video?.thumbnails[0]?.url}
            alt="Thumbnail"
          />
          {video?.lengthSeconds && (
            <VideoLength time={video?.lengthSeconds} />
          )}
        </div>
        <div className="flex text-white mt-3">
          <div className="flex items-start">
            <div className="flex h-9 w-9 rounded-full overflow-hidden">
              <img
                className="h-full w-full object-cover"
                src={video?.author?.avatar[0]?.url}
                alt="Channel Avatar"
              />
            </div>
          </div>
          <div className="flex flex-col ml-3 overflow-hidden">
            <div className="text-[17.5px] 2xl:w-[340px] font-medium tracking-tight overflow-hidden" style={{ color: "#f1f1f1" }}>
              {video?.title}
            </div>
            <span className="text-[15px] mt-1 text-white/[0.7] flex items-center hover-author">
              {video?.author?.title}
              {video?.author?.badges[0]?.type ===
                "VERIFIED_CHANNEL" && (
                  <BsFillCheckCircleFill className="text-white/[0.5] text-[12px] ml-1" />
                )}
            </span>
            <div className="flex text-[14px] text-white/[0.7] truncate overflow-hidden">
              <span>{`${abbreviateNumber(
                video?.stats?.views,
                0
              )} views`}</span>
              <span className="flex text-[24px] leading-none font-bold text-white/[0.7] relative top-[-10px] mx-1">
                .
              </span>
              <span className="truncate">
                {video?.publishedTimeText}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;