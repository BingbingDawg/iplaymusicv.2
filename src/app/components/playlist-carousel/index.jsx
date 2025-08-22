"use client"

import { playlistContext } from "@/providers/playlist-provider";
import { useContext } from "react";

export default function PlaylistCarousel(){
    const { playlist, setPlaylist, tracks } = useContext(playlistContext);
    return playlist ? (
        <>
        <main>

        </main>
        </>
    ) : null
}