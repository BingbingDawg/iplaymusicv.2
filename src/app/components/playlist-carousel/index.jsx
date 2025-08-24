"use client"

import { playlistContext } from "@/providers/playlist-provider";
import Image from "next/image";
import { useContext } from "react";
import SongCard from "../Songcard";
import ScrollingText from "../marquee";


export default function PlaylistCarousel({ playlistdata }) {
    const { playlist, setPlaylist, tracks } = useContext(playlistContext);

    return playlist ? (
        <div className="mt-[325px] w-full overflow-hidden flex flex-col items-center">
            {/* Slider row */}
            <div className="w-full overflow-x-auto whitespace-nowrap py-4">
                {playlistdata?.items?.map(item => (
                    <div
                        key={item.id}
                        className={`inline-block align-top cursor-pointer min-w-[120px] mx-2 text-center truncate  ${playlist?.id === item.id ? "border-2 border-pink-500 rounded-md" : "" }`}
                        onClick={() => setPlaylist(item)}
                    >
                        {item?.images[0]?.url && (
                            <Image
                                src={item?.images[0].url}
                                alt={item?.name || ""}
                                width="100"
                                height="100"
                            />
                        )}
                       <ScrollingText text={item?.name} />
                    </div>
                ))}
            </div>
            {/* Only show songs for the selected playlist */}
            {playlist?.id && (
    <div className="w-full flex flex-col items-center mt-8">
        {tracks === undefined && (
            <p>Loading songs...</p>
        )}
        {tracks?.length === 0 && (
            <p>No songs found in this playlist.</p>
        )}
        {tracks?.length > 0 && tracks.map((track) => (
            <SongCard
                key={track.track?.id || track.id}
                item={track.track || track}
                coverImage={playlist.images[0]?.url}
            />
        ))}
    </div>
)}
        </div>
    ) : null
}