import React from "react";
// import moment from "moment";

const VideoLength = ({ time }) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time - (hours * 3600)) / 60);
    const seconds = time - (hours * 3600) - (minutes * 60);

    const timeString = (hours>1 ? hours.toString()+':': "") +
        minutes.toString().padStart(2, '0') + ':' +
        seconds.toString().padStart(2, '0');
    return (
        <span className="absolute font-semibold bottom-2 right-2 bg-black py-1 px-2 text-white text-xs rounded-md">
            {timeString}
        </span>
    );
};

export default VideoLength;