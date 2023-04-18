import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import { BsFillCheckCircleFill } from "react-icons/bs";
// import { AiOutlineLike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import { abbreviateNumber } from "js-abbreviation-number";
import ShowMoreText from 'react-show-more-text'

import { fetchDataFromApi } from "../utils/api";
import { Context } from "../context/contextApi";
import SuggestionVideoCard from "./SuggestionsVideoCard";
// import LeftNav from "./LeftNav";
import { BiDislike } from "react-icons/bi";
import { RiShareForwardLine } from "react-icons/ri";
import { HiDotsHorizontal, HiDownload } from "react-icons/hi";
import { MdOutlineSort, MdOutlineSave } from "react-icons/md";

const VideoDetails = () => {
  const [video, setVideo] = useState();
  const [relatedVideos, setRelatedVideos] = useState();
  const [comments, setComments] = useState();
  const [totalComments, setTotalComments] = useState();
  const { id } = useParams();
  const { setLoading } = useContext(Context);

  useEffect(() => {
    document.getElementById("root").classList.add("custom-h");
    fetchVideoDetails();
    fetchRelatedVideos();
    fetchComments();
  }, [id]);

  const fetchVideoDetails = () => {
    setLoading(true);
    fetchDataFromApi(`video/details/?id=${id}`).then((res) => {
      console.log(res);
      setVideo(res);
      setLoading(false);
    });
  };

  const fetchRelatedVideos = () => {
    setLoading(true);
    fetchDataFromApi(`video/related-contents/?id=${id}`).then((res) => {
      console.log(res);
      setRelatedVideos(res);
      setLoading(false);
    });
  };
  const fetchComments = () => {
    setLoading(true);
    fetchDataFromApi(`video/comments/?id=${id}`).then((res) => {
      console.log(res);
      setComments(res.comments);
      setTotalComments(res.totalCommentsCount)
      setLoading(false);
    });
  }

  const slicing = (String) => {
    return String.slice(0);
  }

  return (

    <div className="flex justify-start flex-row h-[calc(100%-56px]" style={{ backgroundColor: "#0F0F0F" }}>
      {/* <LeftNav /> */}
      <div className="w-full h-full max-w-[1600px] flex flex-col lg:flex-row">
        {/* Video-Card Details */}
        <div className="flex flex-col lg:ml-4 lg:w-[calc(100%-350px)] xl:w-[calc(100%-400px)] px-4 py-3 lg:py-6 overflow-y-auto">
          <div className="h-[400px] md:h-[600px] lg:h-[700px] xl:h-[700px] ml-[-16px] lg:ml-0 mr-[-16px] lg:mr-0">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              controls
              width="100%"
              height="100%"
              style={{ backgroundColor: "#000000" }}
              playing={true}
            />
          </div>
          <div className="text-yt-white font-semibold text-lg md:text-xl mt-4 line-clamp-2">
            {video?.title}
          </div>
          <div className="flex justify-between flex-col md:flex-row mt-4">
            <div className="flex items-center mb-2">
              <div className="flex items-start">
                <div className="flex h-11 w-11 rounded-full overflow-hidden cursor-pointer">
                  <img
                    className="h-full w-full object-cover"
                    src={video?.author?.avatar[0]?.url}
                    alt="avatar"
                  />
                </div>
              </div>
              <div className="flex flex-col ml-4 cursor-pointer">
                <div className="text-white text-md font-semibold flex items-center">
                  {video?.author?.title}
                  {video?.author?.badges[0]?.type ===
                    "VERIFIED_CHANNEL" && (
                      <BsFillCheckCircleFill className="text-white/[0.5] text-[12px] ml-1" />
                    )}
                </div>
                <div className="text-white/[0.7] text-sm">
                  {video?.author?.stats?.subscribersText}
                </div>
              </div>
              <div className="flex cursor-pointer items-center text-sm font-medium justify-center h-9 px-5 rounded-3xl bg-white ml-4">
                Subscribe
              </div>
            </div>
            <div className="flex text-white mt-4 md:mt-0 items-center overflow-x-auto">
              <div className="flex bg-yt-light-black items-center rounded-3xl h-10 mx-1 hovering">
                <div className="flex px-3 items-center border-r-2 border-r-yt-light-1 cursor-pointer">
                  <AiFillLike className="text-white text-2xl" />
                  <p className="text-yt-white pl-2 pr-3 text-sm font-semibold">
                    {`${abbreviateNumber(
                      video?.stats?.likes,
                      1
                    )}`}
                  </p>
                </div>
                <div className="cursor-pointer pl-4 pr-5">
                  <BiDislike className="text-[22px] font-extralight text-yt-white" />
                </div>
              </div>
              <div className="flex bg-yt-light-black items-center rounded-3xl h-10 mx-1 cursor-pointer hovering">
                <div className="flex px-3 items-center cursor-pointer">
                  <RiShareForwardLine className="text-2xl text-yt-white font-thin" />
                  <p className="text-yt-white pl-2 pr-3 text-sm font-semibold">
                    Share
                  </p>
                </div>
              </div>
              <div className="flex bg-yt-light-black items-center rounded-3xl h-10 mx-1 cursor-pointer hovering">
                <div className="flex px-3 items-center cursor-pointer">
                  <HiDownload className="text-2xl text-yt-white font-thin" />
                  <p className="text-yt-white pl-2 pr-3 text-sm font-semibold">
                    Download
                  </p>
                </div>
              </div>
              <div className="flex bg-yt-light-black items-center rounded-3xl h-10 mx-1 cursor-pointer hovering">
                <div className="flex px-3 items-center cursor-pointer">
                  <MdOutlineSave className="text-2xl text-yt-white font-thin" />
                  <p className="text-yt-white pl-2 pr-3 text-sm font-semibold">
                    Save
                  </p>
                </div>
              </div>
              <div className="flex bg-yt-light-black px-2 hovering cursor-pointer items-center rounded-full justify-center w-10 h-10 text-yt-white">
                <HiDotsHorizontal />
              </div>

            </div>
          </div>

          {/* Description */}
          <div className='videoMetaData__description bg-yt-light-black mt-2 rounded-2xl max-w-6xl pt-2'>
            <span id="content1" className="text-yt-white font-medium text-[14px] pl-3">{`${abbreviateNumber(
              video?.stats?.views,
              0
            )} views`}
              <span className="text-[20px] px-1 leading-none font-bold text-yt-white relative top-[-3px] mx-1">
                .
              </span>
              published at {video?.publishedDate}</span>
            <ShowMoreText
              lines={1}
              more='Show More'
              less='SHOW LESS'
              className='showMoreText mb-4 text-yt-white pl-3 pr-8'
              expanded={false}>
              {video?.description}
            </ShowMoreText>
          </div>


          {/* New Comments */}
          <div>
            <div className="flex items-center mt-2 text-yt-white">
              <h1>{totalComments} Comments</h1>
              <div className="flex items-center mx-10">
                <MdOutlineSort size={30} className="mx-3" />
                <h5>Sort by</h5>
              </div>
            </div>
            <form
              className="flex w-[800px] pt-4 items-start"
            >
              <img
                src="https://yt3.ggpht.com/yti/AHXOFjWWEKSRQ5yHkclr_FfAHBp_utYBP2GGM-MVOmRwCw=s88-c-k-c0x00ffffff-no-rj-mo"
                alt="profile"
                className="rounded-full mr-3 h-10 w-10"
              />
              <input
                // value={comment}
                // onChange={(e) => setComment(e.target.value)}
                type="text"
                placeholder="Add a comment..."
                className="bg-[transparent] border-b border-b-yt-light-black outline-none text-sm p-1 w-full"
              />
            </form>
            <div className="">
              {comments?.map((comment, index) => {
                return (
                  <div className="flex justify-between flex-col md:flex-row mt-4 ml-2" key={index}>
                    <div className="flex">
                      <div className="flex items-start">
                        <div className="flex h-9 w-9 rounded-full overflow-hidden cursor-pointer">
                          <img
                            className="h-full w-full object-cover"
                            src={comment?.author?.avatar[0]?.url}
                            alt="avatar"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col ml-4 cursor-pointer">
                        <div className="text-white text-md font-normal flex items-center">
                          {`${slicing(
                            comment?.author?.title
                          )}`}
                          {comment?.author?.badges[0]?.type ===
                            "VERIFIED_CHANNEL" && (
                              <BsFillCheckCircleFill className="text-white/[0.5] text-[12px] ml-1" />
                            )}
                          <span className="text-white/[0.7] text-sm ml-2 font-normal">{comment?.publishedTimeText}</span>
                        </div>
                        <div className="text-white/[0.7] text-sm">
                          {comment?.content}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Suggestion Coloumn */}
        <div className="flex flex-col py-4 px-4 overflow-y-auto lg:w-[350px] xl:w-[400px] mt-4">
          {relatedVideos?.contents?.map((item, index) => {
            if (item?.type !== "video") return false;
            return (
              <SuggestionVideoCard
                key={index}
                video={item?.video}
              />
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default VideoDetails;