import React from "react";

import { AiFillHome, AiOutlineFlag } from "react-icons/ai";
import { MdLocalFireDepartment, MdLiveTv } from "react-icons/md";
import { CgMusicNote } from "react-icons/cg";
// import { FiFilm } from "react-icons/fi";
import { IoGameControllerSharp } from "react-icons/io5";
import { ImNewspaper } from "react-icons/im";
import { GiDiamondTrophy, GiEclipse } from "react-icons/gi";
import { RiLightbulbLine, RiFeedbackLine } from "react-icons/ri";
import { FiSettings, FiHelpCircle } from "react-icons/fi";
import { SiYoutubemusic} from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { MdVideoLibrary} from "react-icons/md";
import { VscHistory } from "react-icons/vsc";
import { AiOutlinePlaySquare } from "react-icons/ai";
import { AiOutlineClockCircle} from "react-icons/ai";
import { BiLike } from "react-icons/bi";

export const categories = [

    { name: "India News", icon: <AiFillHome />, type: "home" },
    { name: "Shorts", icon: <SiYoutubemusic />, type: "category" },
    { name: "Subscriptions", icon: <MdOutlineSubscriptions />, type: "subscription",divider: true,},


    { name: "Trending", icon: <MdLocalFireDepartment />, type: "category" },
    { name: "Music", icon: <CgMusicNote />, type: "category" },
    { name: "Movies", icon: <RiLightbulbLine />, type: "category" },
    { name: "Live", icon: <MdLiveTv />, type: "category" },
    { name: "Gaming", icon: <IoGameControllerSharp />, type: "category" },
    { name: "News", icon: <ImNewspaper />, type: "category" },
    { name: "Sports", icon: <GiDiamondTrophy />, type: "category" },
    { name: "Learning", icon: <RiLightbulbLine />, type: "category"},
    {
        name: "Fashion & beauty",
        icon: <GiEclipse />,
        type: "category",
        divider: true,
    },
    { icon: <MdVideoLibrary />, name: "Library",type: "menu" },
    { icon: <VscHistory />, name: "History",type: "menu" },
    { icon: <AiOutlinePlaySquare />, name: "Your videos",type: "menu" },
    { icon: <AiOutlineClockCircle />, name: "Watch later",type: "menu" },
    { icon: <BiLike/>, name: "Liked videos",type: "menu",divider: true, },

    { name: "Settings", icon: <FiSettings />, type: "menu" },
    { name: "Report History", icon: <AiOutlineFlag />, type: "menu" },
    { name: "Help", icon: <FiHelpCircle />, type: "menu" },
    { name: "Send feedback", icon: <RiFeedbackLine />, type: "menu" },


];