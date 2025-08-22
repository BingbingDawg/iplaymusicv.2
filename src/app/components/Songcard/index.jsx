"use client";

import { useContext } from "react";
import Heading from "../heading";
import { RiPlayFill } from "react-icons/ri";
import { playerContext } from "@/providers/player-provider";
import { set } from "zod";
import DurationConverter from "../Durationconverter";



export default function SongCard({ item, coverImage}) {
   const { setShowPlayer, setCurrentTrack, setCoverImage} = useContext(playerContext);
   
       async function clickHandler(event){
           setShowPlayer(true);
           setCurrentTrack(item);
           setCoverImage(coverImage);
       }

    return (
        <article className="w-full">
            <div key={item.id} className="flex content-center mb-[16px] justify-between">
                <div className="items-center flex gap-[1rem] ">
            <button onClick={clickHandler} >
                    <RiPlayFill size={30} className="gradientplayer  ml-[25px] text-white p-[0.7px] ps-1.5 pe-1.5 rounded-[50%] justify-center" />
            </button>
                    <button className="justify-items-start">
                        <Heading level={3} className="text-[15px] font-bold">{item.name}</Heading>
                        <p className="font-light text-[12px]">{item.artists.map(artist => artist.name).join(", ")}</p>
                    </button>
                </div>

                <p className="self-center mr-[25px]">{DurationConverter(item.duration_ms)}</p>

            </div>
        </article>
    );
}